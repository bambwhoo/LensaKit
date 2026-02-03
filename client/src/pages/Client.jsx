import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AdminSidebar from "../components/admin/AdminSidebar";

const API_URL = "http://localhost:5000/api/client";

export default function ClientAdmin() {
  const [clients, setClients] = useState([]);
  const [name, setName] = useState("");
  const [logo, setLogo] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // 🔐 PROTECT PAGE
  useEffect(() => {
    if (!token) navigate("/login");
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setClients(res.data);
    } catch (err) {
      console.error(err);
      alert("Gagal mengambil data client");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        API_URL,
        { name, logo },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setName("");
      setLogo("");
      fetchClients();
    } catch {
      alert("Gagal menambah client");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Hapus client ini?")) return;

    try {
      await axios.delete(`${API_URL}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchClients();
    } catch {
      alert("Gagal menghapus client");
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* SIDEBAR */}
      <AdminSidebar />

      {/* CONTENT */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">Manajemen Client</h1>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow mb-8 grid md:grid-cols-3 gap-4"
        >
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nama Client"
            className="border p-3 rounded"
            required
          />
          <input
            value={logo}
            onChange={(e) => setLogo(e.target.value)}
            placeholder="URL Logo"
            className="border p-3 rounded"
            required
          />
          <button className="bg-[#EC008C] text-white rounded px-6 font-semibold">
            Tambah
          </button>
        </form>

        {/* LIST */}
        <div className="bg-white rounded-xl shadow divide-y">
          {loading && (
            <p className="p-6 text-gray-500 text-center">Loading...</p>
          )}

          {!loading && clients.length === 0 && (
            <p className="p-6 text-gray-500 text-center">
              Belum ada client
            </p>
          )}

          {clients.map((c) => (
            <div
              key={c.id}
              className="flex items-center justify-between p-4"
            >
              <div className="flex items-center gap-4">
                <img
  src={c.logo}
  alt={c.name}
  className="h-12 object-contain"
/>

                <span className="font-semibold">{c.name}</span>
              </div>
              <button
                onClick={() => handleDelete(c.id)}
                className="text-red-500 font-semibold hover:underline"
              >
                Hapus
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
