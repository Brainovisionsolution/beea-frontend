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

  // Counter animation with easing
  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      
      const duration = 3000;
      const intervalTime = 20;
      const easeOut = (t) => 1 - Math.pow(1 - t, 3);

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

      controls.start({
        scale: [1, 1.05, 1],
        transition: { duration: 0.5, delay: 0.2 }
      });
    }
  }, [isInView, hasAnimated, controls, stats]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-28 overflow-hidden" 
      style={{ backgroundColor: '#0A1628' }}
    >
      {/* Clean gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #0A1628 0%, #0D1B2A 50%, #0A1628 100%)'
        }}
      />

      {/* Subtle gold spotlight */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)'
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Minimal floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-px rounded-full"
            style={{
              backgroundColor: '#D4AF37',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.15
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.25, 0.1],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Section title */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <motion.div 
            className="w-12 h-px" 
            style={{ backgroundColor: '#D4AF37', opacity: 0.4 }}
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
            style={{ backgroundColor: '#D4AF37', opacity: 0.4 }}
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
          style={{ fontFamily: 'Playfair Display, serif', color: '#FFFFFF' }}
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
          <span style={{ color: '#FFFFFF' }}>Define Our </span>
          <span style={{ 
            background: 'linear-gradient(135deg, #D4AF37 0%, #F5E6C4 50%, #D4AF37 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Journey
          </span>
        </motion.h2>

        {/* STATS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Card background */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Stat number */}
              <div className="relative">
                <motion.h3 
                  className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-3"
                  style={{ 
                    background: 'linear-gradient(135deg, #D4AF37 0%, #F5E6C4 40%, #D4AF37 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontFamily: 'Playfair Display, serif'
                  }}
                  animate={isInView ? {
                    scale: [1, 1.05, 1],
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {counts[index].toLocaleString()}
                  {stat.suffix}
                </motion.h3>
                
                {/* Decorative underline */}
                <motion.div 
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                />
              </div>

              {/* Stat label */}
              <motion.p 
                className="font-body text-sm md:text-base tracking-wide mt-4"
                style={{ 
                  color: '#B8C5D6',
                  fontFamily: 'Poppins, sans-serif'
                }}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {stat.label}
              </motion.p>

              {/* Subtle hover border */}
              <motion.div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  boxShadow: '0 0 20px rgba(212, 175, 55, 0.1)'
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="h-px w-48 mx-auto mt-16"
          style={{ 
            background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
            transformOrigin: 'center',
            opacity: 0.3
          }}
        />
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
    </section>
  );
}