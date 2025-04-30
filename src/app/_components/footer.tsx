"use client";

import Image from "next/image";
import {
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  Instagram,
  Twitter,
} from "lucide-react";
import { Link } from "react-scroll";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/PredatorXxRIPxX",
      label: "Github",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/miage-pro-paris-saclay/",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/mpps_junior",
      label: "Instagram", 
    },
    { icon: Twitter, href: "https://tr.ee/Vkzb79iP_j", label: "Twitter" },
  ];

  const contactInfo = [
    { icon: Mail, text: "bureau.diff@miageproparissaclay.com" },
    { icon: MapPin, text: "Evry,Ile-De-France,France" },
  ];

  const quickLinks = [
    {
      name: "Accueil",
      link: "mainpage", 
    },
    { name: "Services", link: "service" },
    { name: "Nos Partenaire", link: "partenaire" },
    { name: "Contact", link: "contactus" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/assets/image.png"
                  alt="MPPS Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">MPPS</h3>
                <p className="text-blue-400">Junior</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 max-w-md">
              Propulsés par l&apos;innovation, nous construisons vos projets avec
              passion et ambition. Notre équipe junior s&apos;engage à délivrer des
              solutions numériques de qualité.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Liens Rapides
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer hover:text-blue-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact</h4>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <item.icon className="w-5 h-5 text-blue-400" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm">
              © {currentYear} MPPS Junior. Tous droits réservés.
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-gray-800 rounded-full transition-colors duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}