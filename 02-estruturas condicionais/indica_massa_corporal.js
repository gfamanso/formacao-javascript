const peso = 75;
const altura = 1.75;
const IMC = peso / Math.pow(altura,2);
// const IMC = peso / (altura * altura);

console.log (`Para ${peso} kg e altura ${altura} m, o IMC calculado é igual a ${IMC.toFixed(1)} e corresponde a:`)
if (IMC < 18.5) {
    console.log ('Abaixo do peso')
} else if (IMC >= 18.5 && IMC < 25) {
    console.log ('Peso Normal')
} else if (IMC >= 25 && IMC < 30) {
    console.log ('Acima do peso')
}  else if (IMC >= 30 && IMC < 40) {
    console.log ('Obeso')
}  else {
    console.log ('Obseidade Grave')
} 