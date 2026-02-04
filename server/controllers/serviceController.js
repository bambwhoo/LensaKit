import db from "../db/connection.js";

// =====================
// GET ALL
// =====================
export const getServices = (req, res) => {
  db.query("SELECT * FROM jasa ORDER BY id DESC", (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json(err);
    }
    res.json(results);
  });
};

// =====================
// GET BY ID
// =====================
export const getServiceById = (req, res) => {
  db.query(
    "SELECT * FROM jasa WHERE id = ?",
    [req.params.id],
    (err, results) => {
      if (err) return res.status(500).json(err);
      res.json(results[0]);
    }
  );
};

// =====================
// CREATE
// =====================
export const createService = (req, res) => {
  const { name, description, image } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Name wajib diisi" });
  }

  db.query(
    "INSERT INTO jasa (name, description, image) VALUES (?, ?, ?)",
    [name, description || null, image || null],
    (err, result) => {
      if (err) {
        console.error("DB ERROR:", err);
        return res.status(500).json(err);
      }

      res.status(201).json({
        message: "Service berhasil ditambahkan",
        id: result.insertId,
      });
    }
  );
};

// =====================
// UPDATE
// =====================
export const updateService = (req, res) => {
  const { id } = req.params;
  const { name, description, image } = req.body;

  db.query(
    "UPDATE jasa SET name = ?, description = ?, image = ? WHERE id = ?",
    [name, description, image, id],
    (err, result) => {
      if (err) return res.status(500).json(err);

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Service tidak ditemukan" });
      }

      res.json({ message: "Service berhasil diupdate" });
    }
  );
};

// =====================
// DELETE
// =====================
export const deleteService = (req, res) => {
  db.query(
    "DELETE FROM jasa WHERE id = ?",
    [req.params.id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Service berhasil dihapus" });
    }
  );
};
