/*switching between types of tasks */

/* all objects in button-centre*/
let taskButton = document.getElementById("task_types");

taskButton.addEventListener('click',showTasks)

function showTasks(event){
    let type = event.target.id;
    DisplayTasks(type);
    ChangeCurrentTaskType(type);
}

/* displays tasks of required types*/
function DisplayTasks(type){
    let allTypes=document.getElementsByClassName('todo-list__item');
    for(let elem of allTypes){
        if(elem.classList.contains(type) || type==='all') {
            elem.style.display = 'grid';
        }
        else{
            elem.style.display = 'none';
        }
    }
}

/* assign class current-task-type to current type of task */
function ChangeCurrentTaskType(type){
    let curTask = document.querySelector('.current-task-type');
    if(curTask.id === type) return;
    curTask.classList.remove('current-task-type');
    document.getElementById(type).classList.add('current-task-type');
}

