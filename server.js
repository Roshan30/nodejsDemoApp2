var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

user = require('./modules/users');

mongoose.connect('mongodb://localhost/demoexampledb');
var db = mongoose.connection;

app.get('/', function(req, res) {
    res.send('hello world1');
});

app.get('/getuserdetails', function(req, res) {
    user.getuserdetails(function(err, users) {
        if (err) {
            throw err;
        }
        res.json(users);
    })

})

app.listen('8000');
console.log('server running');