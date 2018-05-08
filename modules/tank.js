var mongoose = require('mongoose');

//user schema
var userSchema = mongoose.Schema({
    price: {
        type: String,
        required: true
    }
});

var TankHolder = module.exports = mongoose.model('Tank', userSchema, 'Tanks');



//get users 
module.exports.getTankDetails = function(callback) {
    TankHolder.find(callback);
}