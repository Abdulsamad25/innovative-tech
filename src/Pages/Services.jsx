/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaCode,
  FaShoppingCart,
  FaDesktop,
  FaShare,
  FaBullhorn,
  FaPen,
  FaSearch,
  FaChartLine,
  FaCogs,
  FaCloud,
} from "react-icons/fa";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div className="relative bg-slate-900 py-16 min-h-screen text-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      {/* Hero Section */}
      <motion.div 
        className="z-10 relative mb-20 pt-10 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        data-aos="fade-up"
      >
        <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-400 mb-6 p-1 rounded-2xl">
          <div className="bg-slate-900 px-8 py-4 rounded-xl">
            <h1 className="font-bold text-blue-400 text-xl lg:text-3xl">Our Services</h1>
          </div>
        </div>
        <div className="bg-slate-800/30 mx-auto p-6 border border-slate-700 rounded-2xl max-w-3xl">
          <p className="text-gray-300 text-sm lg:text-xl leading-relaxed">
            We offer a <span className="font-semibold text-blue-400">comprehensive suite</span> of tech services to help your business
            thrive in the <span className="font-semibold text-blue-400">digital age</span>.
          </p>
        </div>
      </motion.div>

      {/* Container */}
      <div className="z-10 relative mx-auto px-6 max-w-6xl">
        {/* Web Development Section */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="flex items-center gap-3 mb-12">
            <div className="bg-blue-500 rounded-full w-1 h-10"></div>
            <h2 className="font-bold text-blue-400 text-xl lg:text-2xl">
              Web Development
            </h2>
          </div>
          <div className="gap-8 grid md:grid-cols-3">
            {/* Custom Websites */}
            <motion.div 
              className="group bg-slate-800/30 shadow-lg p-8 border border-slate-600 hover:border-blue-500/50 rounded-2xl transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="flex justify-center items-center bg-blue-600 shadow-lg group-hover:shadow-blue-500/25 mb-6 rounded-xl w-16 h-16">
                <FaCode className="text-white text-2xl" />
              </div>
              <h3 className="mb-4 font-semibold text-blue-400 group-hover:text-blue-300 text-lg lg:text-2xl transition-colors">
                Custom Websites
              </h3>
              <p className="text-gray-300 group-hover:text-gray-200 text-sm leading-relaxed transition-colors">
                <span className="font-semibold text-blue-400">Tailored websites</span> designed to reflect your brand and engage your
                audience with modern, responsive design.
              </p>
            </motion.div>

            {/* E-commerce Solutions */}
            <motion.div 
              className="group bg-slate-800/30 shadow-lg p-8 border border-slate-600 hover:border-blue-500/50 rounded-2xl transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex justify-center items-center bg-blue-600 shadow-lg group-hover:shadow-blue-500/25 mb-6 rounded-xl w-16 h-16">
                <FaShoppingCart className="text-white text-2xl" />
              </div>
              <h3 className="mb-4 font-semibold text-blue-400 group-hover:text-blue-300 text-lg lg:text-2xl transition-colors">
                E-commerce Solutions
              </h3>
              <p className="text-gray-300 group-hover:text-gray-200 text-sm leading-relaxed transition-colors">
                <span className="font-semibold text-blue-400">Robust e-commerce platforms</span> to drive online sales and customer
                loyalty with secure payment integration.
              </p>
            </motion.div>

            {/* Web Applications */}
            <motion.div 
              className="group bg-slate-800/30 shadow-lg p-8 border border-slate-600 hover:border-blue-500/50 rounded-2xl transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="flex justify-center items-center bg-blue-600 shadow-lg group-hover:shadow-blue-500/25 mb-6 rounded-xl w-16 h-16">
                <FaDesktop className="text-white text-2xl" />
              </div>
              <h3 className="mb-4 font-semibold text-blue-400 group-hover:text-blue-300 text-lg lg:text-2xl transition-colors">
                Web Applications
              </h3>
              <p className="text-gray-300 group-hover:text-gray-200 text-sm leading-relaxed transition-colors">
                <span className="font-semibold text-blue-400">Scalable web applications</span> built for performance and user
                experience with cutting-edge technology.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Digital Marketing Section */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="flex items-center gap-3 mb-12">
            <div className="bg-blue-500 rounded-full w-1 h-10"></div>
            <h2 className="font-bold text-blue-400 text-xl lg:text-2xl">
              Digital Marketing
            </h2>
          </div>
          <div className="gap-8 grid md:grid-cols-3">
            {/* Social Media Management */}
            <motion.div 
              className="group bg-slate-800/30 shadow-lg p-8 border border-slate-600 hover:border-blue-500/50 rounded-2xl transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="flex justify-center items-center bg-blue-600 shadow-lg group-hover:shadow-blue-500/25 mb-6 rounded-xl w-16 h-16">
                <FaShare className="text-white text-2xl" />
              </div>
              <h3 className="mb-4 font-semibold text-blue-400 group-hover:text-blue-300 text-lg lg:text-2xl transition-colors">
                Social Media Management
              </h3>
              <p className="text-gray-300 group-hover:text-gray-200 text-sm leading-relaxed transition-colors">
                <span className="font-semibold text-blue-400">Strategic social media campaigns</span> to build brand awareness and
                community engagement across all platforms.
              </p>
            </motion.div>

            {/* Pay-Per-Click (PPC) Advertising */}
            <motion.div 
              className="group bg-slate-800/30 shadow-lg p-8 border border-slate-600 hover:border-blue-500/50 rounded-2xl transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex justify-center items-center bg-blue-600 shadow-lg group-hover:shadow-blue-500/25 mb-6 rounded-xl w-16 h-16">
                <FaBullhorn className="text-white text-2xl" />
              </div>
              <h3 className="mb-4 font-semibold text-blue-400 group-hover:text-blue-300 text-lg lg:text-2xl transition-colors">
                Pay-Per-Click (PPC)
              </h3>
              <p className="text-gray-300 group-hover:text-gray-200 text-sm leading-relaxed transition-colors">
                <span className="font-semibold text-blue-400">Targeted PPC campaigns</span> to maximize your advertising ROI
                with data-driven optimization.
              </p>
            </motion.div>

            {/* Content Marketing */}
            <motion.div 
              className="group bg-slate-800/30 shadow-lg p-8 border border-slate-600 hover:border-blue-500/50 rounded-2xl transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={ { duration: 0.3 }}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="flex justify-center items-center bg-blue-600 shadow-lg group-hover:shadow-blue-500/25 mb-6 rounded-xl w-16 h-16">
                <FaPen className="text-white text-2xl" />
              </div>
              <h3 className="mb-4 font-semibold text-blue-400 group-hover:text-blue-300 text-lg lg:text-2xl transition-colors">
                Content Marketing
              </h3>
              <p className="text-gray-300 group-hover:text-gray-200 text-sm leading-relaxed transition-colors">
                <span className="font-semibold text-blue-400">Engaging content</span> that attracts, informs, and converts your
                target audience with compelling storytelling.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* SEO & Analytics Section */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="flex items-center gap-3 mb-12">
            <div className="bg-blue-500 rounded-full w-1 h-10"></div>
            <h2 className="font-bold text-blue-400 text-xl lg:text-2xl">
              SEO & Analytics
            </h2>
          </div>
          <div className="gap-8 grid md:grid-cols-2 mx-auto max-w-5xl">
            {/* Search Engine Optimization */}
            <motion.div 
              className="group bg-slate-800/30 shadow-lg p-8 border border-slate-600 hover:border-blue-500/50 rounded-2xl transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="flex justify-center items-center bg-blue-600 shadow-lg group-hover:shadow-blue-500/25 mb-6 rounded-xl w-16 h-16">
                <FaSearch className="text-white text-2xl" />
              </div>
              <h3 className="mb-4 font-semibold text-blue-400 group-hover:text-blue-300 text-lg lg:text-2xl transition-colors">
                Search Engine Optimization
              </h3>
              <p className="text-gray-300 group-hover:text-gray-200 text-sm leading-relaxed transition-colors">
                <span className="font-semibold text-blue-400">Optimizing your website</span> to rank higher in search engine results
                with proven SEO strategies and techniques.
              </p>
            </motion.div>

            {/* Performance Tracking */}
            <motion.div 
              className="group bg-slate-800/30 shadow-lg p-8 border border-slate-600 hover:border-blue-500/50 rounded-2xl transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex justify-center items-center bg-blue-600 shadow-lg group-hover:shadow-blue-500/25 mb-6 rounded-xl w-16 h-16">
                <FaChartLine className="text-white text-2xl" />
              </div>
              <h3 className="mb-4 font-semibold text-blue-400 group-hover:text-blue-300 text-lg lg:text-2xl transition-colors">
                Performance Tracking
              </h3>
              <p className="text-gray-300 group-hover:text-gray-200 text-sm leading-relaxed transition-colors">
                <span className="font-semibold text-blue-400">In-depth analytics</span> to measure performance and refine your
                strategies with comprehensive reporting.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Programming & Software Section */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="flex items-center gap-3 mb-12">
            <div className="bg-blue-500 rounded-full w-1 h-10"></div>
            <h2 className="font-bold text-blue-400 text-xl lg:text-2xl">
              Programming & Software
            </h2>
          </div>
          <div className="gap-8 grid md:grid-cols-2 mx-auto max-w-5xl">
            {/* Custom Software Solutions */}
            <motion.div 
              className="group bg-slate-800/30 shadow-lg p-8 border border-slate-600 hover:border-blue-500/50 rounded-2xl transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="flex justify-center items-center bg-blue-600 shadow-lg group-hover:shadow-blue-500/25 mb-6 rounded-xl w-16 h-16">
                <FaCogs className="text-white text-2xl" />
              </div>
              <h3 className="mb-4 font-semibold text-blue-400 group-hover:text-blue-300 text-lg lg:text-2xl transition-colors">
                Custom Software Solutions
              </h3>
              <p className="text-gray-300 group-hover:text-gray-200 text-sm leading-relaxed transition-colors">
                <span className="font-semibold text-blue-400">Bespoke software</span> tailored to your specific business needs and
                processes with scalable architecture.
              </p>
            </motion.div>

            {/* API Development & Integration */}
            <motion.div 
              className="group bg-slate-800/30 shadow-lg p-8 border border-slate-600 hover:border-blue-500/50 rounded-2xl transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex justify-center items-center bg-blue-600 shadow-lg group-hover:shadow-blue-500/25 mb-6 rounded-xl w-16 h-16">
                <FaCloud className="text-white text-2xl" />
              </div>
              <h3 className="mb-4 font-semibold text-blue-400 group-hover:text-blue-300 text-lg lg:text-2xl transition-colors">
                API Development & Integration
              </h3>
              <p className="text-gray-300 group-hover:text-gray-200 text-sm leading-relaxed transition-colors">
                <span className="font-semibold text-blue-400">Seamless API development</span> and integration to connect your
                systems with secure, reliable connections.
              </p>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Call to Action */}
        <motion.div 
          className="bg-slate-800/20 shadow-xl mt-16 py-16 border border-slate-700 rounded-3xl text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="mx-auto px-8 max-w-4xl">
            <motion.h3 
              className="mb-6 font-bold text-blue-400 text-xl lg:text-5xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              Ready to Get Started?
            </motion.h3>
            <p className="mx-auto mb-10 max-w-3xl text-gray-300 text-sm lg:text-xl leading-relaxed">
              Let's discuss your project and see how our <span className="font-semibold text-blue-400">expert services</span> can help 
              transform your <span className="font-semibold text-blue-400">digital presence</span> and drive business growth.
            </p>
            <motion.button 
              onClick={() => window.location.href = '/contact'}
              className="group bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-blue-500/25 px-5 lg:px-10 py-4 lg:py-4 border border-blue-500 hover:border-blue-400 rounded-xl font-semibold text-white text-sm transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <span className="flex justify-center items-center gap-2">
                Start Your Project
                <motion.svg 
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
