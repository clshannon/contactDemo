var express = require('express'),
	bodyParser = require('body-parser'),
	morgan = require('morgan'),
	stylus = require('express-stylus'),
    mongoose = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();


app.set('views', __dirname + '/server/views');
app.set('view engine', 'pug');
// BodyParser Middleware
app.use(bodyParser.json());
//app.use(morgan('dev'));
app.use(stylus({
	  src: __dirname + '/public',
	}));

// Statically serve all files in the public folder
app.use(express.static('./public'));

app.get('/partials/:partialPath', function(req, res) {
	res.render('partials/' + req.params.partialPath);
});

mongoose.connect('mongodb://127.0.0.1/contactsDemo');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback() {
  console.log('contactsDemo db opened');
});
var messageSchema = mongoose.Schema({message: String});
var Message = mongoose.model('Message', messageSchema);
var mongoMessage;
Message.findOne().exec(function(err, messageDoc) {
  mongoMessage = messageDoc.message;
  console.log("mM = "+mongoMessage);
});

app.get('*', function(req, res) {
	  res.render('index', {
	    mongoMessage: mongoMessage
	  });
	});

var port = 3030;
app.listen(port);
console.log('Listening on port '+port+'....');