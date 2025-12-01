import * as statusController from "../controllers/statusController";
import { Router } from "express";

const router = Router();

router.get("/", statusController.getAllStatus);

export default router;