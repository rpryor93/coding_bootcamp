var story = ["One day there was a ", ". It was the ",
    " there ever was. When it was left outside in the rain, it would sometimes ",
    ". All of the cool ", " loved to ",
    " with it without parental supervision. This caused many ",
    " and the company that made it had to shut down. All of the kids were ",
    " but they eventually got over it. The End."];

var inquirer = require('inquirer');

inquirer.prompt([{
    name   : 'noun',
    message: 'Name a cheap toy'
}, {
    name   : 'adjective',
    message: 'Describe school in one word'
}, {
    name   : 'verb',
    message: 'Describe a disappointing action in one word'
}, {
    name   : 'noun2',
    message: 'What is a group you fancy'
}, {
    name   : 'verb2',
    message: 'What do you do in bed'
}, {
    name   : 'noun3',
    message: 'What would you hate to receive'
}, {
    name   : 'verb3',
    message: 'What is a punishment in Saudi Arabia for a minor crime'
}]).then(function(answers) {
    console.log(
        story[0] + answers.noun + story[1] + answers.adjective + story[2] + answers.verb + story[3] + answers.noun2 + story[4] + answers.verb2 + story[5] + answers.noun3 + story[6] + answers.verb3 + story[7]);
});