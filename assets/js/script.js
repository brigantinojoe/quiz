var questionEl = document.querySelector(".question");
var start_question = document.querySelector(".start_question");
var timer = document.querySelector(".timer");
var start = document.querySelector(".start_button");
var answers = document.querySelector(".answer");
var answer_button_1 = document.querySelector(".answer-1");
var answer_button_2 = document.querySelector(".answer-2");
var answer_button_3 = document.querySelector(".answer-3");
var answer_button_4 = document.querySelector(".answer-4");
var correct = document.querySelector(".correct");
var incorrect = document.querySelector(".incorrect");
var footer = document.querySelector("footer");

var start_time = 74;
array_index = 0;

var quiz = function (event) {
    start.remove();

    //Start Test
    var qa = {
        question_one: {
            question: "Is this the very first question?",
            answer_one: "Test1",
            answer_two: "Test2",
            answer_three: "Test3",
            answer_four: "Test4",
            correct_answer: "Test2",
        },
        question_two: {
            question: "Is this the second question?",
            answer_one: "Answer One",
            answer_two: "Answer Two",
            answer_three: "Answer Three",
            answer_four: "Answer Four",
            correct_answer: "Answer Three",
        }

    };

    var question_array = [qa.question_one, qa.question_two];
    start_question.textContent = question_array[array_index].question;

    answer_button_1.setAttribute("style", "display: block");
    answer_button_2.setAttribute("style", "display: block");
    answer_button_3.setAttribute("style", "display: block");
    answer_button_4.setAttribute("style", "display: block");
    answer_button_1.textContent = question_array[array_index].answer_one;
    answer_button_2.textContent = question_array[array_index].answer_two;
    answer_button_3.textContent = question_array[array_index].answer_three;
    answer_button_4.textContent = question_array[array_index].answer_four;

    answers.addEventListener("click", function (event) {
        if (event.target.tagName !== "BUTTON"){return;}
        if (event.target.textContent !== "Start") {
            footer.setAttribute("style", "display: block;");
            user_answer = event.target.textContent;
            if (user_answer === question_array[array_index].correct_answer) {                
                correct.setAttribute("style", "display: block;");
                incorrect.setAttribute("style", "display: none;");
            } else {
                incorrect.setAttribute("style", "display: block;");
                correct.setAttribute("style", "display: none;");
                start_time -= 15;
            }

            array_index += 1;
            quiz();

        } else {
            setInterval(function time() {
                if (start_time > 0) {
                    timer.textContent = `Time: ${start_time}`;
                    start_time--;
                } else {
                    timer.textContent = `Time: 0`;
                }
            }, 1000);
        }
    });


}

start.addEventListener("click", quiz);
