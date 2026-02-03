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
      icon: "📝",
      description: "Buat & edit artikel blog",
      count: "24"
    },
    { 
      name: "Client", 
      table: "client", 
      icon: "👥",
      description: "Kelola data klien Anda",
      count: "48"
    },
    { 
      name: "Event", 
      table: "event", 
      icon: "📅",
      description: "Atur jadwal & event",
      count: "12"
    },
    { 
      name: "Gallery", 
      table: "gallery", 
      icon: "🖼️",
      description: "Upload foto & portfolio",
      count: "156"
    },
    { 
      name: "Jasa", 
      table: "jasa", 
      icon: "🛠️",
      description: "Kelola layanan bisnis",
      count: "8"
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

        {/* QUICK ACTIONS */}
        <div className="grid lg:grid-cols-3 gap-5">
          {/* Quick Actions Card */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h2>
            
            <div className="space-y-2">
              <button className="w-full text-left px-4 py-2.5 bg-gray-50 rounded-lg hover:bg-teal-50 hover:text-teal-700 transition-colors text-gray-700 text-sm font-medium">
                ➕ Tambah Konten Baru
              </button>
              <button className="w-full text-left px-4 py-2.5 bg-gray-50 rounded-lg hover:bg-teal-50 hover:text-teal-700 transition-colors text-gray-700 text-sm font-medium">
                📊 Lihat Analytics
              </button>
              <button className="w-full text-left px-4 py-2.5 bg-gray-50 rounded-lg hover:bg-teal-50 hover:text-teal-700 transition-colors text-gray-700 text-sm font-medium">
                ⚙️ Pengaturan Website
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h2>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center text-sm flex-shrink-0">
                  📝
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">Artikel baru ditambahkan</p>
                  <p className="text-xs text-gray-500">2 jam yang lalu</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center text-sm flex-shrink-0">
                  👥
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">Client baru terdaftar</p>
                  <p className="text-xs text-gray-500">5 jam yang lalu</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center text-sm flex-shrink-0">
                  🖼️
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">Gallery diperbarui</p>
                  <p className="text-xs text-gray-500">1 hari yang lalu</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tips Card */}
          <div className="bg-teal-600 rounded-lg p-6 text-white">
            <h2 className="text-lg font-semibold mb-3">💡 Tips Hari Ini</h2>
            <p className="text-teal-100 text-sm mb-4">
              Upload gambar dengan resolusi tinggi untuk hasil gallery yang maksimal. Ukuran ideal: 1920x1080px
            </p>
            <button className="bg-white text-teal-600 font-medium px-4 py-2 rounded-lg hover:bg-teal-50 transition-colors text-sm">
              Lihat Semua Tips
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;