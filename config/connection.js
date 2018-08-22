var db = require("mysql");



var connect = db.createConnection({
	host: "localhost",
	user: "guest",
	password: "password"
});

var connection = connect.connect(function (err) {
	if (err) throw err;
	console.log("||database online||");
});

module.export = connection;
