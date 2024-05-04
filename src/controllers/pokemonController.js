import PokemonService from "../services/PokemonService.js";

class PokemonController {
  async searchPokemonByName(req, res) {
    const { partialName } = req.params;

    try {
      const pokemons = await PokemonService.findByName(partialName);
      res.json(pokemons);
    } catch (error) {
      console.error("Error searching Pokémon by name:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async searchPokemonByNameAndType(req, res) {
    const { partialName, type } = req.params;

    try {
      const pokemons = await PokemonService.findByNameAndType(partialName, type);
      res.json(pokemons);
    } catch (error) {
      console.error("Error searching Pokémon by name and type:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async searchPokemonByType(req, res) {
    const { type } = req.params;

    try {
      const pokemons = await PokemonService.findByType(type);
      res.json(pokemons);
    } catch (error) {
      console.error("Error searching Pokémon by name and type:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async getAllPokemons(req, res) {
    try {
      const pokemons = await PokemonService.findAll();
      res.json(pokemons);
    } catch (error) {
      console.error("Error getting all Pokémon:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

export default PokemonController;