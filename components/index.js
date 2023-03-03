import "./INPUT/createTask.js"
import "./TASK/newTask.js"



const button = document.getElementById("boton-crear")
const list = document.getElementById("Task-list")

button.addEventListener("click", (e)=>{
    addTask(e)
})


function addTask(e){
    e.preventDefault()
    const input = document.getElementById("espacio-blanco")
    const listOfTasks = document.createElement("task-item")
    listOfTasks.setAttribute('newTask', input.value);
    console.log(listOfTasks)
    list.append(listOfTasks)
    input.value = ""

console.log(list
    );
    
}