// StrategicPartners.tsx
import { motion } from "framer-motion";

export default function StrategicPartners() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-12 md:py-20 relative overflow-hidden bg-white">
      {/* Decorative Gold Waves - Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          className="relative w-full h-16 md:h-24 text-[#D4AF37] opacity-10"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="#D4AF37"
          />
          <path
            d="M0,0V15.81C13,21.25,27.93,25.38,44.71,27.69c60.12,7.72,116.73-3.78,176.46-6.21,73.16-3,143.53,17.24,215.07,29,98.36,16.16,195.91,8.24,292.31-2.73,56-6.4,110.24-17.48,164.72-30.47,35.75-8.52,74.19-17.21,106.73-7.48V0Z"
            fill="#D4AF37"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Decorative Gold Waves - Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden transform rotate-180">
        <svg
          className="relative w-full h-16 md:h-24 text-[#D4AF37] opacity-10"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="#D4AF37"
          />
          <path
            d="M0,0V15.81C13,21.25,27.93,25.38,44.71,27.69c60.12,7.72,116.73-3.78,176.46-6.21,73.16-3,143.53,17.24,215.07,29,98.36,16.16,195.91,8.24,292.31-2.73,56-6.4,110.24-17.48,164.72-30.47,35.75-8.52,74.19-17.21,106.73-7.48V0Z"
            fill="#D4AF37"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Left Side Gold Curves */}
      <div className="hidden md:block absolute left-0 top-1/4">
        <svg width="120" height="400" viewBox="0 0 120 400" fill="none">
          <motion.path
            d="M0 100 C 40 150, 40 250, 0 300"
            stroke="#D4AF37"
            strokeWidth="2"
            strokeOpacity="0.15"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2 }}
          />
          <motion.path
            d="M20 150 C 60 180, 60 220, 20 250"
            stroke="#D4AF37"
            strokeWidth="2"
            strokeOpacity="0.1"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.3 }}
          />
          <motion.circle
            cx="0"
            cy="200"
            r="3"
            fill="#D4AF37"
            fillOpacity="0.2"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </svg>
      </div>

      {/* Right Side Gold Curves */}
      <div className="hidden md:block absolute right-0 top-3/4 transform rotate-180">
        <svg width="120" height="400" viewBox="0 0 120 400" fill="none">
          <motion.path
            d="M0 100 C 40 150, 40 250, 0 300"
            stroke="#D4AF37"
            strokeWidth="2"
            strokeOpacity="0.15"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2 }}
          />
          <motion.path
            d="M20 150 C 60 180, 60 220, 20 250"
            stroke="#D4AF37"
            strokeWidth="2"
            strokeOpacity="0.1"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.3 }}
          />
          <motion.circle
            cx="0"
            cy="200"
            r="3"
            fill="#D4AF37"
            fillOpacity="0.2"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </svg>
      </div>

      {/* Floating Gold Dots */}
      <div className="absolute top-10 md:top-20 left-1/4">
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={`dot1-${i}`}
              className="w-0.5 md:w-1 h-0.5 md:h-1 rounded-full bg-[#D4AF37] opacity-20"
              animate={{
                y: [0, -5, 0],
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 md:bottom-20 right-1/4">
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={`dot2-${i}`}
              className="w-0.5 md:w-1 h-0.5 md:h-1 rounded-full bg-[#D4AF37] opacity-15"
              animate={{
                y: [0, 5, 0],
                opacity: [0.15, 0.4, 0.15],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      </div>

      {/* Center Gold Ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px]">
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-[rgba(212,175,55,0.08)]"
          animate={{ scale: [1, 1.05, 1], opacity: [0.08, 0.12, 0.08] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute inset-8 md:inset-16 rounded-full border-2 border-[rgba(212,175,55,0.05)]"
          animate={{ scale: [1, 1.08, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 7, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
            <motion.div
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              className="w-8 md:w-12 h-px bg-[#D4AF37] opacity-30 origin-left"
            />
            <span
              className="font-heading text-xs md:text-sm font-semibold tracking-[0.15em] md:tracking-[0.25em] uppercase text-[#D4AF37]"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              STRATEGIC ALLIANCE
            </span>
            <motion.div
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              className="w-8 md:w-12 h-px bg-[#D4AF37] opacity-30 origin-right"
            />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 px-4 text-[#0B1C2D]"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Empowering Excellence Through
            <br />
            <span className="text-[#D4AF37]">Strategic Collaboration</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-16 md:w-20 h-0.5 mx-auto mb-3 md:mb-4 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-body text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-4 text-[#6B7280]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Bharat Education Excellence Awards is supported by leading organizations
            committed to transforming education and leadership.
          </motion.p>
        </motion.div>

        {/* Premium Partnership Card - Logos without circles */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-10 md:mb-14"
        >
          <motion.div
            variants={itemVariants}
            className="relative bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl overflow-hidden shadow-xl"
            style={{
              border: "1px solid rgba(212, 175, 55, 0.25)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
            }}
          >
            {/* Gold accent border top */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

            <div className="p-6 md:p-10">
              {/* Horizontal Partnership Flow - Centered with equal spacing */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-10">
                {/* Brain O Vision - Left */}
                <div className="text-center group flex-1">
                  <div className="mx-auto mb-4 transition-all duration-300 group-hover:scale-105">
                    <img
                      src="/logos/bov.png"
                      alt="Brain O Vision"
                      className="h-20 md:h-24 w-auto object-contain mx-auto"
                    />
                  </div>
                  <div
                    className="font-heading text-xl md:text-2xl font-bold text-[#0B1C2D] mb-1"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    Brain O Vision
                  </div>
                  <div className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">
                    Presented By
                  </div>
                </div>

                {/* Connector - Desktop */}
                <div className="hidden md:flex items-center gap-3">
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                  <div className="w-2 h-2 rotate-45 bg-[#D4AF37]" />
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                </div>

                {/* Connector - Mobile */}
                <div className="flex md:hidden items-center justify-center">
                  <div className="w-px h-10 bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent" />
                </div>

                {/* BEEA Central - Middle (Centered) */}
                <div className="text-center px-6 md:px-10 py-6 md:py-8 rounded-2xl bg-[rgba(212,175,55,0.04)] border border-[rgba(212,175,55,0.15)] group flex-1 max-w-sm">
                  <div className="mx-auto mb-4 transition-all duration-300 group-hover:scale-105">
                    <img
                      src="/logos/logo.png"
                      alt="BEEA 2026"
                      className="h-24 md:h-32 w-auto object-contain mx-auto"
                    />
                  </div>
                  <div
                    className="font-heading text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#F2E3A0] bg-clip-text text-transparent mb-1"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    BEEA 2026
                  </div>
                  <div className="text-xs uppercase tracking-wider text-[#D4AF37]/80 font-semibold">
                    Bharat Education Excellence Awards
                  </div>
                </div>

                {/* Connector - Desktop */}
                <div className="hidden md:flex items-center gap-3">
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                  <div className="w-2 h-2 rotate-45 bg-[#D4AF37]" />
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                </div>

                {/* Connector - Mobile */}
                <div className="flex md:hidden items-center justify-center">
                  <div className="w-px h-10 bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent" />
                </div>

                {/* JCI Hyderabad - Right */}
                <div className="text-center group flex-1">
                  <div className="mx-auto mb-4 transition-all duration-300 group-hover:scale-105">
                    <img
                      src="/logos/8.png"
                      alt="JCI Hyderabad"
                      className="h-20 md:h-24 w-auto object-contain mx-auto"
                    />
                  </div>
                  <div
                    className="font-heading text-xl md:text-2xl font-bold text-[#0B1C2D] mb-1"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    JCI Hyderabad
                  </div>
                  <div className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">
                    In Association With
                  </div>
                </div>
              </div>

              {/* Partnership Description */}
              <div className="text-center pt-6 border-t border-[rgba(212,175,55,0.15)]">
                <p className="font-body text-sm md:text-base text-[#4B5563] mb-2">
                  Bharat Education Excellence Awards (BEEA) is proudly presented by{" "}
                  <strong className="text-[#D4AF37] font-semibold">Brain O Vision</strong>{" "}
                  in association with{" "}
                  <strong className="text-[#D4AF37] font-semibold">JCI Hyderabad</strong>.
                </p>
                <p className="font-body text-xs md:text-sm text-[#6B7280] max-w-2xl mx-auto">
                  This collaboration brings together educational innovation,
                  leadership development, industry engagement, and community impact
                  to recognize and celebrate excellence across the education ecosystem.
                </p>
              </div>

              {/* Official Seal */}
              <div className="flex items-center justify-center gap-3 mt-5 pt-3">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-[rgba(212,175,55,0.4)]" />
                <div className="text-[9px] md:text-[10px] uppercase tracking-[2px] md:tracking-[3px] text-[#D4AF37]/50 font-semibold">
                  Official Strategic Alliance
                </div>
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-[rgba(212,175,55,0.4)]" />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Horizontal Partnership Strip with Logos - No circles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-6 py-3 md:py-4 px-4 md:px-6 rounded-full bg-gradient-to-r from-gray-50 to-white border border-[rgba(212,175,55,0.2)]"
        >
          <div className="flex items-center gap-3">
            <img src="/logos/bov.png" alt="Brain O Vision" className="h-8 w-auto object-contain" />
            <span className="font-heading text-sm md:text-base font-semibold text-[#0B1C2D]">
              Brain O Vision
            </span>
          </div>
          <span className="text-[#D4AF37] text-sm">◆</span>
          <div className="flex items-center gap-3">
            <img src="/logos/logo.png" alt="BEEA" className="h-10 w-auto object-contain" />
            <span className="font-heading text-sm md:text-base font-bold text-[#D4AF37]">
              BEEA
            </span>
          </div>
          <span className="text-[#D4AF37] text-sm">◆</span>
          <div className="flex items-center gap-3">
            <img src="/logos/8.png" alt="JCI Hyderabad" className="h-8 w-auto object-contain" />
            <span className="font-heading text-sm md:text-base font-semibold text-[#0B1C2D]">
              JCI Hyderabad
            </span>
          </div>
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12 md:mt-16 pt-6 md:pt-8 border-t border-[rgba(212,175,55,0.15)]"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-3">
            <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-[#D4AF37] hidden sm:block" />
            <p
              className="font-body text-xs sm:text-sm text-center text-[#6B7280]"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Join these esteemed organizations in shaping the future of education
            </p>
            <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-[#D4AF37] hidden sm:block" />
          </div>

          <motion.button
            className="mt-2 md:mt-3 px-5 md:px-6 py-2 md:py-2.5 font-heading text-xs sm:text-sm rounded-full relative overflow-hidden group bg-transparent text-[#D4AF37] border border-[#D4AF37] hover:shadow-lg transition-all duration-300"
            style={{ fontFamily: "Playfair Display, serif" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-[rgba(212,175,55,0.1)]"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">Become a Strategic Partner →</span>
          </motion.button>
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
    </section>
  );
}