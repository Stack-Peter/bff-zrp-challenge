import { filterPokemonsByPartialName } from '../utils/pokemonUtils.js';

export const findByName = async (partialName) => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000000');
  const json = await response.json();
  return filterPokemonsByPartialName(json.results, partialName);
};

export const findByType = async (type) => {
  const response = await fetch(`https://pokeapi.co/api/v2/type/${type}?limit=1000000`);
  const json = await response.json();
  return json.pokemon.map(pokemon => pokemon.pokemon);
};

export const findByNameAndType = async (partialName, type) => {
  const response = await fetch(`https://pokeapi.co/api/v2/type/${type}?limit=1000000`);
  const json = await response.json();
  const pokemons = json.pokemon.map(pokemon => pokemon.pokemon);
  return filterPokemonsByPartialName(pokemons, partialName);
};

export const findAll = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000000');
  const json = await response.json();
  return json.results;
}
