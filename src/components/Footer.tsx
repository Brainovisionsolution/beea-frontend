import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden py-16" style={{ backgroundColor: '#0B1C2D' }}>
      {/* Deep Navy Gradient Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 30% 30%, #0E2A47 0%, #071421 100%)'
        }}
      />

      {/* Premium Neumorphic Elements - Gold */}
      <div className="absolute inset-0">
        {/* Soft Gold Orbs for Depth */}
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%)' }}></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(245,230,196,0.08) 0%, transparent 70%)' }}></div>
        
        {/* Gold Grid Pattern - Very Subtle */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="gold-grid-footer" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#gold-grid-footer)" />
          </svg>
        </div>
      </div>

      {/* Top Accent Line - Gold */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-30"></div>
      
      {/* Side Gold Accents */}
      <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent opacity-20"></div>
      <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent opacity-20"></div>

      {/* Floating Gold Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{ 
            backgroundColor: i % 2 === 0 ? '#D4AF37' : '#F5E6C4',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.1
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          
          {/* About Column - Luxury Neumorphic Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 group"
            style={{ 
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(212, 175, 55, 0.15)',
              boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.5), -5px -5px 10px rgba(212, 175, 55, 0.1)'
            }}
          >
            <h3 className="font-heading text-lg font-bold mb-4" style={{ color: '#F5E6C4', fontFamily: 'Playfair Display, serif' }}>About BEEA</h3>
            <p className="font-body text-sm leading-relaxed mb-6" style={{ color: '#F5E6C4', opacity: 0.8, fontFamily: 'Poppins, sans-serif' }}>
              Bharat Education Excellence Awards recognizes and celebrates outstanding contributions in the Indian education sector since 2018.
            </p>
            <div className="flex gap-3">
              {/* Social Links - Luxury Neumorphic */}
              {[
                { path: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.991 22 12z" },
                { path: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" },
                { path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" },
                { path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 group/social hover:-translate-y-1"
                  style={{ 
                    background: 'rgba(212, 175, 55, 0.1)',
                    border: '1px solid rgba(212, 175, 55, 0.2)',
                    boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3), -2px -2px 5px rgba(212, 175, 55, 0.1)'
                  }}
                >
                  <svg className="w-4 h-4 transition-colors duration-300" style={{ color: '#D4AF37' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.path}/>
                  </svg>
                </a>
              ))}
            </div>

            {/* Gold border on hover */}
            <div 
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                border: '1px solid #D4AF37',
                boxShadow: '0 0 20px rgba(212, 175, 55, 0.2)'
              }}
            />
          </motion.div>

          {/* Quick Links - Luxury Neumorphic Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 group"
            style={{ 
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(212, 175, 55, 0.15)',
              boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.5), -5px -5px 10px rgba(212, 175, 55, 0.1)'
            }}
          >
            <h3 className="font-heading text-lg font-bold mb-4" style={{ color: '#F5E6C4', fontFamily: 'Playfair Display, serif' }}>Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Award Categories', href: '/#categories' },
                { name: 'Nomination Process', href: '/#process' },
                { name: 'Jury Panel', href: '/#jury' },
                { name: 'Past Winners', href: '/gallery' },
                { name: 'Gallery', href: '/gallery' }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="font-body text-sm transition-all duration-300 hover:translate-x-1 inline-block"
                    style={{ color: '#F5E6C4', opacity: 0.8, fontFamily: 'Poppins, sans-serif' }}
                  >
                    <span className="inline-block w-1 h-1 rounded-full mr-2" style={{ backgroundColor: '#D4AF37' }}></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Gold border on hover */}
            <div 
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                border: '1px solid #D4AF37',
                boxShadow: '0 0 20px rgba(212, 175, 55, 0.2)'
              }}
            />
          </motion.div>

          {/* Contact Info - Luxury Neumorphic Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 group"
            style={{ 
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(212, 175, 55, 0.15)',
              boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.5), -5px -5px 10px rgba(212, 175, 55, 0.1)'
            }}
          >
            <h3 className="font-heading text-lg font-bold mb-4" style={{ color: '#F5E6C4', fontFamily: 'Playfair Display, serif' }}>Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#D4AF37' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-body text-sm" style={{ color: '#F5E6C4', opacity: 0.8, fontFamily: 'Poppins, sans-serif' }}>T-Hub Phase 2, 20, Inorbit Mall Rd, Vittal Rao Nagar, Madhapur, Hyderabad, Telangana 500032</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#D4AF37' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-body text-sm" style={{ color: '#F5E6C4', opacity: 0.8, fontFamily: 'Poppins, sans-serif' }}>beea@brainovision.in</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#D4AF37' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-body text-sm" style={{ color: '#F5E6C4', opacity: 0.8, fontFamily: 'Poppins, sans-serif' }}>+91 9063651119</span>
              </li>
            </ul>

            {/* Gold border on hover */}
            <div 
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                border: '1px solid #D4AF37',
                boxShadow: '0 0 20px rgba(212, 175, 55, 0.2)'
              }}
            />
          </motion.div>

          {/* Email Subscription - Luxury Neumorphic Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 group"
            style={{ 
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(212, 175, 55, 0.15)',
              boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.5), -5px -5px 10px rgba(212, 175, 55, 0.1)'
            }}
          >
            <h3 className="font-heading text-lg font-bold mb-4" style={{ color: '#F5E6C4', fontFamily: 'Playfair Display, serif' }}>Stay Updated</h3>
            <p className="font-body text-sm mb-4" style={{ color: '#F5E6C4', opacity: 0.8, fontFamily: 'Poppins, sans-serif' }}>
              Subscribe to receive updates about nominations, events, and announcements.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email address"
                  className="w-full px-4 py-2.5 font-body text-sm rounded-xl focus:outline-none transition-all duration-300"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(212, 175, 55, 0.2)',
                    color: '#F5E6C4',
                    fontFamily: 'Poppins, sans-serif',
                    boxShadow: 'inset 3px 3px 6px rgba(0, 0, 0, 0.3), inset -1px -1px 3px rgba(212, 175, 55, 0.1)'
                  }}
                />
              </div>
              <button 
                className="w-full px-4 py-2.5 font-heading text-sm font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                style={{ 
                  background: 'linear-gradient(135deg, #D4AF37 0%, #F5E6C4 100%)',
                  color: '#0B1C2D',
                  fontFamily: 'Playfair Display, serif',
                  boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3), -2px -2px 5px rgba(212, 175, 55, 0.2)'
                }}
              >
                Subscribe Now
              </button>
            </form>
            <p className="font-body text-xs mt-3" style={{ color: '#F5E6C4', opacity: 0.6, fontFamily: 'Poppins, sans-serif' }}>
              By subscribing, you agree to our Privacy Policy.
            </p>

            {/* Gold border on hover */}
            <div 
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                border: '1px solid #D4AF37',
                boxShadow: '0 0 20px rgba(212, 175, 55, 0.2)'
              }}
            />
          </motion.div>
        </div>

        {/* Bottom Bar - Luxury Neumorphic */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 pt-6"
          style={{ borderTop: '1px solid rgba(212, 175, 55, 0.2)' }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-xs" style={{ color: '#F5E6C4', opacity: 0.7, fontFamily: 'Poppins, sans-serif' }}>
              © 2024 Bharat Education Excellence Awards. All rights reserved.
            </p>
            <div className="flex gap-4">
              {['Privacy Policy', 'Terms of Use', 'Cookie Policy', 'Sitemap'].map((item, index) => (
                <div key={index} className="flex items-center">
                  <Link 
                    to="#" 
                    className="font-body text-xs transition-colors duration-300"
                    style={{ color: '#F5E6C4', opacity: 0.7 }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#D4AF37'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#F5E6C4'}
                  >
                    {item}
                  </Link>
                  {index < 3 && <span className="mx-2" style={{ color: '#D4AF37', opacity: 0.3 }}>•</span>}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Neumorphic Accent - Gold */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 flex justify-center"
        >
          <div 
            className="w-24 h-1 rounded-full"
            style={{ 
              background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
              boxShadow: '0 0 10px rgba(212, 175, 55, 0.3)'
            }}
          ></div>
        </motion.div>
      </div>

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
    </footer>
  );
}