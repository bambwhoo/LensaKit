import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import AdminSidebar from "../components/admin/AdminSidebar";

export default function ServiceAdmin() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    description: "",
    image: "",
  });

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // 🔐 PROTECT PAGE
  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }
    fetchServices();
  }, []);

  /* =====================
     FETCH SERVICES
  ===================== */
  const fetchServices = async () => {
    try {
      const res = await api.get("/services");
      setServices(res.data);
    } catch (err) {
      console.error("Gagal fetch services:", err);
      alert("Gagal mengambil data services");
    } finally {
      setLoading(false);
    }
  };

  /* =====================
     DELETE
  ===================== */
  const handleDelete = async (id) => {
    if (!window.confirm("Yakin hapus service ini?")) return;

    try {
      await api.delete(`/services/${id}`);
      fetchServices();
    } catch (err) {
      console.error("Gagal hapus:", err);
      alert("Gagal menghapus service");
    }
  };

  /* =====================
     SUBMIT
  ===================== */
  const handleSubmit = async () => {
    try {
      if (isEdit) {
        // UPDATE
        await api.put(`/services/${editId}`, form);
      } else {
        // CREATE
        await api.post("/services", form);
      }

      setShowModal(false);
      setIsEdit(false);
      setEditId(null);
      setForm({ name: "", description: "", image: "" });

      fetchServices();
    } catch (err) {
      console.error("Gagal submit:", err);
      alert(isEdit ? "Gagal mengupdate service" : "Gagal menambah service");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen flex bg-gray-100">
      <AdminSidebar />

      <main className="flex-1 p-8">
        <div className="flex justify-between mb-6">
          <h1 className="text-3xl font-bold">Manajemen Services</h1>
          <button
            onClick={() => {
              setIsEdit(false);
              setForm({
                name: "",
                description: "",
                image: "",
              });
              setShowModal(true);
            }}
            className="bg-teal-600 text-white px-5 py-2 rounded"
          >
            + Tambah Service
          </button>
        </div>

        {/* TABLE */}
        <div className="bg-white rounded-xl shadow">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4">Gambar</th>
                <th className="p-4">Nama Service</th>
                <th className="p-4">Deskripsi</th>
                <th className="p-4 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {services.length === 0 ? (
                <tr>
                  <td colSpan="4" className="p-8 text-center text-gray-500">
                    Belum ada service
                  </td>
                </tr>
              ) : (
                services.map((s) => (
                  <tr 
                    key={s.id} 
                    className="border-t hover:bg-gray-50 cursor-pointer transition-colors"
                    onClick={() => window.location.href = '/#contact'}
                  >
                    <td className="p-4">
                      <img
                        src={s.image}
                        alt={s.name}
                        className="h-12 w-12 object-cover rounded"
                      />
                    </td>
                    <td className="p-4 font-semibold">{s.name}</td>
                    <td className="p-4 text-sm text-gray-500">
                      {s.description && s.description.length > 50
                        ? s.description.substring(0, 50) + "..."
                        : s.description}
                    </td>
                    <td className="p-4 text-center" onClick={(e) => e.stopPropagation()}>
                      <button
                        onClick={() => {
                          setIsEdit(true);
                          setEditId(s.id);
                          setForm({
                            name: s.name,
                            description: s.description,
                            image: s.image,
                          });
                          setShowModal(true);
                        }}
                        className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(s.id)}
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
                {isEdit ? "Edit Service" : "Tambah Service"}
              </h2>

              <input
                className="w-full mb-3 p-2 border rounded"
                placeholder="Nama Service"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />

              <input
                className="w-full mb-3 p-2 border rounded"
                placeholder="URL Gambar"
                value={form.image}
                onChange={(e) => setForm({ ...form, image: e.target.value })}
                required
              />

              <textarea
                className="w-full mb-3 p-2 border rounded"
                placeholder="Deskripsi"
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                rows="3"
              />

              {/* Preview Image */}
              {form.image && (
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Preview:</p>
                  <img
                    src={form.image}
                    alt="Preview"
                    className="h-20 object-cover rounded border p-2"
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