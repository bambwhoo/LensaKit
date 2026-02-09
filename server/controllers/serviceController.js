import db from "../db/connection.js";

/* =====================
   GET ALL SERVICES
===================== */
export const getServices = (req, res) => {
  db.query("SELECT * FROM jasa ORDER BY id DESC", (err, results) => {
    if (err) return res.status(500).json({ message: "Gagal ambil service" });
    res.json(results);
  });
};

/* =====================
   CREATE SERVICE
===================== */
export const createService = (req, res) => {
  const { name, description } = req.body;
  const image = req.file ? req.file.filename : null;

  if (!name || !image) {
    return res
      .status(400)
      .json({ message: "Nama & gambar wajib diisi" });
  }

  const sql =
    "INSERT INTO jasa (name, description, image) VALUES (?, ?, ?)";

  db.query(sql, [name, description || null, image], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Gagal tambah service" });
    }

    res.json({
      message: "Service berhasil ditambahkan",
      id: result.insertId,
    });
  });
};

/* =====================
   UPDATE SERVICE
===================== */
export const updateService = (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;

  let sql = "UPDATE jasa SET name = ?, description = ?";
  let params = [name, description || null];

  if (req.file) {
    sql += ", image = ?";
    params.push(req.file.filename);
  }

  sql += " WHERE id = ?";
  params.push(id);

  db.query(sql, params, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Gagal update service" });
    }

    res.json({ message: "Service berhasil diupdate" });
  });
};

/* =====================
   DELETE SERVICE
===================== */
export const deleteService = (req, res) => {
  db.query("DELETE FROM jasa WHERE id = ?", [req.params.id], (err) => {
    if (err) return res.status(500).json({ message: "Gagal hapus service" });
    res.json({ message: "Service berhasil dihapus" });
  });
};
