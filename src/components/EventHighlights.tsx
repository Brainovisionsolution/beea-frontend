import { useState } from 'react';
import { motion } from 'framer-motion';

export default function EventHighlights() {
  const [activeVideo, setActiveVideo] = useState(false);
  const [hoveredImage, setHoveredImage] = useState(null);
  
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
      title: "Award Ceremony 2024",
      category: "Ceremony"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop",
      title: "Keynote Session",
      category: "Speakers"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2070&auto=format&fit=crop",
      title: "Sponsors on Stage",
      category: "Sponsors"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop",
      title: "Networking Session",
      category: "Networking"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2070&auto=format&fit=crop",
      title: "Award Presentation",
      category: "Ceremony"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1559223607-a43c9904e8d5?q=80&w=2070&auto=format&fit=crop",
      title: "Cultural Performance",
      category: "Entertainment"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
      title: "Guest Speaker",
      category: "Speakers"
    },
  ];

  // Function to add dramatic overlay to images
  const getImageStyle = (imageId) => {
    return {
      filter: hoveredImage === imageId 
        ? 'brightness(1.1) contrast(1.2) saturate(1.1)' 
        : 'brightness(0.9) contrast(1.1) saturate(0.9)',
      transition: 'filter 0.5s ease'
    };
  };

  return (
    <section id="highlights" className="relative py-16 overflow-hidden" style={{ backgroundColor: '#0B1C2D' }}>
      {/* Deep Navy Gradient Overlay - More Dramatic */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 30% 30%, #0E2A47 0%, #071421 100%)'
        }}
      />

      {/* Dramatic Spotlight Effect */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(212,175,55,0.2) 0%, transparent 70%)',
          filter: 'blur(80px)'
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Secondary Spotlight */}
      <motion.div 
        className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(245,230,196,0.15) 0%, transparent 70%)',
          filter: 'blur(60px)'
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Luxury Gold Decorative Elements with Enhanced Animations */}
      
      {/* Top Left - Gold Square Pattern with Pulse */}
      <div className="absolute top-10 left-10">
        <motion.div 
          className="w-16 h-16 rotate-12" 
          style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="w-12 h-12 -rotate-6 -mt-8 ml-8" 
          style={{ backgroundColor: 'rgba(245, 230, 196, 0.1)' }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div 
          className="w-8 h-8 rotate-45 -mt-4 ml-4" 
          style={{ backgroundColor: 'rgba(212, 175, 55, 0.15)' }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
      </div>

      {/* Top Right - Gold Circles with Pulse */}
      <div className="absolute top-20 right-20">
        <motion.div 
          className="w-24 h-24 rounded-full" 
          style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="w-16 h-16 rounded-full -mt-12 mr-8" 
          style={{ backgroundColor: 'rgba(245, 230, 196, 0.08)' }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 5, repeat: Infinity, delay: 0.7 }}
        />
        <motion.div 
          className="w-8 h-8 rounded-full -mt-4 mr-16" 
          style={{ backgroundColor: 'rgba(212, 175, 55, 0.15)' }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.2 }}
        />
      </div>

      {/* Bottom Left - Gold Curved Lines with Draw Animation */}
      <div className="absolute bottom-20 left-20">
        <motion.svg 
          width="120" height="120" viewBox="0 0 120 120" fill="none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.path 
            d="M10 110 Q 40 70, 70 70 T 110 30" 
            stroke="#D4AF37" strokeWidth="2" strokeOpacity="0.2" fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2 }}
          />
          <motion.path 
            d="M20 90 Q 50 50, 80 50 T 100 20" 
            stroke="#F5E6C4" strokeWidth="2" strokeOpacity="0.15" fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.3 }}
          />
          <motion.circle 
            cx="70" cy="70" r="4" fill="#D4AF37" fillOpacity="0.2"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.circle 
            cx="80" cy="50" r="3" fill="#F5E6C4" fillOpacity="0.2"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
        </motion.svg>
      </div>

      {/* Bottom Right - Gold Mixed Shapes with Pulse */}
      <div className="absolute bottom-32 right-32">
        <motion.div 
          className="w-20 h-20 rounded-full border-4" 
          style={{ borderColor: 'rgba(212, 175, 55, 0.15)' }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="w-12 h-12 rotate-45 -mt-10 ml-10 border-4" 
          style={{ borderColor: 'rgba(245, 230, 196, 0.15)' }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 5, repeat: Infinity, delay: 0.8 }}
        />
        <motion.div 
          className="w-6 h-6 rounded-full -mt-6 ml-16" 
          style={{ backgroundColor: 'rgba(212, 175, 55, 0.2)' }}
          animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.3 }}
        />
      </div>

      {/* Center - Large Gold Rings with Pulse */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
        <motion.div 
          className="absolute inset-0 rounded-full border-2" 
          style={{ borderColor: 'rgba(212, 175, 55, 0.1)' }}
          animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div 
          className="absolute inset-16 rounded-full border-2" 
          style={{ borderColor: 'rgba(245, 230, 196, 0.08)' }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.08, 0.12, 0.08] }}
          transition={{ duration: 7, repeat: Infinity, delay: 1 }}
        />
        <motion.div 
          className="absolute inset-32 rounded-full border-2" 
          style={{ borderColor: 'rgba(212, 175, 55, 0.05)' }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        />
      </div>

      {/* Floating Gold Dots with Enhanced Animation */}
      <div className="absolute top-40 right-1/4">
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1 h-1 rounded-full"
              style={{ backgroundColor: i % 2 === 0 ? '#D4AF37' : '#F5E6C4' }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3
              }}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-40 left-1/3">
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1 h-1 rounded-full"
              style={{ backgroundColor: i % 2 === 0 ? '#F5E6C4' : '#D4AF37' }}
              animate={{
                y: [0, 10, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3 + 1
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Animated Gold Circles with Enhanced Movement */}
      <motion.div 
        className="absolute top-1/3 left-1/4 w-3 h-3 rounded-full" 
        style={{ backgroundColor: '#D4AF37', opacity: 0.2 }}
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 right-1/3 w-4 h-4 rounded-full" 
        style={{ backgroundColor: '#F5E6C4', opacity: 0.15 }}
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
          opacity: [0.15, 0.35, 0.15],
          scale: [1, 1.4, 1]
        }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header - Luxury Style */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center gap-4">
            <div>
              <h1 className="font-heading text-3xl font-bold" style={{ color: '#F5E6C4', fontFamily: 'Playfair Display, serif' }}>BEEA</h1>
              <p className="font-body text-xs" style={{ color: '#F5E6C4', opacity: 0.7, fontFamily: 'Poppins, sans-serif' }}>Since 2020</p>
            </div>
            <div className="h-8 w-px" style={{ backgroundColor: 'rgba(212, 175, 55, 0.3)' }}></div>
            <div>
              <p className="font-body text-sm font-medium" style={{ color: '#D4AF37', fontFamily: 'Poppins, sans-serif' }}>BRAINOVISION</p>
              <p className="font-body text-xs" style={{ color: '#F5E6C4', opacity: 0.7, fontFamily: 'Poppins, sans-serif' }}>all the way</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="font-body text-xs" style={{ color: '#F5E6C4', opacity: 0.7, fontFamily: 'Poppins, sans-serif' }}>Welcome</span>
            <div className="h-8 w-px" style={{ backgroundColor: 'rgba(212, 175, 55, 0.3)' }}></div>
            <div>
              <span className="font-heading text-xl font-bold" style={{ color: '#D4AF37', fontFamily: 'Playfair Display, serif' }}>2500+</span>
              <p className="font-body text-xs" style={{ color: '#F5E6C4', opacity: 0.7, fontFamily: 'Poppins, sans-serif' }}>Awards Given</p>
            </div>
          </div>
        </motion.div>

        {/* Video Section - Enhanced */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mb-12 max-w-4xl mx-auto"
        >
          <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-video group">
            <motion.img 
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop" 
              alt="Event Highlight Video"
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(0.9) contrast(1.1)' }}
              whileHover={{ 
                scale: 1.15,
                filter: 'brightness(1.1) contrast(1.2) saturate(1.1)'
              }}
              transition={{ duration: 0.7 }}
            />
            
            {/* More Dramatic Gold Gradient Overlay */}
            <motion.div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, rgba(212,175,55,0.3) 0%, transparent 50%, rgba(11,28,45,0.6) 100%)'
              }}
              animate={{
                opacity: [0.5, 0.7, 0.5]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Enhanced Gold Border on Hover */}
            <motion.div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
              style={{
                border: '3px solid #D4AF37',
                boxShadow: '0 0 50px rgba(212, 175, 55, 0.5)'
              }}
            />
            
            {/* Play Button with Enhanced Animation */}
            <button 
              onClick={() => setActiveVideo(true)}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group/play"
            >
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.div 
                  className="w-20 h-20 rounded-full flex items-center justify-center shadow-2xl"
                  style={{ 
                    background: 'linear-gradient(135deg, #D4AF37 0%, #F5E6C4 100%)',
                    boxShadow: '0 0 40px rgba(212, 175, 55, 0.6)'
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-[#0B1C2D] border-b-[12px] border-b-transparent ml-1"></div>
                </motion.div>
                
                {/* Enhanced Pulse Effect */}
                <motion.div 
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: '#D4AF37' }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                />
              </motion.div>
            </button>

            {/* Video Duration Badge - Enhanced */}
            <motion.div 
              className="absolute bottom-4 right-4 px-4 py-2 rounded-full text-xs font-body"
              style={{ 
                background: 'rgba(11, 28, 45, 0.9)',
                color: '#F5E6C4',
                fontFamily: 'Poppins, sans-serif',
                border: '1px solid #D4AF37',
                backdropFilter: 'blur(5px)'
              }}
              whileHover={{ scale: 1.1 }}
            >
              2:34
            </motion.div>
          </div>
        </motion.div>

        {/* Gallery Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <motion.h3 
              className="font-heading text-lg font-semibold"
              style={{ color: '#F5E6C4', fontFamily: 'Playfair Display, serif' }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Event Gallery
            </motion.h3>
            <motion.button 
              className="font-body text-xs transition-all duration-300"
              style={{ 
                color: '#D4AF37',
                fontFamily: 'Poppins, sans-serif'
              }}
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              View All →
            </motion.button>
          </div>

          {/* Grid Layout - Enhanced */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Left - Big Image */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:col-span-2"
              onHoverStart={() => setHoveredImage(galleryImages[0].id)}
              onHoverEnd={() => setHoveredImage(null)}
            >
              <motion.div 
                className="relative group overflow-hidden rounded-lg h-[300px] md:h-[350px] cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img 
                  src={galleryImages[0].src} 
                  alt={galleryImages[0].title}
                  className="w-full h-full object-cover"
                  style={getImageStyle(galleryImages[0].id)}
                  whileHover={{ 
                    scale: 1.2,
                    transition: { duration: 0.7 }
                  }}
                />
                
                {/* Enhanced Gold overlay on hover */}
                <motion.div 
                  className="absolute inset-0"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(212,175,55,0.3) 0%, transparent 100%)',
                    opacity: 0
                  }}
                  whileHover={{ opacity: 0.3 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Enhanced Gold border on hover */}
                <motion.div 
                  className="absolute inset-0 pointer-events-none rounded-lg"
                  style={{
                    border: '3px solid #D4AF37',
                    boxShadow: '0 0 40px rgba(212, 175, 55, 0.5)',
                    opacity: 0
                  }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* More dramatic gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D] via-transparent to-transparent opacity-80"></div>
                
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-4"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-white font-heading text-sm font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>{galleryImages[0].title}</h4>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right - Two Stacked - Enhanced */}
            <div className="flex flex-col gap-3">
              {galleryImages.slice(1, 3).map((image, idx) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + idx * 0.1 }}
                  className="relative group overflow-hidden rounded-lg h-[145px] md:h-[170px] cursor-pointer"
                  onHoverStart={() => setHoveredImage(image.id)}
                  onHoverEnd={() => setHoveredImage(null)}
                >
                  <motion.img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-full object-cover"
                    style={getImageStyle(image.id)}
                    whileHover={{ 
                      scale: 1.25,
                      transition: { duration: 0.7 }
                    }}
                  />
                  
                  <motion.div 
                    className="absolute inset-0"
                    style={{ 
                      background: 'linear-gradient(135deg, rgba(212,175,55,0.3) 0%, transparent 100%)',
                      opacity: 0
                    }}
                    whileHover={{ opacity: 0.3 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <motion.div 
                    className="absolute inset-0 pointer-events-none rounded-lg"
                    style={{
                      border: '3px solid #D4AF37',
                      boxShadow: '0 0 40px rgba(212, 175, 55, 0.5)',
                      opacity: 0
                    }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D] via-transparent to-transparent opacity-80"></div>
                  
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 p-3"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4 className="text-white font-heading text-xs font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>{image.title}</h4>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Row - 4 Images - Enhanced */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
            {galleryImages.slice(3, 7).map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="relative group overflow-hidden rounded-lg h-[120px] cursor-pointer"
                onHoverStart={() => setHoveredImage(image.id)}
                onHoverEnd={() => setHoveredImage(null)}
              >
                <motion.img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-full object-cover"
                  style={getImageStyle(image.id)}
                  whileHover={{ 
                    scale: 1.3,
                    transition: { duration: 0.7 }
                  }}
                />
                
                <motion.div 
                  className="absolute inset-0"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(212,175,55,0.3) 0%, transparent 100%)',
                    opacity: 0
                  }}
                  whileHover={{ opacity: 0.3 }}
                  transition={{ duration: 0.3 }}
                />
                
                <motion.div 
                  className="absolute inset-0 pointer-events-none rounded-lg"
                  style={{
                    border: '3px solid #D4AF37',
                    boxShadow: '0 0 40px rgba(212, 175, 55, 0.5)',
                    opacity: 0
                  }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D] via-transparent to-transparent opacity-80"></div>
                
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-2"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-white font-heading text-xs font-bold truncate" style={{ fontFamily: 'Playfair Display, serif' }}>{image.title}</h4>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer - Enhanced */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <motion.div 
              className="h-px w-12" 
              style={{ background: 'linear-gradient(90deg, transparent, #D4AF37)' }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.5 }}
            />
            
            <motion.p 
              className="font-body text-xs"
              style={{ color: '#F5E6C4', opacity: 0.7, fontFamily: 'Poppins, sans-serif' }}
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ✦ Celebrating Excellence in Education ✦
            </motion.p>
            
            <motion.div 
              className="h-px w-12" 
              style={{ background: 'linear-gradient(270deg, transparent, #D4AF37)' }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>
      </div>

      {/* Animation Keyframes and Font Imports */}
      <style>{`
        @keyframes float-up {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-down {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(20px); }
        }
        
        .animate-float-up {
          animation: float-up 4s ease-in-out infinite;
        }
        
        .animate-float-down {
          animation: float-down 5s ease-in-out infinite;
        }
        
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