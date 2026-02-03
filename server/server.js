import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./db/connection.js";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// contoh route awal
app.get("/", (req, res) => {
res.json({ message: "API berhasil berjalan 🚀" });
});

// routes
app.use("/admin", adminRoutes);

// jalankan server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});