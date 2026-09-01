class Pessoa {
    nome;
    idade;
    
    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}.`);

    }
}

const gabriel = new Pessoa();
gabriel.nome = 'Gabriel';
gabriel.idade = 30;

const maria = new Pessoa ();
maria.nome = 'Maria';
maria.idade = 28;

gabriel.descrever();
maria.descrever();