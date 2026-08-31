// const condicaoPagamento = 'Debito';
const condicaoPagamento = 'Dinheiro';
// const condicaoPagamento = '2x';
// const condicaoPagamento = '8x';
const precoProduto = 942.99;
let precoFinal = null;

console.log (`A condição de pagamento escolhida foi: ${condicaoPagamento}.`);

if (condicaoPagamento === 'Debito') {
    precoFinal = precoProduto * 0.9
    console.log (`O valor final a ser pago é R$ ${precoFinal.toFixed(2)}.`);
} else if (condicaoPagamento === 'Dinheiro') {
    precoFinal = precoProduto * 0.85
    console.log (`O valor final a ser pago é R$ ${precoFinal.toFixed(2)}.`);
} else if (condicaoPagamento === '2x') {
    precoFinal = precoProduto
    console.log (`O valor final a ser pago é R$ ${precoFinal.toFixed(2)}.`);
} else {
    precoFinal = precoProduto * 1.1
    console.log (`O valor final a ser pago é R$ ${precoFinal.toFixed(2)}.`);
}