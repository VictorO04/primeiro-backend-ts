import * as usuariosController from "../controllers/usuariosController.js";
import { Router } from "express";

const router = Router();

router.get("/", usuariosController.getAllUsuarios);

export default router;