dashboard.factory('ContactFactory', function($http){
	var factory = {};
	factory.getContacts = function(callback){
		$http.get('/get_contacts').success(function(output){
			contacts = output;
			callback(contacts);
		});
	};
	return factory;
});

dashboard.factory('MainFactory', function($http){
	var factory = {};
	var contacts_main = [];
	factory.getContacts = function(callback){
		$http.get('/get_contacts').success(function(output){
			contacts_main = output;
			callback(contacts_main);
		});
	};
	factory.getTasks = function(callback){
		var tasks = [];
		$http.get('/get_tasks').success(function(output){
			tasks = output;
			callback(tasks);
		});
	};
	return factory;
});

dashboard.factory('NewContactFactory', function($http){
	var factory = {};
	var errors = [];
	factory.getErrors = function(){
		return errors;
	};
	factory.addContact = function(info){
		for(var i=0; i<contacts.length; i++){
			if(contacts[i].first_name === info.first_name && contacts[i].last_name === info.last_name){	
				errors.push({message: 'That contact is already in your phonebook.'});
				return;
			}
		}
		$http.post('/add_contact', info).success(function(output){
			output = output.replace(/"/g, "");
			contacts.push({
				_id: output,
				first_name: info.first_name,
				last_name: info.last_name,
				picture: '/images/test.jpg',
				tasks: []
			});
		});	
		errors = [];		
	}
	return factory;
});

dashboard.factory('MyContactFactory', function($routeParams, $http){
	var factory = {};
	var contact = [];
	factory.getContactInfo = function(id, callback){
		$http.get('/get_contact_info/'+id).success(function(output){
			contact = output;
			callback(contact[0]);		
		});
	};
	factory.addTask = function(id, info){
		info.id = id;
		$http.post('/add_task/', info).success(function(output){
			contact.tasks.push(output);
		});
	};
	return factory;
});

dashboard.factory('EditContactFactory', function($routeParams, $http){
	var factory = {};
	var contact = [];
	factory.getContactInfo = function(id, callback){
		$http.get('/get_contact_info/'+id).success(function(output){
			contact = output;
			callback(contact[0]);		
		});
	};
	factory.removeContact = function(id){
		$http.get('/remove_contact/'+id);
		for(var i = 0; i<contacts.length; i++){
			if(contacts[i]._id === id) {
				contacts.splice(i, 1);
			}
		}
	};
	factory.editContact = function(id, info){
		info._id = id;
		$http.post('/edit_contact/', info).success(function(output){
			for(var i=0; i<contacts.length; i++){
				if(contacts[i]._id === id) {
					contacts[i].first_name = info.first_name;
					contacts[i].last_name = info.last_name;
				}
			}
		});
	};
	return factory;
});