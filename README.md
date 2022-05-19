# Online Calendar: Part 2

## Goal
In the previous skillbuilder, you built a calendar web application with JavaScript, HTML, and CSS. The content of the schedule was found in the global variable "schedule". In production, data is frequently stored in a remote database.
In this challenge you have 3 main tasks:

- [ ] You will need to make an ajax request to a database on a remote URL.
- [ ] You will need to extract your current week's schedule from there.
- [ ] You will need to display this data in your calendar application.

## How do I get started
As usual, there will be some setup involved before you can get started.

 - [x] First, you'll need to fork and clone the repo, then use `cd` to navigate to the project's directory on your machine.
 - [x] Next, use the following command to install npm dependencies:
```
npm install
```

- [x] Start your server by running:
```
npm start
```

- [x] Visit http://localhost:3000 to view your index.html page
	- *Note: for this unit and all further units you should be using your Web server to view your site rather than loading index.html in your browser directly.*

## Challenges

In `main.js`, you'll find that classes for different parts of the calendar have been built out for you. For this excercise, you may either use these or replace them with your code for the calendar you built in the previous skillbuilder.

You may use vanilla JavaScript or jQuery to complete these challenges. Try to implement each step both ways and see which one you like better. [Here](http://youmightnotneedjquery.com) for some tips on how to perform common tasks each way.

- [ ] Modify your main.js code to perform an asynchronous HTTP GET request to the following URL: <br> ```http://slack-server-production.us-west-2.elasticbeanstalk.com/calendar/{LA, NY, PTRI, or FTRI}/{COHORT_NUMBER}```
	- ***The format of the data received from the URL will be different from the schedule object given in the previous challenge, so if reusing your old code, don't expect it to work without modification***
- [ ] Once you've retrieved the calendar data, populate the DOM with the data so that the user can see their calendar entries
- [ ] **BONUS (Only attempt if you have extra time)**: Use jQuery's promise feature to control your asynchronous GET request

## How do I test if my answer is correct?
Run the following code in your terminal to test your code:
```
npm test
```

Treat the tests for this unit as a guideline and not as an absolute. You may choose to implement your calendar in a slightly different way than the tests are expecting which could cause the tests to fail, and that's fine - as long as you can get your calendar data into the DOM you're on the right track.
