import * as usuariosController from "../controllers/usuariosController.js";
import { Router } from "express";

const router = Router();

router.get("/", usuariosController.getAllUsuarios);
router.get("/:id", usuariosController.getUsuariosById);

export default router;