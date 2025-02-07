import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Specialties = () => {
  const navigate = useNavigate();
  
  const specialties = [
    {
      title: "Signature Cakes",
      description: "Our master bakers' finest creations",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=80",
      color: "#fce7f3"
    },
    {
      title: "Custom Design",
      description: "Personalized cakes for your special moments",
      image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=500&q=80",
      color: "#fbcfe8"
    },
    {
      title: "Seasonal Specials",
      description: "Limited edition flavors and designs",
      image: "https://images.unsplash.com/photo-1562777717-dc6984f65a63?w=500&q=80",
      color: "#f9a8d4"
    }
  ];

  const handleNavigation = (path) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  return (
    <div className="py-20 bg-white relative overflow-hidden">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 right-0 transform rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#fff5f7" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#9e2156] mb-4">Our Specialties</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our unique collection of handcrafted cakes, where artistry meets exceptional taste
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div 
                className="absolute inset-0 rounded-2xl transform -rotate-6 transition-transform group-hover:rotate-0"
                style={{ backgroundColor: specialty.color }}
              ></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-lg">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="mb-6 overflow-hidden rounded-lg"
                >
                  <img
                    src={specialty.image}
                    alt={specialty.title}
                    className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                </motion.div>
                <h3 className="text-xl font-bold text-[#9e2156] mb-2">{specialty.title}</h3>
                <p className="text-gray-600">{specialty.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavigation('/about')}
                  className="mt-4 px-6 py-2 bg-[#9e2156] text-white rounded-full hover:bg-[#7d1a44] transition-colors"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-2xl font-semibold text-[#9e2156] mb-6">
            Every cake tells a story
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-[#9e2156] text-white rounded-full hover:bg-[#7d1a44] transition-colors"
            onClick={() => handleNavigation('/custom-order')}
          >
            Order Your Custom Cake
          </motion.button>
        </motion.div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#fff5f7" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      {/* Decorative elements */}
      <motion.div
        animate={{
          rotate: 360,
          transition: { duration: 20, repeat: Infinity, ease: "linear" }
        }}
        className="absolute top-20 -left-20 w-40 h-40 bg-pink-100 rounded-full opacity-20"
      />
      <motion.div
        animate={{
          rotate: -360,
          transition: { duration: 15, repeat: Infinity, ease: "linear" }
        }}
        className="absolute bottom-20 -right-20 w-60 h-60 bg-pink-200 rounded-full opacity-20"
      />
    </div>
  );
};

export default Specialties;