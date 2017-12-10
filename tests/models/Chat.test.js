var expect = require('chai').expect,
	config = require('../../config'),
	mysql = require('mysql');

var ChatModel = require('../../models/Chat.js');

describe('ChatModel', function() {

	it('should be able to create an instance of the ChatModel ', function() {
		var unknownDatabase = {};
		var myChat = new ChatModel(unknownDatabase);
		expect(myChat).to.exist;
	});

	it('should access to the database', function(done) {
		var myChat = new ChatModel(mysql.createConnection({
			host: config.database.host,
			port: config.database.port,
			user: config.database.user,
			password: config.database.password,
			database: config.database.database
		}));
		myChat.database.connect(function(err) {
			if(err){
				done(err);
				return;
			}
			expect(myChat.database.threadId).to.exist;
			myChat.database.end();
			done();
		});
	});
	
	it('should select the first row of data from database', function(done) {

		var myChat = new ChatModel(mysql.createConnection({
			host: config.database.host,
			port: config.database.port,
			user: config.database.user,
			password: config.database.password,
			database: config.database.database
		}));

		expect(myChat.selectAll).to.exist;
		myChat.database.connect(function(err) {
			if(err){
				done(err);
				return;
			}

			myChat.selectAll(function(results) {
				expect(results[0].id).to.exist;
				expect(results[0].datetime).to.exist;
				expect(results[0].author).to.exist;
				expect(results[0].text).to.exist;
				expect(results[0].unknownField).to.not.exist;
				myChat.database.end();
				done();
			},function(err) {
				myChat.database.end();
				done(err);
				return;
			});
		});
	});
});