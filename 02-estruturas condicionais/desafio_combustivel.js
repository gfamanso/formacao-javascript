// Faça um programa para calcular o valor de uma viagem.

// Você terá 3 variáveis. Sendo:
// 1 - Preço do etanol;
// 2 - Preço da gasolina;
// O tipo de combustível que está no seu carro;
// 4 - Gasto médio de combustível do carro por km;
// 5 - Distância em km da viagem.

// Imprima no console o valor que será gasto para realizar esta viagem.

const precoGasolina = 6.89;
const precoEtanol = 4.89;
const mediaConsumoGasolina = 13;
const mediaConsumoEtanol = 10;
const distanciaPercorrida = 1580;

console.log('Qual combustível foi utilizado?')
// let combustivelUtilizado = 'etanol';
let combustivelUtilizado = 'gasolina';

console.log(combustivelUtilizado);
if (combustivelUtilizado === 'etanol') {
    const litrosConsumidos = distanciaPercorrida / mediaConsumoEtanol;
    const totalGasto = litrosConsumidos * precoEtanol;
    console.log(`O total gasto utilizando ${combustivelUtilizado} foi de R$ ${totalGasto.toFixed(2)}.`);
}else {
    const litrosConsumidos = distanciaPercorrida / mediaConsumoGasolina;
    const totalGasto = litrosConsumidos * precoGasolina;
    console.log(`O total gasto utilizando ${combustivelUtilizado} foi de R$ ${totalGasto.toFixed(2)}.`);
}