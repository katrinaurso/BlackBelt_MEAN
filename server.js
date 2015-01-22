var express = require('express');
var config = require('./server/config/config.js');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.set('views', path.join(__dirname, 'client/views'));
app.set('view engine', 'ejs');
// app.set('images', path.join(__dirname, 'client/images'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'client')));

var mongoose = require('./server/config/mongoose.js');
var routes = require('./server/config/routes.js')(app);

app.set('port', process.env.PORT || 6789);
var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
});
