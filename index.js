import express from "express";
import {
  getAllPokemons,
  searchPokemonByName,
  searchPokemonByNameAndType,
  searchPokemonByType,
} from "./src/controllers/pokemonController.js";

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello! You found me!");
});

app.get("/pokemon/search/nameAndType/:partialName/:type", searchPokemonByNameAndType);
app.get("/pokemon/search/name/:partialName", searchPokemonByName);
app.get("/pokemon/search/type/:type", searchPokemonByType);
app.get("/pokemons", getAllPokemons);

const port = process.env.PORT ?? 4000;

app.listen(port, () => console.log(`Server is listening on port: ${port}`));
