const deleteButton = document.getElementsByClassName('todo-list__delete-button');

for(const elem of deleteButton) {
    elem.addEventListener('click', deleteTask);
}

function deleteTask(event){
    const button = event.currentTarget;
    const task = button.parentElement;
    const numId = button.previousElementSibling.previousElementSibling.id.split('d');
    changeId(numId[1]);
    task.remove();
}

function changeId(numId){
    const task = document.getElementsByClassName('todo-list__checkbox');
    const label = document.getElementsByClassName('todo-list__checkbox-label');
    const length = task.length;

    for(let i = +numId+1; i <= length; i++){
        task[i-1].id = 'id' + (i-1);
        label[i-1].htmlFor = 'id' + (i-1);
    }
}


const clearCompletedTaskButton = document.getElementById('button_clear');

clearCompletedTaskButton.addEventListener('click',changeActiveTaskId);

function changeActiveTaskId(){
    const elemOfList = document.getElementsByClassName('todo-list__item')
    const length = elemOfList.length;

    for(let i = length-1; i >= 0; i--){
        if(elemOfList[i].classList.contains('completed'))
        {
            changeId(i+1);
        }
    }
}