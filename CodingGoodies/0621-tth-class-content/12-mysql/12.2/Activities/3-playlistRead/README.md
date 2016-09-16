#Activity 1

  * Throughout this class we are going to be working on creating an application that takes in music data to create personalized playlists

    * Make sure to get as far as you can over the course of these assignments as the coding you do here will be extremely useful to you when you begin working on the homework

  * For now we will simply be creating your database in MySQL and then creating a connection to said database using Node. **Remember, you must create a database before attempting to connect to it. Doing otherwise will return an error.**

  * BONUS: Using MySQL Workbench, create a table in your databse with four columns...
    * Primary Key of "ID" which auto-increments
    * A column called "title"
    * A column called "artist"
    * A column called "genre"

  * BONUS: Using MySQL Workbench, populate your table with a few rows of dummy data

  * BONUS: Start looking into how you can use the MySQL NPM package to read data from a MySQL database
  
  ##Stop
  
  #Part Deux
  
  * **Instructions**
  
    * Using the connection and song data you put together earlier into the class, we are going to print playlists to the Git Bash console based upon the genre or artist.
  
    * First create code that prints all songs within your database to Git Bash.
  
    * Now create code that prints songs of a specific genre/artist to the Git Bash console.
  
      * If you don't have many songs in your database at this point in time, take this moment to add some more to it. Try to give yourself a variety of songs to work with.
  
      * HINT: Remember that you can call specific data using SQL commands we went over last class. If you are having trouble, make sure to look into SQL commands once more.
  
    * BONUS: See if you can create more stylized tables within the Git Bash console
  
      * This will require utilizing some JavaScript to pull off smoothly, but will be a huge boon to your tackling the homework if you can figure out how to accomplish this task now.
  
    *BONUS: See if you can make a MySQL query which, instead of taking in a complete string, can contain variables which switch up the search parameters.
  
      * There are a couple different ways to accomplish this task, but the most common one can be found within the documentation for the MySQL NPM package.
 
 
 #Part 3
 * **Instructions**
 
   * It's time to start making our playlist application a little more functional through including all four C.R.U.D elements within it.
 
   * Add in some pieces of code that CREATE, UPDATE, and DELETE specific pieces of data from your MySQL database. Make sure to include a READ statement at the end as well to ensure that the changes you are making are working properly.
 
   * BONUS: After successfully adding C.R.U.D to your application, it's time to test your mettle and see if you can make it so this app is more dynamic through allowing users to dynamically input their own data into the database using either the Prompt or Promptly NPM packages.
 
     * HINT: Recall that you can create MySQL queries which include variables through including question marks. Proper usage of this will help you quite a bit.
 
     * HINT: Remember to take into account the scope of Prompt/Promptly when putting your application together.