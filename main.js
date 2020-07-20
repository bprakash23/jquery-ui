
function Quiz(questions) {
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}

function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}

function populate() {
    if(quiz.isEnded()) {
       alert("Test Ended, Refresh the Page");
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};

// Questions
var questions = [
    new Question("How your friends describe you", ["Loyal", "Flirty","Bold", "Smart"]),
    new Question("What is your Favourite vaction Spot", ["Paris", "Vennice", "California", "NewYork"]),
    new Question("What's your favorite color", ["Green", "Yellow", "Red", "Orange"]),
    new Question("Which animal do you like the best", ["horse", "dinosaur", "cat", "shrink"]),
];

var quiz = new Quiz(questions);

// Display Quiz
populate();

