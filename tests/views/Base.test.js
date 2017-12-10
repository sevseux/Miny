var expect = require('chai').expect;

var BaseView = require('../../views/Base');

describe('BaseView', function() {
	it('should be able to create a view',function() {
		var view = new BaseView();
		expect(view.response).to.be.undefined;
		expect(view.template).to.be.undefined;
		expect(view.unknownField).to.not.exist;
	});
	

	it('should have a method which returns a child instance', function() {
		var view = new BaseView();
		var ChildView = view.extend({
			newViewMethod : function() {}
		});
		var viewTwo = new ChildView();
		expect(viewTwo.response).to.be.undefined;
		expect(viewTwo.template).to.be.undefined;
		expect(viewTwo.newViewMethod).to.exist;
	});
});