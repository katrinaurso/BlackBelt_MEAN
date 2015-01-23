var mongoose = require('mongoose');
var Question = mongoose.model('Question');

module.exports = {
	index: function(req, res){
		res.render('index', {title: 'Ask Your Question, Get an Answer!'});		
	},
	get_questions: function(req, res){
		Question.find(function(err, results){
			if(err) {
				res.send(err);
			} else {
				res.send(results);
			}
		});
	},
	add_question: function(req, res){
		var a = new Question(req.body);
		a.save(function(err, result){
			if(err){
				res.send(err);
			} else {
				res.send(result._id);
			}
		});
	},
	get_answers: function(req, res){
		Question.find({_id : req.params.id }, function(err, results){
			if(err){
				res.send(err);
			} else {
				res.send(results);
			}
		});
	},
	get_question: function(req, res){
		Question.find({_id : req.params.id }, function(err, results){
			if(err){
				res.send(err);
			} else {
				res.send(results);
			}
		});
	},
	add_answer: function(req, res){
		var query = { _id :  req.body.id };
		var data = {};
		data.answer = req.body.answer;
		data.details = req.body.details;
		data.name = req.body.name;
		Question.update(query, { $addToSet : { answers : data }}, function(err, status){
			if(err){
				res.send(err);
			} else {
				res.sendStatus(status);
			}
		});
	}

	// get_pictures: function(req, res){
	// 	Contact.find(function(err, results){
	// 		if(err){
	// 			res.send(err);
	// 		} else {
	// 			res.send(results);
	// 		}
	// 	});
	// },
	// get_tasks: function(req, res){
	// 	Contact.find({}, { "tasks" : 1 }, function(err, results){
	// 		if(err){
	// 			res.send(err);
	// 		} else {
	// 			res.send(results);
	// 		}
	// 	});
	// },
	// get_contact_info: function(req, res){
	// 	Contact.find({_id : req.params.id}, function(err, results){
	// 		if(err){
	// 			res.send(err);
	// 		} else {
	// 			res.send(results);
	// 		}
	// 	});
	// },
	// remove_contact: function(req, res){
	// 	Contact.remove({_id: req.params.id}, function(err, status){
	// 		if(err) {
	// 			res.send(err);
	// 		} else {
	// 			res.sendStatus(status);
	// 		}
	// 	});
	// },
	// edit_contact: function(req, res){
	// 	var data = req.body
	// 	var date = Date.now();
	// 	data.updated_at = date;
	// 	var query = { _id : data._id };
	// 	Contact.update(query, { $set : data }).exec();
	// },
	// add_task: function(req, res){
	// 	var query = { _id : req.body.id };
	// 	var data = {};
	// 	data.name = req.body.name;
	// 	var date = Date.parse(req.body.deadline);
	// 	data.deadline = date;
	// 	Contact.update(query, { $addToSet : { tasks: data }}).exec();
	// }
};