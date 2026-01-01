import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Products = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    // Cotton Products
    { id: 1, name: 'Cotton 3pc Bed Sheets', category: 'cotton', tag: 'Cotton', description: 'Premium quality cotton bed sheets set including fitted sheet, flat sheet, and pillowcase. Soft, breathable, and durable fabric perfect for comfortable sleep. Made from 100% pure cotton with excellent thread count for superior comfort and longevity.', image: '/images/cotton-bedsheets-1.jpg' },
    { id: 2, name: 'Premium Cotton Towels', category: 'cotton', tag: 'Cotton', description: 'High-quality cotton towels with excellent absorbency and softness. Available in various sizes and colors, perfect for hotels and homes. Made from premium cotton fibers for maximum comfort and durability.', image: '/images/cotton-towels-1.jpg' },
    { id: 3, name: 'Luxury Cotton Bed Sheets', category: 'cotton', tag: 'Cotton', description: 'Luxurious cotton bed sheets with elegant patterns and superior comfort. Thread count optimized for durability and softness. Features premium weaving techniques for exceptional quality and long-lasting performance.', image: '/images/cotton-bedsheets-2.jpg' },
    { id: 4, name: 'Deluxe Bath Towel Set', category: 'cotton', tag: 'Cotton', description: 'Complete bath towel set with superior absorption and quick-dry technology. Ideal for luxury hotels and premium residential use. Features reinforced edges and premium cotton construction.', image: '/images/cotton-towels-2.jpg' },
    
    // Synthetic Products
    { id: 5, name: 'Mystic Ready Made Indian Salwar', category: 'synthetic', tag: 'Synthetic', description: 'Beautiful traditional Indian salwar suits with intricate designs and premium synthetic fabric. Perfect for cultural events and daily wear. Features authentic patterns and comfortable fit for all occasions.', image: '/images/salwar-1.jpg' },
    { id: 6, name: 'Designer Salwar Suit', category: 'synthetic', tag: 'Synthetic', description: 'Elegant designer salwar suit with contemporary styling and traditional craftsmanship. Perfect for special occasions and festivities. Features modern cuts with traditional embellishments.', image: '/images/salwar-2.jpg' },
    { id: 7, name: 'Traditional Salwar Collection', category: 'synthetic', tag: 'Synthetic', description: 'Authentic traditional salwar suits with vibrant colors and intricate embroidery. Made with high-quality synthetic fabrics for durability. Perfect blend of tradition and modern comfort.', image: '/images/salwar-3.jpg' },
    { id: 8, name: 'Premium Synthetic Salwar', category: 'synthetic', tag: 'Synthetic', description: 'Premium quality synthetic salwar suits with modern designs and comfortable fit. Ideal for both casual and formal occasions. Features advanced fabric technology for enhanced comfort.', image: '/images/salwar-4.jpg' },
    
    // Towels
    { id: 9, name: 'Premium Bath Towels', category: 'towels', tag: 'Towels', description: 'Luxurious cotton bath towels with superior absorbency and softness. Perfect for hotels, spas, and premium residential use. Features premium cotton blend for maximum comfort and durability.', image: '/images/towels-1.jpg' },
    { id: 10, name: 'Hotel Quality Towels', category: 'towels', tag: 'Towels', description: 'Professional grade towels designed for commercial use. Exceptional durability and quick-dry technology for high-volume environments. Built to withstand frequent washing while maintaining softness.', image: '/images/towels-2.jpg' },
    { id: 11, name: 'Luxury Towel Collection', category: 'towels', tag: 'Towels', description: 'Elegant towel sets with premium cotton blend. Features decorative borders and superior craftsmanship for discerning customers. Perfect for luxury hotels and high-end residential use.', image: '/images/towels-3.jpg' },
    { id: 12, name: 'Spa Quality Towels', category: 'towels', tag: 'Towels', description: 'Ultra-soft towels designed for spa and wellness centers. Hypoallergenic materials with enhanced comfort and longevity. Features specialized weaving for superior absorbency.', image: '/images/towels-4.jpg' },
    
    // Bed Sheets
    { id: 13, name: 'Premium Bed Sheet Set', category: 'bedsheets', tag: 'Bed Sheets', description: 'Luxurious 3-piece bed sheet set with fitted sheet, flat sheet, and pillowcase. High thread count for ultimate comfort and durability. Features premium cotton construction for superior sleep experience.', image: '/images/bedsheets-1.jpg' },
    { id: 14, name: 'Designer Bed Sheets', category: 'bedsheets', tag: 'Bed Sheets', description: 'Elegant designer bed sheets with contemporary patterns. Perfect blend of style and comfort for modern bedrooms. Features innovative designs with premium fabric quality.', image: '/images/bedsheets-2.jpg' },
    { id: 15, name: 'Hotel Collection Sheets', category: 'bedsheets', tag: 'Bed Sheets', description: 'Professional hotel-grade bed sheets designed for commercial use. Superior quality and easy maintenance for hospitality industry. Built for durability and guest comfort.', image: '/images/bedsheets-3.jpg' },
    { id: 16, name: 'Luxury Bedding Set', category: 'bedsheets', tag: 'Bed Sheets', description: 'Premium luxury bedding collection with exquisite craftsmanship. Features elegant designs and superior comfort for discerning customers. Made with finest materials for ultimate luxury experience.', image: '/images/bedsheets-4.jpg' }
  ];

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(p => p.category === activeFilter);

  const filterProducts = (category) => {
    setActiveFilter(category);
  };

  const openProductDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/banner-hero.jpg)' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950-90 to-navy-900-70"></div>
        </div>
        <div className="relative h-full flex items-center z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our Products
            </motion.h1>
            <motion.p 
              className="text-xl text-gold-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover our extensive collection of premium textile products exported worldwide
            </motion.p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Filter Section */}
          <motion.div 
            className="mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex flex-wrap gap-4 justify-center">
              {['all', 'cotton', 'towels', 'bedsheets', 'synthetic'].map((filter, index) => (
                <motion.button
                  key={filter}
                  onClick={() => filterProducts(filter)}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    activeFilter === filter
                      ? 'bg-gold-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-gold-500 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {filter === 'all' ? 'All Products' : filter.charAt(0).toUpperCase() + filter.slice(1)}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Products Grid */}
          <motion.div 
            className="product-grid"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            key={activeFilter}
          >
            <AnimatePresence mode="wait">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  className="product-card"
                  variants={scaleIn}
                  layout
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="overflow-hidden">
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                      loading="lazy"
                      whileHover={{ scale: 1.1, transition: { duration: 0.4 } }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="bg-gold-100 text-gold-800 px-3 py-1 rounded-full text-sm font-medium">
                        {product.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-navy-800 mb-3">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{product.description}</p>
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => openProductDetails(product)}
                    >
                      <span className="text-gold-600 font-semibold hover:text-gold-700">View Details</span>
                      <motion.i
                        className="fas fa-arrow-right text-gold-600"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      ></motion.i>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="modal show"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-navy-800">{selectedProduct.name}</h2>
                <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>
              <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-64 object-cover rounded-lg mb-4" loading="lazy" />
              <div className="mb-4">
                <span className="bg-gold-100 text-gold-800 px-3 py-1 rounded-full text-sm font-medium">
                  {selectedProduct.tag}
                </span>
              </div>
              <p className="text-gray-600 mb-6">{selectedProduct.description}</p>
              <motion.button
                onClick={closeModal}
                className="w-full bg-gold-500 hover:bg-gold-600 text-white px-6 py-3 rounded-lg transition-colors font-semibold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Products;
