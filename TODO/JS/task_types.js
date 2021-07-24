/*switching between types of tasks */

/* all objects in button-centre*/
let taskButton = document.getElementById("task_types");

taskButton.addEventListener('click',function (event){
    let trgt = event.target;
    if(trgt.tagName!=='BUTTON') return;
    showTasks(trgt.id);
})

/* show only requested tasks*/
function showTasks(type){
    let alltypes=document.getElementsByClassName('todo-list__item');
    /*display all tasks*/
    for(let e of alltypes)
        e.style.display='grid';
    if(type==='all')
    {
        return;
    }
    //let list = getTaskList(type);


    /*hide non-requested tasks*/
    for(let elem of alltypes){
        if(elem.classList.contains('active') && type!=='active') {
            elem.style.display = 'none';
        }
        else if(!elem.classList.contains('active') && type==='active'){
            elem.style.display = 'none';
        }
        }
}


// get list of tasks that aren't requested
/*function getTaskList(type){
    let alltypes=document.getElementsByClassName('todo-list__item');
    let neededtypes =[];
    for(let obj of alltypes){
        obj.style.display='grid';
        if(!obj.classList.contains(type))
        {
            neededtypes.push(obj);
        }
    };
    return neededtypes;
}*/