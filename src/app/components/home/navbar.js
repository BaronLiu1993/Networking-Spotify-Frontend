"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full font-lexend border-b-1">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <button
          className="md:hidden text-[#191414]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className="hidden md:flex space-x-6 text-[#FFFFFF] font-medium">
          <li><a href="#">Home</a></li>
          <li><a href="#">Discover</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </div>

      {isOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-2 text-[#FFFFFF] font-medium">
          <li><a href="#">Home</a></li>
          <li><a href="#">Discover</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      )}
    </nav>
  );
}

