const inputTxt = document.getElementById("input-txt")
const inputBtn = document.getElementById("input-btn")
const taskHolder = document.getElementById("task-holder")
const mainList = document.getElementById("main-list")
 

   
   var clearBtn = document.getElementById("clear-btn")
    var trashButton = document.createElement("span")

inputBtn.addEventListener("click", addTask)


function addTask(e) {
    e.preventDefault()
    if (inputTxt.value !== "") {
    var listItems = document.createElement("li")
    listItems.classList.add("list-item")
    listItems.innerHTML = inputTxt.value
    taskHolder.appendChild(listItems)
     var timesButton = document.createElement("span")
    timesButton.innerHTML ='<i class="fas fa-times"></i>'
     var checkButton = document.createElement("span")
     checkButton.innerHTML ='<i class="fas fa-check"></i>'

    listItems.appendChild(timesButton)
  
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    listItems.appendChild(trashButton)
   
    } else {
        alert("Please fill in a task...")
    }
     inputTxt.value = ""
     timesButton.addEventListener("click", checkTodo)

    
function checkTodo() {
     if (listItems.contains(checkButton)) {
         listItems.removeChild(checkButton)
     } else {
         listItems.appendChild(checkButton)
     }
     listItems.classList.toggle("check")
    
}

clearBtn.addEventListener("click", removeAll)
function removeAll () {
    while(taskHolder.hasChildNodes()) {
       taskHolder.removeChild(taskHolder.firstChild)
    }
    
    
}

trashButton.addEventListener("click", deleteTask)

function deleteTask(e) {
   e.taskHolder.removeChild(listItems)
     
    
}




}







