var mongoose = require('mongoose'),
	env = process.env.NODE_ENV || 'development',
	config = require('./config')[env],
	fs = require('fs');

var connect = function() {
	var options = {
		server: {
			socketOptions: {
				keepAlive: 1
			}
		}
	};
	mongoose.connect(config.db, options);
}
connect();

mongoose.connection.on('error', function (err) {
	console.log('Connection problem: ' + err);
});
mongoose.connection.on('disconnected', function() {
	connect();
});

var models_path = __dirname + './../models';
fs.readdirSync(models_path).forEach(function(file) {
	if (~file.indexOf('.js')) {
		require(models_path + '/' + file);
	}
});
