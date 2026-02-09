import db from "../db/connection.js";

/* =====================
   GET CLIENTS
===================== */
export const getClients = (req, res) => {
  db.query("SELECT * FROM client ORDER BY id DESC", (err, results) => {
    if (err) return res.status(500).json({ message: "Gagal ambil client" });
    res.json(results);
  });
};

/* =====================
   CREATE CLIENT
===================== */
export const createClient = (req, res) => {
  const { name } = req.body;
  const logo = req.file ? req.file.filename : null;

  if (!name || !logo) {
    return res.status(400).json({ message: "Nama & logo wajib diisi" });
  }

  const sql = "INSERT INTO client (name, logo) VALUES (?, ?)";

  db.query(sql, [name, logo], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Gagal tambah client" });
    }

    res.json({
      message: "Client berhasil ditambahkan",
      id: result.insertId,
    });
  });
};

/* =====================
   UPDATE CLIENT
===================== */
export const updateClient = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  let sql = "UPDATE client SET name = ?";
  let params = [name];

  if (req.file) {
    sql += ", logo = ?";
    params.push(req.file.filename);
  }

  sql += " WHERE id = ?";
  params.push(id);

  db.query(sql, params, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Gagal update client" });
    }

    res.json({ message: "Client berhasil diupdate" });
  });
};

/* =====================
   DELETE CLIENT
===================== */
export const deleteClient = (req, res) => {
  db.query("DELETE FROM client WHERE id = ?", [req.params.id], (err) => {
    if (err) return res.status(500).json({ message: "Gagal hapus client" });
    res.json({ message: "Client berhasil dihapus" });
  });
};
