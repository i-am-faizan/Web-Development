let inputbox = document.getElementById("input-text")
let listContainer = document.getElementById("list-container")

function add() {
    if (inputbox.value == "")
        alert("You must write Something")
    else {
        var li = document.createElement("li")
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li);
    
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)

    }
    inputbox.value = ""
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("cheked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false)

function saveData(){
    localStorage.setItem("Data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("Data");
}
showTask();