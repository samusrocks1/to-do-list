import {toDoList, createToDo} from './toDoObject';
import {createDiv, createHeader1, appendHeader1, createButton, appendButton, appendForm, appendTextbox, addLineBreak, removeDiv, createParagraph, appendParagraph} from './createElements';
var toDos = []; //To Do List Task Variable

createDiv('toDoListOptions'); //Holds the buttons for the To Do List functions.
createDiv('container') //this will hold the function the user is using.
appendButton('Add task to the list', 'toDoListOptions')
appendHeader1('Welcome to the To Do List Web Application!', 'content');
appendParagraph('Please use the buttons below to add and view to do list items.', 'content');
document.getElementById('Add task to the list').onclick = function() {addToDoItem()};
appendButton('Display To Dos', 'toDoListOptions');
document.getElementById('Display To Dos').onclick = function() {displayToDo()};

function addToDoItem() {
    removeDiv('container');
    createDiv('container');
    appendTextbox('Project', 'container');
    addLineBreak('container');
    appendTextbox('Title', 'container');
    addLineBreak('container');
    appendTextbox('Description', 'container');
    addLineBreak('container');
    appendTextbox('Due Date', 'container');
    addLineBreak('container');
    appendTextbox('Priority', 'container');
    addLineBreak('container');
    appendTextbox('Notes', 'container');
    addLineBreak('container');
    appendButton('Submit Item', 'container');
    document.getElementById('Submit Item').onclick = function() {submitNewToDo()};
}

function submitNewToDo() {
    toDos[toDos.length] = createToDo(document.getElementById('Project').value, document.getElementById('Title').value, document.getElementById('Description').value, document.getElementById('Due Date').value, document.getElementById('Priority').value, document.getElementById('Notes').value);
    removeDiv('container');
    createDiv('container');
    displayToDo();
} 

//Displays the To Do's on the webpage. Each to do is within it's own dom referenced by the title of the to do. Each to do has an edit and view button.
function displayToDo(){
    removeDiv('container');
    createDiv('container');
    const content = document.querySelector('#container');
    for (let index = 0; index < toDos.length; index++) {
        const newDiv = document.createElement('div');
        newDiv.id = toDos[index].title;
        content.appendChild(newDiv);
        appendParagraph(toDos[index].project, toDos[index].title);
        appendParagraph(toDos[index].title, toDos[index].title);
        appendParagraph(toDos[index].description, toDos[index].title); 
        appendParagraph(toDos[index].dueDate,toDos[index].title); 
        appendParagraph(toDos[index].priority, toDos[index].title); 
        appendParagraph(toDos[index].notes, toDos[index].title);
        appendButton('Edit ' + toDos[index].title, toDos[index].title);   
        document.getElementById('Edit ' + toDos[index].title).onclick = function() {editToDo(index)};
        appendButton('Remove ' + toDos[index].title, toDos[index].title);   
        document.getElementById('Remove ' + toDos[index].title).onclick = function() {removeToDo(index)};
    }
}

function removeToDo(content) {
    toDos.splice(content, 1);
}

//content is the value for the objects place in the array.
function editToDo(content) {
    createDiv('editTask');
    appendTextbox('Project ', 'editTask');
    appendTextbox('Title ', 'editTask');
    appendTextbox('Description ', 'editTask');
    appendTextbox('Due Date ', 'editTask');
    appendTextbox('Priority ', 'editTask');
    appendTextbox('Notes ', 'editTask');
    document.getElementById('Project ').value = toDos[content].project;
    document.getElementById('Title ').value = toDos[content].title;
    document.getElementById('Description ').value = toDos[content].description;
    document.getElementById('Due Date ').value = toDos[content].dueDate;
    document.getElementById('Priority ').value = toDos[content].priority;
    document.getElementById('Notes ').value = toDos[content].notes;
    appendButton('Submit Changes', 'editTask');
   document.getElementById('Submit Changes').onclick = function() {updateToDos(content, document.getElementById('Project ').value, document.getElementById('Title ').value, document.getElementById('Description ').value, document.getElementById('Due Date ').value, document.getElementById('Priority ').value, document.getElementById('Notes ').value)};
}

function updateToDos(content, project, title, description, dueDate, priority, notes) {
    toDos[content].project = project;
    toDos[content].title = title;
    toDos[content].description = description;
    toDos[content].priority = priority;
    toDos[content].dueDate = dueDate;
    toDos[content].notes = notes;
    removeDiv('editTask');
}