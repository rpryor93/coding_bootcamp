Add the viewport meta in the index.html file (Part2), and change @media in css (below is only one of many ways to do it).  Part1 was pretty self-explanatory with the biggest issue being pushing to Heroku.  Remember that index.php and composer.json must be in the directory that you `heroku create`  For styling purposes, it works out better if your primary webpage file (index.html) is in this same directory as well.

@media only screen and (max-width: 768px) {
    .content-wrapper {
        background-color: darkblue;
        margin: 0 auto;
        width: 75%;
        max-width: 640px;
    }
    section {
        border-bottom: 1px solid black;
        width: 100%;
    }
}
​
@media only screen and (max-width: 640px) {
    .content-wrapper {
        background-color: green;
        max-width: 480px;
    }
    aside .connect {
        text-align: center;
    }
    .about-me img {
        float: right;
        width: 100%;
    }
}