var mysql = require('mysql');
var connection = mysql.createConnection({
    host    : "localhost",
    port    : 3306,
    user    : "root", //Your username
    password: "", //Your password
    database: "icreamdb"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

//CREATE
connection.query("INSERT INTO products SET ?", {
    flavor  : "Rocky Road",
    price   : 3.00,
    quantity: 50,
    organic : 1
}, function(err, res) {
});

//UPDATE
connection.query("UPDATE products SET ?",
    [
        {
        quantity: 1000
        }
    ]
    , function(err, res) {
});

//DELETE
connection.query("DELETE FROM products WHERE ?", {
    flavor: "strawberry"
}, function(err, res) {
});

//READ
connection.query('SELECT * FROM products', function(err, res) {
    if (err) throw err;
    console.log(res);
});

connection.end();