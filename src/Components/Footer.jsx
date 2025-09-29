/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from 'react-toastify';
import {
  FaCode,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaPaperPlane,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast.success('Successfully subscribed! Check your email for confirmation.', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
        setEmail('');
      } else {
        toast.error('Failed to subscribe. Please try again later.', {
          position: "bottom-right",
          autoClose: 5000,
        });
      }
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      toast.error('Network error. Please check your connection and try again.', {
        position: "bottom-right",
        autoClose: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    "Web Development",
    "Mobile Apps",
    "Digital Marketing",
    "SEO Optimization",
    "E-commerce Solutions",
    "Custom Software",
  ];

  const quickLinks = [
    { name: "About Us", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Portfolio", to: "/portfolio" },
    { name: "Contact", to: "/contact" },
    { name: "Blog", to: "/blog" },
  ];

  const socialLinks = [
    {
      icon: FaFacebookF,
      href: "#",
      color: "hover:text-blue-600",
      label: "Facebook",
    },
    {
      icon: FaTwitter,
      href: "#",
      color: "hover:text-blue-400",
      label: "Twitter",
    },
    {
      icon: FaLinkedinIn,
      href: "#",
      color: "hover:text-blue-700",
      label: "LinkedIn",
    },
    {
      icon: FaInstagram,
      href: "#",
      color: "hover:text-pink-500",
      label: "Instagram",
    },
    {
      icon: FaGithub,
      href: "#",
      color: "hover:text-gray-900",
      label: "GitHub",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <footer className="bg-gray-900 overflow-hidden text-white">
      {/* Main Footer Content */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-7xl overflow-hidden">
        <motion.div
          className="gap-6 sm:gap-8 lg:gap-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Company Info */}
          <motion.div
            variants={itemVariants}
            className="sm:col-span-2 lg:col-span-1 min-w-0"
          >
            {/* Logo */}
            <div className="flex items-center space-x-2 mb-4 sm:mb-6">
              <div className="flex-shrink-0 bg-blue-600 p-2 rounded-lg">
                <FaCode className="text-white text-lg sm:text-xl" />
              </div>
              <span className="font-bold text-xl sm:text-2xl truncate">
                Innovative<span className="text-blue-600">Tech</span>
              </span>
            </div>

            {/* Description */}
            <p className="mb-4 sm:mb-6 text-gray-400 text-sm sm:text-base break-words leading-relaxed">
              Transforming businesses through innovative technology solutions.
              We deliver cutting-edge web development, digital marketing, and
              custom software solutions.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`text-gray-400 ${social.color} transition-colors duration-200 p-2 rounded-lg hover:bg-gray-800`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon size={18} className="sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="min-w-0">
            <h3 className="mb-4 sm:mb-6 font-semibold text-white text-lg sm:text-xl">
              Our Services
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to="/services"
                    className="inline-block text-gray-400 hover:text-blue-600 text-sm sm:text-base break-words transition-colors hover:translate-x-1 duration-200 transform"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="min-w-0">
            <h3 className="mb-4 sm:mb-6 font-semibold text-white text-lg sm:text-xl">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="inline-block text-gray-400 hover:text-blue-600 text-sm sm:text-base break-words transition-colors hover:translate-x-1 duration-200 transform"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="min-w-0">
            <h3 className="mb-4 sm:mb-6 font-semibold text-white text-lg sm:text-xl">
              Contact Us
            </h3>

            {/* Contact Details */}
            <div className="space-y-3 sm:space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="flex-shrink-0 mt-1 text-blue-600" />
                <span className="text-gray-400 text-sm sm:text-base break-words">
                  123 Tech Street, Lagos, Nigeria
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="flex-shrink-0 text-blue-600" />
                <span className="text-gray-400 text-sm sm:text-base">
                  +234 123 456 7890
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="flex-shrink-0 text-blue-600" />
                <span className="overflow-hidden text-gray-400 text-sm sm:text-base break-words">
                  hello@innovativetech.com
                </span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="w-full">
              <h4 className="mb-3 sm:mb-4 font-semibold text-white text-base sm:text-lg">
                Stay Updated
              </h4>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-2 w-full">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-gray-800 px-3 py-2 sm:py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 w-full text-white text-sm sm:text-base placeholder-gray-500"
                />
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex justify-center items-center space-x-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 px-4 py-2 sm:py-2.5 rounded-lg w-full font-medium text-sm sm:text-base transition-colors duration-200"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  <span>{isSubmitting ? 'Subscribing...' : 'Subscribe'}</span>
                  <FaPaperPlane className="w-4 h-4" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-gray-800 border-t">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 max-w-7xl overflow-hidden">
          <div className="flex sm:flex-row flex-col justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-gray-400 text-xs sm:text-sm sm:text-left text-center">
              © {currentYear} InnovativeTech. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6">
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-blue-600 text-xs sm:text-sm whitespace-nowrap transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-blue-600 text-xs sm:text-sm whitespace-nowrap transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookies"
                className="text-gray-400 hover:text-blue-600 text-xs sm:text-sm whitespace-nowrap transition-colors duration-200"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
