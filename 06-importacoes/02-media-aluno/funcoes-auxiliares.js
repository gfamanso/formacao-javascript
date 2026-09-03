

const notasAluno = [5.5];
let i = 0;

function gets() {
    const notaAluno = notasAluno[i]
    i++;
    return notaAluno;
}

function print(mensagem) {
    console.log(mensagem);
}

module.exports = { gets, print };