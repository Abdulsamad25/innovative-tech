/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaCode } from "react-icons/fa";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "Services", to: "/services" },
    { name: "Portfolio", to: "/portfolio" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleNavClick = () => {
    closeMenu();
    // Scroll to top immediately
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/10 backdrop-blur-md shadow-lg border-b border-white/20"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center h-14 sm:h-16 lg:h-18">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="flex justify-start items-start p-1.5 sm:p-2 rounded-md lg:rounded-lg">
              <img
                src={logo}
                alt="Innovative Tech Logo"
                className="-ml-10 w-52 sm:w-58 lg:w-68 h-52 sm:h-58 lg:h-68 object-contain"
              />
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1 2xl:space-x-8">
            {navItems.map((item) => (
              <motion.div key={item.name}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `group relative px-2 lg:px-3 py-2 rounded-md font-medium text-sm lg:text-base transition-colors duration-200 ${
                      isActive
                        ? "text-blue-400"
                        : "text-white hover:text-blue-400"
                    }`
                  }
                  onClick={handleNavClick}
                >
                  <motion.span
                    whileHover={{ y: -1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {item.name}
                  </motion.span>
                  <span className="bottom-0 left-0 absolute bg-blue-400 w-0 group-hover:w-full h-0.5 transition-all duration-300"></span>
                </NavLink>
              </motion.div>
            ))}
            <motion.button
              className="bg-blue-600 hover:bg-blue-700 shadow-lg ml-2 px-4 lg:px-6 py-2 rounded-md lg:rounded-lg font-semibold text-white text-sm lg:text-base transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                window.location.href = '/contact';
              }}
            >
              Get Quote
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              onClick={toggleMenu}
              className="p-1 focus:outline-none text-white hover:text-blue-400 focus:text-blue-400"
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FaTimes size={20} className="sm:w-6 sm:h-6" />
              ) : (
                <FaBars size={20} className="sm:w-6 sm:h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden top-full right-0 left-0 z-40 absolute bg-slate-900 shadow-lg backdrop-blur-md"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="max-h-[calc(100vh-4rem)] overflow-y-auto">
              <div className="space-y-3 sm:space-y-4 px-4 sm:px-6 py-6 sm:py-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `block hover:bg-gray-50 px-4 py-3 sm:py-2 rounded-lg sm:rounded-md font-medium sm:text-sm text-base transition-colors duration-200 ${
                          isActive
                            ? "text-blue-600 bg-blue-100"
                            : "text-gray-100 hover:text-blue-600"
                        }`
                      }
                      onClick={handleNavClick}
                    >
                      {item.name}
                    </NavLink>
                  </motion.div>
                ))}

                {/* Mobile CTA Button */}
                <motion.div
                  className="px-4 pt-4 sm:pt-2"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navItems.length * 0.1 }}
                >
                  <button
                    className="bg-blue-600 hover:bg-blue-700 shadow-lg px-6 py-3 sm:py-2 rounded-lg w-full font-semibold text-white sm:text-sm text-base transition-colors duration-200"
                    onClick={() => {
                      handleNavClick();
                      window.location.href = '/contact';
                    }}
                  >
                    Get Quote
                  </button>
                </motion.div>

                <div className="sm:hidden h-20"></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay for mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="z-30 fixed inset-0 bg-black/5 sm:bg-black/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
