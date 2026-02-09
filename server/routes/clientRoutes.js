import express from "express";
import upload from "../middlewares/upload.js";
import {
  getClients,
  createClient,
  updateClient,
  deleteClient,
} from "../controllers/clientController.js";

const router = express.Router();

router.get("/", getClients);
router.post("/", upload.single("logo"), createClient);
router.put("/:id", upload.single("logo"), updateClient);
router.delete("/:id", deleteClient);

export default router;
