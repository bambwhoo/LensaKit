// controllers/galleryController.js
import db from "../db/connection.js";

export const getGalleries = (req, res) => {
  db.query("SELECT * FROM gallery ORDER BY id DESC", (err, rows) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json(rows);
  });
};

export const createGallery = (req, res) => {
  const { title } = req.body;
  const image = req.file ? req.file.filename : null;

  if (!title || !image) {
    return res.status(400).json({ message: "Judul & gambar wajib diisi" });
  }

  db.query(
    "INSERT INTO gallery (title, image) VALUES (?, ?)",
    [title, image],
    (err, result) => {
      if (err) return res.status(500).json({ message: err.message });
      res.json({ message: "Gallery berhasil ditambahkan" });
    }
  );
};

export const updateGallery = (req, res) => {
  const { title } = req.body;

  let sql = "UPDATE gallery SET title = ?";
  let params = [title];

  if (req.file) {
    sql += ", image = ?";
    params.push(req.file.filename);
  }

  sql += " WHERE id = ?";
  params.push(req.params.id);

  db.query(sql, params, (err, result) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json({ message: "Gallery berhasil diupdate" });
  });
};

export const deleteGallery = (req, res) => {
  db.query(
    "DELETE FROM gallery WHERE id = ?",
    [req.params.id],
    (err) => {
      if (err) return res.status(500).json({ message: err.message });
      res.json({ message: "Gallery berhasil dihapus" });
    }
  );
};
