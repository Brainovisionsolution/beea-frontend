import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, LogIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Categories", href: "/categories" },
    { name: "Jury", href: "/jury" },
    { name: "Sponsors", href: "/sponsors" },
    { name: "FAQ", href: "/faq" },
  ];

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "py-2 backdrop-blur-lg shadow-2xl" 
          : "py-4 bg-transparent"
      }`}
      style={{ 
        backgroundColor: scrolled ? 'rgba(11, 28, 45, 0.95)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(212, 175, 55, 0.2)' : 'none'
      }}
    >
      {/* Gold accent line at bottom */}
      <div 
        className="absolute bottom-0 left-0 w-full h-px opacity-30"
        style={{ 
          background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2 relative group">
            <img 
              src="/logos/logo.png" 
              alt="BEEA Logo"
              className="w-10 sm:w-12 md:w-14 h-auto object-contain transition-all duration-300 group-hover:scale-105"
            />
            {/* Gold glow on hover */}
            <div 
              className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl"
              style={{ background: '#D4AF37' }}
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                <a
                  href={item.href}
                  className="px-4 py-2 font-heading text-sm font-medium rounded-lg transition-all duration-300 relative group"
                  style={{ 
                    color: scrolled ? '#F5E6C4' : '#F5E6C4',
                    fontFamily: 'Playfair Display, serif'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#D4AF37'}
                  onMouseLeave={(e) => e.currentTarget.style.color = scrolled ? '#F5E6C4' : '#F5E6C4'}
                >
                  {item.name}
                  {/* Underline effect on hover */}
                  <span 
                    className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full group-hover:left-0"
                  />
                </a>
              </div>
            ))}
          </div>

          {/* Desktop Right Section - Login + Nominate */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Login Button */}
            <motion.a
              href="/login"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-5 py-2.5 font-heading text-sm font-semibold rounded-full overflow-hidden group flex items-center gap-2"
              style={{ 
                background: 'transparent',
                color: '#D4AF37',
                fontFamily: 'Playfair Display, serif',
                border: '1px solid #D4AF37'
              }}
            >
              <LogIn className="w-4 h-4" />
              <span className="relative z-10">Login</span>
              <motion.div 
                className="absolute inset-0"
                style={{ 
                  background: 'rgba(212, 175, 55, 0.1)',
                  opacity: 0
                }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            {/* Nominate Button */}
            <motion.a
              href="/nominate"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-7 py-2.5 font-heading text-sm font-bold rounded-full overflow-hidden group"
              style={{ 
                background: 'linear-gradient(135deg, #D4AF37 0%, #F5E6C4 100%)',
                color: '#0B1C2D',
                fontFamily: 'Playfair Display, serif',
                boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'
              }}
            >
              <span className="relative z-10">Nominate Now</span>
              <motion.div 
                className="absolute inset-0"
                style={{ 
                  background: 'radial-gradient(circle at center, #F5E6C4 0%, #D4AF37 100%)',
                  opacity: 0
                }}
                whileHover={{ opacity: 0.3 }}
                transition={{ duration: 0.3 }}
              />
              <div 
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-700 blur-xl"
                style={{ background: '#D4AF37' }}
              />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg transition-all duration-300"
            style={{ 
              color: '#F5E6C4',
              background: isOpen ? 'rgba(212, 175, 55, 0.1)' : 'transparent'
            }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden mt-4"
            >
              <div 
                className="rounded-xl p-4"
                style={{ 
                  background: 'rgba(11, 28, 45, 0.98)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(212, 175, 55, 0.2)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
                }}
              >
                {/* Navigation Links */}
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="block px-4 py-3 font-heading text-sm font-medium rounded-lg transition-all duration-300"
                    style={{ 
                      color: '#F5E6C4',
                      fontFamily: 'Playfair Display, serif',
                      borderBottom: index < navItems.length - 1 ? '1px solid rgba(212, 175, 55, 0.1)' : 'none'
                    }}
                    onClick={() => setIsOpen(false)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.1)';
                      e.currentTarget.style.color = '#D4AF37';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#F5E6C4';
                    }}
                  >
                    {item.name}
                  </a>
                ))}

                {/* Divider */}
                <div className="h-px my-3" style={{ background: 'rgba(212, 175, 55, 0.2)' }} />

                {/* Login Button - Mobile */}
                <motion.a
                  href="/login"
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 w-full mt-2 px-6 py-3 font-heading text-sm font-semibold rounded-lg transition-all duration-300"
                  style={{ 
                    background: 'transparent',
                    color: '#D4AF37',
                    fontFamily: 'Playfair Display, serif',
                    border: '1px solid #D4AF37'
                  }}
                  onClick={() => setIsOpen(false)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <LogIn className="w-4 h-4" />
                  Login
                </motion.a>

                {/* Nominate Button - Mobile */}
                <motion.a
                  href="/nominate"
                  whileTap={{ scale: 0.95 }}
                  className="block mt-3 px-6 py-3 font-heading text-sm font-bold rounded-lg text-center transition-all duration-300"
                  style={{ 
                    background: 'linear-gradient(135deg, #D4AF37 0%, #F5E6C4 100%)',
                    color: '#0B1C2D',
                    fontFamily: 'Playfair Display, serif',
                    boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  Nominate Now
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800&display=swap');
        
        .font-heading {
          font-family: 'Playfair Display', serif;
        }
        
        .font-body {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
    </nav>
  );
}