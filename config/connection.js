var mysql = require("mysql");

if(process.env.JawsDB_URL){
  connection=mysql.createConnection(process.env.JawsDB_URL)
}else{
  var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "ZU){63xETAPf",
    database: "j4ey8lbsxjbawiul"
  });
}
// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
