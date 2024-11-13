import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-palette-navy text-palette-light py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4 text-palette-turquoise">Quick Links</h3>
            <ul>
              <li>
                <a
                  href="/about"
                  className="text-palette-light hover:text-palette-turquoise transition"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/features"
                  className="text-palette-light hover:text-palette-turquoise transition"
                >
                  features
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-palette-light hover:text-palette-turquoise transition"
                >
                 Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4 text-palette-turquoise">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61554276364307"
                target="_blank"
                rel="noopener noreferrer"
                className="text-palette-light hover:text-palette-turquoise transition"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/zainhanif2902/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-palette-light hover:text-palette-turquoise transition"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/zain-hanif-154426222/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-palette-light hover:text-palette-turquoise transition"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-palette-turquoise">Contact Us</h3>
            <p className="text-palette-light">Aptech Learning North Nazimabad II</p>
            <p className="text-palette-light">Email: zainhanif2902@gmail.com</p>
            <p className="text-palette-light">Phone: +92 316-1055276</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 text-center text-palette-turquoise text-lg">
          © {new Date().getFullYear()} <a href="https://www.linkedin.com/in/zain-hanif-154426222/" target="_blank" rel="noopener noreferrer">EARTHSCAPE_CLIMATE_AGENCY</a> All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
