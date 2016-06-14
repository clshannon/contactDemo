var mongoose = require('mongoose'),
	userModel = require('../models/userModel'),
	contactModel = require('../models/contactModel');

module.exports = function(config) {
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback() {
      console.log('contactsDemo db opened');
    });
    
    userModel.createDefaultUsers();
    contactModel.createDefaultContacts();
}
