//var mongoose = require('mongoose');
var	User = mongoose.model('User')
bcrypt = require('bcryptjs');

exports.getUsers = function(req, res) {
	User.find({}).exec(function(err, data) {
        res.json(data);
	});
}


exports.createUser = function(req, res, next) {
	var userData = req.body;
	userData.username = userData.username.toLowerCase();
	userData.roles = ["user"];
	if(hashPwd(userData.password)) {
		userData.hashed_pwd = hashPwd(userData.password);
	} else {
		errors = [];
    	errors.push({field : 'password', error:'complexity', message : 'Password must be complex.'});
		res.status(400);
    	return res.json({ reason: errors });
	}
	User.create(userData, function (err, user) {
		if(err) {
			if(err.toString().indexOf('E11000') > -1) {
				err = [];
		    	err.push({field : 'username', error:'unique', message : 'Duplicate entry.'});
			}
			res.status(400);
			return res.json({reason: err});
		}
		res.send(user);
	})
}

exports.validateUniqueUsername = function(req, res, next) {

    User.findOne({username: req.params.username}, function(err, user) {
        if (err) {
        	return res.send(true);
        }
        if (user) {
			res.status(400);
        	return res.send(false);
        }
        return res.send(true);
    });	
}

function hashPwd(pwd) {
	var re = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8}/;
	if(!re.test(pwd)) {
		return false;
	}

	var hash = bcrypt.hashSync(pwd, 8);
	return hash;
}