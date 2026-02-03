import db from "../db/connection.js";
import slugify from "slugify";

/**
 * GET ALL ARTIKEL
 */
export const getArtikel = (req, res) => {
  const sql = "SELECT * FROM articles ORDER BY created_at DESC";

  db.query(sql, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

/**
 * CREATE ARTIKEL
 */
export const createArtikel = (req, res) => {
  const { judul, isi, thumbnail, penulis } = req.body;

  if (!judul || !isi) {
    return res.status(400).json({ message: "Judul dan isi wajib diisi" });
  }

  const slug = slugify(judul, { lower: true, strict: true });

  const sql = `
    INSERT INTO articles (judul, slug, isi, thumbnail, penulis)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [judul, slug, isi, thumbnail, penulis],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Artikel berhasil ditambahkan" });
    }
  );
};

/**
 * UPDATE ARTIKEL
 */
export const updateArtikel = (req, res) => {
  const { id } = req.params;
  const { judul, isi, thumbnail, penulis } = req.body;

  const slug = slugify(judul, { lower: true, strict: true });

  const sql = `
    UPDATE articles 
    SET judul=?, slug=?, isi=?, thumbnail=?, penulis=?
    WHERE id=?
  `;

  db.query(
    sql,
    [judul, slug, isi, thumbnail, penulis, id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Artikel berhasil diperbarui" });
    }
  );
};

/**
 * DELETE ARTIKEL
 */
export const deleteArtikel = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM articles WHERE id=?", [id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Artikel berhasil dihapus" });
  });
};
