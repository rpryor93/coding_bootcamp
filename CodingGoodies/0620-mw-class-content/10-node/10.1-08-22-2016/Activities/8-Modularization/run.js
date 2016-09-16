// Using the require keyword lets us access all of the exports 
// in our ess.js file
var imported = require('./ess.js');
// This will print everything in exports.
console.log("--------------------------");
console.log("ALL THE STUFF I NEED");
console.log(imported);
console.log("--------------------------");

// These will print correctly because we imported them
console.log("Essentials");
console.log(imported.essentials);
console.log("--------------------------");
console.log("Nice to Haves");
console.log(imported.nicetohaves);

// This won't print anything because it wasn't exported in ess.js
console.log("--------------------------");
console.log("Nonessentials");
console.log(imported.nonessentials);