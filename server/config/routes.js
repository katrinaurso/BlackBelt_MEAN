var dash = require('./../controllers/dashboard.js');

module.exports = function Routes(app){
	app.get('/', function(req, res){
	  dash.index (req, res);
	});
	// app.get('/get_contacts', function(req, res){
	// 	dash.get_contacts(req, res);
	// });
	// app.post('/add_contact', function(req, res){
	// 	dash.add_contact(req, res);
	// });
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