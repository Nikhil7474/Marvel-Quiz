import readlineSync from "readline-sync"

import chalk from "chalk"

var userName = readlineSync.question("What is your name: ")
console.log(chalk.yellow.italic(`Welcome, ${userName} to Marvel Super Hero guess the name contest\n`))

var score = 0;

var questionList = [
    {
        question: "In Avengers Endgame, who kills Thanos in the first half of the movie ? ",
        answer: "Thor"
    },

    {
        question: "Who quoted the famous line of Avengers, \"Whatever it takes\" ? ",
        answer: 'Captain America'
    },

    {
        question: "Who founded S.W.O.R.D.? ",
        answer: 'Maria Rambeau'
    },

    {
        question: "Who can lift Thor\'s hammer ? ",
        answer: 'Captain America'
    },

    {
        question: "Who rescued Tony Stark and Nebula from space ? ",
        answer: 'Captain Marvel'
    },

    {
        question: "What\'s the real name of the Black Panther ? ",
        answer: 'TChalla'
    },

    {
        question: "Which hero made the first appearance in the comics ? ",
        answer: 'The Human Torch'
    },

    {
        question: "What\'s Captain Marvel\'s real name ? ",
        answer: 'Carol Danvers'
    },

    {
        question: "Norrin Radd is the real name of which \"shiny\" intergalactic Marvel superhero ? ",
        answer: 'Silver Surfer'
    },

    {
        question: "Who was the first female superhero to appear in the title of an MCU film ? ",
        answer: 'The Wasp'
    },
]

var highScorerList = [
    {
        name: "Nikhil",
        gameScore: 10
    },
    {
        name: "Praveen",
        gameScore: 9
    }
]

for (var i = 0; i < questionList.length; i++) {
    quiz(questionList[i].question, questionList[i].answer)
}

function quiz(question, answer) {
    let userAnswer = readlineSync.question(question)
    if (userAnswer.toUpperCase() === answer.toUpperCase()) {
        console.log(chalk.blueBright("Yay! your answer is right"));
        score = score + 1;
        console.log(chalk.green(`Your current score is: ${score}\n`));
    } else {
        console.log(chalk.red("Sorry! wrong answer\n"));
    }
}
console.log("Your final score is: ", score, "\n")

for (var j = 0; j < highScorerList.length; j++) {
    console.log(`HighScore Leaderboard\n  ${chalk.yellow.bold(highScorerList[j].name)} ==> ${chalk.green.bold(highScorerList[j].gameScore)}`)
}

console.log(chalk.magenta.underline("If you beat the high score take a screen short and it to us.\nWe will update the list"));