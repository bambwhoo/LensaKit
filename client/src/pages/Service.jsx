import { useEffect, useState } from "react";
import api from "../api";
import AdminSidebar from "../components/admin/AdminSidebar";

export default function ServiceAdmin() {
  const [services, setServices] = useState([]);
  const [form, setForm] = useState({ title: "", image: "" });

  // FETCH ALL SERVICES
  const fetchServices = async () => {
    try {
      const res = await api.get("/services");
      setServices(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await api.get("/services");
      setServices(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  fetchData();
}, []);


  // CREATE SERVICE
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/services", form);
      setForm({ title: "", image: "" });
      fetchServices();
    } catch (err) {
      console.error(err);
    }
  };

  // DELETE SERVICE
  const handleDelete = async (id) => {
    if (!window.confirm("Hapus service ini?")) return;
    try {
      await api.delete(`/services/${id}`);
      fetchServices();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* SIDEBAR */}
      <AdminSidebar />

      {/* CONTENT */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">Manajemen Services</h1>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow mb-8 grid md:grid-cols-3 gap-4"
        >
          <input
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="Judul Service"
            className="border p-3 rounded"
            required
          />
          <input
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
            placeholder="URL Image"
            className="border p-3 rounded"
            required
          />
          <button className="bg-teal-600 text-white rounded px-6 font-semibold">
            Tambah
          </button>
        </form>

        {/* LIST */}
        <div className="bg-white rounded-xl shadow divide-y">
          {services.length === 0 && (
            <p className="p-6 text-gray-500 text-center">Belum ada service</p>
          )}
          {services.map((s) => (
            <div key={s.id} className="flex items-center justify-between p-4">
              <div className="flex items-center gap-4">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-12 w-12 object-cover rounded"
                />
                <span className="font-semibold">{s.title}</span>
              </div>
              <button
                onClick={() => handleDelete(s.id)}
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
