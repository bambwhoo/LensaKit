import express from "express";
import {
  getArtikel,
  createArtikel,
  deleteArtikel,
} from "../controllers/artikelController.js";

const router = express.Router();

router.get("/", getArtikel);
router.post("/", createArtikel);
router.delete("/:id", deleteArtikel);

export default router;
