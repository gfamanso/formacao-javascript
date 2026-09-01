function aplicarDesconto (valor, taxa) {
    return valor * (1 - taxa / 100)
}
function aplicarAcrescimo (valor, taxa) {
    return valor * (1 + taxa / 100)    
}
function aplicarSemTaxa (valor) {
    return valor    
}

const condicaoPagamento = 3;
const valor = 1499.99;

if (condicaoPagamento === 1) {
    console.log('Forma: Débito. O valor final a ser pago é R$ ' + aplicarDesconto(valor, 10).toFixed(2));
} else if (condicaoPagamento === 2) {
    console.log('Forma: Dinheiro. O valor final a ser pago é R$ ' + aplicarDesconto(valor, 15).toFixed(2));
} else if (condicaoPagamento === 3) {
    console.log('Forma: 2x. O valor final a ser pago é R$ ' + aplicarSemTaxa(valor).toFixed(2));
} else if  (condicaoPagamento === 4) {
    console.log('Forma: mais de 2x. O valor final a ser pago é R$ ' + aplicarAcrescimo (valor, 10).toFixed(2));
} else {
    console.log ('Forma de pagamento inválida. Escolha outra opção.');
}



