questions.factory('HomeFactory', function($http){
	var factory = {};
	factory.getQuestions = function(callback){
		$http.get('/get_questions').success(function(output){
			questions_array = output;
			callback(questions_array);
		});
	};
	return factory;
});

questions.factory('NewQuestionFactory', function($http){
	var factory = {};
	var errors = {message: ''};
	factory.addQuestion = function(info){
		var question = info.question;
		if(question.length < 11) {
			errors.message = 'Not a vaild question, must be at least 10 characters long';
			return false;
		} else {
			info.name = person;
			$http.post('/add_question', info).success(function(output){
				console.log(output);
				output = output.replace(/"/g, "");
				questions_array.push({
					_id: output,
					question: info.question,
					details: info.details,
					created_at: Date.now()
				});
			});	
			errors.message = '';
			// success_message = true;
		}		
	};
	factory.getErrors = function(){
		return errors;
	};
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
	factory.likeAnswer = function(id, callback){
		console.log(id);
		$http.get('/like_answer/'+id).success(function(output){
			console.log(output);
		});
	};
	return factory;
});

questions.factory('NewAnswerFactory', function($http){
	var factory = {};
	var errors = {message: ''};
	var question;
	factory.getQuestion = function(id, callback){
		$http.get('/get_question/'+id).success(function(output){
			question = output;
			callback(question[0]);
		});
	};
	factory.addAnswer = function(id, info){
		var answer = info.answer;
		if(answer.length < 6) {
			errors.message = "Answer must be at least 5 characters";
			return false;
		} else {
			info.id = id;
			info.name = person;
			$http.post('/add_answer', info).success(function(output){
				console.log(output);
			});
			errors.message = '';
		}
	};
	factory.getErrors = function(){
		return errors;
	};
	return factory;
});