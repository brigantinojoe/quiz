var list_items = document.querySelector("ul");

list_items.appendChild(document.createElement("li")).textContent = localStorage.getItem("final_scores");