// 3) Faça um programa que calcule e imprima o salário salário a ser transferido para um funcionário.
// Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios.
// O salário salário a ser transferido é calculado da seguinte maneira: 
   
//    valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional dos benefícios

// Para calcular o percentual de imposto segue as aliquotas:

//     De R$ 0.00 a R$ 1100.00 = 5.00%
//     De R$ 1100.01 a R$ 2500.00 = 10.00%
//     Maior que R$ 2500.00 = 15.00%

//     Exemplo:
//         Entrada:
//             2000
//             250

//         Saída:
//             2050.00
const {gets, print} = require('./funcoes-auxiliares.js');
const { salarioBruto, beneficio } = gets();
let desconto = null;  

if (0 <= salarioBruto && salarioBruto <= 1100) {
    desconto = salarioBruto * 0.05;
} else if (1100.01 <= salarioBruto && salarioBruto <= 2500) {
    desconto = salarioBruto * 0.10;
} else {
    desconto = salarioBruto * 0.15;
}

const salarioLiquido = salarioBruto - desconto + beneficio;

print(`Calculo realizao para o salário bruto: R$ ${salarioBruto.toFixed(2)}.`);
print(`Calculo realizao para o adicional dos benefícios: R$ ${beneficio.toFixed(2)}.`);
print(`Calculo realizao para o desconto do imposto: R$ ${desconto.toFixed(2)}.`);
print(`Salário a ser transferido: R$ ${salarioLiquido.toFixed(2)}.`);