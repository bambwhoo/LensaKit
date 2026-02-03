import db from "../db/connection.js";

export const getArtikels = (req, res) => {
  db.query("SELECT * FROM artikel ORDER BY id DESC", (err, results) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json(results);
  });
};

export const createArtikel = (req, res) => {
  const { judul, slug, isi, thumbnail, penulis } = req.body;
  db.query(
    "INSERT INTO artikel (judul, slug, isi, thumbnail, penulis) VALUES (?, ?, ?, ?, ?)",
    [judul, slug, isi, thumbnail, penulis],
    (err) => {
      if (err) return res.status(500).json({ message: err.message });
      res.json({ message: "Artikel berhasil ditambahkan" });
    }
  );
};

export const deleteArtikel = (req, res) => {
  db.query("DELETE FROM artikel WHERE id = ?", [req.params.id], (err) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json({ message: "Artikel berhasil dihapus" });
  });
};

export const updateArtikel = (req, res) => {
  const { judul, slug, isi, thumbnail, penulis } = req.body;
  db.query(
    "UPDATE artikel SET judul=?, slug=?, isi=?, thumbnail=?, penulis=? WHERE id=?",
    [judul, slug, isi, thumbnail, penulis, req.params.id],
    (err) => {
      if (err) return res.status(500).json({ message: err.message });
      res.json({ message: "Artikel berhasil diupdate" });
    }
  );
};
