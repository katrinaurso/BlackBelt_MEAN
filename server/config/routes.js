var questions = require('./../controllers/questions.js');

module.exports = function Routes(app){
	app.get('/', function(req, res){
	  questions.index (req, res);
	});
	app.get('/get_questions', function(req, res){
		questions.get_questions(req, res);
	});
	app.post('/add_question', function(req, res){
		questions.add_question(req, res);
	});
	app.get('/get_answers/:id', function(req, res){
		questions.get_answers(req, res);
	});
	app.get('/get_question/:id', function(req, res){
		questions.get_question(req, res);
	});
	app.post('/add_answer', function(req, res){
		questions.add_answer(req, res);
	});
	app.get('/like_answer/:id', function(req, res){
		questions.like_answer(req, res);
	});
};