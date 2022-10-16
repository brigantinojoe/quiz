var questionEl = document.querySelector(".question");
var start_question = document.querySelector(".start_question");
var timer = document.querySelector(".timer");
var start = document.querySelector(".start_button");
var answers = document.querySelector(".answer");
var start_time = 69;

var quiz = function (event) {
    start.remove();
    start_question.remove();

    //Start Test
    var qa = {
        question_one: {
            question: "Is this the very first question",
            answer_one: "Test1",
            answer_two: "Test2",
            answer_three: "Test3",
            answer_four: "Test4",
            correct_answer: "Test2",
        },
        question_two: {
            question: "Is this the second question",
            answer_one: "Answer One",
            answer_two: "Answer Two",
            answer_three: "Answer Three",
            answer_four: "Answer Four",
            correct_answer: "Test2",
        }
    };
    var p_question = document.createElement('p');
    questionEl.appendChild(p_question).textContent = "Is this the first question?";
    // Create buttons for each question. 
    for (var property in qa.question_one) {
        if (property !== "question" && property !== "correct_answer") {
            var button_text = document.createElement('button');
            var answers_test = answers.appendChild(button_text).textContent = qa.question_one[property];
        }
    }

    //Change the question each time one of the buttons is clicked.
    var array_item = 0;
    var pages = function () {
        var array = [qa.question_one, qa.question_two];
        console.log(array[array_item]);

        answers.addEventListener("click", function (event) {
            if (array_item > 1) { return; }
            var element = event.target;
            if (element.textContent !== "Start") {
                var element_answer = element.textContent;
                console.log(array[array_item].answer_four);
                var remove_question = questionEl.getElementsByTagName("p");
                remove_question[0].textContent = "";
                var test = answers.getElementsByTagName("button");
                test[0].textContent = "Next";
                test[1].textContent = "Next";
                test[2].textContent = "Next";
                test[3].textContent = "Next";
                array_item += 1;
                pages();
            }
        });
    }
    pages();
    //Finish Test



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