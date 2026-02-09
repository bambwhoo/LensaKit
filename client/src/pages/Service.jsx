import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../components/admin/AdminSidebar";

const API_URL = "http://localhost:5000/api/services";

export default function ServiceAdmin() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const [form, setForm] = useState({
    name: "",
    description: "",
  });

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // PROTECT PAGE
  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }
    fetchData();
  }, []);

  // FETCH DATA
  const fetchData = async () => {
    try {
      const res = await fetch(API_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setServices(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // DELETE
  const handleDelete = async (id) => {
    if (!confirm("Yakin hapus service ini?")) return;

    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    fetchData();
  };

  // SUBMIT
  const handleSubmit = async () => {
    const url = isEdit ? `${API_URL}/${editId}` : API_URL;
    const method = isEdit ? "PUT" : "POST";

    const data = new FormData();
    data.append("name", form.name);
    data.append("description", form.description);

    if (imageFile) {
      data.append("image", imageFile);
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
    setForm({ name: "", description: "" });
    setImageFile(null);
    setPreview(null);

    fetchData();
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
          <h1 className="text-3xl font-bold">Manajemen Service</h1>
          <button
            onClick={() => {
              setIsEdit(false);
              setForm({ name: "", description: "" });
              setImageFile(null);
              setPreview(null);
              setShowModal(true);
            }}
            className="bg-teal-600 text-white px-5 py-2 rounded"
          >
            + Tambah Service
          </button>
        </div>

        {/* TABLE */}
        <div className="bg-white rounded-xl shadow overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4">Gambar</th>
                <th className="p-4">Nama</th>
                <th className="p-4">Deskripsi</th>
                <th className="p-4 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {services.length === 0 ? (
                <tr>
                  <td colSpan="4" className="p-6 text-center text-gray-500">
                    Belum ada service
                  </td>
                </tr>
              ) : (
                services.map((item) => (
                  <tr key={item.id} className="border-t">
                    <td className="p-4">
                      <img
                        src={
                          item.image
                            ? `http://localhost:5000/images/service/${item.image}`
                            : "/no-image.png"
                        }
                        className="h-16 w-16 object-cover rounded"
                        onError={(e) => (e.target.src = "/no-image.png")}
                      />
                    </td>
                    <td className="p-4 font-semibold">{item.name}</td>
                    <td className="p-4 text-sm text-gray-600">
                      {item.description || "-"}
                    </td>
                    <td className="p-4 text-center">
                      <button
                        onClick={() => {
                          setIsEdit(true);
                          setEditId(item.id);
                          setForm({
                            name: item.name,
                            description: item.description,
                          });
                          setPreview(
                            item.image
                              ? `http://localhost:5000/images/service/${item.image}`
                              : null
                          );
                          setImageFile(null);
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
                {isEdit ? "Edit Service" : "Tambah Service"}
              </h2>

              <input
                className="w-full mb-3 p-2 border rounded"
                placeholder="Nama Service"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />

              <textarea
                className="w-full mb-3 p-2 border rounded"
                placeholder="Deskripsi"
                rows="3"
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
              />

              <input
                type="file"
                accept="image/*"
                className="w-full mb-3"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setImageFile(file);
                  setPreview(URL.createObjectURL(file));
                }}
              />

              {preview && (
                <img
                  src={preview}
                  className="h-24 object-cover rounded border p-2 mb-3"
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
}
