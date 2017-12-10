var BaseModel = require('./Base');
var baseModel = new BaseModel();

var SqlString = require('sqlstring');

var ChatModel = baseModel.extend({
	selectAll: function(callback,error) {
		var self = this;

		var query = SqlString.format('SELECT * FROM messages ORDER BY `id` ASC');
		self.database.query(query, function (err, results, fields) {
			if (err){
				if(error) error(err)
				else throw err;
			}
			if(callback)
				callback(results);
		});	
	},
	insert: function(data) {
		var self = this;

		var query = SqlString.format('INSERT INTO messages SET ?', data);
		self.database.query(query, function (err) {
			if (err)
				console.log(err);
		});
	}
});
module.exports = ChatModel;