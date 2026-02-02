import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import AdminSidbar from "./components/admin/AdminSidebar";

// Client Pages
import Home from "./pages/Home";
import Jasa from "./pages/Jasa";
import Artikel from "./pages/Artikel";
import Event from "./pages/Event";
import Login from "./pages/Login";
import Client from "./pages/Client";

// Admin Pages
import Dashboard from "./pages/Dashboard";
import Gallery from "./pages/Gallery";

export default function App() {
  return (
    <Routes>
      {/* CLIENT */}
      <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      </Route>

      {/* AUTH */}
      <Route path="/login" element={<Login />} />

      {/* ADMIN */}
      <Route path="/admin" element={<AdminSidbar />}/>
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/gallery" element={<Gallery />} />
      <Route path="/admin/client" element={<Client />} />
      <Route path="/admin/artikel" element={<Artikel />} />
      <Route path="/admin/event" element={<Event />} />
      <Route path="/admin/jasa" element={<Jasa />} />
    </Routes>
  );
}
