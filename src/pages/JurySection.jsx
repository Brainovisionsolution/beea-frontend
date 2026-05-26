import { motion } from 'framer-motion';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function JurySection() {
  return (
    <>
      <Navbar />
      <section id="jury" className="relative py-12 sm:py-16 md:py-20 overflow-hidden" style={{ backgroundColor: '#0A1628' }}>
        {/* Clean Dark Navy Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #0A1628 0%, #0D1B2A 50%, #0A1628 100%)'
          }}
        />

        {/* Subtle Gold Decorative Elements - Hidden on mobile, visible on tablet+ */}
        
        {/* Top Left - Gold Square Pattern */}
        <div className="absolute top-5 sm:top-10 left-5 sm:left-10 hidden sm:block">
          <div className="w-8 sm:w-16 h-8 sm:h-16 rotate-12" style={{ backgroundColor: 'rgba(212, 175, 55, 0.04)' }}></div>
          <div className="w-6 sm:w-12 h-6 sm:h-12 -rotate-6 -mt-4 sm:-mt-8 ml-4 sm:ml-8" style={{ backgroundColor: 'rgba(245, 230, 196, 0.04)' }}></div>
          <div className="w-4 sm:w-8 h-4 sm:h-8 rotate-45 -mt-2 sm:-mt-4 ml-2 sm:ml-4" style={{ backgroundColor: 'rgba(212, 175, 55, 0.06)' }}></div>
        </div>

        {/* Top Right - Gold Circles */}
        <div className="absolute top-10 sm:top-20 right-10 sm:right-20 hidden md:block">
          <div className="w-12 sm:w-24 h-12 sm:h-24 rounded-full" style={{ backgroundColor: 'rgba(212, 175, 55, 0.04)' }}></div>
          <div className="w-8 sm:w-16 h-8 sm:h-16 rounded-full -mt-6 sm:-mt-12 mr-4 sm:mr-8" style={{ backgroundColor: 'rgba(245, 230, 196, 0.03)' }}></div>
          <div className="w-4 sm:w-8 h-4 sm:h-8 rounded-full -mt-2 sm:-mt-4 mr-8 sm:mr-16" style={{ backgroundColor: 'rgba(212, 175, 55, 0.05)' }}></div>
        </div>

        {/* Bottom Left - Gold Curved Lines */}
        <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 hidden lg:block">
          <svg width="80" height="80" viewBox="0 0 120 120" fill="none">
            <path d="M10 110 Q 40 70, 70 70 T 110 30" stroke="#D4AF37" strokeWidth="1.5" strokeOpacity="0.1" fill="none"/>
            <path d="M20 90 Q 50 50, 80 50 T 100 20" stroke="#F5E6C4" strokeWidth="1.5" strokeOpacity="0.08" fill="none"/>
            <circle cx="70" cy="70" r="3" fill="#D4AF37" fillOpacity="0.1"/>
            <circle cx="80" cy="50" r="2" fill="#F5E6C4" fillOpacity="0.08"/>
          </svg>
        </div>

        {/* Bottom Right - Gold Mixed Shapes */}
        <div className="absolute bottom-16 sm:bottom-32 right-16 sm:right-32 hidden lg:block">
          <div className="w-12 sm:w-20 h-12 sm:h-20 rounded-full border-2" style={{ borderColor: 'rgba(212, 175, 55, 0.08)' }}></div>
          <div className="w-8 sm:w-12 h-8 sm:h-12 rotate-45 -mt-6 sm:-mt-10 ml-5 sm:ml-10 border-2" style={{ borderColor: 'rgba(245, 230, 196, 0.06)' }}></div>
          <div className="w-4 sm:w-6 h-4 sm:h-6 rounded-full -mt-3 sm:-mt-6 ml-8 sm:ml-16" style={{ backgroundColor: 'rgba(212, 175, 55, 0.08)' }}></div>
        </div>

        {/* Center - Large Gold Rings - Hidden on mobile */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[450px] md:w-[600px] h-[300px] sm:h-[450px] md:h-[600px] pointer-events-none hidden md:block">
          <div className="absolute inset-0 rounded-full border" style={{ borderColor: 'rgba(212, 175, 55, 0.05)' }}></div>
          <div className="absolute inset-8 sm:inset-16 rounded-full border" style={{ borderColor: 'rgba(245, 230, 196, 0.04)' }}></div>
          <div className="absolute inset-16 sm:inset-32 rounded-full border" style={{ borderColor: 'rgba(212, 175, 55, 0.03)' }}></div>
        </div>

        {/* Floating Gold Dots - Responsive */}
        <div className="absolute top-20 sm:top-40 right-8 sm:right-1/4 hidden sm:block">
          <div className="flex gap-1">
            <div className="w-0.5 sm:w-1 h-0.5 sm:h-1 rounded-full" style={{ backgroundColor: '#D4AF37', opacity: 0.4 }}></div>
            <div className="w-0.5 sm:w-1 h-0.5 sm:h-1 rounded-full" style={{ backgroundColor: '#F5E6C4', opacity: 0.3 }}></div>
            <div className="w-0.5 sm:w-1 h-0.5 sm:h-1 rounded-full" style={{ backgroundColor: '#D4AF37', opacity: 0.4 }}></div>
          </div>
        </div>
        <div className="absolute bottom-20 sm:bottom-40 left-8 sm:left-1/3 hidden sm:block">
          <div className="flex gap-1">
            <div className="w-0.5 sm:w-1 h-0.5 sm:h-1 rounded-full" style={{ backgroundColor: '#F5E6C4', opacity: 0.3 }}></div>
            <div className="w-0.5 sm:w-1 h-0.5 sm:h-1 rounded-full" style={{ backgroundColor: '#D4AF37', opacity: 0.4 }}></div>
            <div className="w-0.5 sm:w-1 h-0.5 sm:h-1 rounded-full" style={{ backgroundColor: '#F5E6C4', opacity: 0.3 }}></div>
          </div>
        </div>

        {/* Subtle Floating Animated Gold Circles */}
        <motion.div 
          className="absolute top-1/3 left-1/4 w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full hidden sm:block"
          style={{ backgroundColor: '#D4AF37', opacity: 0.15 }}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/3 w-2 sm:w-3 h-2 sm:h-3 rounded-full hidden md:block"
          style={{ backgroundColor: '#F5E6C4', opacity: 0.1 }}
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          {/* MINIMAL HEADER - Luxury Style */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-6 sm:mb-8"
          >
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2">
              <div className="w-6 sm:w-8 h-px" style={{ backgroundColor: '#D4AF37', opacity: 0.3 }} />
              <span 
                className="font-heading text-[10px] sm:text-xs font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase px-3 sm:px-4 py-0.5 sm:py-1 rounded-full"
                style={{ 
                  color: '#D4AF37',
                  background: 'rgba(212, 175, 55, 0.08)',
                  fontFamily: 'Playfair Display, serif'
                }}
              >
                JURY PANEL
              </span>
              <div className="w-6 sm:w-8 h-px" style={{ backgroundColor: '#D4AF37', opacity: 0.3 }} />
            </div>
          </motion.div>

          {/* MAIN LOCKED CONTENT */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative Gold Borders - Hidden on very small screens */}
            <div 
              className="absolute inset-0 rounded-2xl transform rotate-1 hidden sm:block"
              style={{ 
                border: '1px solid rgba(212, 175, 55, 0.15)',
              }}
            ></div>
            <div 
              className="absolute inset-0 rounded-2xl transform -rotate-1 hidden sm:block"
              style={{ 
                border: '1px solid rgba(245, 230, 196, 0.1)',
              }}
            ></div>
            
            {/* Main Content Box */}
            <div 
              className="relative rounded-xl p-6 sm:p-8 md:p-10 shadow-xl"
              style={{ 
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(212, 175, 55, 0.1)',
                backdropFilter: 'blur(10px)'
              }}
            >
              {/* LOCK ICON */}
              <div className="relative w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-3 sm:mb-4">
                {/* Background Rings */}
                <div 
                  className="absolute inset-0 rounded-full animate-ping"
                  style={{ border: '1px solid rgba(212, 175, 55, 0.2)' }}
                ></div>
                <div 
                  className="absolute inset-1 sm:inset-2 rounded-full"
                  style={{ border: '1px solid rgba(245, 230, 196, 0.15)' }}
                ></div>
                
                {/* Main Lock */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <svg className="w-8 sm:w-10 h-8 sm:h-10" style={{ color: '#D4AF37' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9v3c0 .5.4 1 1 1s1-.5 1-1V9c0-2.8 2.2-5 5-5s5 2.2 5 5v3c0 .5.4 1 1 1s1-.5 1-1V9c0-3.9-3.1-7-7-7z"/>
                      <path d="M18 11H6c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2zm-6 7c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                    </svg>
                    <div 
                      className="absolute -top-1 -right-1 w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full animate-pulse"
                      style={{ backgroundColor: '#D4AF37' }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* LOCKED TEXT */}
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-center mb-2 sm:mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                <span style={{ color: '#FFFFFF' }}>LOCK</span>
                <span style={{ 
                  background: 'linear-gradient(135deg, #D4AF37 0%, #F5E6C4 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>ED</span>
              </h2>

              {/* DIVIDER */}
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-6 sm:w-8 h-px" style={{ backgroundColor: 'rgba(212, 175, 55, 0.3)' }}></div>
                <span 
                  className="font-body text-[10px] sm:text-xs font-semibold uppercase tracking-wider"
                  style={{ color: '#B8C5D6', fontFamily: 'Poppins, sans-serif' }}
                >
                  Selection in Progress
                </span>
                <div className="w-6 sm:w-8 h-px" style={{ backgroundColor: 'rgba(212, 175, 55, 0.3)' }}></div>
              </div>

              {/* DESCRIPTION */}
              <p 
                className="font-body text-xs sm:text-sm text-center max-w-md mx-auto mb-4 sm:mb-6 px-2"
                style={{ color: '#B8C5D6', fontFamily: 'Poppins, sans-serif' }}
              >
                Our distinguished jury panel is being curated. Will be revealed soon.
              </p>

              {/* COUNTDOWN DOTS */}
              <div className="flex justify-center gap-1.5 sm:gap-2 mb-5 sm:mb-6">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="relative">
                    <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full" style={{ backgroundColor: '#D4AF37' }}></div>
                    <div 
                      className="absolute inset-0 w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full animate-ping"
                      style={{ backgroundColor: '#F5E6C4', opacity: 0.5 }}
                    ></div>
                  </div>
                ))}
              </div>

              {/* REVEAL BUTTON */}
              <div className="text-center">
                <button className="group relative inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-1.5 sm:py-2 bg-transparent rounded-full overflow-hidden transition-all duration-300 hover:scale-105">
                  {/* Button Border */}
                  <div 
                    className="absolute inset-0 rounded-full"
                    style={{ border: '1px solid #D4AF37' }}
                  ></div>
                  
                  {/* Hover Gradient */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                    style={{ 
                      background: 'linear-gradient(135deg, #D4AF37, rgba(212, 175, 55, 0.5))'
                    }}
                  ></div>
                  
                  <span 
                    className="relative font-heading text-xs sm:text-sm font-semibold transition-colors duration-300 group-hover:text-[#0A1628]"
                    style={{ color: '#D4AF37', fontFamily: 'Playfair Display, serif' }}
                  >
                    Notify Me
                  </span>
                  <svg 
                    className="relative w-3 sm:w-4 h-3 sm:h-4 transition-colors duration-300 group-hover:text-[#0A1628]" 
                    style={{ color: '#D4AF37' }}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </button>
              </div>

              {/* LOCK PICKS - Decorative */}
              <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3">
                <div className="w-px h-3 sm:h-5 rotate-12" style={{ backgroundColor: '#D4AF37', opacity: 0.5 }}></div>
                <div className="w-px h-4 sm:h-6" style={{ backgroundColor: '#F5E6C4', opacity: 0.4 }}></div>
                <div className="w-px h-3 sm:h-5 -rotate-12" style={{ backgroundColor: '#D4AF37', opacity: 0.5 }}></div>
              </div>

              {/* Gold Corner Accents */}
              <div className="absolute top-0 left-0 w-5 sm:w-8 h-5 sm:h-8 border-t border-l rounded-tl-lg sm:rounded-tl-xl" style={{ borderColor: '#D4AF37', opacity: 0.2 }}></div>
              <div className="absolute top-0 right-0 w-5 sm:w-8 h-5 sm:h-8 border-t border-r rounded-tr-lg sm:rounded-tr-xl" style={{ borderColor: '#D4AF37', opacity: 0.2 }}></div>
              <div className="absolute bottom-0 left-0 w-5 sm:w-8 h-5 sm:h-8 border-b border-l rounded-bl-lg sm:rounded-bl-xl" style={{ borderColor: '#D4AF37', opacity: 0.2 }}></div>
              <div className="absolute bottom-0 right-0 w-5 sm:w-8 h-5 sm:h-8 border-b border-r rounded-br-lg sm:rounded-br-xl" style={{ borderColor: '#D4AF37', opacity: 0.2 }}></div>
            </div>
          </motion.div>

          {/* BOTTOM LOCK ICONS */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6 sm:mt-8"
          >
            {[...Array(3)].map((_, i) => (
              <div 
                key={i} 
                className="flex items-center gap-1 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full"
                style={{ 
                  background: 'rgba(212, 175, 55, 0.05)',
                  border: '1px solid rgba(212, 175, 55, 0.15)'
                }}
              >
                <svg className="w-2.5 sm:w-3 h-2.5 sm:h-3" style={{ color: '#D4AF37' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span className="font-body text-[10px] sm:text-xs" style={{ color: '#B8C5D6', fontFamily: 'Poppins, sans-serif' }}>Jury {i + 1}</span>
              </div>
            ))}
          </motion.div>

          {/* Simple Footer */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-5 sm:mt-6 text-center"
          >
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <div className="w-8 sm:w-12 h-px" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37)' }} />
              <p 
                className="font-body text-[10px] sm:text-xs"
                style={{ color: '#B8C5D6', fontFamily: 'Poppins, sans-serif' }}
              >
                ✦ Coming Soon ✦
              </p>
              <div className="w-8 sm:w-12 h-px" style={{ background: 'linear-gradient(270deg, transparent, #D4AF37)' }} />
            </div>
          </motion.div>
        </div>

        {/* Animation Keyframes and Font Imports */}
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800&display=swap');
          
          .font-heading {
            font-family: 'Playfair Display', serif;
          }
          
          .font-body {
            font-family: 'Poppins', sans-serif;
          }

          @keyframes float-up {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          @keyframes float-down {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(20px); }
          }
        `}</style>
      </section>
      <Footer />
    </>
  );
}