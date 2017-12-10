var expect = require('chai').expect,
	config = require('../../config'),
	mysql = require('mysql');

var RoomController = require("../../controllers/Room"),
	model = new (require('../../models/Chat'));

describe('RoomController', function() {
	it('should have the name of room', function() {
		expect(RoomController.name).to.be.equals("room");
	});

	it('should have a run method', function() {
		expect(RoomController.run).to.exist;
	});

	it('should have a model property', function() {
		expect(RoomController.model).to.exist;
	});

	it('should be able to take the first id from database', function(done) {
		RoomController.model.setDataBase(mysql.createConnection({
			host: config.database.host,
			port: config.database.port,
			user: config.database.user,
			password: config.database.password,
			database: config.database.database
		}));
		RoomController.getMessages(function(res) {
			RoomController.model.database.end();

			expect(res[0].id).to.exist;
			expect(res[0].unknownField).to.not.exist;
			done();
		},function(error) {
			done(error);
		});

	});
});