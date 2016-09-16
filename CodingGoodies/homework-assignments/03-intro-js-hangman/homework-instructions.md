# Week 3 Assignment

### Objectives
* Create a fun and interactive Hangman game (or Psychic game) that runs in the browser!
* Dynamically update the HTML with JavaScript.
* Style various HTML elements with CSS.
* Push your code to Github.
* Deploy your code from Github to Heroku.

### Remember

You will be fully capable of doing this homework by the end of the Mon/Tue class session.

### Instructions
1. Create a new folder called `week-3-game`.

2. Inside the `week-3-game` folder, create the following: 
+ Make files called `index.html`, `composer.json`, and `index.php`
+ Fill in the appropriate content in the composer.json and index.php files to be able to deploy your game to heroku when it is finished.
+ Make a folder called `assets`.
  + Inside the assets folder make three additional folders called `javascript`, `css` and `images`.
    + Inside the `javascript` folder, make a file called `game.js`.
    + Inside the css folder make a file called `style.css`.
    + Inside the css folder make a file called `reset.css` and include the code found from the Meyerweb reset located [here](http://meyerweb.com/eric/tools/css/reset/reset.css)
    + Inside the images folder you can save the images you plan on using.

1. Push the above changes to Github (Make sure to `git add -A` and `git commit -m "initial site files"` then type `git push origin master` to push your changes to your Github repo).
2. Choose which game you would like to make. The psychic game is easier than making the hangman game but the challenges of the hangman game could help you master this week's lessons better.
3. Push your selected game to heroku using `heroku login` , `heroku create` and `git push heroku master` when appropriate. 

### Tips

1. Solve it one peice at a time! Break it down into smaller problems that add up to solve the "bigger problem". Step 1 Focus on one part of the smaller problem and get some code working. Step 2 Rinse and repeat.  `console.log` is your friend.
2. Try your best to deliver a 'working/playable game' by the end of the deadline. If you're not making progress with Hangman switch gears to work on the Psychic game. Contact your TA/Instructor if you're not making progress after 2 hours. We'll gladly help!
3. Working game > Prettiness of your game/app. We're focusing on game mechanics and not just the look and feel of your app.
4. `git commit` often. Turn in anything you have! Don't get an automatic 0!

### Option One: Psychic Game (easier than hangman) - you get a max of 9/10

The Psychic Game

1. Watch the demo

2. Put the following on your page and make the game work.

   Guess what letter I'm thinking of

   Wins: # of times the user has guessed the letter correctly

   Losses: # of times the user has failed to guess the letter correctly after exhausting all guesses

   Guesses Left: # of guesses left. This will update

   Your Guesses so far: # of times the user has failed to guess the letter correctly after exhausting all guesses


### Option Two: Hangman Game - you can get 10/10

1. Watch the demo

2. Choose a theme for your game (G, PG, PG-13 and R rated)  
* In the example, we used an 80s theme. All the words are famous bands or musicians from the 80s. Be creative with your theme!

1. Use key events to get the letter that the user typed

2. Display the following on the page:

   Press any key to get started!

   Wins: # of times user guessed the word correctly

   If the word is `madonna` then display it initially like this:
   _ _ _ _ _ _ _

   as the user guesses the correct letter, make the word display like this:
   mado _  _ a

   Number of Guesses Remaining: # of guesses remaining for the user

   Letters Already Guessed: Letters the user has guessed (e.g L Z Y H)

3. After the user wins/loses the game should automatically choose another word and make the user play it.

##### Hangman Game Bonuses

1. Play a sound or song when the user guesses the word correctly - in our case it was a song by the artist
2. Style your game so that it looks like your theme.
3. Organize your game code as an object, except for the key events to get the letter guessed.

# Copyright
Coding Boot Camp (C) 2015. All Rights Reserved.
