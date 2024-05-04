import { filterPokemonsByPartialName } from '../utils/pokemonUtils.js';

class PokemonService {
  async findByName(partialName) {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000000');
    const json = await response.json();
    return filterPokemonsByPartialName(json.results, partialName);
  }

  async findByType(type) {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${type}?limit=1000000`);
    const json = await response.json();
    return json.pokemon.map(pokemon => pokemon.pokemon);
  }

  async findByNameAndType(partialName, type) {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${type}?limit=1000000`);
    const json = await response.json();
    const pokemons = json.pokemon.map(pokemon => pokemon.pokemon);
    return filterPokemonsByPartialName(pokemons, partialName);
  }

  async findAll() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000000');
    const json = await response.json();
    return json.results;
  }
}

export default new PokemonService();
