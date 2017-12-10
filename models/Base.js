module.exports = function(database) {
	this.database = database;
}

module.exports.prototype = {
	extend: function(properties) {
		var Child = module.exports;
		Child.prototype = module.exports.prototype;
		for(var key in properties) {
			Child.prototype[key] = properties[key];
		}
		return Child;
	},
	setDataBase: function(database) {
		this.database = database;
	}
}