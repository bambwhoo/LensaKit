import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-800 text-white p-4">
      <h2 className="mb-6 text-xl font-bold">Admin Panel</h2>

      <nav className="flex flex-col gap-3">
        <Link to="/admin/dashboard" className="hover:text-blue-400">Dashboard</Link>
        <Link to="/admin/artikel" className="hover:text-blue-400">Artikel</Link>
        <Link to="/admin/jasa" className="hover:text-blue-400">Jasa</Link>
        <Link to="/admin/event" className="hover:text-blue-400">Event</Link>
        <Link to="/admin/gallery" className="hover:text-blue-400">Gallery</Link>
        <Link to="/admin/client" className="hover:text-blue-400">Client</Link>
      </nav>
    </aside>
  );
}
