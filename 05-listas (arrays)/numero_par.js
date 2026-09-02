const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numeros.length; i++) {
    // let numero = numeros[i];
    // console.log(numeros[i]);

    if (numeros[i] % 2 === 0) {
        console.log(`O número ${numeros[i]} é par.`);
    } else {
        console.log(`O número ${numeros[i]} é ímpar.`);
    }
}