export function createHeader1(text){
    const content = document.createElement('h1');
    content.textContent = text;
    return content;
}

export function appendHeader1(element, idName) {
    const content = document.querySelector('#' + idName);
    content.appendChild(createHeader1(element));
}

export function createParagraph(text){
    const content = document.createElement('p');
    content.textContent = text;
    return content;
}

export function appendParagraph(text, id) {
    const content = document.querySelector('#' + id);
    content.appendChild(createParagraph(text));
}

export function createDiv (idName) {
    const content = document.createElement('div');
    content.id = idName;
    document.body.appendChild(content);
}

export function createButton(text){
    const button = document.createElement('button');
    button.textContent = text;
    button.id = text;
    return button;
}

export function appendButton(text, id){
    const content = document.querySelector('#' + id);
    content.append(createButton(text));
}

export function appendForm(formName, idName){
    const content = document.createElement('form');
    content.id = formName;
    document.querySelector('#' + idName).appendChild(content);
}

export function appendTextbox(textName, idName){
    const content = document.createElement('input');
    const label = document.createElement('lable');
    label.textContent = textName;
    content.setAttribute('type', 'text');
    content.setAttribute('value', "");
    content.id = textName;
    document.querySelector('#' + idName).appendChild(label);
    document.querySelector('#' + idName).appendChild(content);
}

export function addLineBreak(id) {
    const content = document.createElement('br');
    document.querySelector('#' + id).appendChild(content);
}

export function removeDiv(id) {
    const content = document.getElementById(id);
    content.remove();
}