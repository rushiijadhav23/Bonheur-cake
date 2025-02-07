import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../assets/Bonheur-logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleNavigation = (path) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  const navItems = [
    { name: 'Home', action: () => handleNavigation('/') },
    { name: 'Menu', action: () => handleNavigation('/menu') },
    { name: 'Categories', action: () => scrollToSection('categories') },
    { name: 'Specialties', action: () => scrollToSection('specialties') },
    { name: 'Videos', action: () => scrollToSection('videos') },
    { name: 'Reviews', action: () => scrollToSection('reviews') },
    { name: 'About Us', action: () => handleNavigation('/about') }
  ];

  return (
    <>
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center">
            <a 
              href="/" 
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('/');
              }}
              className="flex items-center"
            >
              <img 
                src={Logo} 
                alt="Bonheur Logo" 
                className="h-16 w-auto object-contain"
              />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className={`transition-all duration-300 hover:text-[#9e2156] relative group ${
                  isScrolled || isMenuPage ? 'text-gray-600' : 'text-gray-800'
                }`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#9e2156] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={() => handleNavigation('/custom-order')}
              className={`hidden md:block px-4 py-2 rounded-full transition-all duration-300 ${
                isScrolled || isMenuPage
                  ? 'bg-[#9e2156] text-white hover:bg-[#7d1a44]'
                  : 'bg-transparent border-2 border-[#9e2156] text-[#9e2156] hover:bg-[#9e2156] hover:text-white'
              }`}
            >
              Custom Order
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-pink-50 transition-colors"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-[#9e2156] transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-full h-0.5 bg-[#9e2156] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-full h-0.5 bg-[#9e2156] transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 w-64 h-screen bg-white shadow-xl z-50 md:hidden"
          >
            <div className="p-6 flex flex-col h-full">
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-pink-50 rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6 text-[#9e2156]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      item.action();
                      setIsMobileMenuOpen(false);
                    }}
                    className="py-2 px-4 text-left hover:bg-pink-50 rounded-lg transition-colors text-gray-600 hover:text-[#9e2156]"
                  >
                    {item.name}
                  </button>
                ))}
                <button 
                  onClick={() => {
                    handleNavigation('/custom-order');
                    setIsMobileMenuOpen(false);
                  }}
                  className="mt-4 py-2 px-4 bg-[#9e2156] text-white rounded-lg hover:bg-[#7d1a44] transition-colors"
                >
                  Custom Order
                </button>
              </div>

              <div className="mt-auto pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-500 text-center">
                  © {new Date().getFullYear()} Bonheur
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay for mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;