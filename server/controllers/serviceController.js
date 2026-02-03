import db from "../db/connection.js";

// GET ALL
export const getServices = (req, res) => {
  db.query("SELECT * FROM service ORDER BY id DESC", (err, results) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json(results);
  });
};

// GET BY ID
export const getServiceById = (req, res) => {
  db.query(
    "SELECT * FROM service WHERE id = ?",
    [req.params.id],
    (err, results) => {
      if (err) return res.status(500).json({ message: err.message });
      res.json(results[0]);
    }
  );
};

// CREATE
export const createService = (req, res) => {
  const { title, image } = req.body;
  db.query(
    "INSERT INTO service (title, image) VALUES (?, ?)",
    [title, image],
    (err) => {
      if (err) return res.status(500).json({ message: err.message });
      res.json({ message: "Service berhasil ditambahkan" });
    }
  );
};

// DELETE
export const deleteService = (req, res) => {
  db.query(
    "DELETE FROM service WHERE id = ?",
    [req.params.id],
    (err) => {
      if (err) return res.status(500).json({ message: err.message });
      res.json({ message: "Service berhasil dihapus" });
    }
  );
};
