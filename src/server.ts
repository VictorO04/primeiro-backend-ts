import express from "express";
import dotenv from "dotenv";
import usuariosRoutes from "./routes/usuariosRoutes";
import statusRoutes from "./routes/statusRoutes";

const app = express();
app.use(express.json());

dotenv.config();
const serverPort = process.env.PORT;

app.get("/", (req, res) => {
    res.send("As rotas são: /usuarios /status");
});

app.use("/usuarios", usuariosRoutes);
app.use("/status", statusRoutes);

app.listen(serverPort, () => {
    console.log(`--- http://localhost:${serverPort}`);
});