"use client";

import Image from "next/image";
import React from "react";
import { Link } from "react-scroll";



const Navbar = () => {
  const navItems = [
    { name: "Home", route: "mainpage" },
    { name: "Nos Partenaire", route: "partenaire" },
    { name: "Services", route: "service" },
  ];

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <Image
                src="/assets/image.png"
                width={48}
                height={48}
                alt="MPPS logo"
                className="object-contain"
              />
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-primary font-bold text-lg">MPPS</span>
              <span className="text-gray-600 text-lg">Junior</span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden md:flex space-x-4 items-center">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.route}
                  smooth={true} 
                  duration={500}
                  className="cursor-pointer text-primary hover:text-blue-700 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Link to="contactus" smooth={true} duration={500} className="px-4 py-2 rounded-md font-medium cursor-pointer text-white bg-primary hover:scale-110 ease-in-out transition-all duration-100 ">
                Contact
              </Link>
            </div>

            <div className="md:hidden flex items-center">
              <button
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
                aria-label="Open menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;