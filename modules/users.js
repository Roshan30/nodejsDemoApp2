var mongoose = require('mongoose');

//user schema
var userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        unique: true
    },
    lastName: {
        type: String,
        required: true
    }
});

var user = module.exports = mongoose.model('user1', userSchema, 'demoCollection');



//get users 
module.exports.getuserdetails = function(callback) {
    user.find(callback);
}

//get users 
module.exports.getuserdetailsById = function(idParam, callback) {
    user.findById(idParam, callback);
}