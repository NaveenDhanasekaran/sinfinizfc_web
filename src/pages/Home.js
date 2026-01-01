import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const featuredProducts = [
    {
      id: 1,
      name: 'Cotton 3pc Bed Sheets',
      category: 'Bed Linens',
      description: 'Premium quality cotton bed sheets set including fitted sheet, flat sheet, and pillowcase. Soft, breathable, and durable fabric perfect for comfortable sleep.',
      image: '/images/cotton-bedsheets-1.jpg'
    },
    {
      id: 2,
      name: 'Premium Cotton Towels',
      category: 'Bath Linens',
      description: 'High-quality cotton towels with excellent absorbency and softness. Available in various sizes and colors, perfect for hotels and homes.',
      image: '/images/cotton-towels-1.jpg'
    },
    {
      id: 3,
      name: 'Mystic Ready Made Indian Salwar',
      category: 'Ladies Garments',
      description: 'Beautiful traditional Indian salwar suits with intricate designs and premium fabric. Perfect for cultural events and daily wear.',
      image: '/images/salwar-1.jpg'
    },
    {
      id: 4,
      name: 'Luxury Cotton Bed Sheets',
      category: 'Bed Linens',
      description: 'Luxurious cotton bed sheets with elegant patterns and superior comfort. Thread count optimized for durability and softness.',
      image: '/images/cotton-bedsheets-2.jpg'
    },
    {
      id: 5,
      name: 'Deluxe Bath Towel Set',
      category: 'Bath Linens',
      description: 'Complete bath towel set with superior absorption and quick-dry technology. Ideal for luxury hotels and premium residential use.',
      image: '/images/cotton-towels-2.jpg'
    },
    {
      id: 6,
      name: 'Designer Salwar Suit',
      category: 'Ladies Garments',
      description: 'Elegant designer salwar suit with contemporary styling and traditional craftsmanship. Perfect for special occasions and festivities.',
      image: '/images/salwar-2.jpg'
    }
  ];

  const openProductDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  // Animation variants
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
        staggerChildren: 0.2
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-600 overflow-hidden">
        <div className="hero-slide">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: 'url(/images/banner-hero.jpg)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950-90 to-navy-900-70"></div>
          </div>
          <div className="hero-content">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <motion.h1 
                  className="hero-title"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Global Supplier of
                </motion.h1>
                <motion.p 
                  className="hero-subtitle"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Quality Fabrics, Garments & Linens
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <Link 
                    to="/products" 
                    className="inline-flex items-center space-x-2 bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <span>Explore Products</span>
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-navy-800 mb-4">Why Choose Sinfini Marketing?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to delivering exceptional textile products with unmatched quality and service
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div 
              className="text-center card-hover bg-white p-8 rounded-xl shadow-md"
              variants={scaleIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="bg-gold-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <i className="fas fa-award text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-3">Premium Quality</h3>
              <p className="text-gray-700">
                We source and export only the finest textile products, ensuring exceptional quality in every shipment.
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center card-hover bg-white p-8 rounded-xl shadow-md"
              variants={scaleIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="bg-gold-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <i className="fas fa-shipping-fast text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-3">Global Delivery</h3>
              <p className="text-gray-700">
                Reliable worldwide shipping with tracking and timely delivery to your doorstep.
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center card-hover bg-white p-8 rounded-xl shadow-md"
              variants={scaleIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="bg-gold-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <i className="fas fa-headset text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-3">24/7 Support</h3>
              <p className="text-gray-700">
                Our dedicated team is always ready to assist you with your textile export needs.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-navy-800 mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600">Discover our premium textile collection</p>
          </motion.div>
          
          <motion.div 
            className="product-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {featuredProducts.map((product, index) => (
              <motion.div 
                key={product.id} 
                className="product-card"
                variants={scaleIn}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
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
                  <div className="mb-2">
                    <span className="bg-gold-100 text-gold-800 px-2 py-1 rounded-full text-xs font-medium">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-navy-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm line-clamp-3">{product.description}</p>
                  <div className="mt-4">
                    <span 
                      className="text-gold-600 font-semibold hover:text-gold-700 cursor-pointer inline-flex items-center group"
                      onClick={() => openProductDetails(product)}
                    >
                      View Details 
                      <motion.i 
                        className="fas fa-arrow-right ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      ></motion.i>
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Link to="/products" className="btn-primary text-lg px-8 py-4">
              View All Products <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-navy-800 text-white">
        <motion.div 
          className="container mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div variants={scaleIn}>
              <motion.div 
                className="text-4xl font-bold text-gold-400 mb-2"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                500+
              </motion.div>
              <div className="text-lg">Happy Clients</div>
            </motion.div>
            <motion.div variants={scaleIn}>
              <motion.div 
                className="text-4xl font-bold text-gold-400 mb-2"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                50+
              </motion.div>
              <div className="text-lg">Countries Served</div>
            </motion.div>
            <motion.div variants={scaleIn}>
              <motion.div 
                className="text-4xl font-bold text-gold-400 mb-2"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                1000+
              </motion.div>
              <div className="text-lg">Products Exported</div>
            </motion.div>
            <motion.div variants={scaleIn}>
              <motion.div 
                className="text-4xl font-bold text-gold-400 mb-2"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                10+
              </motion.div>
              <div className="text-lg">Years Experience</div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <motion.div 
          className="container mx-auto px-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold text-navy-800 mb-4">Ready to Start Your Order?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get in touch with our team today and let us help you find the perfect textile products for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                <i className="fas fa-envelope mr-2"></i>Contact Us
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/about" 
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-4 rounded-lg transition-colors text-lg inline-flex items-center justify-center"
              >
                <i className="fas fa-info-circle mr-2"></i>Learn More
              </Link>
            </motion.div>
          </div>
        </motion.div>
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
                  {selectedProduct.category}
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

export default Home;
