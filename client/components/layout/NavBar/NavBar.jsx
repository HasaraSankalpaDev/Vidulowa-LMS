"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Classes", href: "/classes" },
  { name: "Teachers", href: "/teachers" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // ✅ hydration-safe

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-blue-100 p-2">
            <svg
              className="h-7 w-7 text-blue-600"
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
          <span className="text-xl font-extrabold tracking-tight text-gray-900">
            ViduLowa
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-150 ${
                pathname === item.href
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Link
            href={"/login"}
            className="hidden md:flex cursor-pointer items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-600 shadow hover:bg-blue-50 transition-all"
          >
            <FaRegUserCircle className="text-lg" />
            Login / Register
          </Link>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden cursor-pointer flex items-center justify-center rounded-full p-2 hover:bg-blue-50 transition"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <FiX className="text-2xl text-blue-600" />
            ) : (
              <FiMenu className="text-2xl text-blue-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden px-4 pb-4 flex flex-col gap-2 bg-white/95 shadow-lg animate-fade-in-down">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`rounded-lg px-3 py-2 text-base font-medium transition-colors ${
                pathname === item.href
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <button className="mt-2 flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-600 shadow hover:bg-blue-50 transition-all cursor-pointer">
            <FaRegUserCircle className="text-lg" />
            Login / Register
          </button>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
