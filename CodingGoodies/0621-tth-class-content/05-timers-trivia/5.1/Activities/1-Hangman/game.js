var wordsList = [
"topgun",
"suspects",
"jaws",
"goonies",
"shawshank",
"ghostbusters"
];

var chosenWord  = ""; // solution will be held here.
var lettersInChosenWord = []; // This will break the solution into individual letters to be stored in array.
var numBlanks	= 0; // This will be the number of blanks we show based on the solution.
var blanksAndSuccesses = []; // Holds a mix of blank and solved letters (ex: 'n, _ _, n, _').
var wrongGuesses = []; // Holds all of the wrong guesses.

// Game counters
var winCounter  = 0;
var lossCounter = 0;
var numGuesses  = 9;

function startGame () {
	numGuesses = 9;
	chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];
	lettersInChosenWord = chosenWord.split("");
	numBlanks = lettersInChosenWord.length;
	blanksAndSuccesses = [];
	wrongGuesses = [];
    for (var i=0; i <numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }
    document.getElementById("guessesLeft").innerHTML = numGuesses;
    document.getElementById("wordBlanks").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById('wrongGuesses').innerHTML = wrongGuesses.join(" ");
    
}


function checkLetter(letter) { 
    var letterInWord = false;
    
    for (var = i; i <numBlanks; i++){
       if(chosenWord[i] == letter) 
           letterInWord = true;
        
    
        
        
    }
                      
                      
                      }

startGame();