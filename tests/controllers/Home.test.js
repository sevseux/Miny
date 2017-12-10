var expect = require('chai').expect;

var HomeController = require("../../controllers/Home");

describe('HomeController', function() {
	it('should have the name of home', function() {
		expect(HomeController.name).to.be.equals("home");
	});

	it('should have a run method', function() {
		expect(HomeController.run).to.exist;
	});
});