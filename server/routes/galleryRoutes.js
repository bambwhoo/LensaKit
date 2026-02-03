import express from "express";
import {
  getGalleries,
  getGalleryById,
  createGallery,
  deleteGallery,
} from "../controllers/galleryController.js";

const router = express.Router();

// PUBLIC (dipakai Home)
router.get("/", getGalleries);
router.get("/:id", getGalleryById);

// ADMIN
router.post("/", createGallery);
router.delete("/:id", deleteGallery);

export default router;
