questions.factory('HomeFactory', function($http){
	var factory = {};
	var questions = [];
	factory.getQuestions = function(callback){
		$http.get('/get_questions').success(function(output){
			questions = output;
			callback(questions);
		});
	};
	return factory;
});

questions.factory('NewQuestionFactory', function($http){
	var factory = {};
	// var errors = [];
	// factory.getErrors = function(){
	// 	return errors;
	// };
	factory.addQuestion = function(info){
		// console.log(info);
		// for(var i=0; i<contacts.length; i++){
		// 	if(contacts[i].first_name === info.first_name && contacts[i].last_name === info.last_name){	
		// 		errors.push({message: 'That contact is already in your phonebook.'});
		// 		return;
		// 	}
		// }
		info.name = person;
		$http.post('/add_question', info).success(function(output){
			console.log(output);
			// output = output.replace(/"/g, "");
			// contacts.push({
			// 	_id: output,
			// 	first_name: info.first_name,
			// 	last_name: info.last_name,
			// 	picture: '/images/test.jpg',
			// 	tasks: []
			// });
		});	
		// errors = [];		
	}
	return factory;
});

questions.factory('AnswerFactory', function($http){
	var factory = {};
	var answers = [];
	factory.getAnswers = function(id, callback){
		$http.get('/get_answers/'+id).success(function(output){
			answers = output;
			callback(answers[0]);
		});
	};
	return factory;
});

questions.factory('NewAnswerFactory', function($http){
	var factory = {};
	var question;
	factory.getQuestion = function(id, callback){
		$http.get('/get_question/'+id).success(function(output){
			question = output;
			callback(question[0]);
		});
	};
	factory.addAnswer = function(id, info){
		info.id = id;
		info.name = person;
		$http.post('/add_answer', info).success(function(output){
			console.log(output);
		});
	};
	return factory;
});