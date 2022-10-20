var list_items = document.querySelector("ul");
var play_again = document.querySelector(".play-again");
var reset_scores = document.querySelector(".reset-scores");

if (localStorage.getItem("final_scores") !== null) {
    
    var array = localStorage.getItem("final_scores").split(",");
    
    for (let i = 1; i < array.length; i++) {
        const element = array[i];
        list_items.appendChild(document.createElement("li")).textContent = element;
        
    }
}

play_again.addEventListener("click", function () {window.location.href = "./index.html"});
reset_scores.addEventListener("click", function () {
    localStorage.clear();
    window.location.href = "./scores.html";
})