import {Router} from 'express';
import PokemonController from './controllers/PokemonController.js';

const router = Router();

const controller = new PokemonController()

router.get("/search/nameAndType/:partialName/:type", controller.searchPokemonByNameAndType);
router.get("/search/name/:partialName", controller.searchPokemonByName);
router.get("/search/type/:type", controller.searchPokemonByType);
router.get("/pokemons", controller.getAllPokemons);

export default router;