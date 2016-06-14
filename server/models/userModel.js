var mongoose = require('mongoose');


var userSchema = mongoose.Schema({
	firstName: {type: String, required:'{PATH} is required!', max: 16},
	lastName: {type: String, required:'{PATH} is required!', max: 16},
	username: {type: String, required:'{PATH} is required!', unique:true, max: 64},
	hashed_pwd: {type: String, required:'{PATH} is required!'},
	roles: [String]
});
    
userSchema.methods = {
	authenticate: function(passwordToMatch) {
		return bcrypt.compareSync(passwordToMatch, this.hashed_pwd);
	}
}

var User = mongoose.model('User', userSchema);

function createDefaultUsers() {
	User.find({}).exec(function(err, collection) {
		if(collection.length === 0) {
			hash = hashPwd('jimmy');
			User.create({_id:'574f75281a8a7f2ec596f1bf',firstName:'Jimmy',lastName:'James',username:'jjames@example.com',hashed_pwd:hash,roles:['admin', 'user']})
			hash = hashPwd('bob');
			User.create({_id:'574f75281a8a7f2ec596f1c0',firstName:'Bob',lastName:'Dylan',username:'bdylan@example.com',hashed_pwd:hash,roles:['user']})
			hash = hashPwd('brad');
			User.create({_id:'574f75281a8a7f2ec596f1c1',firstName:'Brad',lastName:'Nowell',username:'bnowell@example.com',hashed_pwd:hash,roles:['user']})
		}
	});	
}

function hashPwd(pwd) {
	var hash = bcrypt.hashSync(pwd, 8);
	return hash;
}

exports.createDefaultUsers = createDefaultUsers;