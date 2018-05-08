var user1 = require('../modules/users');

module.exports.roshan = function(app) {
    app.get('/getuserdetails', function(req, res) {
        user1.getuserdetails(function(err, users) {
            if (err) {
                throw err;
            }
            res.json(users);
        })

    });

    app.get('/getuserdetailsById/:_id', function(req, res) {
        user1.getuserdetailsById(req.params._id, function(err, users) {
            if (err) {
                throw err;
            }
            res.json(users);
        })

    });
}