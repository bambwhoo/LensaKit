import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../components/admin/AdminSidebar";

const Dashboard = () => {
  const navigate = useNavigate();

  // 🔐 PROTECT DASHBOARD
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  // MENU SESUAI TABEL DATABASE
  const menus = [
    {
      name: "Artikel",
      table: "artikel",
      description: "Buat & edit artikel blog",
    },
    {
      name: "Client",
      table: "client",
      description: "Kelola data klien Anda",
    },
    {
      name: "Gallery",
      table: "gallery",
      description: "Upload foto & portfolio",
    },
    {
      name: "Service",
      table: "Service",
      description: "Kelola layanan bisnis",
    },
  ];

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* SIDEBAR */}
      <AdminSidebar />

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8 overflow-auto">
        {/* HEADER SECTION */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-1">
            Dashboard Admin
          </h1>
          <p className="text-gray-500">
            Kelola semua konten Lensakit
          </p>
        </div>

        {/* STATS CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-8">
          {menus.map((menu) => (
            <div
              key={menu.table}
              className="bg-white rounded-lg border border-gray-200 p-5 hover:border-teal-500 hover:shadow-md transition-all duration-200 cursor-pointer group"
              onClick={() => navigate(`/admin/${menu.table}`)}
            >
              {/* Icon & Count */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center text-2xl group-hover:bg-teal-100 transition-colors">
                  {menu.icon}
                </div>
                <span className="text-2xl font-bold text-gray-800">{menu.count}</span>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {menu.name}
              </h3>

              <p className="text-gray-500 text-sm mb-4">
                {menu.description}
              </p>

              {/* Link */}
              <div className="flex items-center gap-1 text-teal-600 font-medium text-sm group-hover:gap-2 transition-all">
                <span>Kelola</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;