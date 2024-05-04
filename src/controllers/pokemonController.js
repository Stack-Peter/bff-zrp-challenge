import {
  findByName,
  findByNameAndType,
  findByType,
  findAll,
} from "../services/pokemonService.js";

export const searchPokemonByName = async (req, res) => {
  const { partialName } = req.params;

  try {
    const pokemons = await findByName(partialName);
    res.json(pokemons);
  } catch (error) {
    console.error("Error searching Pokémon by name:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const searchPokemonByNameAndType = async (req, res) => {
  const { partialName, type } = req.params;

  try {
    const pokemons = await findByNameAndType(partialName, type);
    res.json(pokemons);
  } catch (error) {
    console.error("Error searching Pokémon by name and type:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const searchPokemonByType = async (req, res) => {
  const { type } = req.params;

  try {
    const pokemons = await findByType(type);
    res.json(pokemons);
  } catch (error) {
    console.error("Error searching Pokémon by name and type:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getAllPokemons = async (req, res) => {
  try {
    const pokemons = await findAll();
    res.json(pokemons);
  } catch (error) {
    console.error("Error getting all Pokémon:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
