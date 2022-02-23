//Добавление задачи
$('#post-form').submit(function (e) {
    e.preventDefault();
    $.ajax({
        type: 'POST',
        //url: '{% url "create" %}',
        url: 'create',
        data: {
            content: $('#content').val(),
            csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
            action: 'post'
        },
        dataType: 'json',
        success: function (json) {
            addTask(json.id)
        },
        error: function (xhr, errmsg, err) {

            $('#results').html("<div class='alert-box alert radius' data-alert>Oops! We have encountered an error: " + errmsg +
                " <a href='#' class='close'>&times;</a></div>"); // add the error to the dom
            console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
        }
    });
});
//Удаление задачи
$('.todo-list__delete-button').click(deleteTask);

function deleteTask(e) {

    const tr = $(this).closest('li');
    const id = e.target.dataset.id;

    $.ajax({
        type: 'POST',
        url: 'delete',
        data: {
            id: id,
            csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
            action: 'delete'
        },
        dataType: 'json',
        success: function () {
            tr.remove();
        },
        error: function (xhr, errmsg, err) {
            alert(id)
            $('#results').html("<div class='alert-box alert radius' data-alert>Oops! We have encountered an error: " + errmsg +
                " <a href='#' class='close'>&times;</a></div>"); // add the error to the dom
            console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
        }
    });

}

//Удаление выполненных задач
$('#button_clear').click(function (e) {
    $.ajax({
        type: 'POST',
        url: 'clear',
        data: {
            csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
        },
        dataType: 'json',
        success: function () {
            clearCompletedTask();
        },
        error: function (xhr, errmsg, err) {
            $('#results').html("<div class='alert-box alert radius' data-alert>Oops! We have encountered an error: " + errmsg +
                " <a href='#' class='close'>&times;</a></div>"); // add the error to the dom
            console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
        }
    });
});
//Изменение текста задачи
$('.form-old-task').submit(changeTaskContent);

function changeTaskContent(e) {
    e.preventDefault();
    const id = e.currentTarget[1].getAttribute('data-id');
    const content = e.currentTarget[1].value;
    $.ajax({
        type: 'POST',
        url: 'change_task_content',
        data: {
            id: id,
            content: content,
            csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
        },
        dataType: 'json',
        success: function () {
        },
        error: function (xhr, errmsg, err) {

            $('#results').html("<div class='alert-box alert radius' data-alert>Oops! We have encountered an error: " + errmsg +
                " <a href='#' class='close'>&times;</a></div>"); // add the error to the dom
            console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
        }
    });
}

//Изменение статуса задачи
$('.todo-list__checkbox-label').click(changeStatus);

function changeStatus(e) {
    e.preventDefault();
    const trgtClass = e.target.classList;
    if (trgtClass.contains('input-field__form') || trgtClass.contains('todo-list__text')) return false;
    const id = e.currentTarget.htmlFor.split('d');
    $.ajax({
        type: 'POST',
        url: 'change_status',
        data: {
            id: id[1],
            csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
        },
        dataType: 'json',
        success: function () {
            changeTaskStatus(e);
        },
        error: function (xhr, errmsg, err) {

            $('#results').html("<div class='alert-box alert radius' data-alert>Oops! We have encountered an error: " + errmsg +
                " <a href='#' class='close'>&times;</a></div>"); // add the error to the dom
            console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
        }
    });
}