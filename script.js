
const tasklist = document.querySelector("#tasklist");
const button = document.querySelector("#addTaskButton");
button.addEventListener("click", () => {
    const taskbox = document.querySelector("#taskInput");
    const task = taskbox.value;
    if(task === ""){
        alert("pls enter task");
        return;
    }
    
    const li = document.createElement("li");
    
    const taskText = document.createElement("span");
    taskText.textContent = task;

    const completebtn = document.createElement("button");
    completebtn.textContent = "✅";
    completebtn.classList.add("complete-btn");

    const deletebtn = document.createElement("button");
    deletebtn.textContent = "🗑️";
    completebtn.classList.add("delete-btn");

    li.appendChild(taskText);
    li.appendChild(deletebtn);
    li.appendChild(completebtn);

    
    tasklist.appendChild(li);
    taskbox.value = "";


    completebtn.addEventListener("click", () => {
        completebtn.style.backgroundColor = " rgba(253, 253, 0, 0.692)";
        li.style.backgroundColor = " rgba(253, 253, 0, 0.692)";
    });

    deletebtn.addEventListener("click", () => {
        tasklist.removeChild(li);
    })
});

