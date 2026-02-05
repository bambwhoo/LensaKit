import { NavLink, useNavigate } from "react-router-dom";

const AdminSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
    navigate("/login");
  };

  const menus = [
    { name: "Dashboard", path: "/admin/dashboard", icon: "" },
    { name: "Artikel", path: "/admin/artikel", icon: "" },
    { name: "Client", path: "/admin/client", icon: "" },
    { name: "Gallery", path: "/admin/gallery", icon: "" },
    { name: "Service", path: "/admin/service", icon: "" },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen p-6">
      {/* LOGO SECTION */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-1">
          <h2 className="text-xl font-bold text-gray-800">
            Lensakit
          </h2>
        </div>
        <p className="text-gray-500 text-sm ml-12">Admin Panel</p>
      </div>

      {/* NAVIGATION */}
      <nav className="space-y-1 mb-8">
        <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3 px-3">
          Menu
        </p>

        {menus.map((menu) => (
          <NavLink
            key={menu.path}
            to={menu.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-all
              ${isActive
                ? "bg-teal-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <span className="text-xl">{menu.icon}</span>
            <span>{menu.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* USER INFO */}
      <div className="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold">
            A
          </div>
          <div className="flex-1">
            <p className="text-gray-800 font-semibold text-sm">Admin</p>
            <p className="text-gray-500 text-xs">Administrator</p>
          </div>
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        </div>
      </div>

      {/* LOGOUT BUTTON */}
      <button
        onClick={handleLogout}
        className="w-full bg-red-500 text-white py-2.5 rounded-lg hover:bg-red-600 transition-colors font-medium flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
        <span>Logout</span>
      </button>
    </aside>
  );
};

export default AdminSidebar;