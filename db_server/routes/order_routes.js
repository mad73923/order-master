var mongodb = require('mongodb');
var express = require('express'),
    app = express(),
    orderRoutes = express.Router();

var Order = require('../models/order');

orderRoutes.route('/add').post((req, res) => {
    var order = new Order(req.body);
    order.date = Date.now();
    var now = new Date();
    var date = new Date(now.getYear(), now.getMonth(), now.getDay()).getMilliseconds();
    Order.count({date: {$gte: date}}, (err, count) =>{
        order.id = count + 1;
        order.save()
        .then(item =>{
            res.status(200).json({'order': 'Order added successfully'});
        })
        .catch(err => {
            res.status(400).send('Error adding new order');
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
    //console.log(req.body);
    //console.log(new mongodb.ObjectId(req.body._id));
    Order.findOne({'items._id': new mongodb.ObjectId(req.body._id)}, (err, order) =>{
        //console.log(order);
        if(err)
            console.error(err);
        let ind = findItemIndex(order, req.body);
        console.log(ind);
        if(ind >= 0){
            order.items[ind] = req.body;
            order.save()
            .then(updatedOrder =>
                res.json(updatedOrder))
            .catch(err => {
                res.status(400).send('Error updating item');
            });
        }
    });
});

function findItemIndex(order, item){
    let ind = -1;
    item._id = new mongodb.ObjectId(item._id);
    order.items.forEach((element, index) => {
        console.log(element._id, item._id);
        if(element._id.equals(item._id)){
            ind = index;
            return;
        }
    });
    return ind;
}

module.exports = orderRoutes;
