"use client";

import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar/Sidebar";
import { studentProfile, studentMenu } from "@/data/sidebarData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { teacherMenu, teacherProfile } from "@/data/TeacherPageData";

export default function StudentLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Generate breadcrumb items from the pathname
  const getBreadcrumbs = () => {
    const pathParts = pathname.split("/").filter((part) => part);
    const breadcrumbs = [
      { name: "Home", href: "/" },
      ...pathParts.map((part, index) => ({
        name: part.charAt(0).toUpperCase() + part.slice(1), // Capitalize first letter
        href: `/${pathParts.slice(0, index + 1).join("/")}`,
      })),
    ];
    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar
        profile={teacherProfile}
        menuItems={teacherMenu}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {/* Main content area */}
      <main
        className={`flex-1 overflow-auto transition-all duration-300 pt-16 md:pt-0 p-4 sm:p-6 
          ${collapsed ? "md:ml-20" : "md:ml-64"} ml-0`}
      >
        {/* Breadcrumb navigation */}
        <nav className=" mt-10 px-6" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            {breadcrumbs.map((crumb, index) => (
              <li
                key={crumb.href}
                className="flex items-center bg-blue-50 hover:bg-blue-100 transition-all py-1 px-4"
              >
                {index < breadcrumbs.length - 1 ? (
                  <>
                    <Link
                      href={crumb.href}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {crumb.name}
                    </Link>
                    <span className="mx-2">/</span>
                  </>
                ) : (
                  <span className="text-gray-700 font-medium">
                    {crumb.name}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
