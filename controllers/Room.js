var BaseController = require('./Base'),
theModel = new (require('../models/Chat')),
View = require('../views/Base');

var RoomController = BaseController.extend({
	model: theModel,
	name: "room",
	run: function(req,res,next) {

		theView = new View(res,'pages/room');

		RoomController.model.setDataBase(req.database);

		theView.render({
			motd : "No connection yet..."
		});
		
		/*RoomController.getMessages(function(results) {
			theView.render({
				motd : "No connection yet..."
			});
		});*/
	},
	getMessages: function(callback,error) {
		RoomController.model.selectAll(function(results) {
			callback(results);
		},function(err) {
			error(err);
		});
	}
});

module.exports = RoomController;