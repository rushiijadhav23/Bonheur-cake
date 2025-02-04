import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CakeIngredients = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [rotation, setRotation] = useState(0);

  const cakes = [
    {
      id: 1,
      name: 'Strawberry Cheesecake',
      description: 'Delicate cheesecake with strawberry topping',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
      angle: 0
    },
    {
      id: 2,
      name: 'Blueberry Cheesecake',
      description: 'Light cheesecake with blueberry jam',
      image: 'https://images.unsplash.com/photo-1570145820237-4d1c237d7e31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
      angle: 72
    },
    {
      id: 3,
      name: 'Raspberry Cheesecake',
      description: 'Classic cheesecake with raspberry sauce',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
      angle: 144
    },
    {
      id: 4,
      name: 'Chocolate Cheesecake',
      description: 'Chocolate cheesecake with mixed berries',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80',
      angle: 216
    },
    {
      id: 5,
      name: 'Caramel Cheesecake',
      description: 'Caramel cheesecake with nuts',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80',
      angle: 288
    }
  ];

  const handleCakeClick = (index) => {
    const newRotation = -cakes[index].angle;
    setRotation(newRotation);
    setSelectedIndex(index);
  };

  return (
    <div className="relative bg-[#fff5f7] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-[#9e2156] mb-12"
        >
          OUR CAKES
        </motion.h2>

        <div className="relative w-[600px] h-[600px] mx-auto">
          {/* Center cake (knob) */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-64 h-64 -translate-x-1/2 -translate-y-1/2"
            animate={{ rotate: rotation }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <img
              src={cakes[selectedIndex].image}
              alt="Selected Cake"
              className="w-full h-full object-cover rounded-full shadow-xl cursor-pointer"
            />
            <div className="absolute top-1/2 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 bg-[#9e2156] rounded-full" />
          </motion.div>

          {/* Surrounding cakes */}
          {cakes.map((cake, index) => {
            const angle = (cake.angle * Math.PI) / 180;
            const radius = 220;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <motion.div
                key={cake.id}
                className="absolute top-1/2 left-1/2 w-24 h-24 -translate-x-1/2 -translate-y-1/2"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
                whileHover={{ scale: 1.1 }}
                onClick={() => handleCakeClick(index)}
              >
                <div className={`w-full h-full rounded-full overflow-hidden cursor-pointer border-4 ${selectedIndex === index ? 'border-[#9e2156]' : 'border-white'} shadow-lg`}>
                  <img
                    src={cake.image}
                    alt={cake.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected cake info */}
        <motion.div
          key={selectedIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mt-12"
        >
          <h3 className="text-2xl font-bold text-[#9e2156] mb-4">
            {cakes[selectedIndex].name}
          </h3>
          <p className="text-gray-600 mb-8">
            {cakes[selectedIndex].description}
          </p>
          <button className="bg-[#9e2156] text-white px-8 py-3 rounded-full hover:bg-[#7d1a44] transition-colors">
            Order for $35
          </button>
        </motion.div>
      </div>

      {/* Wave SVG */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default CakeIngredients;