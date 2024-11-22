import { Router } from "express";
import FilmeController from "../controller/FilmeController.js";

const router = Router();

router.get("/filmes", FilmeController.findAll);
router.post("/filmes", FilmeController.criar);
router.get("/filmes/:id", FilmeController.findById),
router.put("/filmes/:id", FilmeController.atualizar),
router.delete("/filmes/:id", FilmeController.deletar);

export default router;