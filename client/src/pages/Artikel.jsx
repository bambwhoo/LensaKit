import { useEffect, useState } from "react";
import AdminSidebar from "../components/admin/AdminSidebar";

const Artikel = () => {
  const [artikels, setArtikels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const [form, setForm] = useState({
    judul: "",
    slug: "",
    isi: "",
    penulis: "",
  });

  /* =====================
     FETCH ARTIKEL
  ===================== */
  const fetchArtikel = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/artikel");
      const data = await res.json();
      setArtikels(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArtikel();
  }, []);

  /* =====================
     DELETE
  ===================== */
  const handleDelete = async (id) => {
    if (!confirm("Yakin hapus artikel ini?")) return;

    await fetch(`http://localhost:5000/api/artikel/${id}`, {
      method: "DELETE",
    });

    fetchArtikel();
  };

  /* =====================
     SUBMIT
  ===================== */
  const handleSubmit = async () => {
    const url = isEdit
      ? `http://localhost:5000/api/artikel/${editId}`
      : "http://localhost:5000/api/artikel";

    const method = isEdit ? "PUT" : "POST";

    const data = new FormData();
    data.append("judul", form.judul);
    data.append("slug", form.slug);
    data.append("isi", form.isi);
    data.append("penulis", form.penulis);

    if (thumbnailFile) {
      data.append("thumbnail", thumbnailFile);
    }

    await fetch(url, {
      method,
      body: data,
    });

    setShowModal(false);
    setIsEdit(false);
    setEditId(null);
    setThumbnailFile(null);
    setPreview(null);
    setForm({
      judul: "",
      slug: "",
      isi: "",
      penulis: "",
    });

    fetchArtikel();
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
          <h1 className="text-3xl font-bold">Manajemen Artikel</h1>
          <button
            onClick={() => {
              setIsEdit(false);
              setForm({
                judul: "",
                slug: "",
                isi: "",
                penulis: "",
              });
              setThumbnailFile(null);
              setPreview(null);
              setShowModal(true);
            }}
            className="bg-teal-600 text-white px-5 py-2 rounded"
          >
            + Tambah Artikel
          </button>
        </div>

        {/* TABLE */}
        <div className="bg-white rounded-xl shadow overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4">Thumbnail</th>
                <th className="p-4">Judul</th>
                <th className="p-4">Penulis</th>
                <th className="p-4 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {artikels.length === 0 ? (
                <tr>
                  <td colSpan="4" className="p-6 text-center text-gray-500">
                    Belum ada artikel
                  </td>
                </tr>
              ) : (
                artikels.map((item) => (
                  <tr key={item.id} className="border-t">
                    <td className="p-4">
                      <img
                        src={`http://localhost:5000/images/artikel/${item.thumbnail}`}
                        className="w-24 h-16 object-cover rounded"
                        onError={(e) => (e.target.src = "/no-image.png")}
                      />
                    </td>
                    <td className="p-4">{item.judul}</td>
                    <td className="p-4">{item.penulis || "-"}</td>
                    <td className="p-4 text-center">
                      <button
                        onClick={() => {
                          setIsEdit(true);
                          setEditId(item.id);
                          setForm({
                            judul: item.judul,
                            slug: item.slug,
                            isi: item.isi,
                            penulis: item.penulis,
                          });

                          setPreview(
                            item.thumbnail
                              ? `http://localhost:5000/images/artikel/${item.thumbnail}`
                              : null
                          );
                          setThumbnailFile(null);
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
            <div className="bg-white p-6 rounded w-full max-w-xl">
              <h2 className="text-xl font-bold mb-4">
                {isEdit ? "Edit Artikel" : "Tambah Artikel"}
              </h2>

              <input
                className="w-full mb-3 p-2 border rounded"
                placeholder="Judul"
                value={form.judul}
                onChange={(e) =>
                  setForm({ ...form, judul: e.target.value })
                }
              />

              <input
                className="w-full mb-3 p-2 border rounded"
                placeholder="Slug"
                value={form.slug}
                onChange={(e) =>
                  setForm({ ...form, slug: e.target.value })
                }
              />

              <textarea
                className="w-full mb-3 p-2 border rounded"
                placeholder="Isi Artikel"
                rows="4"
                value={form.isi}
                onChange={(e) =>
                  setForm({ ...form, isi: e.target.value })
                }
              />

              <input
                type="file"
                accept="image/*"
                className="w-full mb-3"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setThumbnailFile(file);
                  setPreview(URL.createObjectURL(file));
                }}
              />

              {preview && (
                <img
                  src={preview}
                  className="w-full h-48 object-cover rounded mb-3"
                />
              )}

              <input
                className="w-full mb-3 p-2 border rounded"
                placeholder="Penulis"
                value={form.penulis}
                onChange={(e) =>
                  setForm({ ...form, penulis: e.target.value })
                }
              />

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

export default Artikel;
