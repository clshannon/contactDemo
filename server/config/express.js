var express = require('express'),
	cookieParser = require('cookie-parser'),
	session = require('express-session'),
	bodyParser = require('body-parser'),
	morgan = require('morgan'),
	passport = require('passport')
	filter = require('content-filter');

module.exports = function(app, config) {
	app.set('views', config.rootPath + '/server/views');
	app.set('view engine', 'pug');
	app.use(require('express-session')({
	    secret: 'keyboard cat',
	    resave: false,
	    saveUninitialized: false
	}));
	app.use(cookieParser());
	app.use(bodyParser.json());	
	//app.use(morgan('dev'));
	app.use(filter());
	app.use(passport.initialize());
	app.use(passport.session());
	app.use(express.static(config.rootPath+'/public'));
}