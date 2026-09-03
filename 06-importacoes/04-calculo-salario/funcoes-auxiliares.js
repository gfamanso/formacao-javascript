
function gets (salarioBruto, beneficio) {
    salarioBruto = 6000;
    beneficio = 250;
    return { salarioBruto, beneficio };
}

function print (texto) {
    console.log(texto);
}

// module.exports.gets = gets;
module.exports = {
    gets,
    print
};