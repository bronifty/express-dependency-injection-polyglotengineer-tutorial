// apiroutes.js
import { Router } from "express";
import { vehicles, planets, starships } from "./requesthandlers.js";

const router = Router();

router.get("/vehicles", vehicles);
router.get("/planets", planets);
router.get("/starships", starships);

export default router;
