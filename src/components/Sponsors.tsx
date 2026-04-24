import { useState } from "react";
import { motion } from "framer-motion";

export default function Sponsors() {
  const tabs = [
    { id: "all", label: "All Partners" },
    { id: "title", label: "Title Sponsors" },
    { id: "patron", label: "Patron Partners" },
    { id: "support", label: "Support Partners" },
    { id: "media", label: "Media Partners" }
  ];

  const partners = [
    // Title Sponsors
    { category: "title", logo: "/logos/10.png", name: "Title Sponsor 1" },
    { category: "title", logo: "/logos/11.png", name: "Title Sponsor 2" },
    
    // Patron Partners
    { category: "patron", logo: "/logos/aicte.png", name: "AICTE" },
    { category: "patron", logo: "/logos/bov.png", name: "BOV" },
    { category: "patron", logo: "/logos/9.png", name: "Patron Partner 3" },
    { category: "patron", logo: "/logos/skillio.png", name: "Skillio" },
    
    // Support Partners
    { category: "support", logo: "/logos/1.png", name: "Support Partner 1" },
    { category: "support", logo: "/logos/2.png", name: "Support Partner 2" },
    { category: "support", logo: "/logos/3.png", name: "Support Partner 3" },
    { category: "support", logo: "/logos/4.png", name: "Support Partner 4" },
    { category: "support", logo: "/logos/5.png", name: "Support Partner 5" },
    { category: "support", logo: "/logos/6.png", name: "Support Partner 6" },
    { category: "support", logo: "/logos/8.png", name: "Support Partner 8" },
    
    // Media Partners
    { category: "media", logo: "/logos/15.png", name: "Media Partner 1" },
  ];

  const [activeTab, setActiveTab] = useState("all");

  const filteredPartners = activeTab === "all" 
    ? partners 
    : partners.filter((p) => p.category === activeTab);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="sponsors" className="py-12 md:py-20 relative overflow-hidden bg-white">
      {/* Decorative Gold Waves - Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          className="relative w-full h-16 md:h-24 text-[#D4AF37] opacity-10"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="#D4AF37"
          ></path>
          <path
            d="M0,0V15.81C13,21.25,27.93,25.38,44.71,27.69c60.12,7.72,116.73-3.78,176.46-6.21,73.16-3,143.53,17.24,215.07,29,98.36,16.16,195.91,8.24,292.31-2.73,56-6.4,110.24-17.48,164.72-30.47,35.75-8.52,74.19-17.21,106.73-7.48V0Z"
            fill="#D4AF37"
            opacity="0.5"
          ></path>
        </svg>
      </div>

      {/* Decorative Gold Waves - Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden transform rotate-180">
        <svg
          className="relative w-full h-16 md:h-24 text-[#D4AF37] opacity-10"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="#D4AF37"
          ></path>
          <path
            d="M0,0V15.81C13,21.25,27.93,25.38,44.71,27.69c60.12,7.72,116.73-3.78,176.46-6.21,73.16-3,143.53,17.24,215.07,29,98.36,16.16,195.91,8.24,292.31-2.73,56-6.4,110.24-17.48,164.72-30.47,35.75-8.52,74.19-17.21,106.73-7.48V0Z"
            fill="#D4AF37"
            opacity="0.5"
          ></path>
        </svg>
      </div>

      {/* Left Side Gold Curves - Hidden on mobile */}
      <div className="hidden md:block absolute left-0 top-1/4">
        <svg width="120" height="400" viewBox="0 0 120 400" fill="none">
          <motion.path
            d="M0 100 C 40 150, 40 250, 0 300"
            stroke="#D4AF37"
            strokeWidth="2"
            strokeOpacity="0.15"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2 }}
          />
          <motion.path
            d="M20 150 C 60 180, 60 220, 20 250"
            stroke="#D4AF37"
            strokeWidth="2"
            strokeOpacity="0.1"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.3 }}
          />
          <motion.circle
            cx="0"
            cy="200"
            r="3"
            fill="#D4AF37"
            fillOpacity="0.2"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </svg>
      </div>

      {/* Right Side Gold Curves - Hidden on mobile */}
      <div className="hidden md:block absolute right-0 top-3/4 transform rotate-180">
        <svg width="120" height="400" viewBox="0 0 120 400" fill="none">
          <motion.path
            d="M0 100 C 40 150, 40 250, 0 300"
            stroke="#D4AF37"
            strokeWidth="2"
            strokeOpacity="0.15"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2 }}
          />
          <motion.path
            d="M20 150 C 60 180, 60 220, 20 250"
            stroke="#D4AF37"
            strokeWidth="2"
            strokeOpacity="0.1"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.3 }}
          />
          <motion.circle
            cx="0"
            cy="200"
            r="3"
            fill="#D4AF37"
            fillOpacity="0.2"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </svg>
      </div>

      {/* Floating Gold Dots */}
      <div className="absolute top-10 md:top-20 left-1/4">
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={`dot1-${i}`}
              className="w-0.5 md:w-1 h-0.5 md:h-1 rounded-full"
              style={{ backgroundColor: '#D4AF37', opacity: 0.2 }}
              animate={{
                y: [0, -5, 0],
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.3, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 md:bottom-20 right-1/4">
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={`dot2-${i}`}
              className="w-0.5 md:w-1 h-0.5 md:h-1 rounded-full"
              style={{ backgroundColor: '#D4AF37', opacity: 0.15 }}
              animate={{
                y: [0, 5, 0],
                opacity: [0.15, 0.4, 0.15],
                scale: [1, 1.3, 1]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.3
              }}
            />
          ))}
        </div>
      </div>

      {/* Center Gold Ring - Adjusted for mobile */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px]">
        <motion.div 
          className="absolute inset-0 rounded-full border-2" 
          style={{ borderColor: 'rgba(212, 175, 55, 0.08)' }}
          animate={{ scale: [1, 1.05, 1], opacity: [0.08, 0.12, 0.08] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div 
          className="absolute inset-8 md:inset-16 rounded-full border-2" 
          style={{ borderColor: 'rgba(212, 175, 55, 0.05)' }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 7, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-12"
        >
          {/* Gold accent lines */}
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
            <motion.div 
              className="w-8 md:w-12 h-px" 
              style={{ backgroundColor: '#D4AF37', opacity: 0.3 }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.5 }}
            />
            <span 
              className="font-heading text-xs md:text-sm font-semibold tracking-[0.15em] md:tracking-[0.25em] uppercase"
              style={{ color: '#D4AF37', fontFamily: 'Playfair Display, serif' }}
            >
              OUR NETWORK
            </span>
            <motion.div 
              className="w-8 md:w-12 h-px" 
              style={{ backgroundColor: '#D4AF37', opacity: 0.3 }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 px-4"
            style={{ color: '#0B1C2D', fontFamily: 'Playfair Display, serif' }}
          >
            Our Partners & Sponsors
          </motion.h2>

          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-16 md:w-20 h-0.5 mx-auto mb-3 md:mb-4"
            style={{ 
              background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
              transformOrigin: 'center'
            }}
          />

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-body text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-4"
            style={{ color: '#6B7280', fontFamily: 'Poppins, sans-serif' }}
          >
            Collaborating with industry leaders to promote excellence in education
          </motion.p>
        </motion.div>

        {/* Tabs - Horizontal scroll on mobile */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 md:mb-12 overflow-x-auto pb-2 md:pb-0 hide-scrollbar"
        >
          <div className="flex justify-start md:justify-center min-w-max md:min-w-0 px-2 md:px-0">
            <div className="inline-flex p-1 rounded-xl md:rounded-2xl" style={{ backgroundColor: 'rgba(212, 175, 55, 0.08)' }}>
              {tabs.map((tab, index) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 sm:px-4 md:px-6 py-2 md:py-2.5 font-heading text-xs sm:text-sm md:text-base font-medium rounded-lg md:rounded-xl transition-all duration-300 relative overflow-hidden whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'shadow-lg' 
                      : 'opacity-70 hover:opacity-100'
                  }`}
                  style={{
                    backgroundColor: activeTab === tab.id ? '#D4AF37' : 'transparent',
                    color: activeTab === tab.id ? '#0B1C2D' : '#4B5563',
                    fontFamily: 'Playfair Display, serif'
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {activeTab !== tab.id && (
                    <motion.div 
                      className="absolute inset-0"
                      style={{ background: 'rgba(212,175,55,0.08)' }}
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Logos Grid - Responsive grid with better mobile spacing */}
        <motion.div 
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center justify-items-center"
        >
          {filteredPartners.map((item, index) => (
            <motion.div
              key={item.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 400, damping: 17 }
              }}
              className="group relative flex items-center justify-center p-2 sm:p-3 md:p-4 w-full"
            >
              {/* Premium Logo Container */}
              <div className="relative">
                {/* Gold glow on hover - Reduced for mobile */}
                <motion.div 
                  className="absolute -inset-2 sm:-inset-3 md:-inset-4 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ 
                    background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)',
                    filter: 'blur-8px sm:blur-10px'
                  }}
                />
                
                {/* Logo */}
                <img
                  src={item.logo}
                  alt={item.name}
                  className="w-full max-w-[80px] sm:max-w-[100px] md:max-w-[120px] lg:max-w-[140px] h-auto max-h-12 sm:max-h-14 md:max-h-16 object-contain relative z-10 transition-all duration-300 group-hover:brightness-110"
                />

                {/* Gold border on hover */}
                <motion.div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-lg"
                  style={{
                    border: '1px sm:border-2 solid #D4AF37',
                    boxShadow: '0 0 15px sm:0 0 30px rgba(212, 175, 55, 0.2)'
                  }}
                />

                {/* Tooltip on hover - Adjusted for mobile */}
                <motion.div 
                  className="absolute -bottom-6 sm:-bottom-7 md:-bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20"
                  style={{
                    background: '#0B1C2D',
                    border: '1px solid #D4AF37',
                    borderRadius: '9999px',
                    padding: '2px 8px sm:4px 12px',
                    fontSize: '8px sm:10px',
                    color: '#F5E6C4',
                    fontFamily: 'Poppins, sans-serif'
                  }}
                >
                  {item.name}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10 md:mt-16 pt-6 md:pt-8 px-4"
          style={{ borderTop: '1px solid rgba(212, 175, 55, 0.2)' }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-2">
            <motion.div 
              className="h-px w-8 sm:w-12 hidden sm:block" 
              style={{ background: 'linear-gradient(90deg, transparent, #D4AF37)' }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.5 }}
            />
            
            <p 
              className="font-body text-xs sm:text-sm text-center"
              style={{ color: '#6B7280', fontFamily: 'Poppins, sans-serif' }}
            >
              Join these esteemed organizations in shaping the future of education
            </p>
            
            <motion.div 
              className="h-px w-8 sm:w-12 hidden sm:block" 
              style={{ background: 'linear-gradient(270deg, transparent, #D4AF37)' }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
          
          <motion.button 
            className="mt-3 md:mt-4 px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 font-heading text-xs sm:text-sm rounded-full relative overflow-hidden group"
            style={{
              background: 'transparent',
              color: '#D4AF37',
              fontFamily: 'Playfair Display, serif',
              border: '1px solid #D4AF37'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="absolute inset-0"
              style={{ background: 'rgba(212,175,55,0.1)' }}
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">Become a Partner →</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Hide scrollbar for tab container */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Font Imports */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800&display=swap');
        
        .font-heading {
          font-family: 'Playfair Display', serif;
        }
        
        .font-body {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
    </section>
  );
}