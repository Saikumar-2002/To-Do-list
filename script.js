let taskEnter=document.getElementById("taskEnter");
let taskList=document.getElementById("task-list");

let todoForm=document.getElementById("todo-form");

todoForm.addEventListener("submit", function (e) {
    e.preventDefault();

let taskText=taskEnter.value.trim();

if(taskText==""){
 alert("Add any task") ;
}
else{

const li=document.createElement("li")
li.textContent=taskText;

const deleteBtn=document.createElement("delete");
deleteBtn.textContent="Delete";

deleteBtn.classList.add("deleteBtn");

li.appendChild(deleteBtn);

taskList.appendChild(li);
taskEnter.value = "";

// Delete task functionality
deleteBtn.addEventListener("click", () => {
li.remove();

})
}
})