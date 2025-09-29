/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { toast } from 'react-toastify';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaTwitter, FaLinkedin, FaGithub, FaClock } from 'react-icons/fa'


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Message sent successfully! We\'ll get back to you soon.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
        setFormData({ name: '', email: '', service: '', message: '' });
      } else {
        toast.error('Failed to send message. Please try again later.', {
          position: "top-right",
          autoClose: 5000,
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Network error. Please check your connection and try again.', {
        position: "top-right",
        autoClose: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <h1 className="font-bold text-blue-400 text-xl lg:text-3xl">Get in Touch</h1>
          </div>
        </div>
        <div className="bg-slate-800/30 mx-auto p-6 border border-slate-700 rounded-2xl max-w-3xl">
          <p className="text-gray-300 text-sm lg:text-xl leading-relaxed">
            Ready to transform your ideas into <span className="font-semibold text-blue-400">reality</span>? We're here to help you
            navigate the <span className="font-semibold text-blue-400">digital landscape</span> and bring your vision to life.
          </p>
        </div>
      </motion.div>

      {/* Container */}
      <div className="z-10 relative mx-auto px-2 lg:px-6 max-w-6xl">

        {/* Contact Form Section */}
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
            <h2 className="font-bold text-blue-400 text-sm lg:text-xl">
              Send us a Message
            </h2>
          </div>
          
          <motion.div 
            className="group bg-slate-800/30 shadow-lg mx-auto p-8 border border-slate-600 hover:border-blue-500/50 rounded-2xl max-w-4xl transition-all duration-300"
            whileHover={{ scale: 1.01, y: -2 }}
            transition={{ duration: 0.3 }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="mb-8">
              <p className="text-gray-300 group-hover:text-gray-200 text-base leading-relaxed transition-colors">
                Tell us about your <span className="font-semibold text-blue-400">project</span> and let's create something amazing together.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
                <div>
                  <label className="block mb-2 font-medium text-gray-300 text-sm">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-slate-700/50 px-4 py-4 border border-slate-600 hover:border-slate-500 focus:border-blue-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 w-full text-white text-sm transition-all duration-300 placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-gray-300 text-sm">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-slate-700/50 px-4 py-4 border border-slate-600 hover:border-slate-500 focus:border-blue-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 w-full text-white text-sm transition-all duration-300 placeholder-gray-400"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 font-medium text-gray-300 text-sm">Service Interested In</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="bg-slate-700/50 px-4 py-4 border border-slate-600 hover:border-slate-500 focus:border-blue-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 w-full text-white text-sm transition-all duration-300 appearance-none cursor-pointer"
                >
                  <option value="">Choose a service</option>
                  <option value="programming">Programming Solutions</option>
                  <option value="web-development">Web Development</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="seo">SEO Optimization</option>
                  <option value="consultation">Consultation</option>
                  <option value="other">Other Services</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 font-medium text-gray-300 text-sm">Project Details</label>
                <textarea
                  name="message"
                  placeholder="Tell us about your project, timeline, and any specific requirements..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  className="bg-slate-700/50 px-4 py-4 border border-slate-600 hover:border-slate-500 focus:border-blue-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 w-full text-white text-sm transition-all duration-300 resize-none placeholder-gray-400"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 shadow-lg hover:shadow-blue-500/25 py-4 rounded-xl w-full font-semibold text-white text-lg transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                {isSubmitting ? (
                  <span className="flex justify-center items-center gap-2">
                    <div className="border-2 border-white border-t-transparent rounded-full w-5 h-5 animate-spin"></div>
                    Submitting...
                  </span>
                ) : (
                  <span className="flex justify-center items-center gap-2 cursor-pointer">
                    <FaEnvelope className="w-5 h-5" />
                    Send Message
                  </span>
                )}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        {/* Contact Information Section */}
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
              Contact Information
            </h2>
          </div>
          <div className="gap-8 grid md:grid-cols-3">
            {/* Office Address */}
            <motion.div 
              className="group bg-slate-800/30 shadow-lg p-8 border border-slate-600 hover:border-blue-500/50 rounded-2xl transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="flex justify-center items-center bg-blue-600 shadow-lg group-hover:shadow-blue-500/25 mb-6 rounded-xl w-16 h-16">
                <FaMapMarkerAlt className="text-white text-2xl" />
              </div>
              <h3 className="mb-4 font-semibold text-blue-400 group-hover:text-blue-300 text-lg lg:text-2xl transition-colors">
                Our Office
              </h3>
              <p className="mb-2 text-gray-300 group-hover:text-gray-200 text-sm leading-relaxed transition-colors">
                <span className="font-semibold text-blue-400">123 Main Street</span>, Innovation City, CA 90210
              </p>
              <p className="text-gray-400 text-xs">Visit us for in-person consultations</p>
            </motion.div>

            {/* Phone Number */}
            <motion.div 
              className="group bg-slate-800/30 shadow-lg p-8 border border-slate-600 hover:border-blue-500/50 rounded-2xl transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex justify-center items-center bg-blue-600 shadow-lg group-hover:shadow-blue-500/25 mb-6 rounded-xl w-16 h-16">
                <FaPhone className="text-white text-2xl" />
              </div>
              <h3 className="mb-4 font-semibold text-blue-400 group-hover:text-blue-300 text-lg lg:text-2xl transition-colors">
                Phone Number
              </h3>
              <p className="mb-2 text-gray-300 group-hover:text-gray-200 text-sm leading-relaxed transition-colors">
                <span className="font-semibold text-blue-400">+234 913 7286 441</span>
              </p>
              <p className="text-gray-400 text-xs">Mon-Fri, 9AM-6PM</p>
            </motion.div>

            {/* Email Address */}
            <motion.div 
              className="group bg-slate-800/30 shadow-lg p-8 border border-slate-600 hover:border-blue-500/50 rounded-2xl transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="flex justify-center items-center bg-blue-600 shadow-lg group-hover:shadow-blue-500/25 mb-6 rounded-xl w-16 h-16">
                <FaEnvelope className="text-white text-2xl" />
              </div>
              <h3 className="mb-4 font-semibold text-blue-400 group-hover:text-blue-300 text-lg lg:text-2xl transition-colors">
                Email Address
              </h3>
              <p className="mb-2 text-gray-300 group-hover:text-gray-200 text-sm leading-relaxed transition-colors">
                <span className="font-semibold text-blue-400">samadolalekan15@gmail.com</span>
              </p>
              <p className="text-gray-400 text-xs">We'll respond within 24 hours</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Social Media & Quick Response Section */}
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
              Connect & Support
            </h2>
          </div>
          <div className="gap-8 grid md:grid-cols-2 mx-auto max-w-5xl">
            {/* Social Media */}
            <motion.div 
              className="group bg-slate-800/30 shadow-lg p-8 border border-slate-600 hover:border-blue-500/50 rounded-2xl transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="mb-6 font-semibold text-blue-400 group-hover:text-blue-300 text-lg lg:text-2xl transition-colors">
                Follow Us on Social Media
              </h3>
              <p className="mb-6 text-gray-300 group-hover:text-gray-200 text-sm leading-relaxed transition-colors">
                Stay updated with our <span className="font-semibold text-blue-400">latest projects</span> and industry insights.
              </p>
              
              <div className="flex gap-4">
                <motion.a 
                  href="https://x.com/yahaya_samad" 
                  className="group flex justify-center items-center bg-slate-700/50 hover:bg-blue-600 rounded-xl w-14 h-14 transition-all duration-300"
                  title="Follow us on Twitter"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaTwitter className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300" />
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/abdulsamad-yahaya-b68228323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
                  className="group flex justify-center items-center bg-slate-700/50 hover:bg-blue-600 rounded-xl w-14 h-14 transition-all duration-300"
                  title="Connect on LinkedIn"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaLinkedin className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300" />
                </motion.a>
                <motion.a 
                  href="https://github.com/Abdulsamad25" 
                  className="group flex justify-center items-center bg-slate-700/50 hover:bg-blue-600 rounded-xl w-14 h-14 transition-all duration-300"
                  title="Check out our GitHub"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaGithub className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300" />
                </motion.a>
              </div>
            </motion.div>

            {/* Quick Response */}
            <motion.div 
              className="group bg-gradient-to-br from-blue-600/20 to-blue-500/20 shadow-lg p-8 border border-blue-500/30 hover:border-blue-400/50 rounded-2xl transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-blue-500/30 p-3 rounded-xl">
                  <FaClock className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-blue-400 group-hover:text-blue-300 text-lg lg:text-2xl transition-colors">
                    Quick Response
                  </h3>
                  <p className="text-blue-100 group-hover:text-blue-50 text-sm leading-relaxed transition-colors">
                    Need <span className="font-semibold text-blue-400">immediate assistance</span>? We typically respond to all inquiries within 2-4 hours during business hours.
                  </p>
                </div>
              </div>
              <div className="bg-blue-500/10 p-4 border border-blue-500/20 rounded-xl">
                <p className="font-medium text-blue-200 text-sm">Average Response Time: 3 hours</p>
              </div>
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
  )
}

export default Contact
