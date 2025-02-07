import  { useState, useEffect } from 'react';
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

  const navItems = [
    { name: 'Home', action: () => navigate('/') },
    { name: 'Categories', action: () => scrollToSection('categories') },
    { name: 'Specialties', action: () => scrollToSection('specialties') },
    { name: 'Videos', action: () => scrollToSection('videos') },
    { name: 'Reviews', action: () => scrollToSection('reviews') },
    { name: 'Menu', action: () => navigate('/menu') },
    { name: 'About Us', action: () => navigate('/about') }
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
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
            onClick={() => navigate('/custom-order')}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              isScrolled || isMenuPage
                ? 'bg-[#9e2156] text-white hover:bg-[#7d1a44]'
                : 'bg-transparent border-2 border-[#9e2156] text-[#9e2156] hover:bg-[#9e2156] hover:text-white'
            }`}
          >
            Custom Order
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;