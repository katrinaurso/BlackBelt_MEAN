var dashboard = angular.module('dashboard', ['ngRoute']);
dashboard.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'views/partials/main.html',
		controller: 'Main'
	})
	.when('/new_contact', {
		templateUrl: 'views/partials/new_contact.html',
		controller: 'NewContact'
	})
	.when('/contact/:id', {
		templateUrl: 'views/partials/contact.html',
		controller: 'MyContact'
	})
	.when('/edit_contact/:id', {
		templateUrl: 'views/partials/edit_contact.html',
		controller: 'EditContact'
	});
});

var contacts = [];
var reminders = [];
var tasks = [];