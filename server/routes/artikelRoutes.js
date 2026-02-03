import express from "express";
import {
  getArtikel,
  createArtikel,
  updateArtikel,
  deleteArtikel,
} from "../controllers/artikelController.js";

const router = express.Router();

router.get("/", getArtikel);
router.post("/", createArtikel);
router.put("/:id", updateArtikel);
router.delete("/:id", deleteArtikel);

export default router;
