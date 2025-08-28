import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Home, BarChart2, Settings, X, Bell, Search, LogOut } from "lucide-react";

export default function DashboardLayout({children}) {
    const [isOpen, setIsOpen] = useState(false);
    const [activePage, setActivePage] = useState("dashboard");

      const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('isAdmin');
        navigate('/');
    };

    const navItems = [
        { name: "dashboard", label: "Dashboard", icon: <Home size={18} />, path: "/dashboard" },
        { name: "faculty", label: "Faculty", icon: <BarChart2 size={18} />, path: "/faculty" },
        { name: "enquiry", label: "Enquiry", icon: <Settings size={18} />, path: "/enquiry" },
        { name: "contact", label: "Contact", icon: <Settings size={18} />, path: "/contact" },
        { name: "courses", label: "Courses", icon: <Settings size={18} />, path: "/courses" },
        { name: "gallery", label: "gallery", icon: <Settings size={18} />, path: "/gallery" },
    ];

    return (
        <div className="flex h-screen bg-gradient-to-br from-indigo-50 to-cyan-50">
            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-indigo-600 to-indigo-800 text-white shadow-xl transform transition-transform duration-300 z-20 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0`}
            >
                <div className="flex items-center justify-between p-5 border-b border-indigo-500">
                    <span className="text-xl font-bold flex items-center gap-2">
                        <div className="p-1 bg-white rounded-md">
                            <BarChart2 size={20} className="text-indigo-600" />
                        </div>
                        ADMIN PANAL
                    </span>
                    {/* Close button (mobile only) */}
                    <button
                        className="md:hidden p-2 rounded-lg hover:bg-indigo-500 transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        <X size={20} />
                    </button>
                </div>

                <nav className="flex-1 p-4 space-y-1 mt-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            onClick={() => {
                                setIsOpen(false);
                                setActivePage(item.name);
                            }}
                            className={`flex items-center gap-3 p-3 rounded-lg transition-all ${activePage === item.name
                                ? "bg-white text-indigo-600 shadow-md"
                                : "hover:bg-indigo-500"
                                }`}
                        >
                            {item.icon} {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="absolute bottom-0 w-full p-4 border-t border-indigo-500">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 w-full p-2 text-sm rounded-lg hover:bg-indigo-500 transition-colors">
                        <LogOut size={16} /> Sign Out
                    </button>
                </div>
            </aside>

            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-10 md:hidden"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            {/* Main content area */}
            <div className="flex-1 flex flex-col md:ml-64">
                {/* Header */}
                <header className="h-16 bg-white border-b shadow-sm flex items-center justify-between px-6 fixed top-0 left-0 md:left-64 right-0 z-10">
                    <div className="flex items-center gap-4">
                        {/* Menu toggle button (mobile only) */}
                        <button
                            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                            onClick={() => setIsOpen(true)}
                        >
                            <Menu size={20} />
                        </button>

                        {/* Search bar */}
                        <div className="relative hidden md:block">
                            <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="pl-10 pr-4 py-2 w-64 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-5">
                        <button className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
                            <Bell size={20} className="text-gray-600" />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                        </button>

                        <div className="flex items-center gap-3">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-medium">Tejas Derle!</p>
                                <p className="text-xs text-gray-500">Administrator</p>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page content */}
                <main className="mt-16 p-6 overflow-y-auto flex-1">
                    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                        {/* <Outlet /> */}
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}