/*
Faça um programa que receba a quantidade de números e seus respectivos valores. 
Imprima o maior e o menor número deste conjunto.

Exemplo:
    Entrada:
        4
        100
        150
        90
        200

    Saída:
        Maior número: 200
        Menor número: 90
*/

const numerosEntrada = [4, 100, 150, 90, 200, 500];
let i = 0;


function gets () {
    const valor = numerosEntrada[i];
    i++;
    return valor; 
}

function getQuantidadeNumeros() {
    return numerosEntrada.length;
}

function print (maior, menor) {
    console.log(`Maior número: ${maior}`);
    console.log(`Menor número: ${menor}`);
}

// module.exports.gets = gets;
module.exports = {
    gets,
    getQuantidadeNumeros,
    print
};
