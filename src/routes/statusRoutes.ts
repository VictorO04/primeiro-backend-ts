import * as statusController from "../controllers/statusController.js";
import { Router } from "express";

const router = Router();

router.get("/", statusController.getAllStatus);
router.get("/:id", statusController.getStatusById);

export default router;