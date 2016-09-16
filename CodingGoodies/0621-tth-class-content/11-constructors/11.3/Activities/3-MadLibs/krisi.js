var inquirer = require('inquirer');

function MadLib() {
    this.adjectives = [];
    this.nouns = [];
    this.verbs = [];
    this.story = ["One", "day", "the", "adjective", "noun", "went", "for", "a", "walk", "through",
        "the", "adjective", "woods.", "He", "got", "scared", "and", "had", "to", "verb"];
}
var madlib = new MadLib();


function buildMadLib(index) {

    if (index < madlib.story.length) {
        if (madlib.story[index] == "noun") {
            inquirer.prompt([
                { type: 'input',
                    name: 'noun',
                    message: 'Enter a noun'
                }]).then(function(word) {
                madlib.story[index] = word.noun;
                index++;
                buildMadLib(index);
            })
        } else if(madlib.story[index] == "adjective") {
            inquirer.prompt([
                { type: 'input',
                    name: 'adjective',
                    message: 'Enter an adjective'
                }]).then(function(word) {
                madlib.story[index] = word.adjective;
                index++;
                buildMadLib(index);
            })
        } else if(madlib.story[index] == "verb") {
            inquirer.prompt([
                { type: 'input',
                    name: 'verb',
                    message: 'Enter a verb'
                }]).then(function(word) {
                madlib.story[index] = word.verb;
                index++;
                buildMadLib(index);
            })
        } else {
            index++;
            buildMadLib(index);

        }
    } else {
        console.log(madlib.story.join(" "));
    }
}

buildMadLib(0);

//console.log(madlib.story);