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

	// app.get('/get_pictures', function(req, res){
	// 	dash.get_pictures(req, res);
	// });
	// app.get('/get_tasks', function(req, res){
	// 	dash.get_tasks(req, res);
	// });
	// app.get('/get_contact_info/:id', function(req, res){
	// 	dash.get_contact_info(req, res);
	// });
	// app.get('/remove_contact/:id', function(req, res){
	// 	dash.remove_contact(req, res);
	// });
	// app.post('/edit_contact/', function(req, res){
	// 	dash.edit_contact(req, res);
	// });
	// app.post('/add_task/', function(req, res){
	// 	dash.add_task(req, res);
	// });
};