var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ContactSchema = new mongoose.Schema({
	first_name: String,
	last_name: String,
	phone: String,
	address: {
		street: String,
		city: String,
		state: String,
		zip: String
	},
	picture: {type: String, default: '/images/test.jpg'},
	tasks: [{
		name: String,
		deadline: Date,
		created_at: { type: Date, default: Date.now }
	}],
 	created_at: { type: Date, default: Date.now },
 	updated_at: { type: Date, default: Date.now },
	hidden: Boolean
});
mongoose.model('Contact', ContactSchema);