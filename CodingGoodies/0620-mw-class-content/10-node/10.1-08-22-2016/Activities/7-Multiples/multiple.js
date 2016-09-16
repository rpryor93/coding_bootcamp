// Take in an input value in the form of an integer
var inputNum = parseInt(process.argv[2]);
var divisor = parseInt(process.argv[3]);
var sum = 0;
if (process.argv.length < 4) {
	console.log('Invalid usage: multiple.js number divisor');
	return;
}
// Go from 6 to the number. Adding up 6 each time (to only get multiples of 6).
for (var i=0; i<inputNum; i++){
	if (i % divisor == 0) {
		// Each time add i to the sum. (ex: 6, 12, 18, etc.)
		sum += i;
	}
}

// Print out the sum
console.log(sum);
