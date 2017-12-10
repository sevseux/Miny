var expect = require('chai').expect;

var BaseModel = require('../../models/Base');

var emptyDataBase = {};
describe('BaseModel', function() {

	it('should be able to create a model', function() {
		var model = new BaseModel(emptyDataBase);
		expect(model.database).to.exist;
		expect(model.extend).to.exist;
		expect(model.setDataBase).to.exist;
	});
	
	it('should have a method which returns a child instance', function() {
		var model = new BaseModel(emptyDataBase);
		var ChildModel = model.extend({
			newModelMethod : function() {}
		});
		var modelTwo = new ChildModel(emptyDataBase);
		expect(modelTwo.database).to.exist;
		expect(modelTwo.extend).to.exist;
		expect(modelTwo.setDataBase).to.exist;
		expect(modelTwo.newModelMethod).to.exist;
		expect(modelTwo.unknownMethod).to.not.exist;
	});
});