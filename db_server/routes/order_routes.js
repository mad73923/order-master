var express = require('express'),
    app = express(),
    orderRoutes = express.Router();

var Order = require('../models/order');

orderRoutes.route('/add').post((req, res) => {
    var order = new Order(req.body);
    order.date = Date.now();
    order.save()
        .then(item =>{
            res.status(200).json({'order': 'Order added successfully'});
        })
        .catch(err => {
            res.status(400).send('Error adding new order');
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

module.exports = orderRoutes;
