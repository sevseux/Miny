var _ = require("underscore");
var BaseController = {
	name: "base",
	extend:	function(child) {
		return _.extend({}, this, child);
	}
}

module.exports = BaseController;