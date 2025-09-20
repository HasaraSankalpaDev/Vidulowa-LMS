import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { footerData } from "@/data/SectionContent";

const Footer = () => (
  <footer className=" border-t border-gray-100 pt-12 pb-6 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8">
        {footerData.sections.map((section) => (
          <div key={section.title}>
            <h4 className="text-md font-bold uppercase text-gray-700 mb-4 tracking-wider">
              {section.title}
            </h4>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`text-md ${
                      link.active
                        ? "text-blue-800 font-medium"
                        : "text-gray-600 hover:text-blue-800"
                    } transition`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-md text-gray-500">
          © {new Date().getFullYear()} ViduLowa. All rights reserved.
        </span>
        <div className="flex gap-4">
          <a
            href={footerData.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-600 text-xl"
          >
            <FaFacebookF />
          </a>
          <a
            href={footerData.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-600 text-xl"
          >
            <FaTwitter />
          </a>
          <a
            href={footerData.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-500 text-xl"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
