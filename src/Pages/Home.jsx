/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaCode,
  FaGlobe,
  FaPlay,
  FaSearch,
  FaArrowRight,
} from "react-icons/fa";
import forever from "../assets/images/forever-img.png";
import cynosure from "../assets/images/cynosure-img.png";
import staynest from "../assets/images/staynest-img.png";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);
  const services = [
    {
      icon: <FaCode className="w-8 h-8" />,
      title: "Programming",
      description: "Custom software solutions tailored to your business needs.",
      route: "/services/programming",
    },
    {
      icon: <FaGlobe className="w-8 h-8" />,
      title: "Web Development",
      description: "Responsive and user-friendly websites that drive results.",
      route: "/services/web-development",
    },
    {
      icon: <FaPlay className="w-8 h-8" />,
      title: "Digital Marketing",
      description:
        "Strategic marketing campaigns to reach your target audience.",
      route: "/services/digital-marketing",
    },
    {
      icon: <FaSearch className="w-8 h-8" />,
      title: "SEO",
      description: "Improve your online visibility and search engine rankings.",
      route: "/services/seo",
    },
  ];

  const portfolioItems = [
    {
      image: forever,
      title: "An E-commerce Website",
      description:
        "A modern, responsive e-commerce platform with secure payment integration, product catalog management, and optimized user experience for online shopping.",
      category: "Web Development",
    },
    {
      image: staynest,
      title: "StayNest: Apartment Rental",
      description:
        "A comprehensive apartment rental platform featuring property listings, booking management, user authentication, and integrated payment processing.",
      category: "Programming",
    },
    {
      image: cynosure,
      title: "Architectural Portfolio Website",
      description:
        "A stunning portfolio website showcasing architectural projects with interactive galleries, project details, and professional presentation of design work.",
      category: "Web Development",
    },
  ];

  const handleNavClick = (route) => {
    navigate(route);
  };

  return (
    <div className="bg-slate-900 min-h-screen text-white">
      {/* Hero Section */}
      <motion.section
        className="relative flex justify-center items-center bg-cover bg-no-repeat bg-center pt-20 min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.7)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDh82ECZkQHUblu3zIXRsbnZq3gCfb5_mFgxyoeBwkJ7Tuon7hnJj-cd-mC5PIT8fiTyA1lZG4XGbya0f5oEUBxnxf39TCyg2s9Rup_GQafzVNP6AOkESFmFlPfIsgWLtwvtBb3TewFMqyTysmD8n0jdigbSxWGGsSBI8_gPYFVYZS2Xx7LnkKtSupap8m-ijMayjczAndKGyVAg--CU1jdZ0_wVRerNU6iiI097o9ZjdgANzyAQ0mU_wRly2_TnTlBGW25v_iIcMg')`,
        }}
      >
        <motion.div 
          className="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          data-aos="fade-up"
        >
          <motion.h1 
            className="mb-6 font-bold text-white text-xl sm:text-3xl lg:text-5xl leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Empowering Businesses with
            <span className="block mt-2 text-white">
              Innovative Tech Solutions
            </span>
          </motion.h1>
          <p className="mx-auto mb-8 max-w-2xl text-m lg:text-lg leading-relaxed gray-300">
            We provide cutting-edge programming, web development, digital
            marketing, and SEO services to help your business thrive in the
            digital age.
          </p>
          <div className="flex sm:flex-row flex-col justify-center items-center gap-4">
            <button
              onClick={() => handleNavClick("/contact")}
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 hover:shadow-lg px-5 lg:px-8 py-3 lg:py-4 rounded-xl font-semibold text-white text-lg hover:scale-105 transition-all duration-300 transform"
            >
              <span>Contact Us</span>
              <FaArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleNavClick("/about")}
              className="inline-flex items-center space-x-2 bg-transparent hover:bg-blue-600 px-5 lg:px-8 py-3 lg:py-4 border-2 border-blue-600 hover:border-blue-700 rounded-xl font-semibold text-blue-600 hover:text-white text-lg hover:scale-105 transition-all duration-300 transform"
            >
              <span>About Us</span>
              <FaArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </motion.section>

      {/* Services Section */}
            {/* Contact Section */}
      <section className="bg-slate-800 py-20" data-aos="fade-up" data-aos-delay="100">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-bold text-white text-2xl md:text-4xl">
              Our <span className="text-blue-400">Services</span>
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-m text-slate-400 leading-relaxed">
              A comprehensive suite of cutting-edge services designed to fuel
              your business growth and digital transformation
            </p>
          </div>

          <div className="gap-6 lg:gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-900 hover:from-slate-800 to-slate-800 hover:to-slate-700 hover:shadow-2xl hover:shadow-blue-500/20 border border-slate-600 hover:border-blue-500/50 rounded-2xl overflow-hidden transition-all hover:-translate-y-3 duration-300 cursor-pointer transform"
                onClick={() =>
                  handleNavClick(
                    `/services/${service.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`
                  )
                }
              >
                {/* Gradient overlay */}
                <div className="top-0 right-0 absolute bg-gradient-to-bl from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 w-20 h-20 transition-opacity duration-300"></div>

                <div className="relative p-8">
                  {/* Icon Container */}
                  <div className="flex justify-center items-center bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg group-hover:shadow-blue-500/30 mb-6 rounded-2xl w-16 h-16 text-white group-hover:scale-110 transition-all duration-300">
                    {service.icon}
                  </div>

                  {/* Service Title */}
                  <h3 className="mb-4 font-bold text-white group-hover:text-blue-100 text-xl transition-colors">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="mb-6 text-slate-400 group-hover:text-slate-300 text-sm leading-relaxed transition-colors">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center font-medium text-blue-400 group-hover:text-blue-300 text-sm transition-colors">
                    <span>Learn More</span>
                    <FaArrowRight className="ml-2 w-3 h-3 transition-transform group-hover:translate-x-1 duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action Button */}
          <div className="text-center">
            <button
              onClick={() => handleNavClick("/services")}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 hover:from-blue-700 to-blue-500 hover:to-blue-600 shadow-lg hover:shadow-blue-500/30 px-8 py-4 rounded-full font-semibold text-white text-lg hover:scale-105 transition-all duration-300 transform"
            >
              <span>View All Services</span>
              <FaArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-slate-900 py-20" data-aos="fade-up" data-aos-delay="100">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="items-center gap-12 lg:gap-16 grid grid-cols-1 lg:grid-cols-2">
            {/* Text Content - Left Side */}
            <div className="order-2 lg:order-1" data-aos="fade-up" data-aos-delay="200">
              <h2 className="mb-6 font-bold text-white text-2xl md:text-5xl leading-tight">
                About <span className="text-blue-400">Us</span>
              </h2>
              <p className="mb-6 text-slate-400 text-sm lg:text-lg leading-relaxed">
                InnovativeTech Solutions Co. is a team of experienced
                professionals dedicated to delivering exceptional tech services.
                We combine technical expertise with a client-centric approach to
                achieve your business goals.
              </p>
              <p className="mb-8 text-slate-400 text-sm lg:text-lg leading-relaxed">
                With years of experience in the industry, we understand the
                challenges businesses face in today's digital landscape. Our
                mission is to provide innovative solutions that drive growth and
                success.
              </p>

              {/* Stats or Key Points */}
              <div className="gap-6 grid grid-cols-2 mb-8">
                <div className="lg:text-left text-center">
                  <div className="mb-2 font-bold text-blue-400 text-3xl">
                    50+
                  </div>
                  <div className="text-slate-400 text-sm">
                    Projects Completed
                  </div>
                </div>
                <div className="lg:text-left text-center">
                  <div className="mb-2 font-bold text-blue-400 text-3xl">
                    5+
                  </div>
                  <div className="text-slate-400 text-sm">Years Experience</div>
                </div>
              </div>

              <div className="lg:text-left text-center">
                <button
                  onClick={() => handleNavClick("/about")}
                  className="bg-transparent hover:bg-blue-600 px-8 py-3 border-2 border-blue-600 rounded-full text-blue-600 hover:text-white hover:scale-105 transition-all duration-300 transform"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Image - Right Side */}
            <div className="order-1 lg:order-2" data-aos="zoom-in" data-aos-delay="300">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=500&fit=crop&crop=faces"
                  alt="Our team working together"
                  className="shadow-2xl rounded-2xl w-full h-auto object-cover"
                />
                {/* Decorative overlay */}
                <div className="top-4 -right-4 absolute bg-blue-600/20 backdrop-blur-sm p-6 border border-blue-400/30 rounded-xl">
                  <div className="mb-2 font-semibold text-white text-lg">
                    Innovation First
                  </div>
                  <div className="text-blue-200 text-sm">
                    Cutting-edge solutions for modern businesses
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-slate-800 py-20" data-aos="fade-up" data-aos-delay="100">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-bold text-white text-2xl md:text-5xl">
              Our Portfolio
            </h2>
            <p className="text-slate-400 text-lg">
              Check out some of our recent work
            </p>
          </div>

          <div className="gap-8 grid grid-cols-1 md:grid-cols-3">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="group bg-slate-900 hover:shadow-2xl border border-slate-700 rounded-2xl overflow-hidden transition-all hover:-translate-y-2 duration-300 cursor-pointer transform"
                data-aos="fade-up"
                data-aos-delay={300 + (index * 150)}
                onClick={() => handleNavClick("/portfolio")}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="top-4 left-4 absolute bg-blue-600 px-3 py-1 rounded-full text-white text-xs">
                    {item.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-3 font-semibold text-white text-xl">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => handleNavClick("/portfolio")}
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full text-white hover:scale-105 transition-all duration-300 transform"
            >
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-slate-900 py-20" data-aos="fade-up" data-aos-delay="100">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="items-center gap-12 lg:gap-16 grid grid-cols-1 lg:grid-cols-2">
            {/* Text Content - Left Side */}
            <div className="order-2 lg:order-1 lg:text-left text-center" data-aos="fade-up" data-aos-delay="200">
              <h2 className="mb-6 font-bold text-white text-2xl md:text-5xl leading-tight">
                Ready to Get <span className="text-blue-400">Started?</span>
              </h2>
              <p className="mb-8 text-slate-400 text-sm leading-relaxed">
                Let's discuss your project and bring your vision to life. Reach
                out to us for a free consultation and personalized quote.
              </p>

              {/* Quick Contact Info */}
              <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 mb-8">
                <div className="flex justify-center lg:justify-start items-center space-x-3">
                  <div className="flex justify-center items-center bg-blue-600 rounded-full w-12 h-12">
                    <FaSearch className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">
                      Quick Response
                    </div>
                    <div className="text-slate-400 text-xs">
                      Within 24 hours
                    </div>
                  </div>
                </div>
                <div className="flex justify-center lg:justify-start items-center space-x-3">
                  <div className="flex justify-center items-center bg-blue-600 rounded-full w-12 h-12">
                    <FaCode className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">
                      Free Consultation
                    </div>
                    <div className="text-slate-400 text-xs">No commitment</div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleNavClick("/contact")}
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 hover:from-blue-700 to-blue-500 hover:to-blue-600 shadow-lg hover:shadow-blue-500/30 px-8 py-4 rounded-full font-semibold text-white text-sm hover:scale-105 transition-all duration-300 transform"
              >
                <span>Get In Touch</span>
                <FaArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Visual Element - Right Side */}
            <div className="order-1 lg:order-2" data-aos="zoom-in" data-aos-delay="300">
              <div className="relative">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 blur-3xl rounded-3xl"></div>

                {/* Main card */}
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-700 p-8 border border-slate-600 rounded-3xl">
                  <div className="mb-6 text-center">
                   <div className="flex justify-center items-center gap-4">
                     <div className="flex justify-center items-center bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg rounded-2xl w-16 h-16 text-white">
                      <FaArrowRight className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-white text-lg lg:text-xl">
                      Let's Build Something Amazing
                    </h3>
                   </div>
                    <p className="text-slate-400 text-sm">
                      Transform your ideas into reality
                    </p>
                  </div>

                  {/* Feature highlights */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-600/20 rounded-full w-2 h-2"></div>
                      <span className="text-slate-300 text-sm">
                        Custom solutions for your business
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-600/20 rounded-full w-2 h-2"></div>
                      <span className="text-slate-300 text-sm">
                        Expert team of developers
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-600/20 rounded-full w-2 h-2"></div>
                      <span className="text-slate-300 text-sm">
                        Ongoing support and maintenance
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
