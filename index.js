import express from "express";
import cors from "./src/middlewares/cors.js";
import router from "./src/routes.js";

const app = express();

app.use(express.json());
app.use(cors);
app.use(router);

const port = process.env.PORT ?? 4000;

app.listen(port, () => console.log(`Server is listening on port: ${port}`));
