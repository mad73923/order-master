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

module.exports = orderRoutes;
