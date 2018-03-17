var mongodb = require('mongodb');
var express = require('express'),
    app = express(),
    orderRoutes = express.Router();

var Order = require('../models/order');
var io;

orderRoutes.route('/add').post((req, res) => {
    var order = new Order(req.body);
    order.date = Date.now();
    var now = new Date();
    var date = new Date(now.getYear(), now.getMonth(), now.getDay()).getMilliseconds();
    Order.count({date: {$gte: date}}, (err, count) =>{
        order.id = count + 1;
        order.save((err, item) => {
            if(err){
                res.status(400).send('Error adding new order');                
            }else{
                io.emit('update');
                res.status(200).json({'order': 'Order added successfully'});
            }
        });
    });
});

orderRoutes.route('/active').get((req, res) => {
    Order.find((err, orders) =>{
        if(err){
            console.log(err);
        }else{
            res.json(orders);
        }
    });
});

orderRoutes.route('/item').put((req, res) => {
    Order.findOne({'items._id': new mongodb.ObjectId(req.body._id)}, (err, order) =>{
        if(err)
            console.error(err);
        let ind = findItemIndex(order, req.body);
        if(ind >= 0){
            order.items[ind] = req.body;
            order.save((err, updatedOrder) => {
                if(err){
                    res.status(400).send('Error updating item:\n'+err);                    
                }else{
                    io.emit('update');
                    res.json(updatedOrder);                    
                }

            });
        }
    });
});

function findItemIndex(order, item){
    let ind = -1;
    item._id = new mongodb.ObjectId(item._id);
    order.items.forEach((element, index) => {
        if(element._id.equals(item._id)){
            ind = index;
            return;
        }
    });
    return ind;
}

module.exports = function(iop){
    io = iop;
    return orderRoutes;
};
