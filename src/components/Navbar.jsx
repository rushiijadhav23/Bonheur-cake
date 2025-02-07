import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isMenuPage = location.pathname === '/menu';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center">
          <a 
            href="/" 
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
            }}
            className="text-2xl font-bold text-[#9e2156]"
          >
            BONHEUR
          </a>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          {[
            { name: 'About', path: '/about' },
            { name: 'Menu', path: '/menu' },
            { name: 'Catalog', path: '#' },
            { name: 'Benefits', path: '#' },
            { name: 'Contact', path: '#' }
          ].map((item, index) => (
            <a
              key={index}
              href={item.path}
              onClick={(e) => {
                e.preventDefault();
                navigate(item.path);
              }}
              className={`transition-all duration-300 hover:text-[#9e2156] relative group ${
                isScrolled || isMenuPage ? 'text-gray-600' : 'text-gray-800'
              } ${location.pathname === item.path ? 'text-[#9e2156]' : ''}`}
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#9e2156] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <span className={`font-medium transition-colors duration-300 ${
            isScrolled || isMenuPage ? 'text-gray-700' : 'text-gray-800'
          }`}>
            +91-81493 75761
          </span>
          <button className={`px-4 py-2 rounded-full transition-all duration-300 ${
            isScrolled || isMenuPage
              ? 'bg-[#9e2156] text-white hover:bg-[#7d1a44]'
              : 'bg-transparent border-2 border-[#9e2156] text-[#9e2156] hover:bg-[#9e2156] hover:text-white'
          }`}>
            Request Call
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar
