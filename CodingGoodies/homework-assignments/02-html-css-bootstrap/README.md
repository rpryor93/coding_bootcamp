# Week 2 Assignment

### Objectives
* Create a unique and sophisticated portfolio using Bootstrap
* Use media queries to manipulate a website based on screen width

### Remember

You will be fully capable of doing this homework by the end of Saturday's class.

### Week 2 Mantra

**Week 1** you learned a lot of html/css, github and heroku

**Week 2** you'll learn an easier way to manage the html/css along with some more github stuff

**Week 3** we'll start JavaScript, and weeks 1+2 get used a lot less

There is no need to panic over week 1's material. Because you'll have 23 weeks to digest it and get good at it. 

Again, Week 1 doesn't build over the next 23 weeks. **Stay calm**. You'll have plenty of time to get better at it.

**Setup - Do this first!!!**:

1. Create a github repo named 'portfolio' and clone it to your machine (use the same repository for both parts of this homework)

2. `cd` into your local copy of the repository

3. Using git bash, create the folders `part1` and `part2`


**Part One Instructions**

1. Find a Bootstrap theme that you like (or make your own - it isn't too tough if you follow the bootstrap documentation!). There are plenty of free options available, or you can pay for one if you choose. Here are a few site where you can find themes.
  + [Wrap Bootstrap](https://wrapbootstrap.com/themes/portfolios)
  + [Boots Watch](https://bootswatch.com/)
  + [Start Bootstrap](http://startbootstrap.com/template-categories/portfolios/)
  + [Theme Forest](http://themeforest.net/tags/bootstrap)
  + [Bootstrap Skins](https://www.bootstrapskins.com/)
  + [Blacktie](http://blacktie.co/tag/portfolio/)
2. After you find a theme you like. Inside your `part1` folder, create these files: `index.html`, `portfolio.html`, and `contact.html`
3. Install the bootstrap theme and add your portfolio content
    - Be sure to leave space for your future projects that you will be coding during the course
    - This is your opportunity to shine!  Add your own images, correct contact information and link to homework one as part of your portfolio (if you liked it :).
4. Create the `index.php` and `composer.json` inside `part1`
    - Make sure you have `<?php include_once("index.html"); ?>` and `{}` for those files
5. Deploy your new Bootstrap-powered-portfolio to Heroku

**Part Two Instructions**

1. Using git bash, cd into the part2 folder of your local Portfolio repo created in the **Setup**

3. Using git standards, download the files from github repo [https://github.com/KC135Q/Portfolio](https://github.com/KC135Q/Portfolio "https://github.com/KC135Q/Portfolio") into the part2 directory of your local repo
    (*hint* - add a remote to your cloned portfolio then using git, pull from Portfolio to your master)

4. Your directory structure should look like this
    - Portfolio
        - part1 {Bootstrap stuff}
        - part2
            - assets
                - css
                    - reset.css
                    - style.css
                - images
                    - dark-blue-silk.jpg
                    - envelope.png
                    - harley.jpg
            - index.html
            - readme.md (you can delete this file if you want)

5. Open index.html in your browser

![Large Screenshot](https://github.com/KC135Q/homework/blob/master/graphics/harley-large.png?raw=true)

6. Now, using the media queries at the bottom of the assets/css/style.css file, make “Connect with me” move to the bottom and the background color change when the width decreases 768px or less.

![Medium Screenshot](https://github.com/KC135Q/homework/blob/master/graphics/harley-med.png?raw=true)

7. Then add some more styling in the media queries to change the background color and move the text down so it doesn’t flow around the (motorcycle) image only when the screen is 640px or less.

![Small Screenshot](https://github.com/KC135Q/homework/blob/master/graphics/harley-small.png?raw=true)

8. When you are done, push your repo back up to github along with the bootstrap (part 1) files.

Do **not** deploy part2 of the homework to Heroku

You may customize this part by changing images, backgrounds and colors as long as the intended effect is achieved.


### BONUS (Part 3?)
1. Make CSS3 animations

### Bootcampspot Instructions for submitting your homework
1. Submit the link to your `Portfolio` repository
2. Submit the link to your Heroku site for Part 1 in the same input field as step 1
3. Push the whole portfolio repo up to github to make sure you get both parts
3. You should see both links are submitted in bootcampspot. (**SUBMIT EARLY!**)