

const listaNumeros = [5, 3, 4, 1, 10, 8, 7, 2, 6, 9];
const n = listaNumeros.length;
let i = 0;


function gets() {
    const numeroEscolhido = listaNumeros[i];
    i++;
    return numeroEscolhido;
}

function print(mensagem) {
    console.log(mensagem);
}

function getsQuantidade() {
    return n;
}

module.exports = { gets, print, getsQuantidade };