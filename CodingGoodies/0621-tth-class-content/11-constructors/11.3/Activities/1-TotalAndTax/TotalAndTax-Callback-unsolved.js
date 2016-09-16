//DO NOT TOUCH
var videoGame = 11.49; // Declaration of variable we will be using in this example
var movie = 4.99; // Declaration of variable we will be using in this example

// Function which takes in two numbers, adds them together, and then returns the result
var addThemUp = function (a, b) {
	//---------------- write code in between these two comments//----------------
    return a + b;
	//---------------- write code in between these two comments//----------------
};

// Function which takes a function, passes arguments to it and executes it + adds a 10% tax to it
var addTheTax = function (sillyFunction) {
	//---------------- write code in between these two comments//----------------
    return sillyFunction(videoGame, movie) * 1.1;
	//---------------- write code in between these two comments//----------------
};

//DO NOT TOUCH
var total = addTheTax(addThemUp); // Call the addTheTax function and use the addThemUp function as its argument.

//DO NOT TOUCH
console.log(total.toFixed(2)); //console log the final result and round up to two decimals - this should be 18.13
