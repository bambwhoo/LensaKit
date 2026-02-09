import express from "express";
import {
  getGalleries,
  getGalleryById,
  createGallery,
  deleteGallery,
  updateGallery
} from "../controllers/galleryController.js";

const router = express.Router();

// PUBLIC (dipakai Home)
router.get("/", getGalleries);
router.get("/:id", getGalleryById);

// ADMIN
router.post("/", createGallery);
router.put("/:id", updateGallery);
router.delete("/:id", deleteGallery);

export default router;
