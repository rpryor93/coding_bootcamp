// Grabs the bands variables
var bands = require('./bands.js');

// Gets all of myBands bands from the bands file.
var bandList = bands.myBands;

// Loop through band list and print out details
console.log('bands', bandList);

for (var genre in bandList) {
	console.log('genre', genre, 'Band:', bandList[key]);
}