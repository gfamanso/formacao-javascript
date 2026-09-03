// 1) Faça um programa que receba a média de um aluno.
// Caso a média seja < 5 imprima "Reprovado"
// Caso a média seja >= 5 e < 7 imprima "Recuperação"
// Caso a média seja >= 7 imprima "Aprovado"

//     Exemplo:
//         Entrada:
//             5.5
//         Saída:
//             Recuperação

const { gets, print } = require('./funcoes-auxiliares');
const media = gets();

if (media < 5) {
    print('Reprovado');
    print(`Média do aluno: ${media}`);
} else if (media >= 5 && media < 7) {
    print('Recuperação');
    print(`Média do aluno: ${media}`);
} else {
    print('Aprovado');
    print(`Média do aluno: ${media}`);
}