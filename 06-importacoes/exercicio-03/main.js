// 2) Faça um programa que receba N (quantidade de números) e seus respectivos valores.
// Imprima o maior número par e o menor número impar.

//     Exemplo:
//         Entrada:
//             5
//             3
//             4
//             1
//             10
//             8

//         Saída:
//             Maior número par: 10
//             Menor número impar: 1


const {gets, print, getsQuantidade} = require('./funcoes-auxiliares');
const n = getsQuantidade();
let listaPar = [];
let listaImpar = [];

for (let i = 0; i < n; i++) {
    const numeroEscolhido = gets();
    if(numeroEscolhido % 2 === 0) {
        listaPar.push(numeroEscolhido);
    } else if (numeroEscolhido % 2 !== 0) {
        listaImpar.push(numeroEscolhido);
    }

}

const maiorValorPar = Math.max(...listaPar);
const menorValorImpar = Math.min(...listaImpar);

print(`Lista de números pares: ${listaPar}`);
print(`Maior valor da lista de números pares: ${maiorValorPar}`);
print(`Lista de números ímpares: ${listaImpar}`);
print(`Menor valor da lista de números ímpares: ${menorValorImpar}`);
print(`Quantidade de números: ${n}`);