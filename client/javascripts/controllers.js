dashboard.controller('Contacts', function($scope, ContactFactory){
	ContactFactory.getContacts(function(data){
		$scope.contacts = data;
	});
});

dashboard.controller('Main', function($scope, MainFactory){
	MainFactory.getContacts(function(data){
		var array = data;
		var pictures = [];
		for(var i=0; i<8; i++){
			var random = Math.floor(Math.random()*array.length);
			pictures.push(array[random]);
			array.splice(random, 1);
		}
		$scope.contacts = pictures;
	});
	MainFactory.getTasks(function(data){
		var tasks= [];
		var task = {};
		var action_plan = [];
		var reminders = [];
		for(var i=0; i<data.length; i++){
			if(data[i].tasks.length > 0){
				for(var k=0; k<data[i].tasks.length; k++){
					tasks.push(data[i].tasks[k]);
				}
			}
		}
		for(var j=0; j<tasks.length; j++){
			if(tasks[j].deadline >= "2015-01-20" && tasks[j].deadline < "2015-01-23") {
				action_plan.push(tasks[j]);
			} else if(tasks[j].deadline >= "2015-01-23") {
				reminders.push(tasks[j]);
			}
		}
		$scope.reminders = reminders;
		$scope.action_plan = action_plan;
	});
});

dashboard.controller('NewContact', function($scope, $location, NewContactFactory){
	$scope.addContact = function(){
		NewContactFactory.addContact($scope.new_contact);
		$location.path('/');
	};
	$scope.errors = NewContactFactory.getErrors();
});

dashboard.controller('MyContact', function($scope, $routeParams, $location, MyContactFactory){
	MyContactFactory.getContactInfo($routeParams.id, function(data){
		$scope.contact = data;
		$scope.tasks = data.tasks;
		tasks = data.tasks;
	});
	$scope.addTask = function(id){
		MyContactFactory.addTask(id, $scope.new_task);
		$location.path('/');
	};
});

dashboard.controller('EditContact', function($scope, $routeParams, $location, EditContactFactory){
	EditContactFactory.getContactInfo($routeParams.id, function(data){
		$scope.contact = data;
	});
	$scope.editContact = function(id){
		console.log(id);
		EditContactFactory.editContact(id, $scope.edit_contact);
		$location.path('/contact/'+id);
	};
	$scope.removeContact = function(id){
		EditContactFactory.removeContact(id);
		$location.path('/');
	};
});