var HomeController = require('../controllers/Home');
var RoomController = require('../controllers/Room');

module.exports = {
	home: HomeController.run,
	room: RoomController.run,
}