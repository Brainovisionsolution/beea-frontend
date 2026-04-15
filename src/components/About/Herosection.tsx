import { motion } from 'framer-motion';

export default function Herosection(): JSX.Element {
  return (
    <section
      className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden"
      style={{ backgroundColor: '#0B1C2D' }}
    >
      {/* Deep Navy Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #0E2A47 0%, #071421 100%)'
        }}
      />

      {/* Luxury Gold Decorative Elements */}
      {/* Top Left - Gold Geometric Pattern */}
      <div className="hidden md:block absolute top-10 left-10">
        <div className="w-20 h-20 rotate-12" style={{ backgroundColor: 'rgba(212, 175, 55, 0.08)' }} />
        <div className="w-14 h-14 -rotate-6 -mt-10 ml-10" style={{ backgroundColor: 'rgba(245, 230, 196, 0.08)' }} />
        <div className="w-8 h-8 rotate-45 -mt-6 ml-16" style={{ backgroundColor: 'rgba(212, 175, 55, 0.12)' }} />
      </div>

      {/* Top Right - Gold Circles */}
      <div className="hidden md:block absolute top-20 right-20">
        <div className="w-32 h-32 rounded-full" style={{ backgroundColor: 'rgba(212, 175, 55, 0.08)' }} />
        <div className="w-20 h-20 rounded-full -mt-16 mr-12" style={{ backgroundColor: 'rgba(245, 230, 196, 0.06)' }} />
        <div className="w-10 h-10 rounded-full -mt-6 mr-24" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }} />
      </div>

      {/* Bottom Left - Gold Curved Lines */}
      <div className="hidden md:block absolute bottom-20 left-20">
        <svg width="140" height="140" viewBox="0 0 140 140" fill="none">
          <path
            d="M15 125 Q 50 80, 85 80 T 125 40"
            stroke="#D4AF37"
            strokeWidth="2"
            strokeOpacity="0.2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M25 105 Q 60 60, 95 60 T 115 30"
            stroke="#F5E6C4"
            strokeWidth="2"
            strokeOpacity="0.12"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="85" cy="80" r="4" fill="#D4AF37" fillOpacity="0.2" />
          <circle cx="95" cy="60" r="3" fill="#F5E6C4" fillOpacity="0.15" />
          <circle cx="115" cy="30" r="2" fill="#D4AF37" fillOpacity="0.25" />
        </svg>
      </div>

      {/* Bottom Right - Gold Mixed Shapes */}
      <div className="hidden md:block absolute bottom-32 right-32">
        <div className="w-24 h-24 rounded-full border-4" style={{ borderColor: 'rgba(212, 175, 55, 0.15)' }} />
        <div className="w-14 h-14 rotate-45 -mt-12 ml-12 border-4" style={{ borderColor: 'rgba(245, 230, 196, 0.12)' }} />
        <div className="w-8 h-8 rounded-full -mt-8 ml-20" style={{ backgroundColor: 'rgba(212, 175, 55, 0.15)' }} />
      </div>

      {/* Center - Large Gold Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[700px] h-[400px] md:h-[700px]">
        <div className="absolute inset-0 rounded-full border-2" style={{ borderColor: 'rgba(212, 175, 55, 0.1)' }} />
        <div className="absolute inset-12 md:inset-20 rounded-full border-2" style={{ borderColor: 'rgba(245, 230, 196, 0.08)' }} />
        <div className="absolute inset-24 md:inset-40 rounded-full border-2" style={{ borderColor: 'rgba(212, 175, 55, 0.05)' }} />
      </div>

      {/* Floating Gold Dust Particles */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-1 h-1 rounded-full"
        style={{ backgroundColor: '#D4AF37', opacity: 0.4 }}
        animate={{ y: [0, -15, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-2/3 right-1/4 w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: '#F5E6C4', opacity: 0.3 }}
        animate={{ y: [0, 12, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/5 w-1 h-1 rounded-full"
        style={{ backgroundColor: '#D4AF37', opacity: 0.35 }}
        animate={{ y: [0, -10, 0], opacity: [0.35, 0.7, 0.35] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full"
        style={{ backgroundColor: '#F9E7B3', opacity: 0.25 }}
        animate={{ y: [0, 8, 0], opacity: [0.25, 0.6, 0.25] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
      />

      {/* Floating Gold Circles - Animated */}
      <motion.div
        className="absolute top-1/4 right-1/5 w-3 md:w-4 h-3 md:h-4 rounded-full"
        style={{ backgroundColor: '#D4AF37', opacity: 0.2 }}
        animate={{ y: [0, -20, 0], x: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-2 md:w-3 h-2 md:h-3 rounded-full"
        style={{ backgroundColor: '#F5E6C4', opacity: 0.18 }}
        animate={{ y: [0, 15, 0], x: [0, -3, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Breadcrumb / Navigation Hint */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2 mb-6 md:mb-8"
        >
          <span className="text-xs md:text-sm font-body" style={{ color: '#F5E6C4', opacity: 0.6 }}>
            Home
          </span>
          <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#D4AF37', opacity: 0.5 }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-xs md:text-sm font-body" style={{ color: '#D4AF37' }}>
            About Us
          </span>
        </motion.div>

        {/* Main Hero Content */}
        <div className="text-center">
          {/* Gold Accent Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-2 md:gap-3 mb-4 md:mb-6"
          >
            <div className="w-8 md:w-12 h-px" style={{ backgroundColor: '#D4AF37', opacity: 0.4 }} />
            <span
              className="font-heading text-xs md:text-sm font-semibold tracking-[0.2em] md:tracking-[0.3em] uppercase px-4 md:px-6 py-1.5 md:py-2 rounded-full"
              style={{
                color: '#D4AF37',
                background: 'rgba(212, 175, 55, 0.12)',
                border: '1px solid rgba(212, 175, 55, 0.25)'
              }}
            >
              OUR LEGACY
            </span>
            <div className="w-8 md:w-12 h-px" style={{ backgroundColor: '#D4AF37', opacity: 0.4 }} />
          </motion.div>

          {/* Main Heading with Gold Gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6 px-4"
          >
            <span className="bg-gradient-to-r from-[#E8C47E] via-[#D4AF37] to-[#F9E7B3] bg-clip-text text-transparent">
              Celebrating Excellence
            </span>
            <br />
            <span style={{ color: '#F5E6C4' }}>Since 2010</span>
          </motion.h1>

          {/* Decorative Gold Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-20 md:w-28 h-0.5 mx-auto mb-6 md:mb-8"
            style={{
              background: 'linear-gradient(90deg, transparent, #D4AF37, #F9E7B3, #D4AF37, transparent)',
              transformOrigin: 'center'
            }}
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="font-body text-sm md:text-base lg:text-lg max-w-3xl mx-auto px-4 leading-relaxed"
            style={{ color: '#F5E6C4', opacity: 0.85 }}
          >
            We are a premier institution dedicated to recognizing and celebrating outstanding achievements in education.
            Our mission is to honor those who shape the future through innovation, dedication, and excellence.
          </motion.p>

          {/* Stats / Key Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto mt-12 md:mt-16"
          >
            {[
              { number: '15+', label: 'Award Editions', icon: '🏆' },
              { number: '500+', label: 'Honored Laureates', icon: '⭐' },
              { number: '50+', label: 'Expert Jurors', icon: '👥' },
              { number: 'Pan India', label: 'Nationwide Reach', icon: '🇮🇳' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                className="text-center p-4 rounded-xl"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(212, 175, 55, 0.15)',
                  backdropFilter: 'blur(8px)'
                }}
              >
                <div className="text-2xl md:text-3xl mb-1">{stat.icon}</div>
                <div className="font-heading text-xl md:text-2xl font-bold" style={{ color: '#D4AF37' }}>
                  {stat.number}
                </div>
                <div className="font-body text-xs md:text-sm mt-1" style={{ color: '#F5E6C4', opacity: 0.7 }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 md:mt-16"
          >
            <button
              className="px-8 md:px-10 py-3 md:py-4 font-heading font-semibold text-sm md:text-base rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl group relative overflow-hidden"
              style={{
                background: '#D4AF37',
                color: '#0B1C2D',
                boxShadow: '0 8px 25px rgba(212, 175, 55, 0.35)'
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Know Our Story
                <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>

            <button
              className="px-8 md:px-10 py-3 md:py-4 font-heading font-semibold text-sm md:text-base rounded-xl transition-all duration-300 hover:scale-105 group"
              style={{
                background: 'transparent',
                color: '#F5E6C4',
                border: '1px solid rgba(212, 175, 55, 0.5)',
                backdropFilter: 'blur(8px)'
              }}
            >
              <span className="flex items-center gap-2">
                Meet Our Jury
                <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs font-body" style={{ color: '#F5E6C4', opacity: 0.5 }}>
                Scroll to discover
              </span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-5 h-8 rounded-full border-2 flex justify-center"
                style={{ borderColor: 'rgba(212, 175, 55, 0.5)' }}
              >
                <motion.div
                  animate={{ y: [2, 12, 2] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-1 h-2 rounded-full mt-1"
                  style={{ backgroundColor: '#D4AF37' }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gold Gradient Overlay at Bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(11, 28, 45, 0.9), transparent)'
        }}
      />

      <style>{`
        .font-heading {
          font-family: 'Playfair Display', serif;
        }
        
        .font-body {
          font-family: 'Poppins', sans-serif;
        }
        
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800&display=swap');
      `}</style>
    </section>
  );
}