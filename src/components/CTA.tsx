import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="relative py-20 overflow-hidden" style={{ backgroundColor: '#0A1628' }}>
      {/* Clean Background - No heavy gradients */}
      <div className="absolute inset-0" />

      {/* Minimal Gold Decorative Elements */}
      
      {/* Subtle Gold Grid Pattern - Very Light */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="gold-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gold-grid)" />
        </svg>
      </div>

      {/* Subtle Gold Orbs */}
      <motion.div 
        className="absolute top-20 left-20 w-72 h-72 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)' }}
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(245,230,196,0.04) 0%, transparent 70%)' }}
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Minimal Gold Accent Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-20"></div>

      {/* Subtle Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-0.5 h-0.5 rounded-full pointer-events-none"
          style={{ 
            backgroundColor: '#D4AF37',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.15
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.25, 0.1]
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3
          }}
        />
      ))}

      {/* Minimal Gold Curved Lines */}
      <svg
        className="absolute -top-12 -left-16 w-[200px] h-[200px] lg:w-[260px] lg:h-[260px] pointer-events-none"
        viewBox="0 0 260 260"
        fill="none"
      >
        <path
          d="M 250 230 C 250 100, 160 10, 30 10"
          stroke="#D4AF37"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.1"
        />
      </svg>

      <svg
        className="absolute -bottom-12 -right-16 w-[200px] h-[200px] lg:w-[260px] lg:h-[260px] pointer-events-none"
        viewBox="0 0 260 260"
        fill="none"
      >
        <path
          d="M 10 30 C 10 160, 100 250, 230 250"
          stroke="#D4AF37"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.1"
        />
      </svg>

      {/* Minimal Gold Rings */}
      <div
        className="absolute top-40 left-1/4 w-64 h-64 rounded-full border pointer-events-none"
        style={{ borderColor: 'rgba(212, 175, 55, 0.06)' }}
      />
      <div
        className="absolute bottom-40 right-1/4 w-80 h-80 rounded-full border pointer-events-none"
        style={{ borderColor: 'rgba(245, 230, 196, 0.04)' }}
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center">
          
          {/* Premium Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full mb-8"
            style={{ 
              background: 'linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(245,230,196,0.04) 100%)',
              border: '1px solid rgba(212, 175, 55, 0.2)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: '#D4AF37' }}></div>
            <span 
              className="font-heading text-xs font-medium tracking-[0.2em] uppercase"
              style={{ color: '#D4AF37', fontFamily: 'Playfair Display, serif' }}
            >
              Limited Time Nominations
            </span>
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: '#D4AF37' }}></div>
          </motion.div>
          
          {/* Main Heading - Premium Typography */}
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-heading text-4xl md:text-6xl font-bold mb-2 leading-tight"
            style={{ color: '#FFFFFF', fontFamily: 'Playfair Display, serif' }}
          >
            Ready to Showcase
          </motion.h2>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-heading text-4xl md:text-6xl font-bold mb-6 leading-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            <span style={{ 
              background: 'linear-gradient(135deg, #D4AF37 0%, #F5E6C4 50%, #D4AF37 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Your Excellence?
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="font-body text-base max-w-xl mx-auto mb-10 leading-relaxed"
            style={{ color: '#B8C5D6', fontFamily: 'Poppins, sans-serif' }}
          >
            Join thousands of educators and institutions who have been recognized for their outstanding contributions to education.
          </motion.p>

          {/* CTA Buttons - Premium Design */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-14"
          >
            {/* Primary Button - Light Gold Gradient */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-4 font-heading text-base font-bold rounded-full overflow-hidden shadow-lg"
              style={{ 
                background: 'linear-gradient(135deg, #D4AF37 0%, #F5E6C4 100%)',
                color: '#0A1628',
                fontFamily: 'Playfair Display, serif',
                boxShadow: '0 10px 25px -5px rgba(212, 175, 55, 0.3)'
              }}
            >
              <span className="relative z-10">Nominate Now</span>
              <div 
                className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{ opacity: 0.2 }}
              ></div>
            </motion.button>
            
            
          </motion.div>

          {/* Trust Indicators - Premium Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-12"
          >
            {[
              { 
                text: "No Registration Fee",
                icon: (className) => (
                  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              { 
                text: "Pan India Recognition",
                icon: (className) => (
                  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              { 
                text: "500+ Awards Given",
                icon: (className) => (
                  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                )
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="group relative rounded-xl p-4 transition-all duration-300"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(212, 175, 55, 0.12)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ 
                      background: 'linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(245,230,196,0.05) 100%)',
                      color: '#D4AF37'
                    }}
                  >
                    {item.icon("w-5 h-5")}
                  </div>
                  <span 
                    className="font-body text-xs"
                    style={{ color: '#B8C5D6', fontFamily: 'Poppins, sans-serif' }}
                  >
                    {item.text}
                  </span>
                </div>

                {/* Gold border on hover */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                    boxShadow: '0 0 20px rgba(212, 175, 55, 0.1)'
                  }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Premium Countdown Timer */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="inline-flex items-center gap-4 px-6 py-3 rounded-xl"
            style={{ 
              background: 'linear-gradient(135deg, rgba(212,175,55,0.05) 0%, rgba(245,230,196,0.02) 100%)',
              border: '1px solid rgba(212, 175, 55, 0.15)',
              backdropFilter: 'blur(10px)'
            }}
          >
            {/* Animated Dots */}
            <div className="flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: '#D4AF37' }}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                />
              ))}
            </div>

            <span 
              className="font-body text-sm tracking-wide"
              style={{ color: '#B8C5D6', fontFamily: 'Poppins, sans-serif' }}
            >
              Nominations close in <span style={{ color: '#D4AF37', fontWeight: 600 }}>30 days</span>
            </span>

            <div className="h-4 w-px" style={{ background: 'rgba(212, 175, 55, 0.2)' }}></div>

            <span 
              className="font-heading text-xs font-bold uppercase tracking-wider"
              style={{ 
                background: 'linear-gradient(135deg, #D4AF37 0%, #F5E6C4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Hurry
            </span>
          </motion.div>

          {/* Bottom Premium Accent */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-14 flex justify-center items-center gap-3"
          >
            <div className="w-12 h-px" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37)' }}></div>
            <div className="relative">
              <div className="w-1.5 h-1.5 rotate-45" style={{ border: '1px solid #D4AF37' }}></div>
              <div className="absolute inset-0 w-1.5 h-1.5 rotate-45 animate-ping" style={{ border: '1px solid #F5E6C4', opacity: 0.2 }}></div>
            </div>
            <div className="w-12 h-px" style={{ background: 'linear-gradient(270deg, transparent, #D4AF37)' }}></div>
          </motion.div>
        </div>
      </div>

      {/* Premium Font Imports and Animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800&display=swap');
        
        .font-heading {
          font-family: 'Playfair Display', serif;
        }
        
        .font-body {
          font-family: 'Poppins', sans-serif;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse-gold {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </section>
  );
}