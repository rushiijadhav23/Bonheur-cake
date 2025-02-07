import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Wedding Cakes',
    'Kids Theme',
    'Birthday Cakes',
    'Pastries',
    'Anniversary'
  ];

  const cakes = [
    {
      id: 1,
      name: 'Classic Wedding Cake',
      description: 'Elegant three-tier vanilla cake with buttercream frosting',
      price: '₹3500',
      image: 'https://images.unsplash.com/photo-1560180474-e8563fd75bab?w=800',
      category: 'Wedding Cakes'
    },
    {
      id: 2,
      name: 'Spiderman Theme Cake',
      description: 'Perfect superhero cake for young fans',
      price: '₹1200',
      image: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=800',
      category: 'Kids Theme'
    },
    {
      id: 3,
      name: 'Chocolate Birthday Cake',
      description: 'Rich chocolate cake with ganache filling',
      price: '₹800',
      image: 'https://images.unsplash.com/photo-1562777717-dc6984f65a63?w=800',
      category: 'Birthday Cakes'
    },
    {
      id: 4,
      name: 'Fruit Pastry',
      description: 'Light and fresh pastry topped with seasonal fruits',
      price: '₹150',
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800',
      category: 'Pastries'
    },
    {
      id: 5,
      name: 'Golden Anniversary Cake',
      description: 'Luxurious gold-themed celebration cake',
      price: '₹2500',
      image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=800',
      category: 'Anniversary'
    },
    {
      id: 6,
      name: 'Princess Castle Cake',
      description: 'Magical castle cake for little princesses',
      price: '₹1500',
      image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800',
      category: 'Kids Theme'
    },
    {
      id: 7,
      name: 'Red Velvet Birthday',
      description: 'Classic red velvet with cream cheese frosting',
      price: '₹900',
      image: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=800',
      category: 'Birthday Cakes'
    },
    {
      id: 8,
      name: 'Chocolate Eclair',
      description: 'Traditional French pastry with chocolate filling',
      price: '₹120',
      image: 'https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?w=800',
      category: 'Pastries'
    }
  ];

  const filteredCakes = selectedCategory === 'All' 
    ? cakes 
    : cakes.filter(cake => cake.category === selectedCategory);

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-[#9e2156] mb-12"
        >
          EXPLORE OUR<br />
          DELICIOUS COLLECTION
        </motion.h2>

        <div className="flex justify-center space-x-4 mb-12 overflow-x-auto pb-4">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-all whitespace-nowrap
                ${selectedCategory === category 
                  ? 'bg-[#9e2156] text-white' 
                  : 'text-gray-600 hover:text-[#9e2156] hover:bg-pink-50'}`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-12"
        >
          {filteredCakes.map((cake) => (
            <SwiperSlide key={cake.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-lg p-6 text-center shadow-lg h-full"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative h-64 mb-4 overflow-hidden rounded-lg"
                >
                  <img
                    src={cake.image}
                    alt={cake.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-2 right-2 bg-[#9e2156] text-white px-3 py-1 rounded-full text-sm">
                    {cake.category}
                  </div>
                </motion.div>
                <h3 className="text-xl font-semibold text-[#9e2156] mb-2">{cake.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{cake.description}</p>
                <p className="text-xl font-bold text-gray-800 mb-4">{cake.price}</p>
                <button className="bg-[#9e2156] text-white px-8 py-2 rounded-full hover:bg-[#7d1a44] transition-colors">
                  Order Now
                </button>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Categories;