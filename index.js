// This is a CLI quiz app made using basic programming concepts such as array,objects,functions, loops etc in nodejs..

console.clear();

// using readline-sync package
var readlineSync = require("readline-sync");
var chalk = require("chalk");

var userName = readlineSync.question(
  chalk.bgWhiteBright.black("What is your name?  ")
);

console.log(
  chalk.bgBlackBright("\nWelcome " + userName + " to Do You Know Kishan? \n")
);

var score = 0;

// array of questions
var questions = [
  {
    question:
      "Where was Kishan Born? \na: Gujarat \nb: Maharashtra \nc: Rajasthan",
    answer: "a",
  },
  {
    question: "What is Kishan's age? \na: 22 \nb: 21 \nc: 19",
    answer: "b",
  },
  {
    question:
      "What is  Kishan's Fav sport? \na: Football \nb: Cricket \nc: Basketball",
    answer: "b",
  },

  {
    question:
      "For which bootcamp is this quiz made? \na: Zero to Mastery \nb: Creative Camp \nc: neoG Camp",
    answer: "c",
  },
  {
    question:
      "What will be taught in this bootcamp? \na: Web Development \nb: Mobile Development \nc: Design",
    answer: "a",
  },
];

// array of highest scorers
var highScore = [
  {
    name: "Kishan",
    score: 5,
  },
  {
    name: "Anjana",
    score: 4,
  },
];

// function to play quiz
function playQuiz(question, answer) {
  var userAns = readlineSync.question(question + "\n");

  if (userAns.toLowerCase() === answer.toLowerCase()) {
    score++;
    console.log(chalk.bgGreenBright("your answer is correct 😀 "));
  } else {
    console.log(
      chalk.bgRedBright("wrong answer ☹️  " + answer + " is correct answer")
    );
  }
  console.log(chalk.bgYellowBright.black("Current Score:  " + score + "\n"));
}

// loop to keep playing
for (var i = 0; i < questions.length; i++) {
  playQuiz(questions[i].question, questions[i].answer);
}

console.log(chalk.whiteBright.bgBlue.bold("Your total Score is " + score));
console.log(chalk.greenBright.italic("\nThe highest scorers are \n"));

// loop to show highest scorers
for (var i = 0; i < highScore.length; i++) {
  console.log(
    chalk.magentaBright.bold(
      i +
        1 +
        " is " +
        highScore[i].name +
        " with " +
        highScore[i].score +
        " points"
    )
  );
}

console.log(
  chalk.blackBright.bgWhiteBright(
    "\nif you have beaten a high score please send the screenshot \n"
  )
);
