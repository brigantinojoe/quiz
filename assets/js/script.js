var question = document.querySelector(".question");
var start_question = document.querySelector(".start_question");
var timer = document.querySelector(".timer");
var start = document.querySelector(".start_button");
var answers = document.querySelector(".answer");
var start_time = 69;

var quiz = function (event) {
    start.remove();
    start_question.remove();
    var p_question = document.createElement('p');
    var answer_one = document.createElement('button');
    var answer_two = document.createElement('button');
    var answer_three = document.createElement('button');
    var answer_four = document.createElement('button');
    question.appendChild(p_question).textContent = "Is this the first question?";
    answers.appendChild(answer_four).textContent = "Test 2";
    answers.appendChild(answer_one).textContent = "Test 1";
    answers.appendChild(answer_two).textContent = "Test 2";
    answers.appendChild(answer_three).textContent = "Test 2";
    answers.appendChild(answer_four).textContent = "Test 2";

    setInterval(function time() {
        if (start_time > 0) {
            timer.textContent = `Time: ${start_time}`;
            start_time--;
        } else {
            timer.textContent = `Time: 0`;
        }
    }, 1000);
}

start.addEventListener("click", quiz);

// When new buttons appear, their class name cannot be ".start_button".
// Every time the start button is clicked, it will increase the time increment.
// TODO: Get list of questions and figure out how to loop through them every time a question is answered
// TODO: Query the new question and set of answers.
// TODO: use local.storage to store correct and incorrect answers.
    // Find out if you should put them in an array or an obect. Something you can loop through.
    // Every time a answered is questioned incorrectly, deduct a few seconds off the clock.
// TODO: When the game is over, user should enter their score so they can check best scores later.