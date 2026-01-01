import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-navy-900 text-white px-4 py-2 rounded-lg shadow-md">
              <span className="text-2xl font-bold tracking-wide">SINFINI</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-navy-900 font-bold text-base">MARKETING FZC</div>
              <div className="text-gold-600 text-sm font-medium">Premium Textiles</div>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              to="/" 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive('/') ? 'bg-navy-100 text-navy-900' : 'text-navy-700 hover:bg-navy-100'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive('/about') ? 'bg-navy-100 text-navy-900' : 'text-navy-700 hover:bg-navy-100'
              }`}
            >
              About
            </Link>
            <Link 
              to="/products" 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive('/products') ? 'bg-navy-100 text-navy-900' : 'text-navy-700 hover:bg-navy-100'
              }`}
            >
              Products
            </Link>
            <Link 
              to="/contact" 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive('/contact') ? 'bg-navy-100 text-navy-900' : 'text-navy-700 hover:bg-navy-100'
              }`}
            >
              Contact
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-lg text-navy-700 hover:bg-navy-100" 
            onClick={toggleMobileMenu}
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-navy-200">
            <div className="px-4 py-3 space-y-1">
              <Link 
                to="/" 
                className="block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 text-navy-700 hover:bg-navy-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 text-navy-700 hover:bg-navy-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/products" 
                className="block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 text-navy-700 hover:bg-navy-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                to="/contact" 
                className="block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 text-navy-700 hover:bg-navy-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
