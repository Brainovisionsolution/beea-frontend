import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useState, useRef } from 'react';

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  year: string;
  category: string;
}

export default function Herosection(): JSX.Element {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const featuredImages: GalleryImage[] = [
    {
      id: 1,
      src: 'https://placehold.co/800x1000/0E2A47/D4AF37?text=Awards+Ceremony+2025',
      title: 'Grand Awards Ceremony',
      year: '2025',
      category: 'Events',
    },
    {
      id: 2,
      src: 'https://placehold.co/800x1000/0E2A47/D4AF37?text=Jury+Panel',
      title: 'Jury Panel Discussion',
      year: '2025',
      category: 'Judging',
    },
    {
      id: 3,
      src: 'https://placehold.co/800x1000/0E2A47/D4AF37?text=Winner+Celebration',
      title: 'Winner Celebrations',
      year: '2025',
      category: 'Moments',
    },
    {
      id: 4,
      src: 'https://placehold.co/800x1000/0E2A47/D4AF37?text=Red+Carpet',
      title: 'Red Carpet Arrivals',
      year: '2025',
      category: 'Events',
    },
    {
      id: 5,
      src: 'https://placehold.co/800x1000/0E2A47/D4AF37?text=Keynote+Speech',
      title: 'Keynote Address',
      year: '2024',
      category: 'Speeches',
    },
    {
      id: 6,
      src: 'https://placehold.co/800x1000/0E2A47/D4AF37?text=Group+Photo',
      title: 'Group Photo with Awardees',
      year: '2024',
      category: 'Moments',
    },
  ];

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      mouseX.set(x);
      mouseY.set(y);
    }
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden"
      style={{ backgroundColor: '#0B1C2D' }}
    >
      {/* Dynamic Gradient Background that follows cursor */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${springX}% ${springY}%, rgba(212, 175, 55, 0.08) 0%, rgba(212, 175, 55, 0.02) 30%, transparent 70%)`,
        }}
      />

      {/* Dark Navy Background Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 30% 50%, #0E2A47 0%, #071421 100%)',
        }}
      />

      {/* Elegant Gold Accent Lines - Top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-40" />
      
      {/* Elegant Gold Accent Lines - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-40" />

      {/* Subtle Gold Orb - Top Right */}
      <div
        className="absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: '#D4AF37' }}
      />
      
      {/* Subtle Gold Orb - Bottom Left */}
      <div
        className="absolute bottom-20 left-20 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: '#F5A623' }}
      />

      {/* Floating Gold Particles - Minimal & Elegant */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              background: '#D4AF37',
              opacity: 0.12,
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.12, 0.25, 0.12],
            }}
            transition={{
              duration: 6 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-4">
            <div className="w-8 md:w-12 h-px" style={{ backgroundColor: '#D4AF37', opacity: 0.4 }} />
            <span
              className="font-heading text-xs md:text-sm font-semibold tracking-[0.2em] uppercase px-4 md:px-6 py-1.5 md:py-2 rounded-full"
              style={{
                color: '#D4AF37',
                background: 'rgba(212, 175, 55, 0.12)',
                border: '1px solid rgba(212, 175, 55, 0.25)',
              }}
            >
              VISUAL STORIES
            </span>
            <div className="w-8 md:w-12 h-px" style={{ backgroundColor: '#D4AF37', opacity: 0.4 }} />
          </div>

          <h1
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
            style={{ color: '#F5E6C4' }}
          >
            Moments of{' '}
            <span className="bg-gradient-to-r from-[#E8C47E] via-[#D4AF37] to-[#F9E7B3] bg-clip-text text-transparent">
              Excellence
            </span>
          </h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 md:w-32 h-0.5 mx-auto mb-6"
            style={{
              background: 'linear-gradient(90deg, transparent, #D4AF37, #F9E7B3, #D4AF37, transparent)',
            }}
          />
          
          <p
            className="font-body text-sm md:text-base lg:text-lg max-w-2xl mx-auto"
            style={{ color: '#F5E6C4', opacity: 0.8 }}
          >
            Explore the journey of recognition and celebration through our curated gallery
          </p>

          {/* Stats Row */}
          <div className="flex justify-center gap-8 md:gap-12 mt-8">
            <div className="text-center">
              <div className="font-heading text-2xl md:text-3xl font-bold" style={{ color: '#D4AF37' }}>500+</div>
              <div className="font-body text-xs md:text-sm" style={{ color: '#F5E6C4', opacity: 0.6 }}>Photos Captured</div>
            </div>
            <div className="w-px h-10" style={{ background: 'rgba(212, 175, 55, 0.3)' }} />
            <div className="text-center">
              <div className="font-heading text-2xl md:text-3xl font-bold" style={{ color: '#D4AF37' }}>6</div>
              <div className="font-body text-xs md:text-sm" style={{ color: '#F5E6C4', opacity: 0.6 }}>Years of Memories</div>
            </div>
            <div className="w-px h-10" style={{ background: 'rgba(212, 175, 55, 0.3)' }} />
            <div className="text-center">
              <div className="font-heading text-2xl md:text-3xl font-bold" style={{ color: '#D4AF37' }}>50+</div>
              <div className="font-body text-xs md:text-sm" style={{ color: '#F5E6C4', opacity: 0.6 }}>Award Ceremonies</div>
            </div>
          </div>
        </motion.div>

        {/* Featured Gallery Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-12 md:mb-16"
        >
          {featuredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(image.id)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{
                boxShadow: '0 20px 35px -15px rgba(0, 0, 0, 0.4)',
              }}
            >
              {/* Image Container */}
              <div className="relative h-72 md:h-80 lg:h-96 overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(to top, rgba(11, 28, 45, 0.9) 0%, rgba(11, 28, 45, 0.3) 50%, transparent 100%)',
                    opacity: hoveredIndex === image.id ? 0.7 : 0.9,
                  }}
                />
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-0 transition-transform duration-500 group-hover:translate-y-[-8px]">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="text-xs font-body px-2 py-0.5 rounded-full"
                      style={{
                        background: 'rgba(212, 175, 55, 0.2)',
                        color: '#D4AF37',
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                      }}
                    >
                      {image.category}
                    </span>
                    <span
                      className="text-xs font-body"
                      style={{ color: '#F5E6C4', opacity: 0.6 }}
                    >
                      {image.year}
                    </span>
                  </div>
                  <h3
                    className="font-heading text-lg md:text-xl font-bold"
                    style={{ color: '#F5E6C4' }}
                  >
                    {image.title}
                  </h3>
                </div>

                {/* Gold Border on Hover */}
                <div
                  className="absolute inset-0 border-2 border-[#D4AF37] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ boxShadow: '0 0 30px rgba(212, 175, 55, 0.3)' }}
                />
              </div>

              {/* Number Indicator */}
              <div
                className="absolute top-3 left-3 text-2xl md:text-3xl font-heading font-black opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                style={{ color: '#D4AF37' }}
              >
                {String(image.id).padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View Gallery Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 md:px-10 py-3.5 md:py-4 font-heading font-semibold text-sm md:text-base rounded-xl transition-all duration-300 group relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15), rgba(212, 175, 55, 0.05))',
              color: '#D4AF37',
              border: '1px solid rgba(212, 175, 55, 0.5)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Full Gallery
              <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </motion.button>
        </motion.div>

        {/* Category Quick Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-wrap justify-center gap-3 mt-12 pt-4"
        >
          {['All Moments', 'Events', 'Judging', 'Speeches', 'Celebrations'].map((category, index) => (
            <button
              key={category}
              className="px-4 md:px-5 py-1.5 md:py-2 font-body text-xs md:text-sm rounded-full transition-all duration-300 hover:scale-105"
              style={{
                background: index === 0 ? 'rgba(212, 175, 55, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                color: index === 0 ? '#D4AF37' : '#F5E6C4',
                border: `1px solid ${index === 0 ? 'rgba(212, 175, 55, 0.5)' : 'rgba(212, 175, 55, 0.2)'}`,
              }}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Footer Decorative Element */}
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="inline-flex items-center gap-2"
          >
            <div className="w-6 h-px" style={{ background: '#D4AF37', opacity: 0.4 }} />
            <span className="font-body text-xs" style={{ color: '#F5E6C4', opacity: 0.5 }}>
              Scroll to explore more moments
            </span>
            <div className="w-6 h-px" style={{ background: '#D4AF37', opacity: 0.4 }} />
          </motion.div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="mt-2"
          >
            <svg className="w-4 h-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#D4AF37', opacity: 0.5 }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7m14-4l-7 7-7-7" />
            </svg>
          </motion.div>
        </div>
      </div>

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