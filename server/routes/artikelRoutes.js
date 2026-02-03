import express from "express";
import { getArtikels, createArtikel, deleteArtikel, updateArtikel } from "../controllers/artikelController.js";

const router = express.Router();

router.get("/", getArtikels);
router.post("/", createArtikel);
router.delete("/:id", deleteArtikel);
router.put("/:id", updateArtikel);

export default router;
