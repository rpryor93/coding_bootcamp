var inquirer = require('inquirer');


var game = "";

var options = function() {
    this.adjectives = [];
    this.verbs = [];
    this.nouns = [];
    this.places = [];
    this.games = function () {
        console.log("One day, " + this.nouns[1] + " went to" + this.places + " and" + this.verbs + " your" + this.adjectives + " " + this.nouns[0]);
    }
};



inquirer.prompt([

    {
        type: "input",
        name: "adj",
        message: "Give me an adjective."
    },

    {
        type: "input",
        name: "noun1",
        message: "Give me a noun",
    },

    {
        type: "input",
        name: "noun2",
        message: "Give me another noun",
    },

    {
        type: "input",
        name: "verb",
        message: "Give me a verb",
    },

    {
        type: "input",
        name: "place",
        message: "Give me a place",
    }





]).then(function(user) {


    var game = new options();

    game.adjectives = user.adj;
    game.verbs = user.verb;
    game.nouns[0] = user.noun1;
    game.nouns[1] = user.noun2;
    game.places = user.place;


    game.games();

});