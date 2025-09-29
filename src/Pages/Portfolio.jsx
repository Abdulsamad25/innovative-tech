/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { motion } from "framer-motion";
import AOS from 'aos'
import 'aos/dist/aos.css'
import forever from "../assets/images/forever-img.png";
import cynosure from "../assets/images/cynosure-img.png";
import staynest from "../assets/images/staynest-img.png";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  const portfolioItems = [
    {
      image: forever,
      title: "E-commerce Platform for a Fashion Retailer",
      description: "We developed a robust e-commerce platform for a leading fashion retailer, integrating advanced features like personalized recommendations, secure payment gateways, and real-time inventory management. The result was a 30% increase in online sales and improved customer satisfaction.",
      detailedDescription: "This comprehensive e-commerce solution features a modern, responsive design optimized for mobile and desktop experiences. We implemented advanced search functionality, wishlist management, customer reviews system, and integrated social media sharing. The platform supports multiple payment methods including PayPal, Stripe, and local payment gateways. Our team also developed a sophisticated inventory management system that automatically updates stock levels across all sales channels.",
      category: "Web Development",
      technologies: ["React","Tailwind CSS","Node.js","Express","MongoDB","Stripe","Paystack",
      "Vercel","Netlify"],
      duration: "1 months",
      liveUrl: "https://forever-store-app.netlify.app/"
    },
    {
      image: cynosure,
      title: "Cynosure: Architectural Website",
      description: "Cynosure is an architectural website that displays the company's works and talks about them. We created a visually stunning and user-friendly platform to showcase their portfolio, resulting in a 40% increase in project inquiries.",
      detailedDescription: "This architectural portfolio website features an immersive visual experience with high-quality project galleries, interactive floor plans, and detailed project case studies. We implemented a custom content management system that allows the architects to easily update their portfolio. The site includes advanced filtering options, virtual tour integration, and a contact system that automatically categorizes inquiries by project type.",
      category: "Web Development",
      technologies: ["React", "Tailwind CSS", "JavaScript", "Netlify"],
      duration: "1 week",
      liveUrl: "https://cyno-sure.netlify.app/"
    },
    {
      image: staynest,
      title: "StayNest: Apartment Rental Service",
      description: "StayNest is an apartment rental service where users can rent and pay for an apartment online. We developed a secure and seamless platform that simplified the rental process, leading to a 25% growth in user base within three months.",
      detailedDescription: "A comprehensive apartment rental platform that revolutionizes the way people find and rent properties. The platform features advanced search filters, virtual property tours, secure online payments, digital lease agreements, and real-time communication between tenants and landlords. We integrated background check services, credit verification, and automated rental application processing to streamline the entire rental workflow.",
      category: "Full-Stack Development",
      technologies: ["React", "Tailwind CSS", "Firebase", "Paystack", "Netlify"],
      duration: "3 weeks",
      liveUrl: "https://stayynest.netlify.app/"
    }
  ];

  return (
    <div className="relative bg-slate-900 min-h-screen text-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      {/* Header Section */}
      <div className="z-10 relative mx-auto px-6 py-20 container">
        <div 
          className="mb-20 text-center"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-400 mb-6 p-1 rounded-2xl">
            <div className="bg-slate-900 px-8 py-4 rounded-xl">
              <h1 className="font-bold text-blue-400 text-xl lg:text-3xl">Our Work</h1>
            </div>
          </div>
          <div className="bg-slate-800/30 mx-auto p-6 border border-slate-700 rounded-2xl max-w-4xl">
            <p className="text-gray-300 text-sm lg:text-xl text-start leading-relaxed">
              Explore our <span className="font-semibold text-blue-400">portfolio of successful projects</span>, showcasing our expertise in 
              programming, web development, digital marketing, and SEO. See how we've 
              helped businesses achieve their goals with <span className="font-semibold text-blue-400">innovative solutions</span> and 
              measurable results.
            </p>
          </div>
        </div>

        {/* Portfolio Items */}
        <div className="space-y-10 lg:space-y-32">
          {portfolioItems.map((item, index) => (
            <div 
              key={index} 
              className={`bg-slate-800/20 p-3 lg:p-8 rounded-3xl border border-slate-700 shadow-2xl hover:border-blue-500/30 transition-all duration-500`}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              data-aos-duration="800"
            >
              <div className={`flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image Section */}
                <div className="flex-shrink-0 w-full lg:w-1/2">
                  <div 
                    className="group relative bg-slate-800/50 shadow-2xl mx-auto p-0 sm:p-3 lg:p-4 rounded-sm lg:rounded-2xl max-w-full overflow-hidden"
                    // data-aos="zoom-in"
                    data-aos-delay={index * 200 + 200}
                    data-aos-duration="800"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative rounded-xl overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-46 xs:h-48 sm:h-56 md:h-64 lg:h-56 xl:h-64 object-center object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div 
                  className="space-y-6 w-full lg:w-1/2"
                  data-aos="fade-up"
                  data-aos-delay={index * 200 + 300}
                  data-aos-duration="800"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-500 rounded-full w-1 h-6"></div>
                    <div className="inline-block bg-blue-600/20 px-4 py-2 border border-blue-500/30 rounded-xl font-semibold text-blue-400 text-sm">
                      {item.category}
                    </div>
                  </div>
                  
                  <h2 className="font-bold text-blue-400 text-lg lg:text-xl leading-tight">
                    {item.title}
                  </h2>
                  
                  <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                    {item.description}
                  </p>
                  
                
                    <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                      {item.detailedDescription}
                    </p>
                  

                  {/* Technologies */}
                  <div 
                    className="space-y-4"
                    data-aos="fade-up"
                    data-aos-delay={index * 200 + 400}
                    data-aos-duration="600"
                  >
                    <div className="flex items-center gap-2">
                      <div className="bg-blue-500 rounded-full w-2 h-2"></div>
                      <h4 className="font-semibold text-blue-400 text-base uppercase tracking-wide">
                        Technologies Used
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="bg-slate-800/60 hover:bg-slate-700 px-3 py-2 border border-slate-600 hover:border-blue-500/50 rounded-xl text-gray-300 hover:text-blue-400 text-sm transition-all duration-300 cursor-default"
                          data-aos="zoom-in"
                          data-aos-delay={index * 200 + 500 + (techIndex * 30)}
                          data-aos-duration="400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="bg-slate-800/30 p-4 border border-slate-600 rounded-xl">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="bg-blue-500 rounded-full w-2 h-2"></div>
                      <span className="text-gray-400">Project Duration:</span>
                      <span className="font-semibold text-blue-400">{item.duration}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div 
                    className="flex sm:flex-row flex-col gap-3 pt-4"
                    data-aos="fade-up"
                    data-aos-delay={index * 200 + 600}
                    data-aos-duration="600"
                  >
                    <button 
                      onClick={() => window.open(item.liveUrl, '_blank')}
                      className="group flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-blue-500/25 px-6 py-3 rounded-xl font-semibold text-white text-sm hover:scale-105 transition-all duration-300"
                    >
                      View Case Study
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
                    <button 
                      onClick={() => window.open(item.liveUrl, '_blank')}
                      className="group flex justify-center items-center gap-2 px-6 py-3 border border-slate-600 hover:border-blue-500 rounded-xl font-semibold text-gray-300 hover:text-blue-400 text-sm hover:scale-105 transition-all duration-300"
                    >
                      View Live Site
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

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

export default Portfolio
