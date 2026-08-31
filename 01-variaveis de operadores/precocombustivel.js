const precoCombustivel = 6.89;
const mediaConsumoCarro = 13;
const distanciaPercorrida = 1580;
const litrosConsumidos = distanciaPercorrida / mediaConsumoCarro;
const totalGasto = litrosConsumidos * precoCombustivel;

console.log(`Para percorrer 100 km foram gastos ${litrosConsumidos.toFixed(2)} litros de combustíveis a R$ ${precoCombustivel.toFixed(2)} o litro, totalizando R$ ${totalGasto.toFixed(2)}`);
// console.log(totalGasto);