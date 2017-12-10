var express = require('express'),
	http = require('http'),
	path = require('path'),
	config = require('./config'),
	app = express(),
	mysql = require('mysql');
	router = require('./routes');

app.set('views', __dirname + '/templates');
app.set('view engine', 'ejs');
app.set('view options', { delimiter: '$' });
app.use(express.static(path.join(__dirname, 'public'),{'extensions': ['log']}));

// database
var connection = mysql.createConnection({
  host: config.database.host,
  port: config.database.port,
  user: config.database.user,
  password: config.database.password,
  database: config.database.database
});

// routes

var sendDatabaseToRoute = function(req,res,next) {
	req.database = connection;
	next();
}

app.get('/',sendDatabaseToRoute,router.home);
app.get('/room',sendDatabaseToRoute,router.room);

// server

var server = http.createServer(app).listen(config.port, function() {
  	console.log('\nExpress server listening on port ' + config.port);
});

// ChatServer (io)

require('./lib/ChatServer')(server,connection);