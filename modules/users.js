var mongoose = require('mongoose');

//user schema
var userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
});

var user = module.exports = mongoose.model('user', userSchema, 'demoCollection');

//get users 
module.exports.getuserdetails = function(callback, limit) {
    user.find(callback).limit(limit);
}