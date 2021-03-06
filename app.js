var express = require('express'),
	config = require('./config/config'),
	mongoose = require('mongoose');

mongoose.connect(config.db);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + config.db);
});

var Jig = require(config.root + '/app/models/jig')
var app = express();

require('./config/express')(app, config);

app.listen(config.port);

