import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  institution: string;
  content: string;
  rating: number;
  image: string;
  highlight?: boolean;
}

export default function TestimonialsCTA(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Dr. Rajesh Kumar',
      role: 'Principal',
      institution: 'Delhi Public School',
      content: 'Beea has transformed how we recognize educational excellence. The nomination process is transparent and the awards ceremony is world-class. Truly a game-changer for the education sector.',
      rating: 5,
      image: 'https://placehold.co/200x200/0E2A47/D4AF37?text=RK',
      highlight: true,
    },
    {
      id: 2,
      name: 'Prof. Meera Srinivasan',
      role: 'Dean of Academics',
      institution: 'Vellore Institute of Technology',
      content: 'Being recognized by Beea was a career-defining moment. The platform is incredibly well-organized and the jury panel brings immense credibility to the entire process.',
      rating: 5,
      image: 'https://placehold.co/200x200/0E2A47/D4AF37?text=MS',
    },
    {
      id: 3,
      name: 'Ankit Sharma',
      role: 'Founder',
      institution: 'EduTech Innovations',
      content: 'The public voting system ensures that truly deserving candidates get recognized. Beea has created a democratic platform that celebrates genuine impact in education.',
      rating: 5,
      image: 'https://placehold.co/200x200/0E2A47/D4AF37?text=AS',
    },
    {
      id: 4,
      name: 'Dr. Neeta Verma',
      role: 'Director',
      institution: 'Cambridge International School',
      content: 'The awards ceremony was magnificent! From the nomination process to the final celebration, everything was handled with utmost professionalism and elegance.',
      rating: 5,
      image: 'https://placehold.co/200x200/0E2A47/D4AF37?text=NV',
      highlight: true,
    },
    {
      id: 5,
      name: 'Suresh Patil',
      role: 'Head of Department',
      institution: 'Indian Institute of Management',
      content: 'Beea sets the gold standard for education awards in India. The transparency, the jury quality, and the overall experience are unparalleled.',
      rating: 5,
      image: 'https://placehold.co/200x200/0E2A47/D4AF37?text=SP',
    },
    {
      id: 6,
      name: 'Dr. Anita Desai',
      role: 'Education Consultant',
      institution: 'Independent Evaluator',
      content: 'I have been part of many award ceremonies, but Beea stands out for its commitment to excellence and fair evaluation. A truly inspiring initiative.',
      rating: 5,
      image: 'https://placehold.co/200x200/0E2A47/D4AF37?text=AD',
    },
  ];

  const nextTestimonial = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[activeIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
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

      {/* Elegant Gold Accent Lines - Top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-30" />
      
      {/* Elegant Gold Accent Lines - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-30" />

      {/* Subtle Gold Orb - Top Right */}
      <div
        className="absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl opacity-10"
        style={{ background: '#D4AF37' }}
      />
      
      {/* Subtle Gold Orb - Bottom Left */}
      <div
        className="absolute bottom-20 left-20 w-80 h-80 rounded-full blur-3xl opacity-10"
        style={{ background: '#F5A623' }}
      />

      {/* Floating Gold Particles - Minimal & Elegant */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              background: '#D4AF37',
              opacity: 0.15,
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.15, 0.3, 0.15],
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
        {/* Testimonials Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
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
              SUCCESS STORIES
            </span>
            <div className="w-8 md:w-12 h-px" style={{ backgroundColor: '#D4AF37', opacity: 0.4 }} />
          </div>

          <h2
            className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-4"
            style={{ color: '#F5E6C4' }}
          >
            What Our{' '}
            <span className="bg-gradient-to-r from-[#E8C47E] via-[#D4AF37] to-[#F9E7B3] bg-clip-text text-transparent">
              Awardees Say
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
            Hear from the educators, institutions, and innovators who have been recognized for their excellence
          </p>
        </motion.div>

        {/* Testimonial Carousel - Premium Glass Box */}
        <div className="relative max-w-4xl mx-auto mb-16 md:mb-20">
          {/* Premium Gold Glow Effect */}
          <div
            className="absolute -inset-0.5 rounded-3xl opacity-40 blur-xl"
            style={{ background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.3), rgba(212, 175, 55, 0.1))' }}
          />
          
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(212, 175, 55, 0.35)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            }}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="p-8 md:p-12"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Premium Gold Quote Icon */}
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                    style={{
                      background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(212, 175, 55, 0.05))',
                      border: '1px solid rgba(212, 175, 55, 0.4)',
                    }}
                  >
                    <svg
                      className="w-7 h-7"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      style={{ color: '#D4AF37' }}
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Testimonial Content */}
                  <p
                    className="font-body text-base md:text-xl leading-relaxed mb-6 max-w-2xl"
                    style={{ color: '#F5E6C4', lineHeight: '1.6' }}
                  >
                    "{currentTestimonial.content}"
                  </p>

                  {/* Gold Star Rating */}
                  <div className="flex gap-1.5 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 md:w-6 md:h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        style={{ color: '#D4AF37' }}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Author Profile */}
                  <div className="flex flex-col items-center">
                    <div
                      className="w-20 h-20 rounded-full overflow-hidden mb-4 ring-2 ring-[#D4AF37] ring-offset-2 ring-offset-[#0B1C2D]"
                    >
                      <img
                        src={currentTestimonial.image}
                        alt={currentTestimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4
                      className="font-heading text-xl md:text-2xl font-bold"
                      style={{ color: '#F5E6C4' }}
                    >
                      {currentTestimonial.name}
                    </h4>
                    <p
                      className="font-body text-sm md:text-base mt-1"
                      style={{ color: '#D4AF37' }}
                    >
                      {currentTestimonial.role}
                    </p>
                    <p
                      className="font-body text-xs mt-1"
                      style={{ color: '#F5E6C4', opacity: 0.6 }}
                    >
                      {currentTestimonial.institution}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Premium Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[rgba(212,175,55,0.25)]"
              style={{
                background: 'rgba(212, 175, 55, 0.1)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(212, 175, 55, 0.4)',
              }}
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{ color: '#D4AF37' }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[rgba(212,175,55,0.25)]"
              style={{
                background: 'rgba(212, 175, 55, 0.1)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(212, 175, 55, 0.4)',
              }}
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{ color: '#D4AF37' }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Premium Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > activeIndex ? 1 : -1);
                  setActiveIndex(index);
                }}
                className="transition-all duration-300 focus:outline-none"
              >
                <div
                  className={`rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? 'w-2 h-2 md:w-2.5 md:h-2.5'
                      : 'w-1.5 h-1.5 md:w-2 md:h-2'
                  }`}
                  style={{
                    backgroundColor: activeIndex === index ? '#D4AF37' : 'rgba(212, 175, 55, 0.35)',
                    boxShadow: activeIndex === index ? '0 0 8px rgba(212, 175, 55, 0.5)' : 'none',
                  }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* CTA Section - Premium Design */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Premium Gold Gradient Background */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.12) 0%, rgba(212, 175, 55, 0.03) 50%, rgba(212, 175, 55, 0.05) 100%)',
            }}
          />
          
          {/* Subtle Gold Border Glow */}
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              boxShadow: 'inset 0 0 40px rgba(212, 175, 55, 0.08), 0 0 0 1px rgba(212, 175, 55, 0.2)',
            }}
          />

          <div className="relative p-8 md:p-12 lg:p-16 text-center">
            {/* Elegant Gold Accent Lines */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-px" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }} />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-16 h-px" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }} />

            <h3
              className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: '#F5E6C4' }}
            >
              Ready to Join the{' '}
              <span className="bg-gradient-to-r from-[#E8C47E] via-[#D4AF37] to-[#F9E7B3] bg-clip-text text-transparent">
                Excellence Journey?
              </span>
            </h3>

            <p
              className="font-body text-sm md:text-base max-w-2xl mx-auto mb-8"
              style={{ color: '#F5E6C4', opacity: 0.8 }}
            >
              Nominate yourself or someone you know who deserves recognition for outstanding contributions to education
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 md:px-10 py-3.5 md:py-4 font-heading font-semibold text-sm md:text-base rounded-xl transition-all duration-300 group relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #D4AF37, #B8860B)',
                  color: '#0B1C2D',
                  boxShadow: '0 8px 25px rgba(212, 175, 55, 0.35)',
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Nomination
                  <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 md:px-10 py-3.5 md:py-4 font-heading font-semibold text-sm md:text-base rounded-xl transition-all duration-300 group"
                style={{
                  background: 'rgba(212, 175, 55, 0.08)',
                  color: '#D4AF37',
                  border: '1px solid rgba(212, 175, 55, 0.5)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <span className="flex items-center gap-2">
                  Download Brochure
                  <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </span>
              </motion.button>
            </div>

            {/* Premium Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 mt-10 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: 'rgba(212, 175, 55, 0.15)' }}>
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#D4AF37' }}>
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-body text-xs" style={{ color: '#F5E6C4', opacity: 0.7 }}>No Nomination Fee</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: 'rgba(212, 175, 55, 0.15)' }}>
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#D4AF37' }}>
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-body text-xs" style={{ color: '#F5E6C4', opacity: 0.7 }}>100% Transparent</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: 'rgba(212, 175, 55, 0.15)' }}>
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#D4AF37' }}>
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-body text-xs" style={{ color: '#F5E6C4', opacity: 0.7 }}>Pan India Recognition</span>
              </div>
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
        
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800&display=swap');
      `}</style>
    </section>
  );
}