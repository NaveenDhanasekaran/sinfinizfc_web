import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <i className="fas fa-industry text-gold-500 text-2xl"></i>
              <span className="text-xl font-bold">Sinfini Marketing Fzc</span>
            </div>
            <p className="text-gray-300">
              Leading textile export company based in Sharjah, UAE, delivering quality products worldwide.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold-400">Contact Info</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <i className="fas fa-map-marker-alt mr-2"></i>
                Sharjah, UAE
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Sinfini Marketing FZC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
