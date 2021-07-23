/*cross out completed tasks*/

let check_field= document.getElementById('todo-list-checkbox');

check_field.onclick = function(event){

    trgt=event.target;
    if(trgt.tagName!=='LABEL') return;

    let input = trgt.firstChild;
    input.disabled = !input.disabled;
    let listElem = trgt.closest('li');
    listElem.classList.toggle('active');
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