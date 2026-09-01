class Pessoa {
    nome;
    idade;
    dataNascimento;
    
    constructor(nome, idade, dataNascimento) {
        this.nome = nome;
        this.idade = idade;
        this.dataNascimento = dataNascimento;
    }

    
   
}

function compararIdades(p1, p2) {
        if(p1.idade > p2.idade) {
            console.log(`${p1.nome} é mais velho(a) que ${p2.nome}.`);
        }
        else if(p1.idade < p2.idade) {
            console.log(`${p1.nome} é mais novo(a) que ${p2.nome}.`);
        }
        if(p1.idade === p2.idade) {
            console.log(`${p1.nome} e ${p2.nome} tem a mesma idade.`);
        }
    }

const gabriel = new Pessoa('Gabriel', 30);
const maria = new Pessoa ('Maria', 28);

console.log(gabriel);
console.log(maria);

compararIdades(gabriel, maria);
