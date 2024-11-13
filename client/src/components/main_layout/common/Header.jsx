import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async()=> {
    const res = await axios.get('http://localhost:8000/api/auth/logout');
    navigate("/login")
  }

  return (
    <nav className="bg-palette-navy text-palette-light">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-palette-turquoise">
          <Link to="/">EarthScape</Link>
        </div>

        {/* Hamburger Menu (Mobile View) */}
        <button
          className="lg:hidden text-palette-light focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Links (Desktop View) */}
        <div className="hidden lg:flex space-x-6 items-center">
          <Link
            to="/"
            className="text-palette-light hover:text-palette-turquoise transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-palette-light hover:text-palette-turquoise transition-colors"
          >
            About
          </Link>
          <Link
            to="/features"
            className="text-palette-light hover:text-palette-turquoise transition-colors"
          >
            Features
          </Link>
          <Link
            to="/contact"
            className="text-palette-light hover:text-palette-turquoise transition-colors"
          >
            Contact
          </Link>
          <div className="space-x-4">
            <Link to="/dashboard">
              <button className="px-4 py-2 text-palette-turquoise border border-palette-turquoise rounded hover:bg-palette-turquoise hover:text-palette-light transition">
              Dashboard
              </button>
            </Link>

              <button onClick={handleLogout} className="px-4 py-2 bg-palette-turquoise text-palette-light rounded hover:bg-palette-navy hover:text-palette-light transition">
                Logout
              </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-palette-gray border-t border-palette-navy">
          <div className="flex flex-col space-y-4 px-4 py-4">
            <Link
              to="/"
              className="text-palette-light hover:text-palette-turquoise transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-palette-light hover:text-palette-turquoise transition-colors"
            >
              About
            </Link>
            <Link
              to="/features"
              className="text-palette-light hover:text-palette-turquoise transition-colors"
            >
              Features
            </Link>
            <Link
              to="/contact"
              className="text-palette-light hover:text-palette-turquoise transition-colors"
            >
              Contact
            </Link>
            <div className="space-y-2">
              <Link to="/dashboard">
                <button className="w-full px-4 py-2 text-palette-turquoise border border-palette-turquoise rounded hover:bg-palette-turquoise hover:text-palette-light transition">
                Dashboard
                </button>
              </Link>
              
                <button onClick={handleLogout} className="w-full px-4 py-2 bg-palette-turquoise text-palette-light rounded hover:bg-palette-navy hover:text-palette-light transition">
                  Logout
                </button>
              
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
