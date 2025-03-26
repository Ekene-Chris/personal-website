"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black text-linen z-40">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold">Ekene Chris</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-gold transition duration-200">
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-gold transition duration-200"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="hover:text-gold transition duration-200"
          >
            Blog
          </Link>
          <Link
            href="/resources"
            className="hover:text-gold transition duration-200"
          >
            Resources
          </Link>
          <Link
            href="/contact"
            className="hover:text-gold transition duration-200"
          >
            Contact
          </Link>
          <Link
            href="/contact"
            className="bg-caput-mortuum hover:bg-opacity-90 px-4 py-2 rounded ml-4 transition duration-200"
          >
            Work With Me
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-linen focus:outline-none"
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
              className="bg-caput-mortuum hover:bg-opacity-90 px-4 py-2 rounded inline-block transition duration-200"
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
