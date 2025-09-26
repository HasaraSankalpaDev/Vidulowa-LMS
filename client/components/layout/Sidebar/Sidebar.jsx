"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosLogOut } from "react-icons/io";

const Sidebar = ({
  profile,
  menuItems,
  collapsed,
  setCollapsed,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) => {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-30 p-4 flex justify-between items-center shadow">
        <div className="flex items-center gap-3">
          <img
            src={profile.avatar}
            alt="Profile"
            className="rounded-full w-10 h-10"
          />

          <div className="flex flex-col">
            <p className="font-semibold text-gray-800">{profile.name}</p>
            <p className="text-sm text-gray-500">{profile.role}</p>
          </div>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray-600"
        >
          {isMobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-10 md:hidden "
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white border-r border-gray-200 shadow-md z-20 transform transition-transform duration-300
        ${isMobileMenuOpen ? "translate-x-0 py-12" : "-translate-x-full "}
        md:translate-x-0
        ${collapsed ? "md:w-20" : "md:w-64"}
        w-64`}
      >
        <div className="flex flex-col h-full pt-20 p-4">
          {/* Desktop Profile */}
          <div className="hidden md:flex items-center gap-3 mb-8">
            <img
              src={profile.avatar}
              alt="Profile"
              className={`rounded-full ${
                collapsed ? "w-10 h-10" : "w-12 h-12"
              }`}
            />
            {!collapsed && (
              <div className="flex flex-col">
                <p className="font-semibold text-gray-800">{profile.name}</p>
                <p className="text-sm text-gray-500">{profile.role}</p>
              </div>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex-1 flex flex-col gap-2">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-blue-100 text-blue-700 font-medium"
                      : "text-gray-600 hover:bg-blue-50 hover:text-blue-700"
                  } ${collapsed ? "justify-center" : ""}`}
                  title={collapsed ? item.name : ""}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Icon size={20} />
                  {(!collapsed || isMobileMenuOpen) && (
                    <span className="text-sm">{item.name}</span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Logout */}
          <div className="mt-auto mb-10">
            <Link
              href="/logout"
              className={`flex items-center gap-3 p-3 rounded-lg text-red-600 hover:bg-red-50 hover:text-red-700 font-medium transition-colors ${
                collapsed ? "justify-center" : ""
              }`}
              title={collapsed ? "Log Out" : ""}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <IoIosLogOut size={20} />
              {(!collapsed || isMobileMenuOpen) && (
                <span className="text-sm">Log Out</span>
              )}
            </Link>
          </div>

          {/* Collapse Toggle */}
          <button
            className="hidden md:flex absolute bottom-4 right-0 transform -translate-x-1/2 w-8 h-8 bg-white border border-gray-300 rounded-full shadow items-center justify-center hover:bg-gray-100 transition"
            onClick={() => setCollapsed(!collapsed)}
          >
            <svg
              className={`w-4 h-4 text-gray-600 transition-transform duration-300 ${
                collapsed ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
