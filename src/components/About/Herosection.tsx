import { motion } from 'framer-motion';

export default function Herosection(): JSX.Element {
  return (
    <section
      className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden"
      style={{ backgroundColor: '#0D1117' }}
    >
      {/* Dark Charcoal to Deep Slate Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 20% 30%, #111827 0%, #030712 100%)'
        }}
      />

      {/* Premium Metallic Accents - Copper & Gold Elements */}
      {/* Top Left - Angled Metal Panels */}
      <div className="hidden md:block absolute top-10 left-10">
        <div className="w-24 h-24 rotate-12" style={{ backgroundColor: 'rgba(212, 175, 55, 0.06)' }} />
        <div className="w-16 h-16 -rotate-6 -mt-10 ml-12" style={{ backgroundColor: 'rgba(180, 83, 9, 0.06)' }} />
        <div className="w-10 h-10 rotate-45 -mt-6 ml-20" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }} />
      </div>

      {/* Top Right - Glowing Metallic Rings */}
      <div className="hidden md:block absolute top-20 right-20">
        <div className="w-40 h-40 rounded-full" style={{ backgroundColor: 'rgba(212, 175, 55, 0.05)', boxShadow: '0 0 20px rgba(212, 175, 55, 0.1)' }} />
        <div className="w-24 h-24 rounded-full -mt-20 mr-12" style={{ backgroundColor: 'rgba(180, 83, 9, 0.04)' }} />
        <div className="w-12 h-12 rounded-full -mt-8 mr-28" style={{ backgroundColor: 'rgba(212, 175, 55, 0.08)' }} />
      </div>

      {/* Bottom Left - Geometric Lines with Copper */}
      <div className="hidden md:block absolute bottom-20 left-20">
        <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
          <path
            d="M20 140 Q 60 90, 100 90 T 140 40"
            stroke="url(#copperGradient)"
            strokeWidth="2.5"
            strokeOpacity="0.3"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M30 120 Q 70 70, 110 70 T 130 30"
            stroke="#D4AF37"
            strokeWidth="2"
            strokeOpacity="0.15"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="100" cy="90" r="5" fill="#D4AF37" fillOpacity="0.25" />
          <circle cx="110" cy="70" r="4" fill="#B45309" fillOpacity="0.2" />
          <circle cx="130" cy="30" r="3" fill="#D4AF37" fillOpacity="0.3" />
          <defs>
            <linearGradient id="copperGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Bottom Right - Mixed Shapes with Warm Accents */}
      <div className="hidden md:block absolute bottom-32 right-32">
        <div className="w-28 h-28 rounded-full border-4" style={{ borderColor: 'rgba(212, 175, 55, 0.12)' }} />
        <div className="w-16 h-16 rotate-45 -mt-14 ml-14 border-4" style={{ borderColor: 'rgba(180, 83, 9, 0.1)' }} />
        <div className="w-10 h-10 rounded-full -mt-9 ml-24" style={{ backgroundColor: 'rgba(212, 175, 55, 0.12)' }} />
      </div>

      {/* Center - Large Premium Rings with Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[800px] h-[500px] md:h-[800px]">
        <div className="absolute inset-0 rounded-full border" style={{ borderColor: 'rgba(212, 175, 55, 0.08)', boxShadow: '0 0 30px rgba(212, 175, 55, 0.05)' }} />
        <div className="absolute inset-16 md:inset-24 rounded-full border" style={{ borderColor: 'rgba(180, 83, 9, 0.06)' }} />
        <div className="absolute inset-32 md:inset-48 rounded-full border" style={{ borderColor: 'rgba(212, 175, 55, 0.04)' }} />
        <div className="absolute inset-48 md:inset-72 rounded-full border border-dashed" style={{ borderColor: 'rgba(212, 175, 55, 0.03)' }} />
      </div>

      {/* Floating Dust Particles - Copper & Gold */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-1 h-1 rounded-full"
        style={{ backgroundColor: '#D4AF37', opacity: 0.5, boxShadow: '0 0 4px #D4AF37' }}
        animate={{ y: [0, -18, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-2/3 right-1/4 w-2 h-2 rounded-full"
        style={{ backgroundColor: '#B45309', opacity: 0.4, boxShadow: '0 0 6px #B45309' }}
        animate={{ y: [0, 15, 0], opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/5 w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: '#F59E0B', opacity: 0.45, boxShadow: '0 0 5px #F59E0B' }}
        animate={{ y: [0, -12, 0], opacity: [0.45, 0.85, 0.45] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-2.5 h-2.5 rounded-full"
        style={{ backgroundColor: '#D4AF37', opacity: 0.35, boxShadow: '0 0 8px #D4AF37' }}
        animate={{ y: [0, 10, 0], opacity: [0.35, 0.8, 0.35] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
      />

      {/* Floating Animated Premium Elements */}
      <motion.div
        className="absolute top-1/4 right-1/5 w-4 md:w-5 h-4 md:h-5 rounded-full"
        style={{ backgroundColor: '#D4AF37', opacity: 0.15, boxShadow: '0 0 12px #D4AF37' }}
        animate={{ y: [0, -25, 0], x: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-3 md:w-4 h-3 md:h-4 rounded-full"
        style={{ backgroundColor: '#B45309', opacity: 0.12, boxShadow: '0 0 10px #B45309' }}
        animate={{ y: [0, 20, 0], x: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Breadcrumb / Navigation Hint */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2 mb-6 md:mb-8"
        >
          <span className="text-xs md:text-sm font-body" style={{ color: '#9CA3AF' }}>
            Home
          </span>
          <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#D4AF37', opacity: 0.6 }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-xs md:text-sm font-body" style={{ color: '#D4AF37', fontWeight: 500 }}>
            About Us
          </span>
        </motion.div>

        {/* Main Hero Content */}
        <div className="text-center">
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-2 md:gap-3 mb-4 md:mb-6"
          >
            <div className="w-8 md:w-12 h-px" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, #F59E0B)' }} />
            <span
              className="font-heading text-xs md:text-sm font-semibold tracking-[0.2em] md:tracking-[0.3em] uppercase px-4 md:px-6 py-1.5 md:py-2 rounded-full"
              style={{
                color: '#D4AF37',
                background: 'rgba(212, 175, 55, 0.08)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                backdropFilter: 'blur(4px)'
              }}
            >
              OUR LEGACY
            </span>
            <div className="w-8 md:w-12 h-px" style={{ background: 'linear-gradient(90deg, #F59E0B, #D4AF37, transparent)' }} />
          </motion.div>

          {/* Main Heading with Copper-Gold Gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6 px-4"
          >
            <span className="bg-gradient-to-r from-[#F5E6C4] via-[#D4AF37] to-[#F59E0B] bg-clip-text text-transparent">
              Celebrating Excellence
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#E5E7EB] to-[#9CA3AF] bg-clip-text text-transparent">
              Since 2021
            </span>
          </motion.h1>

          {/* Decorative Metallic Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-24 md:w-32 h-0.5 mx-auto mb-6 md:mb-8"
            style={{
              background: 'linear-gradient(90deg, transparent, #D4AF37, #F59E0B, #D4AF37, transparent)',
              transformOrigin: 'center',
              boxShadow: '0 0 6px rgba(212, 175, 55, 0.5)'
            }}
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="font-body text-sm md:text-base lg:text-lg max-w-3xl mx-auto px-4 leading-relaxed"
            style={{ color: '#D1D5DB' }}
          >
            We are a premier institution dedicated to recognizing and celebrating outstanding achievements in education.
            Our mission is to honor those who shape the future through innovation, dedication, and excellence.
          </motion.p>

          {/* Stats / Key Metrics - Premium Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto mt-12 md:mt-16"
          >
            {[
              { number: '15+', label: 'Award Editions', },
              { number: '500+', label: 'Honored Laureates', },
              { number: '50+', label: 'Expert Jurors', },
              { number: 'Pan India', label: 'Nationwide Reach', }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                className="text-center p-4 rounded-xl backdrop-blur-sm group transition-all duration-300 hover:transform hover:-translate-y-1"
                style={{
                  background: 'rgba(17, 24, 39, 0.5)',
                  border: '1px solid rgba(212, 175, 55, 0.2)',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)'
                }}
              >
                <div className="text-2xl md:text-3xl mb-1 filter drop-shadow-lg">{stat.icon}</div>
                <div className="font-heading text-xl md:text-2xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#F59E0B] bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="font-body text-xs md:text-sm mt-1" style={{ color: '#9CA3AF' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

        

          {/* Scroll Indicator - Premium */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs font-body tracking-wider" style={{ color: '#9CA3AF' }}>
                SCROLL TO DISCOVER
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
                  style={{ backgroundColor: '#D4AF37', boxShadow: '0 0 4px #D4AF37' }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gradient Overlay at Bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, #030712, transparent)'
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