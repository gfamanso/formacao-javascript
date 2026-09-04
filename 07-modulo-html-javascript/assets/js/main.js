const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function convertPokemonToLi(pokemon) {
    return `
    
        <li class="pokemon">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    <li class="type">Grass</li>
                    <li class="type">Poison</li>
                </ol>

            <img src="./assets/images/001Bulbasaur.png" alt="${pokemon.name}">
            </div>
        </li >
    `
}

const pokemonList = document.getElementById('pokemonList')
// pokemonList.innerHTML += '<li>Teste</li>'

fetch(url)
    // .then(function (response) {
    //     // console.log(response)
    //     response
    //     .json()
    //     .then(function (responseBody) {
    //         console.log(responseBody)
    //     })
    // .then(function (response) {
    //     return response.json()
    // })
    // .then(function (jsonBody) {
    //     console.log(jsonBody)
    // })
    // .catch(function (error) {
    //     console.error(error)
    // })
    // .finally(function () {
    //     console.log('Requisição concluída!')
    // })

    // Arrow function
    // .then((response) => response.json())
    // .then((jsonBody) => jsonBody.results)
    pokeApi.getPokemons()
    .then((pokedex) => {
        const listItems = []
        for (let i = 0; i < pokedex.length; i++) {
            const pokemon = pokedex[i];
            listItems.push(convertPokemonToLi(pokemon))
        }

        console.log(listItems)
    })
    .catch((error) => console.error(error))
    .finally(() => console.log('Requisição concluída!'))
