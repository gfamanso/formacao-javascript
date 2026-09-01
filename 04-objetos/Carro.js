class Carro {
    fabricante;
    cor;
    consumo;

    constructor (fabricante, cor, consumo) {
        this.fabricante = fabricante;
        this.cor = cor;
        this.consumo = consumo;
    }

     calcularGasto (percurso, precoCombustivel) {
        const custoPercurso = (percurso / this.consumo) * precoCombustivel;
        return custoPercurso
        
    }
}

   

const uno = new Carro('Uno', 'branco', 15);
console.log(uno.calcularGasto(100, 6.89).toFixed(2));
const sandero = new Carro('Sandero', 'cinza', 11);
console.log(sandero.calcularGasto(100, 6.89).toFixed(2));
// console.log(`O custo para percorrer o trajeto de ${percurso} km foi de ${calcularGasto}`)