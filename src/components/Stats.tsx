import { useEffect, useState, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function Stats() {
  const stats = [
    { value: 100000, suffix: "+", label: "Public Voters" },
    { value: 10000, suffix: "+", label: "Nominations" },
    { value: 2000, suffix: "+", label: "Awardees" },
    { value: 500, suffix: "+", label: "Institutions Participated" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 });
  const controls = useAnimation();

  // Enhanced counter animation with easing
  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      
      const duration = 3000; // Slightly faster for more impact
      const intervalTime = 20; // Smoother animation
      const easeOut = (t) => 1 - Math.pow(1 - t, 3); // Cubic ease-out

      stats.forEach((stat, index) => {
        let startTime = null;
        
        const animateCount = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          const easedProgress = easeOut(progress);
          
          const currentValue = Math.floor(easedProgress * stat.value);
          
          setCounts((prev) => {
            const updated = [...prev];
            updated[index] = currentValue;
            return updated;
          });

          if (progress < 1) {
            requestAnimationFrame(animateCount);
          } else {
            setCounts((prev) => {
              const updated = [...prev];
              updated[index] = stat.value;
              return updated;
            });
          }
        };

        requestAnimationFrame(animateCount);
      });

      // Trigger scale animation for numbers
      controls.start({
        scale: [1, 1.1, 1],
        transition: { duration: 0.5, delay: 0.2 }
      });
    }
  }, [isInView, hasAnimated, controls, stats]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-28 overflow-hidden" 
      style={{ backgroundColor: '#0B1C2D' }}
    >
      {/* Deep Navy Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 30% 30%, #0E2A47 0%, #071421 100%)'
        }}
      />

      {/* Dramatic Gold Spotlight Behind Numbers */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(212,175,55,0.2) 0%, transparent 70%)',
          filter: 'blur(80px)'
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Individual Number Glows */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`glow-${i}`}
          className="absolute w-64 h-64 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(212,175,55,0.3) 0%, transparent 70%)',
            filter: 'blur(50px)',
            left: `${15 + i * 25}%`,
            top: '50%',
            transform: 'translateY(-50%)'
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Gold Particle Field */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              backgroundColor: i % 2 === 0 ? '#D4AF37' : '#F5E6C4',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.2
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, i % 2 === 0 ? 20 : -20, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2
            }}
          />
        ))}
      </div>
      
      {/* Decorative Gold Curves */}
      <svg
        className="absolute -top-12 -left-16 w-[200px] h-[200px] lg:w-[260px] lg:h-[260px]"
        viewBox="0 0 260 260"
        fill="none"
      >
        <motion.path
          d="M 250 230 C 250 100, 160 10, 30 10"
          stroke="#D4AF37"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
      </svg>

      <svg
        className="absolute -bottom-12 -right-16 w-[200px] h-[200px] lg:w-[260px] lg:h-[260px]"
        viewBox="0 0 260 260"
        fill="none"
      >
        <motion.path
          d="M 10 30 C 10 160, 100 250, 230 250"
          stroke="#D4AF37"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 2, delay: 0.7 }}
        />
      </svg>

      {/* Outer rings with pulse animation */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 rounded-full"
        style={{
          border: "2px solid #D4AF37",
          opacity: 0.2
        }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 rounded-full"
        style={{
          border: "1px solid #D4AF37",
          opacity: 0.15
        }}
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />
      
      {/* Dot patterns with pulse */}
      <div className="absolute top-40 left-1/3 grid grid-cols-5 gap-[6px]">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`top-${i}`}
            className="w-[5px] h-[5px] rounded-full"
            style={{ backgroundColor: '#D4AF37' }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.05
            }}
          />
        ))}
      </div>
      
      <div className="absolute bottom-40 right-1/3 grid grid-cols-4 gap-[6px]">
        {Array.from({ length: 16 }).map((_, i) => (
          <motion.div
            key={`bottom-${i}`}
            className="w-[5px] h-[5px] rounded-full"
            style={{ backgroundColor: '#D4AF37', opacity: 0.6 }}
            animate={{
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.4, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.07
            }}
          />
        ))}
      </div>

      {/* Floating circles with enhanced animations */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full" 
        style={{ backgroundColor: '#D4AF37', opacity: 0.3 }}
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      
      <motion.div 
        className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full" 
        style={{ backgroundColor: '#D4AF37', opacity: 0.2 }}
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Section title */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <motion.div 
            className="w-12 h-px" 
            style={{ backgroundColor: '#D4AF37', opacity: 0.3 }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-heading font-semibold tracking-[0.25em] uppercase"
            style={{ color: '#D4AF37', fontFamily: 'Playfair Display, serif' }}
          >
            OUR ACHIEVEMENTS
          </motion.p>
          <motion.div 
            className="w-12 h-px" 
            style={{ backgroundColor: '#D4AF37', opacity: 0.3 }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight mb-4"
          style={{ fontFamily: 'Playfair Display, serif', color: '#F5E6C4' }}
        >
          Milestones That
        </motion.h2>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight mb-16"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          <span style={{ color: '#F5E6C4' }}>Define Our </span>
          <motion.span 
            style={{ color: '#D4AF37' }}
            animate={{ 
              textShadow: ['0 0 10px rgba(212,175,55,0.3)', '0 0 20px rgba(212,175,55,0.6)', '0 0 10px rgba(212,175,55,0.3)']
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Journey
          </motion.span>
        </motion.h2>

        {/* STATS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Decorative top dot */}
              <motion.div 
                className="absolute -top-6 left-1/2 transform -translate-x-1/2"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3
                }}
              >
                <div 
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: '#D4AF37' }}
                />
              </motion.div>
              
              {/* Stat number with dramatic glow */}
              <div className="relative">
                {/* Glow behind number */}
                <motion.div 
                  className="absolute inset-0 rounded-full blur-3xl"
                  style={{
                    background: 'radial-gradient(circle, rgba(212,175,55,0.4) 0%, transparent 70%)',
                    opacity: 0.6
                  }}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.7, 0.4]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                />
                
                <motion.h3 
                  className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-3 relative z-10"
                  style={{ 
                    color: '#D4AF37',
                    fontFamily: 'Playfair Display, serif',
                    textShadow: '0 0 20px rgba(212, 175, 55, 0.5)'
                  }}
                  animate={isInView ? {
                    scale: [1, 1.1, 1],
                    textShadow: [
                      '0 0 20px rgba(212,175,55,0.5)',
                      '0 0 40px rgba(212,175,55,0.8)',
                      '0 0 20px rgba(212,175,55,0.5)'
                    ]
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {counts[index].toLocaleString()}
                  {stat.suffix}
                </motion.h3>
                
                {/* Animated underline */}
                <motion.div 
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-0.5"
                  style={{ backgroundColor: '#D4AF37' }}
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                />
              </div>

              {/* Stat label */}
              <motion.p 
                className="font-body text-base md:text-lg tracking-wide mt-4"
                style={{ 
                  color: '#F5E6C4',
                  fontFamily: 'Poppins, sans-serif'
                }}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {stat.label}
              </motion.p>

              {/* Hover effect ring */}
              <motion.div 
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  border: '2px solid #D4AF37',
                  boxShadow: '0 0 30px rgba(212, 175, 55, 0.3)'
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative gold line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="h-px w-48 mx-auto mt-16"
          style={{ 
            background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
            transformOrigin: 'center'
          }}
        />
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes float-up {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-down {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(20px); }
        }
        
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
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