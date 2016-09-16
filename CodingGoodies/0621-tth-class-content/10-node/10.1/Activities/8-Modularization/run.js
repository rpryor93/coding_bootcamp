// Using the require keyword lets us access all of the exports 
// in our ess.js file
// Common.js =>
var stuffINeed = require('./ess.js');

// Standard ES6 =>
import { essentials } from './ess';
console.log( essentials );
// OR
import * as stuffINeed from './ess';
console.log( stuffINeed.essentials );


var person = {
	name: 'frank',
	age: 24
};

var { name, age } = person;
console.log(name); // => frank
console.log(age); // => 24

// This will print everything in exports. 
console.log("--------------------------");
console.log("ALL THE STUFF I NEED");
console.log(stuffINeed);
console.log("--------------------------");

// These will print correctly because we imported them
console.log("Essentials");
console.log(stuffINeed.essentials);
console.log("--------------------------");
console.log("Nice to Haves");
console.log(stuffINeed.nicetohaves);

// This won't print anything because it wasn't exported in ess.js
console.log("--------------------------");
console.log("Nonessentials");
console.log(stuffINeed.nonessentials);