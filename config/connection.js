var mysql = require("mysql");

var connection = mysql.createConnection({
	host: "localhost",
	user: "guest",
	password: "password",
	port: 3306,
	database: "burgers",
});

connection.connect(function (err) {
	if (err) throw err;
	console.log("||database online|| ID: " + connection.threadId);
});

module.export = connection;
