import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration - using environment variables
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      // Check if EmailJS is configured
      if (serviceId === 'YOUR_SERVICE_ID' || !serviceId) {
        // EmailJS not configured - show success message anyway for demo
        console.log('Form data:', formData);
        showNotification('Thank you for your message! We will get back to you soon. (Demo mode - EmailJS not configured)', 'success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: ''
        });
        setIsSubmitting(false);
        return;
      }

      // Send email to business owner
      await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: process.env.REACT_APP_BUSINESS_EMAIL || 'info@sinfinimarketing.com',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          company: formData.company,
          subject: formData.subject,
          message: formData.message
        },
        publicKey
      );

      // Send thank you email to client
      const thankYouTemplateId = process.env.REACT_APP_EMAILJS_THANKYOU_TEMPLATE_ID;
      if (thankYouTemplateId) {
        await emailjs.send(
          serviceId,
          thankYouTemplateId,
          {
            to_email: formData.email,
            to_name: formData.name,
            subject: 'Thank you for contacting Sinfini Marketing FZC'
          },
          publicKey
        );
      }

      showNotification('Message sent successfully! We will get back to you soon.', 'success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      showNotification('Failed to send message. Please try again or contact us directly.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
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
        staggerChildren: 0.15
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

  const faqs = [
    {
      question: 'What types of textiles do you export?',
      answer: 'We export a wide range of textiles including cotton, silk, wool, synthetic fabrics, and specialty materials. Our product catalog includes fabrics for fashion, home textiles, industrial applications, and more.'
    },
    {
      question: 'What are your minimum order quantities?',
      answer: 'Minimum order quantities vary by product type and destination. We work with both small and large orders, and our team can provide specific MOQ information based on your requirements.'
    },
    {
      question: 'How long does shipping take?',
      answer: 'Shipping times depend on the destination and shipping method. Typically, sea freight takes 2-4 weeks, while air freight takes 3-7 days. We provide tracking information for all shipments.'
    },
    {
      question: 'Do you provide samples?',
      answer: 'Yes, we provide samples for most of our products. Sample costs and shipping charges may apply, which can often be credited against your first order.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Notification */}
      {notification && (
        <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-md ${
          notification.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
        }`}>
          <div className="flex items-center space-x-2">
            <i className={`fas ${notification.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}`}></i>
            <span>{notification.message}</span>
            <button onClick={() => setNotification(null)} className="ml-auto">
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      )}

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
              Contact Us
            </motion.h1>
            <motion.p 
              className="text-xl text-gold-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Get in touch with our team for all your textile export needs
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <h2 className="text-2xl font-bold text-navy-800 mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="form-group">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-control"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-control"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="form-group">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="+971 XX XXX XXXX"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Your company name"
                    />
                  </div>
                </div>
                
                <div className="form-group mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-control"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="quote">Request Quote</option>
                    <option value="partnership">Partnership</option>
                    <option value="support">Customer Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="form-group mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="form-control"
                    placeholder="Tell us about your requirements or inquiry..."
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full text-lg py-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>Sending...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane mr-2"></i>Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div 
              className="space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {/* Contact Details */}
              <motion.div 
                className="bg-white p-8 rounded-xl shadow-lg"
                variants={scaleIn}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <h3 className="text-xl font-bold text-navy-800 mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gold-100 text-gold-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-map-marker-alt text-lg"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-800 mb-1">Address</h4>
                      <p className="text-gray-600">
                        Sinfini Marketing FZC<br />
                        Sharjah, United Arab Emirates
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-gold-100 text-gold-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-clock text-lg"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-800 mb-1">Business Hours</h4>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Quick Contact */}
              <motion.div 
                className="bg-navy-800 text-white p-8 rounded-xl"
                variants={scaleIn}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <h3 className="text-xl font-bold mb-4">Need Immediate Assistance?</h3>
                <p className="text-gray-200 mb-6">
                  Our team is ready to help you with your textile export requirements.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Find Us</h2>
            <p className="text-xl text-navy-700">Located in the heart of Sharjah, UAE</p>
          </motion.div>
          
          <motion.div 
            className="bg-gray-100 rounded-xl overflow-hidden shadow-lg" 
            style={{ height: '450px' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scaleIn}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115681.57939721936!2d55.47515!3d25.33063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f43348a67a7b%3A0x1950c5a866777b1c!2sSharjah%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1699123456789!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sinfini Marketing Location"
            ></iframe>
          </motion.div>
          
          <motion.div 
            className="mt-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="inline-flex items-center space-x-2 bg-navy-900 text-white px-6 py-3 rounded-lg">
              <i className="fas fa-map-marker-alt text-gold-400"></i>
              <span className="font-semibold">Sinfini Marketing FZC, Sharjah, UAE</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-navy-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Common questions about our services</p>
          </motion.div>
          
          <motion.div 
            className="max-w-3xl mx-auto space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {faqs.map((faq, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-lg shadow-sm"
                variants={scaleIn}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <button
                  className="w-full text-left p-6 focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-navy-800">{faq.question}</h3>
                    <i className={`fas fa-chevron-down text-gold-500 transform transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}></i>
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
