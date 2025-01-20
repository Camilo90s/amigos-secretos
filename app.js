
let amigos = [];
let amigosQueFueronSorteados = [];

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    if ( nombre === '' ) {
        alert('Por favor, inserte un nombre.')
    } else {
        
        amigos.push(nombre);
        mostrarAmigos();
    }
    document.getElementById('amigo').value = '';
    return;
}

function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for ( let i = 0; i < amigos.length; i++ ) {
        let nuevoLi = document.createElement('li');
        let textoLi = document.createTextNode(amigos[i]);
        nuevoLi.appendChild(textoLi);
        lista.appendChild(nuevoLi);
    }
}

function sortearAmigo() {
    if (amigos.length <= 1) {
        alert('Deebes añadir al menos dos nombres');
    } else {
        let posicionAleatoria = Math.floor(Math.random()*amigos.length);
        let nombreSorteado = amigos[posicionAleatoria];
        let elementoHtml = document.getElementById('resultado');
        elementoHtml.innerHTML = `Tu amigo secreto es ${nombreSorteado}`;
        let lista = document.getElementById('listaAmigos');
        lista.innerHTML = '';
        amigos = [];
    }
}
