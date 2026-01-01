import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const About = () => {
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

  const slideInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
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
              About Us
            </motion.h1>
            <motion.p 
              className="text-xl text-gold-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Excellence in Textile Exports Since Inception
            </motion.p>
          </div>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInLeft}
            >
              <h2 className="text-4xl font-bold text-navy-900 mb-6">
                Sinfini Marketing FZC
              </h2>
              <motion.div 
                className="w-24 h-1 bg-gold-500 mb-6"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              ></motion.div>
              <p className="text-lg text-navy-700 mb-4">
                Based in Sharjah, United Arab Emirates, Sinfini Marketing FZC is a leading textile export company specializing in premium cotton and synthetic ladies' fabrics, garments, linens, and terry toweling products.
              </p>
              <p className="text-lg text-navy-700 mb-4">
                We serve international markets across Asia, Africa, and Europe, delivering excellence in quality and service. Our commitment to customer satisfaction and product excellence has made us a trusted partner in the global textile industry.
              </p>
              <p className="text-lg text-navy-700">
                With a focus on innovation and sustainability, we continue to expand our product range and market reach, ensuring our clients receive the best textiles at competitive prices.
              </p>
            </motion.div>
            <motion.div 
              className="relative h-96 rounded-xl overflow-hidden shadow-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInRight}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <img src="/images/about-us.jpg" alt="Company" className="w-full h-full object-cover" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-gold-500 rounded-xl p-12 text-white text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              variants={staggerContainer}
            >
              <motion.div variants={scaleIn}>
                <motion.div 
                  className="text-4xl font-bold mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", duration: 0.8 }}
                >
                  10+
                </motion.div>
                <div className="text-gold-100">Years Experience</div>
              </motion.div>
              <motion.div variants={scaleIn}>
                <motion.div 
                  className="text-4xl font-bold mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", duration: 0.8, delay: 0.1 }}
                >
                  50+
                </motion.div>
                <div className="text-gold-100">Countries Served</div>
              </motion.div>
              <motion.div variants={scaleIn}>
                <motion.div 
                  className="text-4xl font-bold mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", duration: 0.8, delay: 0.2 }}
                >
                  500+
                </motion.div>
                <div className="text-gold-100">Happy Clients</div>
              </motion.div>
              <motion.div variants={scaleIn}>
                <motion.div 
                  className="text-4xl font-bold mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", duration: 0.8, delay: 0.3 }}
                >
                  1000+
                </motion.div>
                <div className="text-gold-100">Products Exported</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-navy-800 mb-4">Our Foundation</h2>
            <p className="text-xl text-gray-600">The principles that guide our business</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg card-hover"
              variants={scaleIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="bg-navy-800 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-bullseye text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-4 text-center">Our Mission</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                To provide exceptional textile products and services that exceed customer expectations while building sustainable partnerships across global markets.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg card-hover"
              variants={scaleIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="bg-gold-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-eye text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-4 text-center">Our Vision</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                To become the leading textile export company in the Middle East, recognized for quality, reliability, and innovation in serving global markets.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg card-hover"
              variants={scaleIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="bg-navy-800 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-heart text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-4 text-center">Our Values</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Integrity, quality, customer focus, and continuous improvement drive everything we do in building lasting business relationships.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-navy-800 mb-4">Why Choose Sinfini Marketing?</h2>
            <p className="text-xl text-gray-600">What sets us apart in the textile export industry</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div 
              className="text-center"
              variants={scaleIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="bg-gold-100 text-gold-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-certificate text-3xl"></i>
              </div>
              <h3 className="text-lg font-bold text-navy-800 mb-2">Quality Assurance</h3>
              <p className="text-gray-600 text-sm">
                Rigorous quality control processes ensure every product meets international standards.
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              variants={scaleIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="bg-gold-100 text-gold-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-globe text-3xl"></i>
              </div>
              <h3 className="text-lg font-bold text-navy-800 mb-2">Global Network</h3>
              <p className="text-gray-600 text-sm">
                Extensive network of suppliers and logistics partners worldwide.
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              variants={scaleIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="bg-gold-100 text-gold-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-clock text-3xl"></i>
              </div>
              <h3 className="text-lg font-bold text-navy-800 mb-2">Timely Delivery</h3>
              <p className="text-gray-600 text-sm">
                Reliable shipping and logistics ensure your orders arrive on time.
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              variants={scaleIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="bg-gold-100 text-gold-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-handshake text-3xl"></i>
              </div>
              <h3 className="text-lg font-bold text-navy-800 mb-2">Personal Service</h3>
              <p className="text-gray-600 text-sm">
                Dedicated account managers provide personalized attention to your needs.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy-800 text-white">
        <motion.div 
          className="container mx-auto px-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust Sinfini Marketing for their textile export needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                <i className="fas fa-envelope mr-2"></i>Get in Touch
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/products" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy-800 px-8 py-4 rounded-lg transition-colors text-lg inline-flex items-center justify-center"
              >
                <i className="fas fa-eye mr-2"></i>View Products
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
