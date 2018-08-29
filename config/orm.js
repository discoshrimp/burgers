var connection = require("./connection.js")


var orm = {
	all: function (tables, cb) {
		var queryString = "SELECT * FROM burgers";
		connection.query(queryString[tables], function (err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
	insertOne: function (table, cols, vals, cb) {
		var queryString = "INSERT INTO ?? WHERE ?? = ?";
		console.log(queryString);
		connection.query(queryString, [table, cols, vals], function (err, res) {
			if (err) throw err;

			cb(res);
		});
	},
	// An example of objColVals would be {name: panther, sleepy: true}
	updateOne: function (table, cols, vals, cb) {
		var queryString = "UPDATE ?? WHERE ??=?";
		console.log(queryString);
		connection.query(queryString, [table, cols, vals], function (err, res) {
			if (err) {
				throw err;
			}

			cb(res);
		});
	},
};
module.exports = orm;  
