// const {gets, print} = require('./sortear-numero.js');


// const numerosSorteados = [];

// for (let i = 0; i < 5; i++) {
//     const numeroEscolhido = gets();
//     numerosSorteados.push(numeroEscolhido);
// }

// let maiorNumero = 0;
// let menorNumero = 0;

// for (let i = 0; i < 5; i++) {
//     const numeroAtual = numerosSorteados[i];
//     if (numeroAtual > maiorNumero) {
//         maiorNumero = numeroAtual;
//     }

// for (let i = 0; i < 5; i++) {
//     const menorAtual = numerosSorteados[i];
//     if (menorAtual < menorNumero) {
//         menorNumero = menorAtual;
//     }
// }
// }

// console.log(`Lista de números sorteados: ${numerosSorteados}`);
// console.log(`Maior número da lista: ${maiorNumero}`);
// console.log(`Menor número da lista: ${menorNumero}`);

const {gets, getQuantidadeNumeros, print} = require('./sortear-numero.js');
const quantidadeNumeros = getQuantidadeNumeros();
let maiorNumero = -Infinity;
let menorNumero = Infinity;
console.log(quantidadeNumeros);

for (let i = 0; i < quantidadeNumeros; i++) {
    const numeroEscolhido = gets();

    if (numeroEscolhido > maiorNumero) {
        maiorNumero = numeroEscolhido;
    }

    if (numeroEscolhido < menorNumero) {
        menorNumero = numeroEscolhido;
    }
}

console.log(`Quantidade de números na lista: ${quantidadeNumeros}`);
console.log(`Lista de números sorteados: ${menorNumero}, ${maiorNumero}`);
console.log(`Maior número da lista: ${maiorNumero}`);
console.log(`Menor número da lista: ${menorNumero}`);



