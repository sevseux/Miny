var theChat = new (require('../models/Chat'));

var UserModel = {
	socket: null,
	username: "anon",
	Builder: function(socket,userList) {
		theChat.database = socket.connection;

		var user = UserModel;
		user.socket = socket;
		user.setUsername(userList);

		socket.emit('welcome',{
			username: user.username
		});

		user.sendHistory();

		console.log("new connection from : " + user.username);

		return user;
	},
	setUsername: function(userList) {
		UsernameList = [];
		for(var key in userList){
			UsernameList.push(userList[key]['username'])
		}
		do{
			this.username = "anon"+Math.floor((Math.random() * 10000) + 1);
		}while(userList.indexOf(UserModel.username) !== -1);
	},
	export: function() {
		var output = {
			socket: UserModel.socket.id,
			username: UserModel.username
		}
		return output;
	},
	sendHistory: function() {
		theChat.selectAll(function(results) {
			UserModel.socket.emit('history',{
				history:results
			})
		},function(err) {
			throw err;
		});
	}
};

module.exports = UserModel;