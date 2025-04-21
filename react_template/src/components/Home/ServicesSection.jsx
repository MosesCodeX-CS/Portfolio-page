import React, { useState } from "react";
import { FaLaptopCode, FaCode, FaNetworkWired, FaPalette, FaChalkboardTeacher, FaMobileAlt } from "react-icons/fa";

const services = [
  {
    category: 'support',
    icon: <FaLaptopCode className="text-primary text-4xl mb-3 mx-auto" />, 
    title: "Computer & Tech Support",
    short: "Professional hardware and software solutions to keep your systems running smoothly.",
    badges: ["Hardware Repair", "OS Installation", "Troubleshooting", "Performance Tuning"],
    details: [
      "Computer Repair & Maintenance",
      "Windows/Linux Installation & Configuration",
      "Software Installation & Troubleshooting",
      "System Optimization & Cleanup",
      "Virus & Malware Removal",
      "Hardware Upgrades & Diagnostics",
      "Data Backup & Recovery"
    ]
  },
  {
    category: 'development',
    icon: <FaCode className="text-green-500 text-4xl mb-3 mx-auto" />, 
    title: "Web Development",
    short: "Custom websites and applications built with modern technologies.",
    badges: ["Responsive Design", "PHP/MySQL", "Hospital Systems", "LAMP Stack"],
    details: [
      "Responsive Website Design (HTML/CSS/JavaScript)",
      "PHP-MySQL Web Applications with CRUD Operations",
      "Hospital Management System Development",
      "Web Hosting & Apache Server Setup (LAMP stack)",
      "Basic Authentication System Integration",
      "Portfolio Website Creation",
      "E-commerce Solutions"
    ]
  },
  {
    category: 'support',
    icon: <FaNetworkWired className="text-cyan-400 text-4xl mb-3 mx-auto" />, 
    title: "Networking & Security",
    short: "Secure network solutions with focus on data protection.",
    badges: ["Network Setup", "WiFi Security", "Data Backup", "Linux Security"],
    details: [
      "Basic Network Setup & Configuration",
      "MiFi Device Setup & Optimization",
      "Data Backup & Encryption Solutions",
      "Linux File Permissions & Security Basics",
      "Wireless Network Security",
      "VPN Setup & Configuration",
      "Network Troubleshooting"
    ]
  },
  {
    category: 'design',
    icon: <FaPalette className="text-yellow-400 text-4xl mb-3 mx-auto" />, 
    title: "Graphics & Design",
    short: "Creative design solutions for branding and marketing.",
    badges: ["Logo Design", "Posters", "Hotel Menus", "Business Cards"],
    details: [
      "Poster Creation for Events or Businesses",
      "Basic Logo Design (Canva or similar tools)",
      "Menu Book Design for Hotels/Restaurants",
      "Business Card Design",
      "Flyer & Brochure Design",
      "Social Media Graphics",
      "Basic Branding Packages"
    ]
  },
  {
    category: 'consulting',
    icon: <FaChalkboardTeacher className="text-red-500 text-4xl mb-3 mx-auto" />, 
    title: "Training & Mentorship",
    short: "IT training programs for individuals and teams.",
    badges: ["Programming", "Web Dev", "Linux CLI", "Git/GitHub"],
    details: [
      "Beginner ICT Lessons (MS Office, File Management)",
      "Introduction to Programming (Python, C, PHP)",
      "Ubuntu/Linux Command Line Basics",
      "Git & GitHub Training for Beginners",
      "Web Development Fundamentals",
      "Database Management Basics",
      "Career Guidance in Tech"
    ]
  },
  {
    category: 'development',
    icon: <FaMobileAlt className="text-gray-400 text-4xl mb-3 mx-auto" />, 
    title: "Mobile & Digital",
    short: "Mobile optimization and digital presence solutions.",
    badges: ["Android", "Social Media", "WhatsApp Business", "Digital Portfolio"],
    details: [
      "Android Device Optimization",
      "WhatsApp Business Setup for Clients",
      "Social Media Page Setup for Businesses",
      "Digital Portfolio Creation Assistance",
      "Mobile App Consultation",
      "Basic SEO Setup",
      "Online Presence Strategy"
    ]
  }
];

const filters = [
  { label: 'All Services', value: 'all' },
  { label: 'Development', value: 'development' },
  { label: 'Tech Support', value: 'support' },
  { label: 'Design', value: 'design' },
  { label: 'Consulting', value: 'consulting' }
];

const ServicesSection = ({ homePreview }) => {
  const [filter, setFilter] = useState('all');
  const [modal, setModal] = useState(null);
  const filtered = filter === 'all' ? services : services.filter(s => s.category === filter);
  const displayServices = homePreview ? filtered.slice(0,3) : filtered;

  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-gray-950 to-indigo-900">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold mb-2 text-white drop-shadow">My <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Services</span></h2>
          <p className={`text-lg ${homePreview ? 'text-cyan-200 font-medium drop-shadow' : 'text-gray-200'} `}>Comprehensive IT solutions tailored to your specific needs</p>
        </div>
        {/* Filters: Only show on full page */}
        {!homePreview && (
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {filters.map(f => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`btn btn-outline-primary btn-lg ${filter === f.value ? 'bg-cyan-600 text-white' : 'bg-gray-800 text-cyan-400 border-cyan-600'} transition font-semibold`}
              >
                {f.label}
              </button>
            ))}
          </div>
        )}
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 service-container">
          {displayServices.map((service, idx) => (
            <div key={idx} className={`${homePreview ? 'bg-gray-800/80 text-white shadow-2xl border border-gray-700 z-20' : 'bg-gray-700 text-white shadow-xl border border-cyan-800/40'} rounded-2xl p-8 flex flex-col h-full relative`}>
              {service.icon}
              <h5 className={`font-bold text-xl mb-2 drop-shadow ${homePreview ? 'text-white' : 'text-white'}`}>{service.title}</h5>
              <p className={`${homePreview ? 'text-gray-200 font-medium' : 'text-gray-100' } mb-3`}>{service.short}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {service.badges.map((badge, i) => (
                  <span key={i} className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-xs font-semibold shadow">{badge}</span>
                ))}
              </div>
              <div className="flex gap-2 mt-auto">
                <button className="btn btn-primary btn-sm" onClick={() => setModal(service)}>
                  <span className="mr-1">ℹ️</span> Details
                </button>
                <a href="#contact" className="btn btn-success btn-sm">
                  <span className="mr-1">✉️</span> Request
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* Modal */}
        {modal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="bg-gray-900 rounded-xl shadow-xl max-w-lg w-full p-8 relative animate-fadeIn border border-cyan-600/40">
              <button className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl" onClick={() => setModal(null)}>&times;</button>
              <h3 className="text-2xl font-bold mb-2 text-white drop-shadow">{modal.title}</h3>
              <p className="mb-4 text-gray-200">{modal.short}</p>
              <ul className="list-disc list-inside text-gray-100 space-y-2 mb-6">
                {modal.details.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
              <div className="flex justify-end gap-2">
                <button className="btn btn-outline-primary" onClick={() => setModal(null)}>Close</button>
                <a href="#contact" className="btn btn-success">Request Service</a>
              </div>
            </div>
          </div>
        )}
        {/* Call to Action */}
        <div className="text-center mt-16 p-8 md:p-12 bg-gradient-to-r from-cyan-700 to-blue-900 text-white rounded-2xl shadow-2xl border-2 border-cyan-400 z-30 relative flex flex-col items-center max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-extrabold mb-2 drop-shadow animate-pulse">Ready to Get Your Project Started?</h3>
          <p className="mb-6 text-cyan-100 text-lg font-medium drop-shadow">Contact me today for a free, no-obligation consultation about your IT needs.</p>
          <a href="#contact" className="btn btn-light btn-lg px-8 py-3 font-bold text-cyan-700 bg-white rounded-full shadow-lg hover:bg-cyan-100 transition-all text-lg animate-glow">Contact Now</a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
