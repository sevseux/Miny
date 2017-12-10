var User = require('../models/User');
var theChat = new (require('../models/Chat'));

var userList = [];

module.exports = function(server,connection) {
	
	var io = require('socket.io')(server);

	io.on('connection',function(socket) {
		socket.io = io;
		socket.connection = connection;
		theChat.database = connection;

		var user = User.Builder(socket,userList);
		addUser(user.export());

		user.socket.on('incomingMessage',function(message) {
			console.log(user.username + "\tsaid : " + message);
			// we add the message to the server
			theChat.insert({
				author: user.username,
				datetime: "2017-12-05 00:00:01", /// TODO : date
				text: message
			});
			// we send the message to every other connected clients
			socket.broadcast.emit('distributedMessage',{
				author: 	user.username,
				text: 		message
			})
		})
	});
}

var addUser = function(user) {
	userList.push(user);
}