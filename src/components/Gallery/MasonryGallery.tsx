import { motion } from 'framer-motion';
import { useState } from 'react';

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: string;
  year: string;
  width: 'normal' | 'wide' | 'tall';
}

export default function MasonryGallery(): JSX.Element {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const categories = ['All', 'Events', 'Judging', 'Moments', 'Speeches', 'Celebrations'];

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: 'https://placehold.co/800x1000/0E2A47/D4AF37?text=Awards+Ceremony+2025',
      title: 'Grand Awards Ceremony',
      category: 'Events',
      year: '2025',
      width: 'normal',
    },
    {
      id: 2,
      src: 'https://placehold.co/1000x800/0E2A47/D4AF37?text=Jury+Panel',
      title: 'Jury Panel Discussion',
      category: 'Judging',
      year: '2025',
      width: 'wide',
    },
    {
      id: 3,
      src: 'https://placehold.co/800x1200/0E2A47/D4AF37?text=Winner+Celebration',
      title: 'Winner Celebrations',
      category: 'Moments',
      year: '2025',
      width: 'tall',
    },
    {
      id: 4,
      src: 'https://placehold.co/800x800/0E2A47/D4AF37?text=Red+Carpet',
      title: 'Red Carpet Arrivals',
      category: 'Events',
      year: '2025',
      width: 'normal',
    },
    {
      id: 5,
      src: 'https://placehold.co/1000x800/0E2A47/D4AF37?text=Keynote+Speech',
      title: 'Keynote Address',
      category: 'Speeches',
      year: '2024',
      width: 'wide',
    },
    {
      id: 6,
      src: 'https://placehold.co/800x1000/0E2A47/D4AF37?text=Group+Photo',
      title: 'Group Photo with Awardees',
      category: 'Moments',
      year: '2024',
      width: 'normal',
    },
    {
      id: 7,
      src: 'https://placehold.co/800x800/0E2A47/D4AF37?text=Jury+Meeting',
      title: 'Jury Evaluation Session',
      category: 'Judging',
      year: '2025',
      width: 'normal',
    },
    {
      id: 8,
      src: 'https://placehold.co/800x1200/0E2A47/D4AF37?text=Stage+Moments',
      title: 'Stage Performances',
      category: 'Celebrations',
      year: '2025',
      width: 'tall',
    },
    {
      id: 9,
      src: 'https://placehold.co/1000x800/0E2A47/D4AF37?text=Audience',
      title: 'Engaged Audience',
      category: 'Events',
      year: '2024',
      width: 'wide',
    },
    {
      id: 10,
      src: 'https://placehold.co/800x1000/0E2A47/D4AF37?text=Speaker',
      title: 'Inspiring Speaker',
      category: 'Speeches',
      year: '2025',
      width: 'normal',
    },
    {
      id: 11,
      src: 'https://placehold.co/800x800/0E2A47/D4AF37?text=Networking',
      title: 'Networking Session',
      category: 'Events',
      year: '2024',
      width: 'normal',
    },
    {
      id: 12,
      src: 'https://placehold.co/800x1200/0E2A47/D4AF37?text=Celebration',
      title: 'Victory Celebration',
      category: 'Celebrations',
      year: '2025',
      width: 'tall',
    },
  ];

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const getWidthClass = (width: string) => {
    switch (width) {
      case 'wide':
        return 'md:col-span-2';
      case 'tall':
        return 'md:row-span-2';
      default:
        return '';
    }
  };

  const getHeightClass = (width: string) => {
    switch (width) {
      case 'tall':
        return 'h-[400px] md:h-[500px]';
      case 'wide':
        return 'h-[280px] md:h-[320px]';
      default:
        return 'h-[280px] md:h-[320px]';
    }
  };

  return (
    <section
      className="relative py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: '#0B1C2D' }}
    >
      {/* Dark Navy Background Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 30% 50%, #0E2A47 0%, #071421 100%)',
        }}
      />

      {/* Elegant Gold Accent Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-40" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-40" />

      {/* Subtle Gold Orbs */}
      <div className="absolute top-40 right-20 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ background: '#D4AF37' }} />
      <div className="absolute bottom-40 left-20 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ background: '#F5A623' }} />

      {/* Floating Gold Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              background: '#D4AF37',
              opacity: 0.1,
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 5 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
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
              MEMORABLE MOMENTS
            </span>
            <div className="w-8 md:w-12 h-px" style={{ backgroundColor: '#D4AF37', opacity: 0.4 }} />
          </div>

          <h2
            className="font-heading text-3xl md:text-5xl font-bold mb-4"
            style={{ color: '#F5E6C4' }}
          >
            Our{' '}
            <span className="bg-gradient-to-r from-[#E8C47E] via-[#D4AF37] to-[#F9E7B3] bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            className="w-20 md:w-28 h-0.5 mx-auto mb-4"
            style={{
              background: 'linear-gradient(90deg, transparent, #D4AF37, #F9E7B3, #D4AF37, transparent)',
            }}
          />
          
          <p
            className="font-body text-sm md:text-base max-w-2xl mx-auto mt-4"
            style={{ color: '#F5E6C4', opacity: 0.8 }}
          >
            Capturing the essence of celebration, recognition, and excellence through the lens
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 md:px-6 py-2 md:py-2.5 font-body text-xs md:text-sm rounded-full transition-all duration-300 ${
                activeCategory === category ? 'scale-105' : ''
              }`}
              style={{
                background: activeCategory === category 
                  ? 'linear-gradient(135deg, #D4AF37, #B8860B)'
                  : 'rgba(255, 255, 255, 0.03)',
                color: activeCategory === category ? '#0B1C2D' : '#F5E6C4',
                border: `1px solid ${activeCategory === category ? 'transparent' : 'rgba(212, 175, 55, 0.3)'}`,
                boxShadow: activeCategory === category ? '0 4px 15px rgba(212, 175, 55, 0.3)' : 'none',
              }}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-3 auto-rows-min gap-5 md:gap-6"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`relative group rounded-2xl overflow-hidden cursor-pointer ${getWidthClass(image.width)}`}
              onClick={() => setSelectedImage(image)}
              style={{
                boxShadow: '0 20px 35px -15px rgba(0, 0, 0, 0.4)',
              }}
            >
              <div className={`relative ${getHeightClass(image.width)} overflow-hidden`}>
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(to top, rgba(11, 28, 45, 0.95) 0%, rgba(11, 28, 45, 0.5) 40%, transparent 100%)',
                    opacity: 0.8,
                  }}
                />
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 transform translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
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
                    className="font-heading text-base md:text-lg font-bold"
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

                {/* Number Indicator */}
                <div
                  className="absolute top-3 left-3 text-xl md:text-2xl font-heading font-black opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                  style={{ color: '#D4AF37' }}
                >
                  {String(image.id).padStart(2, '0')}
                </div>

                {/* Zoom Icon on Hover */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100"
                >
                  <div
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center"
                    style={{
                      background: 'rgba(212, 175, 55, 0.9)',
                      backdropFilter: 'blur(4px)',
                    }}
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#0B1C2D' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 md:mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 md:px-10 py-3.5 md:py-4 font-heading font-semibold text-sm md:text-base rounded-xl transition-all duration-300 group"
            style={{
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15), rgba(212, 175, 55, 0.05))',
              color: '#D4AF37',
              border: '1px solid rgba(212, 175, 55, 0.5)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <span className="flex items-center gap-2">
              Load More Moments
              <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7m14-4l-7 7-7-7" />
              </svg>
            </span>
          </motion.button>
        </motion.div>

        {/* Stats Footer */}
        <div className="mt-16 pt-8 text-center">
          <div className="flex justify-center gap-8 md:gap-12">
            <div className="text-center">
              <div className="font-heading text-2xl font-bold" style={{ color: '#D4AF37' }}>{filteredImages.length}</div>
              <div className="font-body text-xs" style={{ color: '#F5E6C4', opacity: 0.6 }}>Moments Shown</div>
            </div>
            <div className="w-px h-10" style={{ background: 'rgba(212, 175, 55, 0.3)' }} />
            <div className="text-center">
              <div className="font-heading text-2xl font-bold" style={{ color: '#D4AF37' }}>6</div>
              <div className="font-body text-xs" style={{ color: '#F5E6C4', opacity: 0.6 }}>Years of Excellence</div>
            </div>
            <div className="w-px h-10" style={{ background: 'rgba(212, 175, 55, 0.3)' }} />
            <div className="text-center">
              <div className="font-heading text-2xl font-bold" style={{ color: '#D4AF37' }}>500+</div>
              <div className="font-body text-xs" style={{ color: '#F5E6C4', opacity: 0.6 }}>Total Images</div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(11, 28, 45, 0.95)', backdropFilter: 'blur(8px)' }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative max-w-4xl w-full rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            style={{
              boxShadow: '0 0 50px rgba(212, 175, 55, 0.3)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
            }}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6" style={{
              background: 'linear-gradient(to top, rgba(11, 28, 45, 0.95), transparent)',
            }}>
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="text-xs font-body px-2 py-0.5 rounded-full"
                  style={{
                    background: 'rgba(212, 175, 55, 0.2)',
                    color: '#D4AF37',
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                  }}
                >
                  {selectedImage.category}
                </span>
                <span className="text-xs font-body" style={{ color: '#F5E6C4', opacity: 0.6 }}>{selectedImage.year}</span>
              </div>
              <h3 className="font-heading text-xl md:text-2xl font-bold" style={{ color: '#F5E6C4' }}>{selectedImage.title}</h3>
            </div>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{
                background: 'rgba(212, 175, 55, 0.2)',
                backdropFilter: 'blur(4px)',
                border: '1px solid rgba(212, 175, 55, 0.4)',
              }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#D4AF37' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        </div>
      )}

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