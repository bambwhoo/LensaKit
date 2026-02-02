import db from "../db/connection.js";
import slugify from "slugify";

/**
 * GET ALL ARTIKEL
 * GET /api/artikel
 */
export const getArtikel = (req, res) => {
  const sql = "SELECT * FROM artikel ORDER BY created_at DESC";

  db.query(sql, (err, results) => {
    if (err) {
      console.error("Get Artikel Error:", err);
      return res.status(500).json({ message: "Gagal mengambil artikel" });
    }

    res.json(results);
  });
};

/**
 * CREATE ARTIKEL
 * POST /api/artikel
 */
export const createArtikel = (req, res) => {
  const { title, content, thumbnail, penulis } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: "Title dan content wajib diisi" });
  }

  const slug = slugify(title, { lower: true, strict: true });

  const sql = `
    INSERT INTO artikel (title, slug, content, thumbnail, penulis)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [title, slug, content, thumbnail, penulis],
    (err, result) => {
      if (err) {
        console.error("Create Artikel Error:", err);
        return res.status(500).json({ message: "Gagal menambah artikel" });
      }

      res.json({
        message: "Artikel berhasil ditambahkan",
        id: result.insertId,
      });
    }
  );
};

/**
 * DELETE ARTIKEL
 * DELETE /api/artikel/:id
 */
export const deleteArtikel = (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM artikel WHERE id = ?";

  db.query(sql, [id], (err) => {
    if (err) {
      console.error("Delete Artikel Error:", err);
      return res.status(500).json({ message: "Gagal menghapus artikel" });
    }

    res.json({ message: "Artikel berhasil dihapus" });
  });
};
