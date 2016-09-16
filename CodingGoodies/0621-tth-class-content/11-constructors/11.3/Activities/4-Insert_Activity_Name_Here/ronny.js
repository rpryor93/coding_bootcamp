var request = require('request');
var inquirer = require('inquirer');

function Password(u, l, n, s, len) {
    this.upper = u;
    this.lower = l;
    this.numbers = n;
    this.special = s;
    this.length = len;
    this.repeat = 1;
    this.exclude = '?!<>li1I0OB8()`,.-+='
}
console.log("==== WELCOME TO PASSWORD GENERATOR ====");
console.log("====== SELECT YOUR OPTIONS BELOW ======");
inquirer.prompt([
    {
        type: 'list',
        choices: ['on', 'off'],
        message: 'upper case letters?',
        name: "upper"
    },
    {
        type: 'list',
        choices: ['on', 'off'],
        message: 'lower case letters?',
        name: "lower"
    },
    {
        type: 'list',
        choices: ['on', 'off'],
        message: 'numbers?',
        name: "number"
    },
    {
        type: 'list',
        choices: ['on', 'off'],
        message: 'special characters?',
        name: "special"
    },
    {
        type: 'input',
        message: 'length? (number 1-16)',
        name: "length",
        validate: function(value) {
            if (value < 1 || value > 16) {
                console.log('\ninvalid length');
                return false;
            } else {
                return true;
            }
        }
    }
]).then(function(text) {
    var password = new Password(text.upper, text.lower, text.number, text.special, text.length);
    generate(password)
});

function generate(opts) {
    request({
        uri: 'https://passwordwolf.com/api',
        method: "GET",
        qs: opts
    }, function(err, res, json) {

        if (err) {
            console.log('failed');
        }

        var result = JSON.parse(json);
        console.log("======== YOUR NEW PASSWORD ========");
        console.log(result[0]['password']);
        console.log(result[0]['phonetic']);
        console.log("===================================");
        // console.log("======== PHONETIC READING ========")
        // console.log(result[0]['phonetic']);

    })
}