import React from 'react';
import { motion } from 'framer-motion';

const Categories = () => {
  const cakes = [
    {
      id: 1,
      name: 'Cake 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, inventore.',
      price: '₹35',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'
    },
    {
      id: 2,
      name: 'Cake 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, inventore.',
      price: '₹35',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'
    },
    {
      id: 3,
      name: 'Cake 3',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, inventore.',
      price: '₹35',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'
    }
  ];

  const categories = ['Cat 1', 'Cat 2', 'Cat 3', 'Cat 4'];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-[#9e2156] mb-12"
        >
          JUST LOOK AT<br />
          THESE CAKES
        </motion.h2>

        <div className="flex justify-center space-x-8 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`text-gray-600 hover:text-[#9e2156] ${index === 0 ? 'text-[#9e2156]' : ''}`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cakes.map((cake, index) => (
            <motion.div
              key={cake.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg p-6 text-center"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                src={cake.image}
                alt={cake.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-[#9e2156] mb-2">{cake.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{cake.description}</p>
              <p className="text-xl font-bold text-gray-800 mb-4">{cake.price}</p>
              <button className="bg-[#9e2156] text-white px-8 py-2 rounded-full hover:bg-[#7d1a44] transition-colors">
                Buy Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;