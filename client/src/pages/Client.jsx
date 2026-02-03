import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../components/admin/AdminSidebar";

const API_URL = "http://localhost:5000/api/client";

export default function ClientAdmin() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    logo: "",
  });

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // 🔐 PROTECT PAGE
  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }
    fetchClients();
  }, []);

  /* =====================
     FETCH CLIENTS
  ===================== */
  const fetchClients = async () => {
    try {
      const res = await fetch(API_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();

      setClients(data);
    } catch (err) {
      console.error("Fetch client error:", err);
      alert("Gagal mengambil data client");
    } finally {
      setLoading(false);
    }
  };

  /* =====================
     DELETE
  ===================== */
  const handleDelete = async (id) => {
    if (!confirm("Yakin hapus client ini?")) return;

    try {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchClients();
    } catch (err) {
      console.error("Delete error:", err);
      alert("Gagal menghapus client");
    }
  };

  /* =====================
     SUBMIT
  ===================== */
  const handleSubmit = async () => {
    const url = isEdit ? `${API_URL}/${editId}` : API_URL;
    const method = isEdit ? "PUT" : "POST";

    try {
      await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: form.name,
          logo: form.logo,
        }),
      });

      setShowModal(false);
      setIsEdit(false);
      setEditId(null);
      setForm({
        name: "",
        logo: "",
      });

      fetchClients();
    } catch (err) {
      console.error("Submit error:", err);
      alert(isEdit ? "Gagal mengupdate client" : "Gagal menambah client");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen flex bg-gray-100">
      <AdminSidebar />

      <main className="flex-1 p-8">
        <div className="flex justify-between mb-6">
          <h1 className="text-3xl font-bold">Manajemen Client</h1>
          <button
            onClick={() => {
              setIsEdit(false);
              setForm({
                name: "",
                logo: "",
              });
              setShowModal(true);
            }}
            className="bg-teal-600 text-white px-5 py-2 rounded"
          >
            + Tambah Client
          </button>
        </div>

        {/* TABLE */}
        <div className="bg-white rounded-xl shadow">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4">Logo</th>
                <th className="p-4">Nama Client</th>
                <th className="p-4">Logo URL</th>
                <th className="p-4 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {clients.length === 0 ? (
                <tr>
                  <td colSpan="4" className="p-8 text-center text-gray-500">
                    Belum ada client
                  </td>
                </tr>
              ) : (
                clients.map((item) => (
                  <tr key={item.id} className="border-t">
                    <td className="p-4">
                      <img
                        src={item.logo}
                        alt={item.name}
                        className="h-12 w-12 object-contain"
                      />
                    </td>
                    <td className="p-4 font-semibold">{item.name}</td>
                    <td className="p-4 text-sm text-gray-500">
                      {item.logo.length > 50
                        ? item.logo.substring(0, 50) + "..."
                        : item.logo}
                    </td>
                    <td className="p-4 text-center">
                      <button
                        onClick={() => {
                          setIsEdit(true);
                          setEditId(item.id);
                          setForm({
                            name: item.name,
                            logo: item.logo,
                          });
                          setShowModal(true);
                        }}
                        className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded"
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* MODAL */}
        {showModal && (
          <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
            <div className="bg-white p-6 rounded w-full max-w-lg">
              <h2 className="text-xl font-bold mb-4">
                {isEdit ? "Edit Client" : "Tambah Client"}
              </h2>

              <input
                className="w-full mb-3 p-2 border rounded"
                placeholder="Nama Client"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                required
              />

              <input
                className="w-full mb-3 p-2 border rounded"
                placeholder="Logo URL"
                value={form.logo}
                onChange={(e) =>
                  setForm({ ...form, logo: e.target.value })
                }
                required
              />

              {/* Preview Logo */}
              {form.logo && (
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Preview:</p>
                  <img
                    src={form.logo}
                    alt="Preview"
                    className="h-20 object-contain border rounded p-2"
                  />
                </div>
              )}

              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-gray-300 px-4 py-2 rounded"
                >
                  Batal
                </button>
                <button
                  onClick={handleSubmit}
                  className="bg-teal-600 text-white px-4 py-2 rounded"
                >
                  Simpan
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}