var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
	development: {
		rootPath: rootPath,
		db: 'mongodb://127.0.0.1/contactsDemo',
		port: process.env.PORT || 3030
	},
	production: {
		rootPath: rootPath,
		db: 'mongodb://contactDemoUser:H9HkKWLCAeFS@ds021943.mlab.com:21943/contact-demo',
		port: process.env.PORT || 3030
	}
}