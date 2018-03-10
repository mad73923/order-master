var app = require('express')();
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');

var http = require('http').Server(app);
var io = require('socket.io')(http);

var mongoose = require('mongoose');
var config = require('./DB');

mongoose.connect(config.DB).then(
    () => {console.log('Database connected')},
    err => {console.log('Error connecting to database:\n' + err)}
);

app.use(cors());
app.use(bodyParser.json());
var port = process.env.PORT || 4000;
var orderRoutes = require('./routes/order_routes');

app.use('/api/orders', orderRoutes);

io.on('connection', (socket) =>{
    console.log("New Client connected");

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    })
});

http.listen(port, () => {
    console.log('DB server listening in port ' + port);
});
