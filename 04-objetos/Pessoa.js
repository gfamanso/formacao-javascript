class Pessoa {
    nome;
    peso;
    altura;
    idade;
    
    constructor (nome, peso, altura, idade) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
        this.idade = idade;

    }

    calcularIMC() {
        const imc = this.peso / Math.pow(this.altura, 2);
        return imc
    }

    classificarIMC() {
        const imc = this.calcularIMC();
        if (imc < 18.5) {
            return 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 25) {
            return ('Peso Normal')
        } else if (imc >= 25 && imc < 30) {
            return ('Acima do peso')
        }  else if (imc >= 30 && imc < 40) {
            return ('Obeso')
        }  else {
            return ('Obesidade Grave')
        } 
    }
    
    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos.`);
        console.log(`O IMC calculado para ${this.nome} foi de ${this.calcularIMC().toFixed(2)}.`);
        console.log(`Para ${this.peso} kg e altura ${this.altura} m, o IMC calculado é igual a ${this.calcularIMC().toFixed(1)} e corresponde a: ${this.classificarIMC()}.`);
    }
}

const jose = new Pessoa('José', 175, 1.75, 30);
// jose.nome = 'José';
// jose.idade = 30;

const maria = new Pessoa ('Maria', 52, 1.50, 28);
maria.nome = 'Maria';
maria.idade = 28;
console.log(jose);
jose.descrever();
console.log(`IMC = ${jose.calcularIMC().toFixed(2)}.`);
console.log(jose.classificarIMC());
console.log(maria);
maria.descrever();
console.log(`IMC = ${maria.calcularIMC().toFixed(2)}.`);
console.log(maria.classificarIMC());
