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
                  href="/privacy-policy"
                  className="text-palette-light hover:text-palette-turquoise transition"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-of-service"
                  className="text-palette-light hover:text-palette-turquoise transition"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4 text-palette-turquoise">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-palette-light hover:text-palette-turquoise transition"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-palette-light hover:text-palette-turquoise transition"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-palette-light hover:text-palette-turquoise transition"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
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
            <p className="text-palette-light">123 Climate Lane</p>
            <p className="text-palette-light">EarthCity, EC 45678</p>
            <p className="text-palette-light">Email: contact@earthscape.com</p>
            <p className="text-palette-light">Phone: +1 (555) 123-4567</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 text-center text-palette-gray text-sm">
          © {new Date().getFullYear()} EarthScape. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
