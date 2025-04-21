import React from 'react';
import { Link } from 'react-router-dom';

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/certifications', label: 'Certifications' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' }
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 shadow-2xl border-t border-cyan-700 py-12 mt-16 relative z-30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          <div>
            <Link to="/" className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Moses
              </span>
            </Link>
            <p className="text-gray-300 mt-2 mb-4 md:mb-0">Software Developer & DevOps Engineer</p>
          </div>
          <div>
            <h5 className="font-semibold text-cyan-400 mb-2">Quick Links</h5>
            <ul className="flex flex-wrap gap-4">
              {quickLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-cyan-400 mb-2">Connect</h5>
            <div className="flex gap-4 mb-2">
              <a href="https://github.com/MosesCodeX-CS" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-300 hover:text-cyan-400 transition-colors">
                <i className="fab fa-github fa-lg"></i>
              </a>
              <a href="https://linkedin.com/in/moses-mwangi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-300 hover:text-cyan-400 transition-colors">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
              <a href="mailto:mwangimoses372@gmail.com" aria-label="Email" className="text-gray-300 hover:text-cyan-400 transition-colors">
                <i className="fas fa-envelope fa-lg"></i>
              </a>
            </div>
            <p className="text-gray-500 text-xs">&copy; {currentYear} Moses. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;