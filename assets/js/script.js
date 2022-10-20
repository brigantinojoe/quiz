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
var input = document.querySelector(".submission");
var input_value = document.querySelector(".input_value");
var submit_score = document.querySelector(".submit");
var score_array = [localStorage.getItem("final_scores")];

var qa = {
    question_one: {
        question: "What does Pam steal in the first season?",
        answer_one: "Dwights Bookbag",
        answer_two: "Yogurt",
        answer_three: "Angela's Cat",
        answer_four: "Post-It Notes",
        correct_answer: "Post-It Notes",
    },
    question_two: {
        question: "Who stole all of Michael's blue jeans when he was a kid?",
        answer_one: "His Mom",
        answer_two: "Mr. Rodgers",
        answer_three: "The MailMan",
        answer_four: "Foreign Exchange Student",
        correct_answer: "Foreign Exchange Student",
    },
    question_three: {
        question: "How does Michael burn his foot?",
        answer_one: "On a George Foreman Grill",
        answer_two: "Walking on hot coals",
        answer_three: "Standing on hot pavement",
        answer_four: "Kicking the baler",
        correct_answer: "On a George Foreman Grill",
    },
    question_four: {
        question: "What cause does Michael use for the fun run?",
        answer_one: "Skin Cancer",
        answer_two: "Rabies",
        answer_three: "Hip Surgery",
        answer_four: "Diabetes",
        correct_answer: "Rabies",
    },
    question_five: {
        question: "What color does Dwight paint Michael's office when he thinks he's taking over?",
        answer_one: "White",
        answer_two: "Black",
        answer_three: "Blue",
        answer_four: "Red",
        correct_answer: "Black",
    },
    question_six: {
        question: "What kind of car does Dwight drive?",
        answer_one: "Mustang",
        answer_two: "Wagon",
        answer_three: "Trans Am",
        answer_four: "Chrysler",
        correct_answer: "Trans Am",
    },
    question_seven: {
        question: "What's the name of the company that buys Dunder Mifflin?",
        answer_one: "Pfizer",
        answer_two: "Sabre",
        answer_three: "Pagre",
        answer_four: "Padre",
        correct_answer: "Sabre",
    },
    question_eight: {
        question: "Which character started as “the temp”?",
        answer_one: "Ryan",
        answer_two: "Erin",
        answer_three: "Kevin",
        answer_four: "Kelly",
        correct_answer: "Ryan",
    },
    question_nine: {
        question: "In the absence of ice cream, what does Michael eat?",
        answer_one: "Mustard and Chips",
        answer_two: "Yogurt and Raisins",
        answer_three: "Hollandaise and Peanut Butter",
        answer_four: "Mayo and Black Olives",
        correct_answer: "Mayo and Black Olives",
    },
    question_ten: {
        question: "How many minutes did Michael Scott work at the office?",
        answer_one: "8,500,000 minutes",
        answer_two: "9,568,000 minutes",
        answer_three: "9,986,000 minutes",
        answer_four: "9,999,000 minutes",
        correct_answer: "9,986,000 minutes",
    },
};

var question_array = [
    qa.question_one,
    qa.question_two];

    // var question_array = [
    //     qa.question_one,
    //     qa.question_two,
    //     qa.question_three,
    //     qa.question_four,
    //     qa.question_five,
    //     qa.question_six,
    //     qa.question_seven,
    //     qa.question_eight,
    //     qa.question_nine,
    //     qa.question_ten];

var start_time = 74;
array_index = 0;

answers.addEventListener("click", function (event) {
    if (event.target.tagName !== "BUTTON") { return; }
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

        if (array_index < question_array.length - 1) {
            array_index += 1;
            array_iteration();
        } else {
            clearInterval(interval);
            score();
        }
    }
});

start.addEventListener("click", array_iteration);


function array_iteration() {
    start.setAttribute("style", "display: none;");

    start_question.textContent = question_array[array_index].question;

    answer_button_1.setAttribute("style", "display: block");
    answer_button_2.setAttribute("style", "display: block");
    answer_button_3.setAttribute("style", "display: block");
    answer_button_4.setAttribute("style", "display: block");
    answer_button_1.textContent = question_array[array_index].answer_one;
    answer_button_2.textContent = question_array[array_index].answer_two;
    answer_button_3.textContent = question_array[array_index].answer_three;
    answer_button_4.textContent = question_array[array_index].answer_four;

}



var interval = setInterval(function time() {
    if (start.getAttribute("style") === "display: none;") {
        timer.textContent = `Time: ${start_time}`;
        start_time--;
    } else {
        timer.textContent = `Time: 75`;
    }
    if (start_time <= -1) {
        console.log("IF Statement worked");
        clearInterval(interval);
        timer.textContent = "Time: 0";
        score();
    }
}, 1000);

var score = function () {
    console.log(start_time);
    if (start_time <= 0) {
        localStorage.setItem("score", 0);
    } else {
        localStorage.setItem("score", start_time + 1);
    }
    JSON.stringify(localStorage.getItem("score"));
    timer.textContent = `Time: ${localStorage.getItem("score")}`;
    if (localStorage.getItem("score") <= 0) {
        start_question.textContent = "Looks like you might need to the 'The Office' again.. Dwight would be devastated! Refresh the page to try again.";
        input.setAttribute("style", "display: none;");
    } else {
        start_question.textContent = `Congratulations! You completed the quiz with a score of ${localStorage.getItem("score")}. Submit your initials below and compare to other Office Superfans!`;
        input.setAttribute("style", "display: flex;");
    }
    answers.setAttribute("style", "display: none");
    footer.setAttribute("style", "display: none;");
}

var submission = function () {
    // Get initial value
    var initials = input_value.value;
    var final_score = `${initials}: ${localStorage.getItem("score")}`;
    // Store to locatstorage
    score_array.push(final_score);
    localStorage.setItem("final_scores", score_array);
    console.log(score_array);
    window.location("./index.html");
}

submit_score.addEventListener("click", submission);
// Set function for clicking the submit button. Save Initials and Score into local storage. Render scores on a separate html file.

if (start_time <= 0) {
    start_time = 0;
    score();
    submission();
}