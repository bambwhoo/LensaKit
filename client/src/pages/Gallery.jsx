import { useEffect, useState } from "react";
import AdminSidebar from "../components/admin/AdminSidebar";

export default function GalleryAdmin() {
  const [galleries, setGalleries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    title: "",
    image: "",
  });

  // fetch Gallery
  const fetchGallery = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/galleries");
      const data = await res.json();

      setGalleries(data);
    } catch (err) {
      console.error("Fetch gallery error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  // Delete
  const handleDelete = async (id) => {
    if (!confirm("Yakin hapus gallery ini?")) return;

    await fetch(`http://localhost:5000/api/galleries/${id}`, {
      method: "DELETE",
    });

    fetchGallery();
  };

  // Submit
  const handleSubmit = async () => {
    const url = isEdit
      ? `http://localhost:5000/api/galleries/${editId}`
      : "http://localhost:5000/api/galleries";

    const method = isEdit ? "PUT" : "POST";

    try {
      await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: form.title,
          image: form.image,
        }),
      });

      setShowModal(false);
      setIsEdit(false);
      setEditId(null);
      setForm({
        title: "",
        image: "",
      });

      fetchGallery();
    } catch (err) {
      console.error("Submit error:", err);
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen flex bg-gray-100">
      <AdminSidebar />

      <main className="flex-1 p-8">
        <div className="flex justify-between mb-6">
          <h1 className="text-3xl font-bold">Manajemen Gallery</h1>
          <button
            onClick={() => {
              setIsEdit(false);
              setForm({
                title: "",
                image: "",
              });
              setShowModal(true);
            }}
            className="bg-teal-600 text-white px-5 py-2 rounded"
          >
            + Tambah Gallery
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4">Preview</th>
                <th className="p-4">Judul</th>
                <th className="p-4">Image URL</th>
                <th className="p-4 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {galleries.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="p-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-16 w-16 object-cover rounded"
                    />
                  </td>
                  <td className="p-4">{item.title}</td>
                  <td className="p-4 text-sm text-gray-500">
                    {item.image.length > 50
                      ? item.image.substring(0, 50) + "..."
                      : item.image}
                  </td>
                  <td className="p-4 text-center">
                    <button
                      onClick={() => {
                        setIsEdit(true);
                        setEditId(item.id);
                        setForm({
                          title: item.title,
                          image: item.image,
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
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
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
                className="w-full mb-3 p-2 border rounded"
                placeholder="Image URL"
                value={form.image}
                onChange={(e) =>
                  setForm({ ...form, image: e.target.value })
                }
              />

              {/* Preview Image */}
              {form.image && (
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Preview:</p>
                  <img
                    src={form.image}
                    alt="Preview"
                    className="w-full h-40 object-cover rounded"
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