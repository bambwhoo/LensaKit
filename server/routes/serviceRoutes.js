import express from "express";
import {
  getServices,
  getServiceById,
  createService,
  deleteService,
} from "../controllers/serviceController.js";

const router = express.Router();

router.get("/", getServices);
router.get("/:id", getServiceById);
router.post("/", createService);
router.delete("/:id", deleteService);

export default router;
