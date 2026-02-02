import db from "../db/connection.js";

/**
 * GET ALL CLIENTS
 * GET /api/client
 */
export const getClients = (req, res) => {
  const sql = "SELECT * FROM client ORDER BY id DESC";

  db.query(sql, (err, results) => {
    if (err) {
      console.error("Get Clients Error:", err);
      return res.status(500).json({ message: "Gagal mengambil data client" });
    }

    res.json(results);
  });
};

/**
 * CREATE CLIENT
 * POST /api/client
 */
export const createClient = (req, res) => {
  const { name, logo } = req.body;

  if (!name || !logo) {
    return res.status(400).json({ message: "Name dan logo wajib diisi" });
  }

  const sql = "INSERT INTO client (name, logo) VALUES (?, ?)";

  db.query(sql, [name, logo], (err, result) => {
    if (err) {
      console.error("Create Client Error:", err);
      return res.status(500).json({ message: "Gagal menambah client" });
    }

    res.json({
      message: "Client berhasil ditambahkan",
      id: result.insertId,
    });
  });
};

/**
 * UPDATE CLIENT
 * PUT /api/client/:id
 */
export const updateClient = (req, res) => {
  const { id } = req.params;
  const { name, logo } = req.body;

  const sql = "UPDATE client SET name = ?, logo = ? WHERE id = ?";

  db.query(sql, [name, logo, id], (err) => {
    if (err) {
      console.error("Update Client Error:", err);
      return res.status(500).json({ message: "Gagal update client" });
    }

    res.json({ message: "Client berhasil diupdate" });
  });
};

/**
 * DELETE CLIENT
 * DELETE /api/client/:id
 */
export const deleteClient = (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM client WHERE id = ?";

  db.query(sql, [id], (err) => {
    if (err) {
      console.error("Delete Client Error:", err);
      return res.status(500).json({ message: "Gagal menghapus client" });
    }

    res.json({ message: "Client berhasil dihapus" });
  });
};
