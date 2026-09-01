let nome = 'Maria de Jesus Vitória da Silva';
let nomeSemEspacos = nome.replace(/\s+/g, '');
console.log(nomeSemEspacos);
console.log(`O nome ${nome} tem ${nomeSemEspacos.length} letras.`);

for (let i = 0; i < nomeSemEspacos.length; i++) {
    console.log(`O caracter na posição ${i} é ${nomeSemEspacos[i]}.`);
}