"use client";

import { ArrowRight } from "lucide-react";
import { Link } from "react-scroll";

export default function MainPage() {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-50 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full opacity-50 blur-3xl" />
      </div>

      <div className="relative w-full min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              MPPS Junior
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Portés par l&apos;innovation, nous construirons vos projets avec{" "}
            <span className="text-blue-600">passion</span> et{" "}
            <span className="text-purple-600">engagement</span>.
          </h1>

          <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            On vous proposent des divers services en IT, des services de qualité
            et une tarification imbattable pour réaliser vos ambitions
            numériques.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link key={"contactus"} to="contactus" smooth={true} duration={500}>
              <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-fourth transition-colors duration-300 shadow-lg hover:shadow-xl">
                Contacter nous
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </Link>
            <Link key={"service"} to="service" smooth={true} duration={500}>
              <button className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300">
                Découvrir nos services
              </button>
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 text-center">
              <div>
                <div className="text-2xl font-bold text-gray-900">65 000</div>
                <div className="text-sm text-gray-500">Etudiants</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">15</div>
                <div className="text-sm text-gray-500">Membres MPPS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
