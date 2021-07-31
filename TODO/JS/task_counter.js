const counter = document.getElementById('counter');
/*all of li*/
const allTasks = document.getElementsByClassName('checkbox__label');
for(const elem of allTasks) {
    elem.addEventListener('mouseup', recountAfterChecking)
}

/*current amount of items*/
let currCount = allTasks.length;
counter.innerHTML=currCount+' items left';

/*buttons for switching type of tasks*/
const taskButtonsFooter = document.getElementsByClassName("task-button");
for(let el of taskButtonsFooter)
    el.addEventListener('click', countTasks);

/*clear button*/
document.getElementById('button_clear').addEventListener('click', recountAfterClear);


/*count tasks after displaying different type of tasks*/
function countTasks(event){
    const type = event.target.id;
    if(type==='all')
        currCount=allTasks.length;
    else
        currCount=document.getElementsByClassName(type).length;
    counter.innerHTML = currCount +' items left';
}

/* recount tasks after changing status(active/completed) of a specific task*/
function recountAfterChecking(event){
    if(document.querySelector('.current-task-type').id==='all') return;
    currCount--;
    counter.innerHTML = currCount +' items left';
}

/*recount amount of tasks after clear*/
function recountAfterClear(event){
    const currTypeTask = document.querySelector('.current-task-type');
    if(currTypeTask.id !== 'completed')
        currCount=document.getElementsByClassName('active').length;
    else currCount=0;
    counter.innerHTML = currCount +' items left';
}
