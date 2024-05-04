export const filterPokemonsByPartialName = (pokemonList, partialName) => {
  return pokemonList.filter(pokemon => pokemon.name?.includes(partialName.toLowerCase()));
};
