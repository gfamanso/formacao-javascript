const abas = document.querySelectorAll(".aba");

const conteudos = document.querySelectorAll(".conteudo-aba");

const preenchimentos = document.querySelectorAll(".preenchimento");

const valores = [45, 49, 49, 65, 65, 45];

console.log(preenchimentos[0].parentElement.parentElement.dataset.valor);

valores.forEach(function (valor, index) {
    preenchimentos[index].style.width = valor + "%";
});



abas.forEach(function (aba, index) {
    aba.addEventListener("click", function () {

        conteudos.forEach(function (conteudo) {
            conteudo.classList.remove("ativo");
        });

        conteudos[index].classList.add("ativo");

        abas.forEach(function (aba) {
            aba.classList.remove("aba-ativa");
        });

        aba.classList.add("aba-ativa");
    });
});

console.log(preenchimentos);

