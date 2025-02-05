import React, { useState } from 'react';

const specialties = [
  { 
    name: 'Swiss Delight Chocolate', 
    price: 300,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=80'
  },
  { 
    name: 'Black Forest', 
    price: 300,
    image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=500&q=80'
  },
  { 
    name: 'Fresh Pineapple', 
    price: 300,
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=500&q=80'
  },
  { 
    name: 'Chocolate Zebra', 
    price: 300,
    image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=500&q=80'
  },
  { 
    name: 'Butterscotch', 
    price: 300,
    image: 'https://images.unsplash.com/photo-1559620192-032c4bc4674e?w=500&q=80'
  },
  { 
    name: 'Choco Chips', 
    price: 400,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&q=80'
  },
  { 
    name: 'White Forest', 
    price: 400,
    image: 'https://images.unsplash.com/photo-1562777717-dc6984f65a63?w=500&q=80'
  },
  { 
    name: 'Dutch Truffle', 
    price: 400,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=80'
  },
  { 
    name: 'Chocolate Sunshine', 
    price: 400,
    image: 'https://images.unsplash.com/photo-1559620192-032c4bc4674e?w=500&q=80'
  },
  { 
    name: 'Blueberry Premium', 
    price: 400,
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&q=80'
  },
  { 
    name: 'Chocolate Truffle', 
    price: 400,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=80'
  },
  { 
    name: 'kit kat cake', 
    price: 500,
    image: 'https://images.unsplash.com/photo-1542826438-bd32f43d626f?w=500&q=80'
  },
  { 
    name: 'Red Velvet', 
    price: 500,
    image: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=500&q=80'
  },
  { 
    name: 'Death by Chocolate', 
    price: 500,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=80'
  },
  { 
    name: 'Fresh Fruit', 
    price: 500,
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&q=80'
  },
  { 
    name: 'Rasmalai Cake', 
    price: 500,
    image: 'https://images.unsplash.com/photo-1542826438-bd32f43d626f?w=500&q=80'
  },
  { 
    name: 'Oreo Cake', 
    price: 500,
    image: 'https://images.unsplash.com/photo-1567171466295-4afa63d45416?w=500&q=80'
  },
];

const cakeBites = [
  { 
    name: 'Cup Cake', 
    price: 30,
    image: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?w=500&q=80'
  },
  { 
    name: 'Cheesecake', 
    price: 120,
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500&q=80'
  },
  { 
    name: 'Muffins', 
    price: 60,
    image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=500&q=80'
  },
  { 
    name: 'Donuts', 
    price: 60,
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&q=80'
  },
  { 
    name: 'Brownie', 
    price: 80,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&q=80'
  },
  { 
    name: 'Choco lava', 
    price: 60,
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&q=80'
  },
  { 
    name: 'Bonheur Special', 
    price: 80,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=80'
  },
];

const Menu = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white relative  border-r-2 border-l-2 shadow-lg shadow-black border-[#9e2156]">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#9e2156] mb-1">BONHEUR</h1>
        <p className="text-menu-brown text-sm tracking-wider">WAKAD, PUNE</p>
      </div>

      {/* Preview Box */}
      {hoveredItem && (
        <div className="fixed top-1/2 right-8 transform -translate-y-1/2 w-72 h-72 rounded-lg overflow-hidden shadow-lg">
          <img 
            src={hoveredItem.image} 
            alt={hoveredItem.name}
            className="w-full h-full object-cover transition-opacity duration-300"
          />
        </div>
      )}

      {/* Specialties Section */}
      <div className="mb-12">
        <h2 className="font-serif text-[#9e2156] text-3xl text-menu-brown text-center mb-8">Specialties</h2>
        <div className="space-y-2">
          {specialties.map((item, index) => (
            <div 
              key={index} 
              className="flex justify-between items-center p-2 hover:bg-pink-50 rounded-md transition-colors cursor-pointer"
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <span className="text-gray-800">{item.name}</span>
              <span className="text-gray-800">{item.price}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Cake Bites Section */}
      <div className="mb-12">
        <h2 className="font-serif text-3xl text-menu-brown text-center text-[#9e2156] mb-8">Cake bites</h2>
        <div className="space-y-2">
          {cakeBites.map((item, index) => (
            <div 
              key={index} 
              className="flex justify-between items-center p-2 hover:bg-pink-50 rounded-md transition-colors cursor-pointer"
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <span className="text-gray-800">{item.name}</span>
              <span className="text-gray-800">{item.price}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Information */}
      <div className="text-center mt-8">
        <p className="text-gray-800 font-medium mb-1  text-[#9e2156]">FOR DELIVERY,</p>
        <p className="text-gray-800  text-[#9e2156]">CONTACT +91-81493 75761</p>
      </div>
    </div>
  );
};

export default Menu;
