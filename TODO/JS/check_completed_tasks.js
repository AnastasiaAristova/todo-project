/*cross out completed tasks*/

let checkField= document.getElementsByClassName('todo-list__item');

for(let elem of checkField) {
    elem.addEventListener('click', ChangeTaskStatus)
}

function ChangeTaskStatus(event){
    let trgt=event.target;
    let inputField = trgt.querySelector('.todo-list__text');
    ChangeInputFieldStatus(inputField);
    ChangeClassStatus(trgt);
    ChangeFontStyle(inputField);
    CheckIfShouldDisplay(trgt);
}

/* disable/enable input field*/
function ChangeInputFieldStatus(input){
    input.disabled = !input.disabled;
}

/* add/remove class active/completed */
function ChangeClassStatus(trgt){
    let listElem = trgt.closest('li');
    if(listElem.classList.contains('active'))
    {
        listElem.classList.remove('active');
        listElem.classList.add('completed');
    }
    else{
        listElem.classList.remove('completed');
        listElem.classList.add('active');
    }
    //alert(listElem.classList);
}


/* change decoration and color */
function ChangeFontStyle(input){
    if(input.disabled)
    {
        input.style.textDecoration='line-through';
        input.style.color= '#dadada';
    }
    else {
        input.style.textDecoration='none';
        input.style.color= '#666666';
    }
}

/* checks if chosen element fits the current type of shown tasks and hides it if not*/
function CheckIfShouldDisplay(trgt){
    let curTaskType=document.querySelector('.current-task-type').id;
    let listElem = trgt.closest('li');
    if(curTaskType==='all' || listElem.classList.contains(curTaskType)) return;
    setTimeout(() =>listElem.style.display = 'none',300);
}