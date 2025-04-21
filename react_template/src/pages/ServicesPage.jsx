import React from "react";
import ServicesSection from "../components/Home/ServicesSection";

const ServicesPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 to-indigo-950 text-white pt-20">
    <div className="container mx-auto py-12">
      <h1 className="text-5xl font-extrabold text-center mb-10 drop-shadow">My <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Services</span></h1>
      <ServicesSection fullPage />
    </div>
  </div>
);

export default ServicesPage;
