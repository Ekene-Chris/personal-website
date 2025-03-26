"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll effect to header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-300 ${
        scrolled
          ? "bg-black text-linen py-2 shadow-lg"
          : "bg-black bg-opacity-90 text-linen py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold">Ekene Chris</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link
            href="/"
            className="hover:text-gold transition duration-200 py-2"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-gold transition duration-200 py-2"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="hover:text-gold transition duration-200 py-2"
          >
            Blog
          </Link>
          <Link
            href="/resources"
            className="hover:text-gold transition duration-200 py-2"
          >
            Resources
          </Link>
          <Link
            href="/contact"
            className="hover:text-gold transition duration-200 py-2"
          >
            Contact
          </Link>
          <Link
            href="/contact"
            className="bg-caput-mortuum hover:bg-opacity-90 px-5 py-2 rounded transition duration-200 ml-2"
          >
            Work With Me
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-linen focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black py-4 px-6 absolute w-full shadow-lg">
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className="block py-2 hover:text-gold transition duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block py-2 hover:text-gold transition duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/blog"
              className="block py-2 hover:text-gold transition duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/resources"
              className="block py-2 hover:text-gold transition duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            <Link
              href="/contact"
              className="block py-2 hover:text-gold transition duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="bg-caput-mortuum hover:bg-opacity-90 px-4 py-2 rounded inline-block transition duration-200 mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Work With Me
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
