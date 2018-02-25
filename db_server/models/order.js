var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemStageSchema = new Schema({
    id: Number,
    timestamp: Number
});

var OrderItemSchema = new Schema({
    count: Number,
    name: String,
    price: Number,
    stages: [ItemStageSchema]
});

var OrderSchema = new Schema({
    id: Number,
    date: Number,
    items: [OrderItemSchema],
    paid: Boolean
});

module.exports = mongoose.model('Order', OrderSchema);
