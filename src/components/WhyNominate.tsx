import { motion } from "framer-motion";

export default function WhyNominate() {
  const benefits = [
    {
      icon: (className) => (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z" />
        </svg>
      ),
      title: "National Recognition",
      description: "Your achievements will be recognized across India's education sector, positioning you among the nation's most distinguished educators and institutions."
    },
    {
      icon: (className) => (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 12h8v4H7v-4z" />
        </svg>
      ),
      title: "Media Coverage",
      description: "Extensive coverage across leading educational platforms, newspapers, and digital channels to showcase your achievement to a wider audience."
    },
    {
      icon: (className) => (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
        </svg>
      ),
      title: "Certificate & Trophy",
      description: "Receive a prestigious trophy and a beautifully crafted certificate that symbolizes your commitment to excellence in education."
    },
    {
      icon: (className) => (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Networking Opportunities",
      description: "Connect with top educators, industry leaders, and policymakers at the grand award ceremony and exclusive networking events."
    },
    {
      icon: (className) => (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
      title: "Brand Visibility",
      description: "Enhance your institution's brand value and credibility. Feature in our award directory and marketing materials for increased visibility."
    },
  ];

  return (
    <section id="why-nominate" className="relative py-24 overflow-hidden" style={{ backgroundColor: '#0A1628' }}>
      {/* Clean Dark Navy Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #0A1628 0%, #0D1B2A 50%, #0A1628 100%)'
        }}
      />

      {/* Subtle Gold Decorative Elements */}
      <svg
        className="absolute -top-12 -left-16 w-[200px] h-[200px] lg:w-[260px] lg:h-[260px]"
        viewBox="0 0 260 260"
        fill="none"
      >
        <path
          d="M 250 230 C 250 100, 160 10, 30 10"
          stroke="#D4AF37"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.12"
        />
      </svg>

      <svg
        className="absolute -bottom-12 -right-16 w-[200px] h-[200px] lg:w-[260px] lg:h-[260px]"
        viewBox="0 0 260 260"
        fill="none"
      >
        <path
          d="M 10 30 C 10 160, 100 250, 230 250"
          stroke="#D4AF37"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.12"
        />
      </svg>

      <svg
        className="absolute -left-10 top-1/2 -translate-y-1/2 w-[60px] h-[240px] lg:w-[80px] lg:h-[320px]"
        viewBox="0 0 80 320"
        fill="none"
      >
        <path
          d="M 70 10 Q 0 160, 70 310"
          stroke="#D4AF37"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.12"
        />
      </svg>

      <svg
        className="absolute -right-10 top-1/2 -translate-y-1/2 w-[60px] h-[200px] lg:w-[80px] lg:h-[280px]"
        viewBox="0 0 80 280"
        fill="none"
      >
        <path
          d="M 10 10 Q 80 140, 10 270"
          stroke="#D4AF37"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.12"
        />
      </svg>

      {/* Subtle Gold Rings */}
      <div
        className="absolute top-20 left-20 w-72 h-72 rounded-full"
        style={{
          border: "1px solid #D4AF37",
          opacity: 0.06
        }}
      />
      <div
        className="absolute bottom-20 right-20 w-96 h-96 rounded-full"
        style={{
          border: "1px solid #D4AF37",
          opacity: 0.05
        }}
      />

      {/* Minimal Dot Patterns */}
      <div className="absolute top-40 left-1/3 grid grid-cols-5 gap-[6px]">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`top-${i}`}
            className="w-[3px] h-[3px] rounded-full"
            style={{ backgroundColor: '#D4AF37', opacity: 0.12 }}
          />
        ))}
      </div>

      <div className="absolute bottom-40 right-1/3 grid grid-cols-4 gap-[6px]">
        {Array.from({ length: 16 }).map((_, i) => (
          <div
            key={`bottom-${i}`}
            className="w-[3px] h-[3px] rounded-full"
            style={{ backgroundColor: '#D4AF37', opacity: 0.1 }}
          />
        ))}
      </div>

      {/* Subtle Floating Circles */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full animate-float-up" style={{ backgroundColor: '#D4AF37', opacity: 0.12 }} />
      <div className="absolute bottom-1/3 right-1/4 w-4 h-4 rounded-full animate-float-down" style={{ backgroundColor: '#D4AF37', opacity: 0.1 }} />
      <div className="absolute top-2/3 left-1/2 w-2 h-2 rounded-full animate-float-up" style={{ backgroundColor: '#D4AF37', opacity: 0.12, animationDelay: '1s' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px" style={{ backgroundColor: '#D4AF37', opacity: 0.3 }} />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm font-heading font-semibold tracking-[0.25em] uppercase"
              style={{ color: '#D4AF37', fontFamily: 'Playfair Display, serif' }}
            >
              Why Nominate
            </motion.span>
            <div className="w-12 h-px" style={{ backgroundColor: '#D4AF37', opacity: 0.3 }} />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-heading text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            <span style={{ color: '#FFFFFF' }}>Benefits of </span>
            <span style={{ 
              background: 'linear-gradient(135deg, #D4AF37 0%, #F5E6C4 50%, #D4AF37 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Participation
            </span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-20 h-0.5 mx-auto"
            style={{ 
              background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
              transformOrigin: 'center'
            }}
          />
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.slice(0, 3).map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-xl overflow-hidden"
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(212, 175, 55, 0.1)',
                backdropFilter: 'blur(10px)'
              }}
            >
              {/* Top gold gradient bar */}
              <div 
                className="h-0.5 w-full"
                style={{ 
                  background: 'linear-gradient(90deg, transparent, #D4AF37, #F5E6C4, #D4AF37, transparent)'
                }}
              />
              
              <div className="p-8">
                {/* Icon */}
                <div className="relative mb-6">
                  <div 
                    className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    style={{ 
                      background: '#D4AF37',
                      filter: 'blur(8px)'
                    }}
                  />
                  <div className="relative w-14 h-14" style={{ color: '#D4AF37' }}>
                    {benefit.icon("w-full h-full")}
                  </div>
                </div>

                {/* Title */}
                <h3 
                  className="font-heading text-xl font-semibold mb-3 transition-colors duration-300"
                  style={{ 
                    color: '#FFFFFF',
                    fontFamily: 'Playfair Display, serif'
                  }}
                >
                  {benefit.title}
                </h3>

                {/* Description */}
                <p 
                  className="font-body text-sm leading-relaxed"
                  style={{ 
                    color: '#B8C5D6',
                    fontFamily: 'Poppins, sans-serif'
                  }}
                >
                  {benefit.description}
                </p>
              </div>

              {/* Gold border on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
                style={{
                  border: '1px solid rgba(212, 175, 55, 0.4)',
                  boxShadow: '0 0 20px rgba(212, 175, 55, 0.1)'
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Second row - 2 items */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.slice(3, 5).map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group relative rounded-xl overflow-hidden"
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(212, 175, 55, 0.1)',
                backdropFilter: 'blur(10px)'
              }}
            >
              {/* Top gold gradient bar */}
              <div 
                className="h-0.5 w-full"
                style={{ 
                  background: 'linear-gradient(90deg, transparent, #D4AF37, #F5E6C4, #D4AF37, transparent)'
                }}
              />
              
              <div className="p-8">
                <div className="flex gap-6">
                  {/* Icon */}
                  <div className="relative flex-shrink-0">
                    <div 
                      className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                      style={{ 
                        background: '#D4AF37',
                        filter: 'blur(8px)'
                      }}
                    />
                    <div className="relative w-14 h-14" style={{ color: '#D4AF37' }}>
                      {benefit.icon("w-full h-full")}
                    </div>
                  </div>
                  
                  <div>
                    {/* Title */}
                    <h3 
                      className="font-heading text-xl font-semibold mb-3 transition-colors duration-300"
                      style={{ 
                        color: '#FFFFFF',
                        fontFamily: 'Playfair Display, serif'
                      }}
                    >
                      {benefit.title}
                    </h3>

                    {/* Description */}
                    <p 
                      className="font-body text-sm leading-relaxed"
                      style={{ 
                        color: '#B8C5D6',
                        fontFamily: 'Poppins, sans-serif'
                      }}
                    >
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Gold border on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
                style={{
                  border: '1px solid rgba(212, 175, 55, 0.4)',
                  boxShadow: '0 0 20px rgba(212, 175, 55, 0.1)'
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl p-12 mb-16"
          style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(212, 175, 55, 0.1)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-heading text-4xl font-bold mb-2" style={{ 
                background: 'linear-gradient(135deg, #D4AF37 0%, #F5E6C4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontFamily: 'Playfair Display, serif' 
              }}>2000+</div>
              <div className="font-body text-sm" style={{ color: '#B8C5D6', fontFamily: 'Poppins, sans-serif' }}>Awards Presented</div>
            </div>
            <div className="text-center">
              <div className="font-heading text-4xl font-bold mb-2" style={{ 
                background: 'linear-gradient(135deg, #D4AF37 0%, #F5E6C4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontFamily: 'Playfair Display, serif' 
              }}>500+</div>
              <div className="font-body text-sm" style={{ color: '#B8C5D6', fontFamily: 'Poppins, sans-serif' }}>Institutions</div>
            </div>
            <div className="text-center">
              <div className="font-heading text-4xl font-bold mb-2" style={{ 
                background: 'linear-gradient(135deg, #D4AF37 0%, #F5E6C4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontFamily: 'Playfair Display, serif' 
              }}>50+</div>
              <div className="font-body text-sm" style={{ color: '#B8C5D6', fontFamily: 'Poppins, sans-serif' }}>Media Partners</div>
            </div>
            <div className="text-center">
              <div className="font-heading text-4xl font-bold mb-2" style={{ 
                background: 'linear-gradient(135deg, #D4AF37 0%, #F5E6C4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontFamily: 'Playfair Display, serif' 
              }}>10000+</div>
              <div className="font-body text-sm" style={{ color: '#B8C5D6', fontFamily: 'Poppins, sans-serif' }}>Network Members</div>
            </div>
          </div>
        </motion.div>

        

        {/* Trust Indicators */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-8"
          style={{ borderTop: '1px solid rgba(212, 175, 55, 0.1)' }}
        >
          {["✓ No Registration Fee", "✓ Pan India Coverage", "✓ 100% Transparent"].map((text, i) => (
            <span 
              key={i}
              className="font-body text-sm"
              style={{ color: '#B8C5D6', fontFamily: 'Poppins, sans-serif' }}
            >
              {text}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Animation Keyframes and Font Imports */}
      <style>{`
        @keyframes float-up {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes float-down {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(15px); }
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