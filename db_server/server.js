var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose');
    config = require('./DB');

mongoose.connect(config.DB).then(
    () => {console.log('Database connected')},
    err => {console.log('Error connecting to database:\n' + err)}
);

const app = express();
app.use(bodyParser.json());
app.use(cors());
var port = process.env.PORT || 4000;
var orderRoutes = require('./routes/order_routes');

app.use('/api/orders', orderRoutes);

var server = app.listen(port, () => {
    console.log('DB server listening in port ' + port);
});
