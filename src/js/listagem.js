const listaPokemons = document.querySelectorAll('.pokemon');
const cartaoPokemon = document.querySelectorAll('.cartao-pokemon');

listaPokemons.forEach(pokemon =>{
    pokemon.addEventListener('click', ()=>{
        const cartaoPokemonAberto = document.querySelector('.aberto');
        cartaoPokemonAberto.classList.remove('aberto');
        
        
        const idDoPokemonSelecionado = pokemon.attributes.id.value;

        const idDoCartaoSelecionado = `cartao-${idDoPokemonSelecionado}`;
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoSelecionado);
        cartaoPokemonParaAbrir.classList.add('aberto');
        
        const pokemonAtivoNaListagem =  document.querySelector('.ativo');
        pokemonAtivoNaListagem.classList.remove('ativo');

        const pokemonSelecionadoNaListagem = document.getElementById(idDoPokemonSelecionado);
        pokemonSelecionadoNaListagem.classList.add('ativo');
    });
});