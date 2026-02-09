// routes/galleryRoutes.js
import express from "express";
import upload from "../middlewares/upload.js";
import {
  getGalleries,
  createGallery,
  updateGallery,
  deleteGallery,
} from "../controllers/galleryController.js";

const router = express.Router();

router.get("/", getGalleries);
router.post("/", upload.single("image"), createGallery);
router.put("/:id", upload.single("image"), updateGallery);
router.delete("/:id", deleteGallery);

export default router;
