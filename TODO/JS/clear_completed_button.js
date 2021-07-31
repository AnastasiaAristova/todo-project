const clearButton = document.getElementById('button_clear');

clearButton.addEventListener('click', clearCompleted);

function clearCompleted(){
    const completedTasks = document.getElementsByClassName('completed');
    while(completedTasks)
    {
        completedTasks[0].remove();
    }
}