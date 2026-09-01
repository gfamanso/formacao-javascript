

const notas = [];
notas.push(10);
notas.push(7);
notas.push(8);
notas.push(5);
notas.push(9);

let soma = null;
for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
    console.log(`A nota ${i + 1} é ${notas[i]}.`);
    console.log(`A soma das notas até agora é ${soma}.`);
    console.log(`A média das notas até agora é ${soma / (i + 1)}.`);
}