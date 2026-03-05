import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroImg1 from "@/assets/bgimages/b1.jpg";
import heroImg2 from "@/assets/bgimages/b2.jpg";
import heroImg3 from "@/assets/bgimages/b3.jpg";

const images = [heroImg1, heroImg2, heroImg3];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: '#0B1A2F' }}>
      {/* Dark Navy Gradient Overlay - Enhanced */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 30% 30%, #132C42 0%, #051220 100%)'
        }}
      />

      {/* Dramatic Spotlight Effect */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)',
          filter: 'blur(60px)'
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Secondary Spotlight */}
      <motion.div 
        className="absolute top-20 right-20 w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(245,230,196,0.1) 0%, transparent 70%)',
          filter: 'blur(50px)'
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Gold Particle Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
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
              opacity: [0.1, 0.3, 0.1]
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
      
      <div className="container relative z-10 mx-auto px-6 lg:px-16 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* ===== LEFT SIDE - Text Content ===== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6 max-w-lg"
          >
            {/* Subtitle with enhanced animation */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative inline-block"
            >
              {/* Gold glow behind subtitle */}
              <div 
                className="absolute -inset-2 blur-xl"
                style={{ 
                  background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)',
                  opacity: 0.3
                }}
              />
              <p 
                className="relative text-sm font-heading font-semibold tracking-[0.25em] uppercase"
                style={{ color: '#D4AF37', fontFamily: 'Playfair Display, serif' }}
              >
                2026 Edition
              </p>
            </motion.div>

            {/* Main Heading - 10% Bigger */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="font-heading font-extrabold text-5xl md:text-6xl lg:text-[4rem] xl:text-7xl leading-tight"
              style={{ fontFamily: 'Playfair Display, serif', color: '#F5E6C4' }}
            >
              Celebrating{" "}
              <motion.span 
                style={{ color: '#D4AF37' }}
                animate={{ 
                  textShadow: ['0 0 10px rgba(212,175,55,0.3)', '0 0 20px rgba(212,175,55,0.6)', '0 0 10px rgba(212,175,55,0.3)']
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                excellence
              </motion.span>
              <br />
              in education across
              <br />
              <motion.span 
                style={{ color: '#D4AF37' }}
                animate={{ 
                  textShadow: ['0 0 10px rgba(212,175,55,0.3)', '0 0 20px rgba(212,175,55,0.6)', '0 0 10px rgba(212,175,55,0.3)']
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                India.
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-base lg:text-lg leading-relaxed"
              style={{ color: '#F5E6C4', fontFamily: 'Poppins, sans-serif' }}
            >
              Honoring outstanding institutions and educators who shape the future of our nation through the Bharath Education Excellence Awards.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <motion.a
                href="#nominate"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-flex items-center gap-2 px-8 py-4 font-heading font-semibold text-sm tracking-wide rounded-full overflow-hidden group"
                style={{ 
                  backgroundColor: '#D4AF37', 
                  color: '#0B1A2F',
                  fontFamily: 'Playfair Display, serif'
                }}
              >
                {/* Gold glow effect on hover */}
                <motion.div 
                  className="absolute inset-0"
                  style={{ 
                    background: 'radial-gradient(circle at center, #F5E6C4 0%, #D4AF37 100%)',
                    opacity: 0
                  }}
                  whileHover={{ opacity: 0.4 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Nominate Now</span>
                <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                
                {/* Pulsing glow ring */}
                <div 
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-700 blur-xl"
                  style={{ background: '#D4AF37' }}
                />
              </motion.a>
              
              <motion.a
                href="#about"
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-2 font-heading font-semibold text-sm tracking-wide transition-all"
                style={{ 
                  color: '#F5E6C4',
                  fontFamily: 'Playfair Display, serif'
                }}
              >
                Learn more about BEEA
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ===== RIGHT SIDE - Circular Image Composition ===== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-[360px] h-[360px] md:w-[460px] md:h-[460px] lg:w-[560px] lg:h-[560px]">

              {/* Large background blob circle with animation */}
              <motion.div 
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: '#D4AF37', opacity: 0.1 }}
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.1, 0.15, 0.1]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* ====== DECORATIVE GOLD CURVES ====== */}

              {/* Large sweeping curve - top left arc */}
              <svg
                className="absolute -top-12 -left-16 w-[200px] h-[200px] lg:w-[260px] lg:h-[260px]"
                viewBox="0 0 260 260"
                fill="none"
              >
                <path
                  d="M 250 230 C 250 100, 160 10, 30 10"
                  stroke="#D4AF37"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>

              {/* Large sweeping curve - bottom right arc */}
              <svg
                className="absolute -bottom-12 -right-16 w-[200px] h-[200px] lg:w-[260px] lg:h-[260px]"
                viewBox="0 0 260 260"
                fill="none"
              >
                <path
                  d="M 10 30 C 10 160, 100 250, 230 250"
                  stroke="#D4AF37"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>

              {/* Half-circle curve hugging the left side */}
              <svg
                className="absolute -left-10 top-1/2 -translate-y-1/2 w-[60px] h-[240px] lg:w-[80px] lg:h-[320px]"
                viewBox="0 0 80 320"
                fill="none"
              >
                <path
                  d="M 70 10 Q 0 160, 70 310"
                  stroke="#D4AF37"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>

              {/* Half-circle curve hugging the right side */}
              <svg
                className="absolute -right-10 top-1/2 -translate-y-1/2 w-[60px] h-[200px] lg:w-[80px] lg:h-[280px]"
                viewBox="0 0 80 280"
                fill="none"
              >
                <path
                  d="M 10 10 Q 80 140, 10 270"
                  stroke="#D4AF37"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>

              {/* Outer rings with animation */}
              <motion.div
                className="absolute -inset-5 rounded-full"
                style={{
                  border: "2px solid #D4AF37",
                  opacity: 0.3
                }}
                animate={{
                  scale: [1, 1.02, 1],
                  opacity: [0.3, 0.4, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div
                className="absolute -inset-10 rounded-full"
                style={{
                  border: "1px solid #D4AF37",
                  opacity: 0.2
                }}
              />

              {/* Dot pattern - top right */}
              <div className="absolute -top-6 -right-4 grid grid-cols-5 gap-[6px]">
                {Array.from({ length: 25 }).map((_, i) => (
                  <motion.div
                    key={`tr-${i}`}
                    className="w-[5px] h-[5px] rounded-full"
                    style={{ backgroundColor: '#D4AF37' }}
                    animate={{
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.05
                    }}
                  />
                ))}
              </div>

              {/* Dot pattern - bottom left */}
              <div className="absolute -bottom-4 -left-6 grid grid-cols-4 gap-[6px]">
                {Array.from({ length: 16 }).map((_, i) => (
                  <motion.div
                    key={`bl-${i}`}
                    className="w-[5px] h-[5px] rounded-full"
                    style={{ backgroundColor: '#D4AF37' }}
                    animate={{
                      opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.07
                    }}
                  />
                ))}
              </div>

              {/* Floating small circle accents with animation */}
              <motion.div 
                className="absolute -top-8 left-1/4 w-10 h-10 rounded-full"
                style={{ backgroundColor: '#D4AF37', opacity: 0.2 }}
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute -bottom-6 right-1/4 w-7 h-7 rounded-full"
                style={{ backgroundColor: '#D4AF37', opacity: 0.2 }}
                animate={{
                  y: [0, 15, 0],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              <motion.div 
                className="absolute top-1/2 -right-14 w-5 h-5 rounded-full"
                style={{ backgroundColor: '#D4AF37', opacity: 0.3 }}
                animate={{
                  x: [0, -10, 0],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Main circular image with gold border */}
              <div 
                className="absolute inset-3 rounded-full overflow-hidden shadow-2xl border-4"
                style={{ 
                  borderColor: '#D4AF37',
                  backgroundColor: '#0B1A2F'
                }}
              >
                {images.map((src, i) => (
                  <motion.img
                    key={i}
                    src={src}
                    alt={`BEEA Awards ${i + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ opacity: i === currentImage ? 1 : 0 }}
                    animate={i === currentImage ? {
                      scale: [1, 1.05, 1]
                    } : {}}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                ))}
                {/* Subtle gold overlay */}
                <div 
                  className="absolute inset-0"
                  style={{ 
                    background: 'linear-gradient(to top, rgba(212, 175, 55, 0.2), transparent)'
                  }}
                />
              </div>

              {/* Gold floating badge - bottom right with enhanced animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: 2 }}
                className="absolute -bottom-2 right-4 md:right-8 rounded-2xl shadow-xl px-5 py-3 flex items-center gap-3 cursor-pointer"
                style={{ 
                  backgroundColor: '#FFFFFF',
                  border: '2px solid #D4AF37',
                  boxShadow: '0 10px 30px rgba(212, 175, 55, 0.3)'
                }}
              >
                <motion.div 
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#D4AF37' }}
                  animate={{
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <span style={{ color: '#0B1A2F' }} className="text-lg">🏆</span>
                </motion.div>
                <div>
                  <p className="font-heading font-bold text-sm" style={{ color: '#0B1A2F', fontFamily: 'Playfair Display, serif' }}>2500+</p>
                  <p className="text-xs" style={{ color: '#0B1A2F', fontFamily: 'Poppins, sans-serif' }}>Awards Given</p>
                </div>
              </motion.div>

              {/* Gold floating badge - top left with enhanced animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
                whileHover={{ scale: 1.1 }}
                className="absolute -top-2 left-0 md:left-4 rounded-2xl shadow-xl px-4 py-2.5 cursor-pointer"
                style={{ 
                  backgroundColor: '#FFFFFF',
                  border: '2px solid #D4AF37',
                  boxShadow: '0 10px 30px rgba(212, 175, 55, 0.3)'
                }}
              >
                <p className="font-heading font-bold text-sm" style={{ color: '#0B1A2F', fontFamily: 'Playfair Display, serif' }}>BEEA</p>
                <p className="text-[10px]" style={{ color: '#0B1A2F', fontFamily: 'Poppins, sans-serif' }}>Since 2020</p>
              </motion.div>

              {/* Gold image indicators with glow */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === currentImage ? "w-8" : "w-2"
                    }`}
                    style={{
                      backgroundColor: i === currentImage ? '#D4AF37' : 'rgba(212, 175, 55, 0.3)'
                    }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}