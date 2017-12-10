var BaseController = require("./Base");
View = require('../views/Base');

var HomeController = BaseController.extend({
	name: "home",
	run: function(req,res,next) {

		theView = new View(res,'pages/home');

		theView.render();
	}
});

module.exports = HomeController;