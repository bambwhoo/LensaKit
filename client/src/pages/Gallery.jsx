import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../components/admin/AdminSidebar";

const API_URL = "http://localhost:5000/api/galleries";

export default function GalleryAdmin() {
  const [galleries, setGalleries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const [form, setForm] = useState({
    title: "",
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
    fetchGallery();
  }, []);

  /* =====================
     FETCH
  ===================== */
  const fetchGallery = async () => {
    try {
      const res = await fetch(API_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setGalleries(data);
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
    if (!confirm("Yakin hapus gallery ini?")) return;

    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    fetchGallery();
  };

  /* =====================
     SUBMIT
  ===================== */
  const handleSubmit = async () => {
    const url = isEdit ? `${API_URL}/${editId}` : API_URL;
    const method = isEdit ? "PUT" : "POST";

    const data = new FormData();
    data.append("title", form.title);

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
    setForm({ title: "" });
    setImageFile(null);
    setPreview(null);

    fetchGallery();
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
        <div className="flex justify-between mb-6">
          <h1 className="text-3xl font-bold">Manajemen Gallery</h1>
          <button
            onClick={() => {
              setIsEdit(false);
              setForm({ title: "" });
              setImageFile(null);
              setPreview(null);
              setShowModal(true);
            }}
            className="bg-teal-600 text-white px-5 py-2 rounded"
          >
            + Tambah Gallery
          </button>
        </div>

        <div className="bg-white rounded-xl shadow">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4">Preview</th>
                <th className="p-4">Judul</th>
                <th className="p-4 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {galleries.length === 0 ? (
                <tr>
                  <td colSpan="3" className="p-6 text-center text-gray-500">
                    Belum ada gallery
                  </td>
                </tr>
              ) : (
                galleries.map((item) => (
                  <tr key={item.id} className="border-t">
                    <td className="p-4">
                      <img
                        src={`http://localhost:5000/images/galeri/${item.image}`}
                        className="h-16 w-16 object-cover rounded"
                        onError={(e) => (e.target.src = "/no-image.png")}
                      />
                    </td>
                    <td className="p-4">{item.title}</td>
                    <td className="p-4 text-center">
                      <button
                        onClick={() => {
                          setIsEdit(true);
                          setEditId(item.id);
                          setForm({ title: item.title });
                          setPreview(
                            item.image
                              ? `http://localhost:5000/images/galeri/${item.image}`
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

        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
            <div className="bg-white p-6 rounded w-full max-w-lg">
              <h2 className="text-xl font-bold mb-4">
                {isEdit ? "Edit Gallery" : "Tambah Gallery"}
              </h2>

              <input
                className="w-full mb-3 p-2 border rounded"
                placeholder="Judul"
                value={form.title}
                onChange={(e) =>
                  setForm({ ...form, title: e.target.value })
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
                  className="w-full h-40 object-cover rounded mb-3"
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
