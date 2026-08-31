function escreverNome (nome) {
    return 'Meu nome é: ' + nome;
    
}

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log(escreverNome ('Gabriel')+ '. ' + 'Maior de idade.');
    } else {
        console.log(escreverNome ('Gabriel')+ '. ' + 'Menor de idade.');
    }
}
verificarIdade(30);