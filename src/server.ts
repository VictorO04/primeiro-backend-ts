import express from "express";
import dotenv from "dotenv";
import usuariosRoutes from "./routes/usuariosRoutes";

const app = express();
app.use(express.json());

dotenv.config();
const serverPort = process.env.PORT;

app.get("/", (req, res) => {
    res.send("As rotas são: /usuarios");
});

app.use("/usuarios", usuariosRoutes);

app.listen(serverPort, () => {
    console.log(`--- http://localhost:${serverPort}`);
});