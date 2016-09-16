//REQUIRE INQUIRER
var inquirer = require('inquirer');

//CONSTRUCTOR FUNCTION FOR CREATING Player OBJECTS
function Player(name, position, offense, defense) {
    this.name = name, this.position = position, this.offense =
        offense, this.defense = defense, //FLIPS A COIN: IF THE THE VALUE IS EQUAL TO 0 THEN this.offense GOES UP BY ONE. IF THE VALUE IS EQUAL TO 1
        this.goodGame = function() {
            if (Math.floor(Math.random() * 2) == 0) {
                this.offense ++;
                console.log(this.name + "'s offense has gone up!\n----------");
            } else {
                this.defense ++;
                console.log(this.name + "'s defense has gone up!\n----------");
            }
        }, this.badGame = function() {
        if (Math.floor(Math.random() * 2) == 0) {
            this.offense --;
            console.log(this.name + "'s offense has gone down!\n----------");
        } else {
            this.defense --;
            console.log(this.name + "'s defense has gone down!\n----------");
        }
    }, this.printStats = function() {
        console.log(
            "Name: " + this.name + "\nPosition: " + this.position + "\nOffense: " + this.offense + "\nDefense: " + this.defense + "\n----------");
    }
}

//ARRAYS USED TO CONTAIN ALL OF OUR PLAYER OBJECTS
var starters = [];
var subs = [];
var score = 0;

//RECURSIVE FUNCTION WHICH WILL ALLOW THE USER TO CREATE 5 PLAYERS AND THEN WILL PRINT EACH PLAYER'S STATS AFTERWARDS
var createPlayer = function() {
//IF THE LENGTH OF THE team ARRAY IS 8 OR HIGHER, NO MORE QUESTIONS WILL BE ASKED
    if (starters.length + subs.length < 8) {
        console.log("\nNEW PLAYER!\n");
        inquirer.prompt([{
            name   : "name",
            message: "Player's Name: "
        }, {
            name   : "position",
            message: "Player's position: ",
            type   : "list",
            choices: ["Striker", "Defense"]
        }, {
            name    : "offense",
            message : "Player's Offensive Ability (0-10): ",
            validate: function(value) {
                if (isNaN(value) == false && parseInt(value) > 0 && parseInt(
                        value) <= 10) {
                    return true;
                } else {
                    return false;
                }
            }
        }, {
            name    : "defense",
            message : "Player's Defensive Ability (0-10): ",
            validate: function(value) {
                if (isNaN(value) == false && parseInt(value) > 0 && parseInt(
                        value) <= 10) {
                    return true;
                } else {
                    return false;
                }
            }
        }]).then(function(answers) {
//RUNS THE CONSTRUCTOR AND PLACES THE NEW Player OBJECT INTO THE VARIABLE player.  TURNS THE offense AND defense VARIABLES INTO INTEGERS AS WELL WITH parseInt
            var player = new Player(answers.name, answers.position, parseInt(
                answers.offense), parseInt(answers.defense));
//ADDS A PLAYER TO THE starters ARRAY IF THERE ARE LESS THAN FIVE Player OBJECTS IN IT. OTHERWISE ADDS THE NEWEST Player OBJECT TO THE subs ARRAY.
            if (starters.length < 5) {
                starters.push(player);
                console.log(player.name + " added to the starters");
            } else {
                subs.push(player);
                console.log(player.name + " added to the subs");
            }
//RUNS THE createPlayer FUNCTION ONCE MORE
            createPlayer();
        })
    } else {
        playGame(0);
    }
};

//FUNCTION TO RUN THE GAME ITSELF. THE VARIABLE x IS USED HERE TO KEEP TRACK OF THE ROUNDS.
var playGame = function(gameRound) {
    if (gameRound == 10) {
        console.log('End Round!');
        return 0;
    }
    if (gameRound < 9) {
//ADDS ONE TO x AND PRINTS THE CURRENT ROUND OF THE GAME
        gameRound ++;
        console.log("----------\nROUND " + gameRound + "\n----------");
//FINDS TWO RANDOM NUMBERS BETWEEN 1 AND 50 TO COMPARE THE starter OBJECTS' STATS TO
        var offenseRandom = (Math.floor(Math.random() * 50) + 1);
        var defenseRandom = (Math.floor(Math.random() * 50) + 1);
//LOOPS THROUGH THE starter ARRAY TO FIND IF THE TOTAL VALUE OF THEIR offense AND defense
        var teamOffense = 0;
        var teamDefense = 0;
        for (var i = 0; i < starters.length; i ++) {
            teamOffense += starters[i].offense;
            teamDefense += starters[i].defense;
        }
        console.log("Our Team's Offense: " + teamOffense);
        console.log("Our Team's defense: " + teamDefense);
        console.log("Opponent Offense: " + offenseRandom);
        console.log("Opponent Defense: " + defenseRandom);
//DETERMINES IF teamOffense IS LESS THAN offenseRandom AND ADDS ONE TO score IF TRUE
        if (offenseRandom < teamOffense) {
            console.log("YOU SCORED!");
            score ++;
        }
//DETERMINES IF teamDefense IS GREATER THAN defenseRandom AND SUBTRACTS ONE FROM score IF TRUE
        if (defenseRandom > teamDefense) {
            console.log("THEY SCORED!");
            score --;
        }
//PROMPTS TO FIGURE OUT IF THE PLAYER WOULD LIKE TO MAKE A SUBSTITUTION
        inquirer.prompt([{
            name   : "confirm",
            type   : "confirm",
            message: "Would you like to make a substitution?"
        }]).then(function(answer) {
//IF THE ANSWER IS YES, START THE SUBSTITUTION PROMPTS
            if (answer.confirm == true) {
                inquirer.prompt([{
                    name   : "sub",
                    type   : "rawlist",
                    message: "Who would you like to sub in?", //SETS THE NAMES OF ALL THOSE CONTAINED WITHIN THE subs ARRAY AS CHOICES
                    choices: subs,
                }]).then(function(subIn) {
//FINDS THE Player OBJECT WITHIN THE subs ARRAY WITH THE NAME THAT MATCHES THE USER'S CHOICE AND PLACES IT WITHIN THE sideline VARIABLE
                    var sideline = {};
                    var subsSeatIndex = 0;
                    for (var subIndex = 0; subIndex < subs.length; subIndex ++) {
                        if (subs[subIndex].name == subIn.sub) {
                            subsSeatIndex = subIndex;
                            sideline = subs[subIndex];
                        }
                    }
                    inquirer.prompt([{
                        name   : "sub",
                        type   : "rawlist",
                        message: "Who would you like to sub out?",
                        choices: starters
                    }]).then(function(subOut) {
//FINDS THE Player OBJECT WITHIN THE starters ARRAY WITH THE NAME THAT MATCHES THE USER'S CHOICE SWAPS IT WITH THE VALUE CONTAINED WITHIN sideline AFTER MOVING THEM INTO THE subs ARRAY
                        for (var starterIndex = 0; starterIndex < starters.length; starterIndex ++) {
                            if (starters[starterIndex].name == subOut.sub) {
                                subs[subsSeatIndex] = starters[starterIndex];
                                starters[starterIndex] = sideline;
                                console.log("SUBSTITUTION MADE!");
                            }
                        }
//STARTS THE NEXT ROUND
                        playGame(gameRound);
                    })
                })
            } else {
//STARTS THE NEXT ROUND
                playGame(gameRound);
            }
        })
    } else {
//PRINTS THE FINAL SCORE
        console.log("FINAL SCORE: " + score);
//IF THE SCORE WAS GREATER THAN 0, PRINTS THE WINNING MESSAGE AND INCREASES starters STATS
        if (score > 0) {
            console.log(
                "Good game, everyone!\nYour current starters' stats have improved!");
            for (var i = 0; i < starters.length; i ++) {
                starters[i].goodGame();
            }
        }
//IF THE SCORE WAS LESS THAN 0, PRINTS THE LOSING MESSAGE AND DECREASES starters STATS
        if (score < 0) {
            console.log(
                "That was a poor performance!\nYour current starters' stats have decreased!");
            for (var i = 0; i < starters.length; i ++) {
                starters[i].badGame();
            }
//IF THE SCORE WAS ZERO, PRINTS THE TIE MESSAGE AND DOES NOTHING TO THE starters STATS
        } else {
            console.log("It was a tie game! Not good. Not bad.");
        }
//PROMPTS THE USER IF THEY WOULD LIKE TO PLAY AGAIN. IF YES, RUN playGame WITH A VALUE OF 0 BEING PASSED INTO IT. IF NO, PRINT THE "come back again soon message" AND EXIT
        inquirer.prompt({
            name   : "again",
            type   : "confirm",
            message: "Would you like to play another match?"
        }).then(function(answer) {
            if (answer.again == true) {
                playGame(0);
            } else {
                console.log("Come back again soon!");
            }
        })
    }
};

//CALLS THE FUNCTION createPlayer() TO START THE CODE   
createPlayer();
