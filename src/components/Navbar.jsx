import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white py-4 px-6 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-[#9e2156]">EJ CAKE</a>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-600 hover:text-[#9e2156]">Cakes</a>
          <a href="#" className="text-gray-600 hover:text-[#9e2156]">Catalog</a>
          <a href="#" className="text-gray-600 hover:text-[#9e2156]">Benefits</a>
          <a href="#" className="text-gray-600 hover:text-[#9e2156]">Delivery</a>
          <a href="#" className="text-gray-600 hover:text-[#9e2156]">Reviews</a>
          <a href="#" className="text-gray-600 hover:text-[#9e2156]">Contact</a>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-gray-700 font-medium">8 800 234-34-34</span>
          <button className="bg-[#9e2156] text-white px-4 py-2 rounded-full hover:bg-[#7d1a44]">
            Request Call
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;