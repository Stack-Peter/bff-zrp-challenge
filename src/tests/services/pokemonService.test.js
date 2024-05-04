// Import the PokemonService class
import PokemonService from '../../services/PokemonService.js';

describe('PokemonService', () => {
  describe('findByName', () => {
    it('should return an array of pokemons matching the partial name', async () => {
      const partialName = 'charizard';
      const result = await PokemonService.findByName(partialName);
      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
    });
  });

  describe('findByType', () => {
    it('should return an array of pokemons of the given type', async () => {
      const type = 'fire';
      const result = await PokemonService.findByType(type);
      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
    });
  });

  describe('findByNameAndType', () => {
    it('should return an array of pokemons matching the partial name and type', async () => {
      const partialName = 'char';
      const type = 'fire';
      const result = await PokemonService.findByNameAndType(partialName, type);
      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
    });
  });

  describe('findAll', () => {
    it('should return an array of all pokemons', async () => {
      const result = await PokemonService.findAll();
      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
    });
  });
});
