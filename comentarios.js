var listElement = document.querySelector('#sgt ul');
var inputElement = document.querySelector('#sgt input');
var buttonElement = document.querySelector('#sgt button');

var comentarios = [
    'TESTE 1',
    'TESTE 2',
    'TESTE 3',
];

function rendercomentarios() {
    listElement.innerHTML = '';

    for (comentario of comentarios) {
        var comentarioElement = document.createElement('li');
        var comentarioText = document.createTextNode(comentario);

        comentarioElement.appendChild(comentarioText);
        listElement.appendChild(comentarioElement);

    }
}

rendercomentarios();

function addcomentario() {
    var comentarioText = inputElement.value;

    comentarios.push(comentarioText);
    inputElement.value = '';
    rendercomentarios();
}

buttonElement.onclick = addcomentario;