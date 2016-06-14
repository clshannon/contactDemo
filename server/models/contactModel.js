var mongoose = require('mongoose');


//child address schema... 
var addressSchema = new mongoose.Schema({ 
    type: { type: String, default: null },
    street: { type: String, default: null },
    street2: { type: String, default: null },
    city: { type: String, default: null },
    state: { type: String, default: null, max: 2 },
    zip: { type: Number, default: null }
    });

var contactSchema = mongoose.Schema({
        ownerId: {
            type: String,
            required: true
        },
        firstName: {
            type: String,
            required: true,
            max: 16
        },
        lastName: {
            type: String,
            required: true,
            max: 16
        },
        email: {
            type: String,
            max: 64
        },
        homePhone: {
            type: String
        },
        mobilePhone: {
            type: String
        },
        address: [ addressSchema ],
    });

var Contact = mongoose.model('Contact', contactSchema);

function createDefaultContacts() {
	Contact.find({}).exec(function(err, collection) {
        if(collection.length === 0) {
            Contact.create({
                ownerId: "574f75281a8a7f2ec596f1bf",
                firstName: "John",
                lastName: "Snow",
                email: "jsnow@example.com",
                homePhone: "1111111111",
                mobilePhone: "1112222222"
            })
            Contact.create({
                ownerId: "574f75281a8a7f2ec596f1bf",
                firstName: "Tyrion",
                lastName: "Lannister",
                email: "tlannister@example.com",
                homePhone: "2221111111",
                mobilePhone: "2222222222"
            })
            Contact.create({
                ownerId: "574f75281a8a7f2ec596f1c0",
                firstName: "Margaery",
                lastName: "Tyrell",
                email: "mtyrell@example.com",
                homePhone: "3331111111",
                mobilePhone: "3332222222"
            })
            Contact.create({
                ownerId: "574f75281a8a7f2ec596f1c1",
                firstName: "Theon",
                lastName: "Greyjoy",
                email: "tgreyjoy@example.com",
                homePhone: "4441111111",
                mobilePhone: "4442222222"
            })
        }
    }); 
	
}

exports.createDefaultContacts = createDefaultContacts;

