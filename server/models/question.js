var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var QuestionSchema = new mongoose.Schema({
	question: String,
	description: String,
	name: String,
	likes: Number,
	answers: [{
		answer: String,
		details: String,
		name: String,
		created_at: {type: Date, default: Date.now }
	}],
	created_at: {type: Date, default: Date.now },
	hidden: Boolean
});
mongoose.model('Question', QuestionSchema);