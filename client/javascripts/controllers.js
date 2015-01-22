questions.controller('Home', function($scope, HomeFactory){
	HomeFactory.getQuestions(function(data){
		$scope.questions = data;
	});
});


questions.controller('NewQuestion', function($scope, NewQuestionFactory){
	$scope.addQuestion = function(){
		NewQuestionFactory.addQuestion($scope.new_question);
	};
});

questions.controller('Answers', function($scope, $routeParams, AnswerFactory){
	AnswerFactory.getAnswers($routeParams.id, function(data){
		$scope.answers = data;
	});
});

questions.controller('NewAnswer', function($scope, $routeParams, NewAnswerFactory){
	NewAnswerFactory.getQuestion($routeParams.id, function(data){
		$scope.question = data;
	});
});