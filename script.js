const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
const allTasks =document.getElementById("all")

let allTask=0;
updateCount();

function addTask(){
    if(inputBox.value===''){
        alert("your must enter something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span)
    }
    inputBox.value='';
    allTask++;
    updateCount();
    saveData()
}


listContainer.addEventListener("click" , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        allTask--;
        updateCount();
        saveData()
    }
},false)


function updateCount(){
    document.getElementById('allCount').innerText=allTask;
}

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    localStorage.innerHTML = localStorage.getItem("data");
}

showTask();
  
