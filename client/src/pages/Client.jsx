import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../components/admin/AdminSidebar";

const API_URL = "http://localhost:5000/api/client";

const ClientAdmin = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  const [logoFile, setLogoFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const [form, setForm] = useState({
    name: "",
  });

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  /* =====================
     PROTECT PAGE
  ===================== */
  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }
    fetchClients();
  }, []);

  /* =====================
     FETCH CLIENT
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
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  /* =====================
     DELETE
  ===================== */
  const handleDelete = async (id) => {
    if (!confirm("Yakin hapus client ini?")) return;

    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    fetchClients();
  };

  /* =====================
     SUBMIT
  ===================== */
  const handleSubmit = async () => {
    const url = isEdit ? `${API_URL}/${editId}` : API_URL;
    const method = isEdit ? "PUT" : "POST";

    const data = new FormData();
    data.append("name", form.name);

    if (logoFile) {
      data.append("logo", logoFile);
    }

    await fetch(url, {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: data,
    });

    setShowModal(false);
    setIsEdit(false);
    setEditId(null);
    setLogoFile(null);
    setPreview(null);
    setForm({ name: "" });

    fetchClients();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex">
        <AdminSidebar />
        <main className="flex-1 flex items-center justify-center">
          <p>Loading...</p>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-gray-100">
      <AdminSidebar />

      <main className="flex-1 p-8">
        {/* HEADER */}
        <div className="flex justify-between mb-6">
          <h1 className="text-3xl font-bold">Manajemen Client</h1>
          <button
            onClick={() => {
              setIsEdit(false);
              setForm({ name: "" });
              setLogoFile(null);
              setPreview(null);
              setShowModal(true);
            }}
            className="bg-teal-600 text-white px-5 py-2 rounded"
          >
            + Tambah Client
          </button>
        </div>

        {/* TABLE */}
        <div className="bg-white rounded-xl shadow overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4">Logo</th>
                <th className="p-4">Nama Client</th>
                <th className="p-4 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {clients.length === 0 ? (
                <tr>
                  <td colSpan="3" className="p-6 text-center text-gray-500">
                    Belum ada client
                  </td>
                </tr>
              ) : (
                clients.map((item) => (
                  <tr key={item.id} className="border-t">
                    <td className="p-4">
                      <img
                        src={`http://localhost:5000/images/client/${item.logo}`}
                        className="h-14 w-14 object-contain rounded"
                        onError={(e) => (e.target.src = "/no-image.png")}
                      />
                    </td>
                    <td className="p-4 font-semibold">{item.name}</td>
                    <td className="p-4 text-center">
                      <button
                        onClick={() => {
                          setIsEdit(true);
                          setEditId(item.id);
                          setForm({ name: item.name });

                          setPreview(
                            item.logo
                              ? `http://localhost:5000/images/client/${item.logo}`
                              : null
                          );

                          setLogoFile(null);
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
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
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
              />

              <input
                type="file"
                accept="image/*"
                className="w-full mb-3"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setLogoFile(file);
                  setPreview(URL.createObjectURL(file));
                }}
              />

              {preview && (
                <img
                  src={preview}
                  className="h-24 object-contain rounded border p-2 mb-3"
                />
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
};

export default ClientAdmin;
