import db from "../db/connection.js";

// GET ALL
export const getGalleries = (req, res) => {
  db.query("SELECT * FROM gallery ORDER BY id DESC", (err, rows) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json(rows);
  });
};

// GET BY ID
export const getGalleryById = (req, res) => {
  db.query(
    "SELECT * FROM gallery WHERE id = ?",
    [req.params.id],
    (err, rows) => {
      if (err) return res.status(500).json({ message: err.message });
      res.json(rows[0]);
    }
  );
};

// CREATE
export const createGallery = (req, res) => {
  const { title, image } = req.body;
  db.query(
    "INSERT INTO gallery (title, image) VALUES (?, ?)",
    [title, image],
    (err, result) => {
      if (err) return res.status(500).json({ message: err.message });
      res.json({ message: "Gallery berhasil ditambahkan", id: result.insertId });
    }
  );
};

// DELETE
export const deleteGallery = (req, res) => {
  db.query(
    "DELETE FROM gallery WHERE id = ?",
    [req.params.id],
    (err, result) => {
      if (err) return res.status(500).json({ message: err.message });
      if (result.affectedRows === 0)
        return res.status(404).json({ message: "Gallery tidak ditemukan" });
      res.json({ message: "Gallery berhasil dihapus" });
    }
  );
};
