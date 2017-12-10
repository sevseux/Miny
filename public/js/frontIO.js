var socket = io();

var User = {
	username: "anon"
}

socket.on('welcome',function(data) {
	User.username = data.username;
	$('#inputText').attr('placeholder',data.username);
	$('#first_message').text("Connecté ! Mais pas de message pour l'instant ...");
});

socket.on('history',function(data) {
	console.log(data.history);
	if(data.history.length > 0){
		$('#messages').empty();
		data.history.forEach(function(message) {
			addMessage(message);
		})
	}
});

socket.on('distributedMessage',function(data) {
	$('#first_message').hide();
	addMessage(data);
});

$('#sendButton').click(function() {
	return sendMessage();
});

$('form').submit(function() {
	return sendMessage();
});

var sendMessage = function(){
	var message = $('#inputText').val();
	if(!message)
		return false;
	$('#first_message').hide();
	$('#inputText').val('');
	socket.emit('incomingMessage',message);
	addMessage({
		author: User.username,
		text: message
	});
	return false;
}

var addMessage = function(data) {
	$('#messages').append($('<li class="list-group-item col-12 col-sm-2">').text(data.author));
	$('#messages').append($('<li class="list-group-item col-12 col-sm-10">').text(data.text));
};