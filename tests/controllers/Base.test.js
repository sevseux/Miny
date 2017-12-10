var expect = require('chai').expect;

var BaseController = require("../../controllers/Base");

describe('Base controller', function() {
	it('should have a method which returns a child instance', function() {
		expect(BaseController.extend).to.exist;
		var childController = BaseController.extend({
			name:	"childController",
		});
		expect(childController.name).to.exist;
		expect(childController.name).to.be.equals("childController");
		expect(childController.unknownMethod).to.not.exist;
	});

	it('should be capable to create differents childs', function() {
		var firstChild = BaseController.extend({
			name	: "firstChild", 
		});
		var secondChild = BaseController.extend({
			name	: "secondChild", 
		});
		expect(firstChild).to.be.not.equal(secondChild);
	});
});