/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { FaShieldAlt, FaLightbulb, FaChartLine } from 'react-icons/fa'
import { motion } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div className="relative bg-slate-900 min-h-screen text-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      {/* Hero Section */}
      <div className="z-10 relative mx-auto px-6 py-20 container">
        <motion.div 
          className="mb-20 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          data-aos="fade-up"
        >
          <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-400 mb-6 p-1 rounded-2xl">
            <div className="bg-slate-900 px-8 py-3 rounded-xl">
              <h1 className="font-bold text-blue-400 text-xl lg:text-3xl">About Us</h1>
            </div>
          </div>
          <p className="mx-auto max-w-4xl text-gray-300 text-sm lg:text-xl leading-relaxed">
            At <span className="font-semibold text-blue-400">InnovativeTech</span>, we're more than just a tech services provider; we're your strategic partner in 
            navigating the digital landscape. With a rich history of innovation and a commitment to excellence, we 
            empower businesses to thrive in today's dynamic market.
          </p>
        </motion.div>

        {/* Our Story Section */}
        <div className="items-center gap-16 grid grid-cols-1 lg:grid-cols-2 mb-12 lg:mb-24">
          <motion.div
            className="bg-slate-800/50 shadow-xl backdrop-blur-sm p-8 border border-slate-700 rounded-2xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            data-aos="fade-right"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-500 rounded-full w-1 h-6 lg:h-8"></div>
              <h2 className="font-bold text-blue-400 text-xl lg:text-4xl">Our Story</h2>
            </div>
            <div className="space-y-4 pl-0 lg:pl-4">
              <p className="text-gray-300 text-sm lg:text-lg leading-relaxed">
                Founded in <span className="font-semibold text-blue-400">2021</span>, InnovativeTech began with a simple vision: to bridge 
                the gap between cutting-edge technology and practical business solutions. 
                Over the years, we've evolved from a small startup to a <span className="font-semibold text-blue-400">leading tech services 
                firm</span>, driven by our passion for innovation and our dedication to client success.
              </p>
              <p className="text-gray-300 text-sm lg:text-lg leading-relaxed">
                Our journey has been marked by continuous learning, adaptation, 
                and a relentless pursuit of excellence.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="px-4 text-center"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            data-aos="zoom-in"
          >
            <div className="inline-block relative max-w-full">
              {/* Decorative rings - responsive sizing */}
              <div className="absolute inset-0 border-2 border-blue-500/20 rounded-full animate-ping"></div>
              <div className="absolute inset-1 sm:inset-2 border border-blue-400/30 rounded-full animate-pulse"></div>
              
              <div className="relative bg-slate-800 p-6 sm:p-8 md:p-10 lg:p-12 border-2 sm:border-4 border-blue-500 rounded-full">
                <motion.div 
                  className="mb-1 sm:mb-2 font-bold text-blue-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                >
                  4+
                </motion.div>
                <div className="font-semibold text-gray-300 text-sm sm:text-base lg:text-lg">Years in Business</div>
                <div className="mt-1 text-blue-400 text-xs sm:text-sm">& Growing</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission and Team Section */}
        <div className="gap-8 grid grid-cols-1 lg:grid-cols-2 mb-24">
          <motion.div 
            className="bg-slate-800/30 shadow-lg p-8 border border-slate-600 hover:border-blue-500/50 rounded-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="100"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-600 p-3 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
              </div>
              <h2 className="font-bold text-blue-400 text-xl lg:text-3xl">Our Mission</h2>
            </div>
            <p className="pl-0 lg:pl-1 text-gray-300 text-sm lg:text-lg leading-relaxed">
              Our mission is to <span className="font-semibold text-blue-400">empower businesses</span> with transformative technology 
              solutions that drive growth, efficiency, and competitive advantage. We strive 
              to be at the forefront of technological advancements, delivering tailored 
              services that meet the unique needs of each client. Our commitment is to 
              provide reliable, innovative, and results-oriented solutions that exceed 
              expectations.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-slate-800/30 shadow-lg p-8 border border-slate-600 hover:border-blue-500/50 rounded-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="200"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-600 p-3 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  <path d="M6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h2 className="font-bold text-blue-400 text-xl lg:text-3xl">Team Expertise</h2>
            </div>
            <p className="pl-1 text-gray-300 text-sm lg:text-lg leading-relaxed">
              Our team comprises <span className="font-semibold text-blue-400">seasoned professionals</span> with diverse expertise 
              in programming, web development, digital marketing, and SEO. We 
              hold industry-recognized certifications, ensuring our skills are up-
              to-date with the latest technological trends and best practices.
            </p>
          </motion.div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16 text-center" data-aos="fade-up">
          <div className="inline-block bg-slate-800/40 mb-8 p-6 border border-slate-600 rounded-2xl">
            <h2 className="font-bold text-blue-400 text-xl lg:text-5xl">Why Choose Us?</h2>
          </div>
          <div className="bg-slate-800/20 mx-auto p-8 border border-slate-700 rounded-2xl max-w-4xl">
            <p className="text-gray-300 text-sm lg:text-xl text-start leading-relaxed">
              Clients choose <span className="font-semibold text-blue-400">InnovativeTech</span> for our unwavering commitment to reliability, our innovative 
              approach to problem-solving, and our proven track record of delivering tangible results. We 
              prioritize client satisfaction, building <span className="font-semibold text-blue-400">long-term partnerships</span> based on trust, transparency, and mutual 
              success.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="gap-8 grid grid-cols-1 md:grid-cols-3 mb-24">
          <motion.div 
            className="group bg-slate-800/30 shadow-lg p-8 border border-slate-600 hover:border-blue-500/50 rounded-2xl text-center transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            data-aos="fade-up"
            data-aos-delay="100"
            whileHover={{ y: -5 }}
          >
            <motion.div 
              className="flex justify-center items-center bg-blue-600 shadow-lg group-hover:shadow-blue-500/25 mx-auto mb-6 rounded-xl w-20 h-20"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <FaShieldAlt className="w-10 h-10 text-white" />
            </motion.div>
            <h3 className="mb-4 font-bold text-blue-400 group-hover:text-blue-300 text-xl lg:text-2xl transition-colors">Reliability</h3>
            <p className="text-gray-300 group-hover:text-gray-200 text-sm text-start leading-relaxed transition-colors">
              We deliver <span className="font-semibold text-blue-400">consistent, dependable solutions</span> that you can count on. Our proven track record 
              speaks to our commitment to reliability in every project we undertake.
            </p>
          </motion.div>

          <motion.div 
            className="group bg-slate-800/30 shadow-lg p-8 border border-slate-600 hover:border-blue-500/50 rounded-2xl text-center transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            data-aos="fade-up"
            data-aos-delay="200"
            whileHover={{ y: -5 }}
          >
            <motion.div 
              className="flex justify-center items-center bg-blue-600 shadow-lg group-hover:shadow-blue-500/25 mx-auto mb-6 rounded-xl w-20 h-20"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <FaLightbulb className="w-10 h-10 text-white" />
            </motion.div>
            <h3 className="mb-4 font-bold text-blue-400 group-hover:text-blue-300 text-xl lg:text-2xl transition-colors">Innovation</h3>
            <p className="text-gray-300 group-hover:text-gray-200 text-sm text-start leading-relaxed transition-colors">
              We stay at the <span className="font-semibold text-blue-400">forefront of technology</span>, continuously exploring new solutions and approaches 
              to solve complex business challenges with creative, cutting-edge methods.
            </p>
          </motion.div>

          <motion.div 
            className="group bg-slate-800/30 shadow-lg p-8 border border-slate-600 hover:border-blue-500/50 rounded-2xl text-center transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            data-aos="fade-up"
            data-aos-delay="300"
            whileHover={{ y: -5 }}
          >
            <motion.div 
              className="flex justify-center items-center bg-blue-600 shadow-lg group-hover:shadow-blue-500/25 mx-auto mb-6 rounded-xl w-20 h-20"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <FaChartLine className="w-10 h-10 text-white" />
            </motion.div>
            <h3 className="mb-4 font-bold text-blue-400 group-hover:text-blue-300 text-sm lg:text-2xl transition-colors">Results</h3>
            <p className="text-gray-300 group-hover:text-gray-200 text-sm text-start leading-relaxed transition-colors">
              Our focus is on delivering <span className="font-semibold text-blue-400">measurable outcomes</span> that drive your business forward. We measure 
              our success by the tangible results we achieve for our clients.
            </p>
          </motion.div>
        </div>

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

export default About
