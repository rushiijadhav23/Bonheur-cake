import { useNavigate, useLocation } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Logo from '../assets/Bonheur-logo.png';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const shopLocation = [18.6050183, 73.7574044];

  const handleNavigation = (path) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

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

  return (
    <footer className="relative bg-[#fff5f7]">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 right-0 transform rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200" className="w-full">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="text-center sm:text-left">
            <div className="mb-6 flex justify-center sm:justify-start">
              <img 
                src={Logo} 
                alt="Bonheur Logo" 
                className="h-16 w-auto object-contain mb-4"
              />
            </div>
            <p className="text-gray-600 mb-4">
              Creating moments of joy through our handcrafted cakes since 2015.
            </p>
            <div className="flex space-x-4 justify-center sm:justify-start">
              {/* <a href="#" className="text-[#9e2156] hover:text-[#7d1a44] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a> */}
              <a href="https://www.instagram.com/bonheur_cake_shop/" target="_blank" className="text-[#9e2156] hover:text-[#7d1a44] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold text-[#9e2156] mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleNavigation('/')}
                  className="text-gray-600 hover:text-[#9e2156] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/about')}
                  className="text-gray-600 hover:text-[#9e2156] transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/menu')}
                  className="text-gray-600 hover:text-[#9e2156] transition-colors cursor-pointer"
                >
                  Menu
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('specialties')} 
                  className="text-gray-600 hover:text-[#9e2156] transition-colors cursor-pointer"
                >
                  Specialties
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/custom-order')}
                  className="text-gray-600 hover:text-[#9e2156] transition-colors cursor-pointer"
                >
                  Custom Order
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold text-[#9e2156] mb-6">Contact Us</h4>
            <ul className="space-y-3">
              <li className="text-gray-600">
                <span className="font-medium">Address:</span><br />
                <a href="https://www.google.com/maps?q=HQW9+RPJ,+Chaudhari+Pk+Rd,+Yamuna+Nagar,+Shankar+Kalat+Nagar,+Wakad,+Pimpri-Chinchwad,+Maharashtra+411057" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="hover:text-[#9e2156] transition-colors"
                >
                  📍Wakad, Suyog space, in-front of Premji sweets, Chaudhary Park Road, Pimpri-Chinchwad, Maharashtra 411057
                </a>
              </li>
              <li className="text-gray-600">
                <span className="font-medium">Phone:</span><br />
                <a href="tel:+918149375761" className="hover:text-[#9e2156] transition-colors">
                  +91-81493 75761
                </a>
              </li>
              <li className="text-gray-600">
                <span className="font-medium">Email:</span><br />
                <a href="mailto:info@bonheur.com" className="hover:text-[#9e2156] transition-colors">
                  info@bonheur.com
                </a>
              </li>
            </ul>
          </div>

          {/* Map Section */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold text-[#9e2156] mb-6">Find Us</h4>
            <div className="h-48 rounded-lg overflow-hidden">
              <MapContainer 
                center={shopLocation} 
                zoom={15} 
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={shopLocation}>
                  <Popup>
                    Bonheur Cake Shop<br />
                    Wakad, Pune
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Bonheur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;