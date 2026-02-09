import express from "express";
import upload from "../middlewares/upload.js";
import {
  getArtikel,
  createArtikel,
  updateArtikel,
  deleteArtikel,
} from "../controllers/artikelController.js";

const router = express.Router();

router.get("/", getArtikel);
router.post("/", upload.single("thumbnail"), createArtikel);
router.put("/:id", upload.single("thumbnail"), updateArtikel);
router.delete("/:id", deleteArtikel);

export default router;
