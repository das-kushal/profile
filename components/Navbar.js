"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isOpen) setIsOpen(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const navItems = [
    { href: "#top", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#certifications", label: "Certifications" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden md:block w-full fixed top-0 z-50 h-16  bg-[#282e34]/30 backdrop-blur-3xl  shadow-lg">
        <nav
          className={`fixed top-2  md:flex justify-center items-center left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 rounded-full bg-black  px-6 py-3 isolate`}
        >
          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-yellow-400 hover:text-white transition-colors text-sm font-medium relative group"
                onClick={handleLinkClick}
              >
                {item.label}
                {/* <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span> */}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      {/* Mobile Bottom Tab Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-transparent  border-gray-700 px-4 py-2 safe-area-inset-bottom">
        <div className="flex justify-start">
          <button
            onClick={toggleMenu}
            className="bg-gray-800/10 hover:bg-gray-700/10 backdrop-blur-3xl  text-yellow-400 hover:text-yellow-400 transition-all duration-200 p-3 rounded-full border border-gray-600/20 shadow-lg"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <HiX size={24} color="#F9C74F" />
            ) : (
              <HiMenu size={24} color="#F9C74F" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden fixed bottom-20 left-4 right-4 z-40 bg-gray-900/5 backdrop-blur-md rounded-2xl border border-gray-700 shadow-2xl transition-all duration-300 overflow-hidden ${
          isOpen
            ? "opacity-100 visible transform translate-y-0"
            : "opacity-0 invisible transform translate-y-4"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="py-4 px-6 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-yellow-400 hover:text-yellow-300 hover:bg-gray-800/20 transition-all duration-200 py-3 px-4 rounded-lg text-base font-medium"
              onClick={handleLinkClick}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
