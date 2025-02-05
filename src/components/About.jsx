import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Master Baker",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&q=80"
    },
    {
      name: "Michael Chen",
      role: "Pastry Chef",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&q=80"
    },
    {
      name: "Emma Davis",
      role: "Cake Designer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&q=80"
    }
  ];

  return (
    <div className="bg-[#fff5f7] min-h-screen pt-20">
      {/* Our Story Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-20 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-[#9e2156] mb-4">Our Story</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Founded in 2015, Bonheur started as a small family bakery with a big dream: to create moments of joy through our handcrafted cakes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80"
                alt="Bakery"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-[#9e2156]">How We Started</h2>
              <p className="text-gray-600">
                What began as a passion for baking in a small kitchen has grown into Pune's most loved cake shop. Our journey is filled with love, creativity, and the joy of making people happy through our delicious creations.
              </p>
              <p className="text-gray-600">
                Every cake we make carries forward our tradition of excellence and innovation, making each celebration truly special.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Values Section */}
      <motion.section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-[#9e2156] text-center mb-12"
          >
            Our Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Quality', 'Creativity', 'Customer Happiness'].map((value, index) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-pink-50 p-6 rounded-lg text-center"
              >
                <h3 className="text-xl font-bold text-[#9e2156] mb-4">{value}</h3>
                <p className="text-gray-600">
                  We believe in delivering excellence in every aspect of our work.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Our Team Section */}
      <motion.section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-[#9e2156] text-center mb-12"
          >
            Meet Our Team
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="mb-4 overflow-hidden rounded-full w-48 h-48 mx-auto"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <h3 className="text-xl font-bold text-[#9e2156] mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About