var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var roshanmain = require('./source/userServices');

app.use(bodyParser.json());



var tankObj = require('./modules/tank');

mongoose.connect('mongodb://localhost/demoexampledb');
var db = mongoose.connection;
console.log(roshanmain);
roshanmain.roshan(app)

app.get('/', function(req, res) {
    res.send('hello world1');
});



app.get('/getTanks', function(req, res) {
    tankObj.getTankDetails(function(err, tanks) {
        if (err) {
            throw err;
        }
        res.json(tanks);
    });

});

app.listen('8000');
console.log('server running');
process.setMaxListeners(0);