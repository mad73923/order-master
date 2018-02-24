var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderItemSchema = new Schema({
    count: Number,
    name: String,
    price: Number
});

var OrderSchema = new Schema({
    id: Number,
    date: Number,
    items: [OrderItemSchema],
    paid: Boolean
});

module.exports = mongoose.model('Order', OrderSchema);
