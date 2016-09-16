// NPM Package for reading and writing files
const fs = require('fs'); 

// This block of code will create a file called "movies.txt".
// It will then print "Inception, Die Hard" in the file
// Documentation available on nodejs.org: https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback
fs.writeFile("movies.txt", 'Inception, Die Hard', function(err) {
    
	// If the code experiences any errors it will log the error to the console. 
    if(err) {
        return console.log(err);
    }

    // Otherwise, it will print: "movies.txt was updated!"
    console.log("movies.txt was updated!");
}); 

// Notes from nodejs.org documentation
// Note that it is unsafe to use fs.writeFile multiple times on the same file without 
// waiting for the callback. For this scenario, fs.createWriteStream is strongly recommended.
// Note: If a file descriptor is specified as the file, it will not be closed automatically.