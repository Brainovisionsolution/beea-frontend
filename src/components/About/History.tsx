import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface JourneyMilestone {
  year: string;
  title: string;
  shortDesc: string;
  image: string;
  highlight?: boolean;
}

export default function DirectionalJourneyMap(): JSX.Element {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const milestones: JourneyMilestone[] = [
    {
      year: '2021',
      title: 'The Beginning',
      shortDesc: 'Foundation & Vision',
      image: 'https://placehold.co/600x400/0E2A47/D4AF37?text=Beea+Founded',
    },
    {
      year: '2022',
      title: 'First Awards',
      shortDesc: 'Inaugural Ceremony',
      image: 'https://placehold.co/600x400/0E2A47/D4AF37?text=First+Awards',
    },
    {
      year: '2023',
      title: 'Pan India',
      shortDesc: 'Nationwide Reach',
      image: 'https://placehold.co/600x400/0E2A47/D4AF37?text=Pan+India',
    },
    {
      year: '2024',
      title: 'Digital Leap',
      shortDesc: 'Tech Transformation',
      image: 'https://placehold.co/600x400/0E2A47/D4AF37?text=Digital+Leap',
    },
    {
      year: '2025',
      title: 'Golden Edition',
      shortDesc: 'Largest Celebration',
      image: 'https://placehold.co/600x400/0E2A47/D4AF37?text=Golden+Edition',
      highlight: true,
    },
    {
      year: '2026',
      title: 'Global Vision',
      shortDesc: 'Global Horizons',
      image: 'https://placehold.co/600x400/0E2A47/D4AF37?text=Global+Vision',
      highlight: true,
    },
  ];

  // Handle scroll position to update active index
  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const cardWidth = window.innerWidth < 768 ? 280 : 320;
      const gap = window.innerWidth < 768 ? 24 : 32;
      const newIndex = Math.round(scrollPosition / (cardWidth + gap));
      setActiveIndex(Math.min(newIndex, milestones.length - 1));
    }
  };

  // Mouse/Touch drag scrolling
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = window.innerWidth < 768 ? 280 : 320;
      const gap = window.innerWidth < 768 ? 24 : 32;
      scrollRef.current.scrollTo({
        left: index * (cardWidth + gap),
        behavior: 'smooth',
      });
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section
      className="relative py-12 md:py-20 overflow-hidden"
      style={{ backgroundColor: '#0B1C2D' }}
    >
      {/* Background Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 30% 50%, #0E2A47 0%, #071421 100%)',
        }}
      />

      {/* Decorative Gold Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full blur-3xl opacity-20" style={{ background: '#D4AF37' }} />
      <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full blur-3xl opacity-15" style={{ background: '#F5E6C4' }} />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              background: i % 2 === 0 ? '#D4AF37' : '#F5E6C4',
              opacity: 0.1 + Math.random() * 0.3,
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="max-w-full mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
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
              BEEA JOURNEY MAP
            </span>
            <div className="w-8 md:w-12 h-px" style={{ backgroundColor: '#D4AF37', opacity: 0.4 }} />
          </div>

          <h2
            className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold mb-3"
            style={{ color: '#F5E6C4' }}
          >
            Direction of{' '}
            <span className="bg-gradient-to-r from-[#E8C47E] via-[#D4AF37] to-[#F9E7B3] bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            className="w-20 md:w-28 h-0.5 mx-auto"
            style={{
              background: 'linear-gradient(90deg, transparent, #D4AF37, #F9E7B3, #D4AF37, transparent)',
            }}
          />
          
          <p
            className="font-body text-xs md:text-sm mt-4"
            style={{ color: '#F5E6C4', opacity: 0.7 }}
          >
            Swipe or drag to explore our journey → {milestones.length} milestones
          </p>
        </motion.div>

        {/* Scroll Hint - Mobile */}
        <div className="md:hidden flex justify-center mb-4">
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex items-center gap-1 text-xs"
            style={{ color: '#D4AF37', opacity: 0.6 }}
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span>Swipe to see more</span>
          </motion.div>
        </div>

        {/* Horizontal Scrollable Journey Map with Drag */}
        <div
          ref={scrollRef}
          className="overflow-x-auto pb-6 md:pb-8 hide-scrollbar cursor-grab active:cursor-grabbing"
          style={{ scrollBehavior: 'smooth' }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
        >
          <div className="flex items-center min-w-max px-2 md:px-8 gap-6 md:gap-8">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex items-center">
                {/* Milestone Card */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.5) }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className={`relative w-[280px] md:w-[320px] rounded-2xl overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? 'scale-[1.02] ring-2 ring-[#D4AF37] shadow-xl' : ''
                  } ${milestone.highlight ? 'ring-2 ring-[#D4AF37] shadow-xl' : ''}`}
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(10px)',
                    border: `1px solid rgba(212, 175, 55, ${milestone.highlight ? '0.5' : '0.2'})`,
                  }}
                >
                  {/* Year Badge */}
                  <div
                    className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full font-heading font-bold text-xs md:text-sm"
                    style={{
                      background: milestone.highlight ? '#D4AF37' : 'rgba(212, 175, 55, 0.2)',
                      color: milestone.highlight ? '#0B1C2D' : '#D4AF37',
                      backdropFilter: 'blur(4px)',
                    }}
                  >
                    {milestone.year}
                  </div>

                  {/* Highlight Badge */}
                  {milestone.highlight && (
                    <div
                      className="absolute top-3 right-3 z-10 px-2 py-1 rounded-full text-[10px] md:text-xs font-bold"
                      style={{
                        background: '#D4AF37',
                        color: '#0B1C2D',
                      }}
                    >
                      ✨ Milestone
                    </div>
                  )}

                  {/* Image */}
                  <div className="relative h-44 md:h-52 overflow-hidden">
                    <img
                      src={milestone.image}
                      alt={milestone.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(to top, rgba(11, 28, 45, 0.8), transparent)',
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 md:p-5 text-center">
                    <h3
                      className="font-heading text-lg md:text-xl font-bold mb-1"
                      style={{ color: milestone.highlight ? '#D4AF37' : '#F5E6C4' }}
                    >
                      {milestone.title}
                    </h3>
                    <p
                      className="font-body text-xs uppercase tracking-wider"
                      style={{ color: '#D4AF37', opacity: 0.9 }}
                    >
                      {milestone.shortDesc}
                    </p>
                  </div>

                  {/* Number Indicator */}
                  <div
                    className="absolute bottom-2 right-2 text-3xl md:text-4xl font-heading font-black opacity-10"
                    style={{ color: '#D4AF37' }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </motion.div>

                {/* Directional Arrow Connector - Desktop */}
                {index < milestones.length - 1 && (
                  <div className="hidden md:flex flex-col items-center justify-center mx-2">
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center"
                    >
                      <div
                        className="w-12 h-px"
                        style={{
                          background: 'linear-gradient(90deg, rgba(212, 175, 55, 0.8), rgba(212, 175, 55, 0.3))',
                        }}
                      />
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        style={{ color: '#D4AF37' }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                    <span className="text-[10px] mt-1" style={{ color: '#D4AF37', opacity: 0.5 }}>
                      →
                    </span>
                  </div>
                )}

                {/* Mobile Arrow - Vertical Stack */}
                {index < milestones.length - 1 && (
                  <div className="md:hidden flex flex-col items-center justify-center mx-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      style={{ color: '#D4AF37', opacity: 0.6 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7m14-4l-7 7-7-7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center items-center gap-2 mt-6 md:mt-8">
          {milestones.map((milestone, index) => (
            <button
              key={milestone.year}
              onClick={() => scrollToIndex(index)}
              className="transition-all duration-300 focus:outline-none"
              aria-label={`Go to ${milestone.year}`}
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                className={`rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? 'w-2.5 h-2.5 md:w-3 md:h-3'
                    : 'w-1.5 h-1.5 md:w-2 md:h-2'
                }`}
                style={{
                  backgroundColor: activeIndex === index 
                    ? '#D4AF37' 
                    : milestone.highlight 
                      ? 'rgba(212, 175, 55, 0.6)' 
                      : 'rgba(212, 175, 55, 0.3)',
                  boxShadow: activeIndex === index ? '0 0 8px rgba(212, 175, 55, 0.6)' : 'none',
                }}
              />
            </button>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="max-w-md mx-auto mt-4 md:mt-6">
          <div className="flex justify-between text-[10px] md:text-xs mb-1 px-1">
            <span style={{ color: '#F5E6C4', opacity: 0.6 }}>2021</span>
            <span style={{ color: '#F5E6C4', opacity: 0.6 }}>2026</span>
          </div>
          <div
            className="h-1 rounded-full w-full"
            style={{ background: 'rgba(212, 175, 55, 0.2)' }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{
                background: 'linear-gradient(90deg, #D4AF37, #F9E7B3)',
                width: `${((activeIndex + 1) / milestones.length) * 100}%`,
              }}
              animate={{ width: `${((activeIndex + 1) / milestones.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Legend / Caption */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-8 md:mt-10 pt-4"
        >
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-[10px] md:text-xs font-body">
            <div className="flex items-center gap-2">
              <div className="w-4 h-px" style={{ backgroundColor: '#D4AF37' }} />
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#D4AF37' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span style={{ color: '#F5E6C4', opacity: 0.7 }}>Direction of Progress →</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#D4AF37' }} />
              <span style={{ color: '#F5E6C4', opacity: 0.7 }}>Milestone Year</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full ring-2 ring-[#D4AF37]" style={{ background: 'transparent' }} />
              <span style={{ color: '#F5E6C4', opacity: 0.7 }}>Highlighted Edition</span>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .font-heading {
          font-family: 'Playfair Display', serif;
        }
        
        .font-body {
          font-family: 'Poppins', sans-serif;
        }
        
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800&display=swap');
      `}</style>
    </section>
  );
}