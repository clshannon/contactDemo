var auth = require('./auth'),
	users = require('../controllers/usersCtrl'),
	contacts = require('../controllers/contactsCtrl');

module.exports = function(app, config) {
	
	// User Routes
	app.get('/api/user', auth.requiresRole('admin'), users.getUsers);
	app.post('/api/user', users.createUser);
	app.get('/api/user/username-unique/:username', users.validateUniqueUsername);
	
	// User Routes
	app.get('/api/contact', auth.requiresRole('user'), contacts.getContacts);
	app.get('/api/contact/:id', auth.requiresRole('user'), contacts.getContact);
	app.post('/api/contact', auth.requiresRole('user'), contacts.createContact);
	app.put('/api/contact', auth.requiresRole('user'), contacts.updateContact);
	app.delete('/api/contact/:id', auth.requiresRole('user'), contacts.deleteContact);

	app.get('/partials/*', function(req, res) {
		res.render('../../public/app/' + req.params[0]);
	});
	
	app.post('/login', auth.authenticate);
	
	app.post('/logout', function(req, res) {
		req.logout();
		res.end();
	});

	app.use(function(req, res, next){
		next();
	});

	app.get('*', function(req, res) {
		if(typeof req.user != "undefined") {
			var bootstrappedUser = {
				_id: req.user._id,
				firstName: req.user.firstName,
				lastName: req.user.lastName,
				email: req.user.email,
				roles: req.user.roles
			}
		}
		res.render('index', {
			bootstrappedUser: bootstrappedUser
		});
	});
}