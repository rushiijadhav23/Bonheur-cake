import { useState } from 'react';
import { motion } from 'framer-motion';

const CustomOrder = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const [formData, setFormData] = useState({
    // Cake Details
    cakeType: '',
    size: '',
    weight: '',
    occasion: '',
    theme: '',
    description: '',
    
    // Design Details
    designDescription: '',
    colorPreference: '',
    toppings: '',
    
    // Personal Details
    name: '',
    email: '',
    phone: '',
    address: '',
    
    // Delivery Details
    date: '',
    time: '',
    specialInstructions: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(prev => prev - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-[#fff5f7] pt-24 relative">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 right-0 transform rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-10 pb-32"> {/* Added z-10 and padding-bottom */}
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-[#9e2156] mb-4">Custom Order</h1>
            <p className="text-gray-600">Tell us about your dream cake</p>
          </motion.div>

          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex justify-between mb-2">
              {[1, 2, 3, 4].map((num) => (
                <motion.div
                  key={num}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: num * 0.1 }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step >= num ? 'bg-[#9e2156] text-white' : 'bg-pink-100 text-gray-400'
                  }`}
                >
                  {num}
                </motion.div>
              ))}
            </div>
            <div className="relative h-2 bg-pink-100 rounded-full">
              <motion.div
                className="absolute left-0 top-0 h-full bg-[#9e2156] rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            {step === 1 && (
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-semibold text-[#9e2156] mb-6">Cake Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Cake Type</label>
                    <select
                      name="cakeType"
                      value={formData.cakeType}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#9e2156] focus:border-[#9e2156]"
                    >
                      <option value="">Select Type</option>
                      <option value="chocolate">Chocolate</option>
                      <option value="vanilla">Vanilla</option>
                      <option value="redVelvet">Red Velvet</option>
                      <option value="butterscotch">Butterscotch</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Size</label>
                    <select
                      name="size"
                      value={formData.size}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#9e2156] focus:border-[#9e2156]"
                    >
                      <option value="">Select Size</option>
                      <option value="small">Small (6&quot;)</option>
                      <option value="medium">Medium (8&quot;)</option>
                      <option value="large">Large (10&quot;)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Weight (kg)</label>
                    <input
                      type="number"
                      name="weight"
                      value={formData.weight}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#9e2156] focus:border-[#9e2156]"
                      placeholder="Enter weight in kg"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Occasion</label>
                    <input
                      type="text"
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#9e2156] focus:border-[#9e2156]"
                      placeholder="e.g., Birthday, Wedding"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#9e2156] focus:border-[#9e2156]"
                    rows="4"
                    placeholder="Describe your cake requirements"
                  />
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-semibold text-[#9e2156] mb-6">Design Details</h2>
                <div>
                  <label className="block text-gray-700 mb-2">Theme</label>
                  <input
                    type="text"
                    name="theme"
                    value={formData.theme}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#9e2156] focus:border-[#9e2156]"
                    placeholder="e.g., Floral, Superhero"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Color Preference</label>
                  <input
                    type="text"
                    name="colorPreference"
                    value={formData.colorPreference}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#9e2156] focus:border-[#9e2156]"
                    placeholder="Preferred colors for the cake"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Toppings</label>
                  <input
                    type="text"
                    name="toppings"
                    value={formData.toppings}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#9e2156] focus:border-[#9e2156]"
                    placeholder="e.g., Fresh fruits, Chocolate chips"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Design Description</label>
                  <textarea
                    name="designDescription"
                    value={formData.designDescription}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#9e2156] focus:border-[#9e2156]"
                    rows="4"
                    placeholder="Describe how you want your cake to look"
                  />
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-semibold text-[#9e2156] mb-6">Personal Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#9e2156] focus:border-[#9e2156]"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#9e2156] focus:border-[#9e2156]"
                      placeholder="Your email address"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#9e2156] focus:border-[#9e2156]"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Address</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#9e2156] focus:border-[#9e2156]"
                    rows="3"
                    placeholder="Delivery address"
                  />
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-semibold text-[#9e2156] mb-6">Delivery Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Delivery Date</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#9e2156] focus:border-[#9e2156]"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Preferred Time</label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#9e2156] focus:border-[#9e2156]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Special Instructions</label>
                  <textarea
                    name="specialInstructions"
                    value={formData.specialInstructions}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#9e2156] focus:border-[#9e2156]"
                    rows="4"
                    placeholder="Any special instructions for delivery"
                  />
                </div>
              </motion.div>
            )}

            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={handlePrevious}
                className={`px-6 py-2 rounded-full transition-colors ${
                  step === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                disabled={step === 1}
              >
                Previous
              </button>
              {step < totalSteps ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-2 bg-[#9e2156] text-white rounded-full hover:bg-[#7d1a44] transition-colors"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#9e2156] text-white rounded-full hover:bg-[#7d1a44] transition-colors"
                >
                  Submit Order
                </button>
              )}
            </div>
          </motion.form>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default CustomOrder;