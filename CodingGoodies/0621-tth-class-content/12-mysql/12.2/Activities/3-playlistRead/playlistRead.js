var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "", //Your password
    database: "icreamdb"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

connection.query('SELECT * FROM `products`', function(err, res) {
    if (err) {
        throw err;
    }

    for (var i = 0; i < res.length; i++) {
        console.log(res[i].id + " | " + res[i].flavor + " | " + res[i].quantity + " | " + res[i].price);
    }
    console.log("-----------------------------------");
});
var flavor = 'chocolate';
connection.query('SELECT * FROM `products` WHERE flavor=?', [flavor], function(err, res) {
    for (var i = 0; i < res.length; i++) {
        console.log(res[i].id + " | " + res[i].flavor + " | " + res[i].quantity + " | " + res[i].price);
    }
});
