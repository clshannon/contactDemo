var	Contact = mongoose.model('Contact');

exports.getContacts = function(req, res) {
	Contact.find({}).where('ownerId').equals(req.user._id).exec(function(err, data) {
        res.json(data);
	});
}

exports.getContact = function(req, res) {
	Contact.findById({'_id': req.params.id}).exec(function(err, data) {
        res.send(data);
	});
}

exports.createContact = function(req, res, next) {
	var userData = req.body;	
	userData.ownerId = req.user._id;
	if(typeof req.body.address !== "undefined") {
		userData.address = req.body.address[0];
	}
	
	Contact.create(userData, function (err, contact) {
		if(err) {
			res.status(400);
			return res.send({reason:err.toString()});
		}
		res.send(contact);
	})
	
}

exports.deleteContact = function(req, res, next) {	
	Contact.remove({_id: req.params.id}, function (err) {
		if(err) {
			res.status(400);
			return res.send({reason:err.toString()});
		}
		res.send();
	})	
}

exports.updateContact = function(req, res, next) {
	var contact = req.body;
	var id = contact._id;
	Contact.findByIdAndUpdate({_id: id}, { 
		$set: {
			firstName: contact.firstName, 
			lastName: contact.lastName, 
			email: contact.email, 
			homePhone: contact.homePhone, 
			mobilePhone: contact.mobilePhone,
			address: contact.address
			} 
		}, 
		{new: true}, 
		function (err, contact) {
			  //if (err) return handleError(err);
			  if (err) {
				  return res.send(err);
			  }
			  res.send(contact);
			});	
	
}