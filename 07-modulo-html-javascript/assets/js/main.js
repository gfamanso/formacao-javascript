const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const maxRecords = 151;
const limit = 10;
let offset = 0;

function convertPokemonToLi(pokemon) {
    return `
    
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

            <img src="${pokemon.image}" alt="${pokemon.name}">
            </div>
        </li >
    `
}

function loadPokemonItems(offset, limit){
    // pokemonList.innerHTML += '<li>Teste</li>'

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
    pokeApi.getPokemons(offset, limit).then((pokedex = []) => {
        const newHtml = pokedex.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml

        // pokemonList.innerHTML += pokedex.map(convertPokemonToLi).join('')

            // const pokemonList = []
            // for (let i = 0; i < pokedex.length; i++) {
            //     const pokemon = pokedex[i];
            //     pokemonList.push(convertPokemonToLi(pokemon))
            // }

            // console.log(pokemonList)
        })
}

loadPokemonItems(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItems(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItems(offset, limit)
    }
})