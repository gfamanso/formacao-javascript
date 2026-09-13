const abas = document.querySelectorAll(".aba");

const conteudos = document.querySelectorAll(".conteudo-aba");

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

