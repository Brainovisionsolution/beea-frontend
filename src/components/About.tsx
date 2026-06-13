export default function About() {
  const handleNominateClick = () => {
    window.location.href = '/nominate';
  };

  return (
    <section id="about" className="min-h-screen py-12 md:py-20 relative overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
      {/* Decorative Elements - Metallic Gold (#D4AF37) accents */}
      <div className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px]">
        <div className="absolute top-10 md:top-20 right-10 md:right-20 w-32 md:w-64 h-32 md:h-64 rounded-full border-2" style={{ borderColor: 'rgba(212, 175, 55, 0.2)' }}></div>
        <div className="absolute top-20 md:top-40 right-20 md:right-40 w-48 md:w-96 h-48 md:h-96 rounded-full border-2" style={{ borderColor: 'rgba(212, 175, 55, 0.1)' }}></div>
        <div className="absolute bottom-10 md:bottom-20 right-30 md:right-60 w-24 md:w-48 h-24 md:h-48 rounded-full border-2" style={{ borderColor: 'rgba(212, 175, 55, 0.15)' }}></div>
      </div>
      
      {/* Decorative Dots - Metallic Gold */}
      <div className="absolute top-20 md:top-40 left-1/3 flex gap-2">
        <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full" style={{ backgroundColor: '#D4AF37' }}></div>
        <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full" style={{ backgroundColor: '#D4AF37', opacity: 0.6 }}></div>
        <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full" style={{ backgroundColor: '#D4AF37', opacity: 0.3 }}></div>
      </div>
      <div className="absolute bottom-20 md:bottom-40 right-1/4 flex gap-2">
        <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full" style={{ backgroundColor: '#D4AF37' }}></div>
        <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full" style={{ backgroundColor: '#D4AF37', opacity: 0.6 }}></div>
        <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full" style={{ backgroundColor: '#D4AF37', opacity: 0.3 }}></div>
      </div>

      {/* Deep Navy Gradient decorative elements */}
      <div className="absolute bottom-0 left-0 w-48 md:w-96 h-48 md:h-96 rounded-full filter blur-3xl" style={{ 
        background: 'linear-gradient(135deg, #0E2A47 0%, #071421 100%)',
        opacity: 0.05
      }}></div>
      
      <div className="absolute top-1/2 left-1/4 w-32 md:w-64 h-32 md:h-64 rounded-full filter blur-2xl" style={{ 
        background: '#0B1C2D',
        opacity: 0.03
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left side - Image */}
          <div className="relative order-1 md:order-none w-full">
            <div className="relative">
              <img 
                src="/logos/momento.png" 
                alt="BEEA Award Moment"
                className="w-full max-w-[400px] md:max-w-[900px] mx-auto relative z-10"
              />
              {/* Decorative gold circle behind image */}
              <div className="absolute -bottom-5 md:-bottom-10 -right-5 md:-right-10 w-32 md:w-64 h-32 md:h-64 rounded-full" style={{ 
                background: 'radial-gradient(circle, rgba(212,175,55,0.1) 0%, rgba(212,175,55,0) 70%)'
              }}></div>
              <div className="absolute -top-5 md:-top-10 -left-5 md:-left-10 w-24 md:w-48 h-24 md:h-48 rounded-full" style={{ 
                background: 'radial-gradient(circle, rgba(245,230,196,0.15) 0%, rgba(245,230,196,0) 70%)'
              }}></div>
            </div>
          </div>

          {/* Right side - About BEEA content */}
          <div className="order-2 md:order-none max-w-xl w-full">
            {/* Decorative element - Metallic Gold */}
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <div className="w-6 md:w-8 h-0.5" style={{ backgroundColor: '#D4AF37' }}></div>
              <span className="font-body text-xs md:text-sm font-semibold tracking-[0.2em] md:tracking-[0.3em]" style={{ 
                color: '#0B1C2D',
                opacity: 0.7,
                fontFamily: 'Poppins, sans-serif'
              }}>
                SINCE 2020
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-2 leading-tight" style={{ 
              color: '#0B1C2D',
              fontFamily: 'Playfair Display, serif'
            }}>
              About
            </h2>
            
            <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              <span style={{ color: '#0B1C2D' }}>Bharat Education Excellence</span>
              <span style={{ color: '#D4AF37' }}> Awards</span>
            </h3>

            {/* Description - More info about BEEA */}
            <div className="space-y-4 mb-8 md:mb-10">
              <p className="font-body text-base md:text-lg leading-relaxed" style={{ 
                color: '#0B1C2D',
                opacity: 0.8,
                fontFamily: 'Poppins, sans-serif'
              }}>
                The Bharat Education Excellence Awards is a prestigious initiative dedicated to recognizing outstanding achievements in the Indian education sector.
              </p>
              
              {/* Additional Info Points */}
              <div className="grid grid-cols-1 gap-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: '#D4AF37' }}></div>
                  <p className="font-body text-sm md:text-base" style={{ 
                    color: '#0B1C2D',
                    opacity: 0.7,
                    fontFamily: 'Poppins, sans-serif'
                  }}>
                    <span className="font-semibold" style={{ color: '#D4AF37' }}>500+</span> Educational institutions recognized annually
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: '#D4AF37' }}></div>
                  <p className="font-body text-sm md:text-base" style={{ 
                    color: '#0B1C2D',
                    opacity: 0.7,
                    fontFamily: 'Poppins, sans-serif'
                  }}>
                    <span className="font-semibold" style={{ color: '#D4AF37' }}>20+</span> States participating across India
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: '#D4AF37' }}></div>
                  <p className="font-body text-sm md:text-base" style={{ 
                    color: '#0B1C2D',
                    opacity: 0.7,
                    fontFamily: 'Poppins, sans-serif'
                  }}>
                    <span className="font-semibold" style={{ color: '#D4AF37' }}>50+</span> Expert jury members from education industry
                  </p>
                </div>
              </div>
            </div>

            {/* Partnership Block - With Logos instead of names */}
            <div className="mb-8 md:mb-10 p-5 md:p-6 rounded-xl" style={{ 
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.05) 0%, rgba(212, 175, 55, 0.02) 100%)',
              border: '1px solid rgba(212, 175, 55, 0.2)'
            }}>
              <div className="flex items-center justify-between mb-6">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#D4AF37]" />
                <span className="font-heading text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase" style={{ 
                  color: '#D4AF37',
                  fontFamily: 'Playfair Display, serif'
                }}>
                  Organized By
                </span>
                <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#D4AF37]" />
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
                {/* Brain O Vision Logo */}
                <div className="text-center">
                  <img 
                    src="/logos/bov.png" 
                    alt="Brain O Vision" 
                    className="h-12 md:h-16 w-auto object-contain mx-auto mb-2"
                  />
                  <p className="font-body text-xs" style={{ 
                    color: '#0B1C2D',
                    opacity: 0.6,
                    fontFamily: 'Poppins, sans-serif'
                  }}>
                    Brain O Vision
                  </p>
                </div>
                
                {/* Connector */}
                <div className="flex items-center gap-2">
                  <div className="w-8 h-px bg-gradient-to-r from-transparent to-[rgba(212,175,55,0.5)]" />
                  <span className="text-[#D4AF37] text-lg font-heading">✕</span>
                  <div className="w-8 h-px bg-gradient-to-l from-transparent to-[rgba(212,175,55,0.5)]" />
                </div>
                
                {/* JCI Hyderabad Logo */}
                <div className="text-center">
                  <img 
                    src="/logos/8.png" 
                    alt="JCI Hyderabad" 
                    className="h-12 md:h-16 w-auto object-contain mx-auto mb-2"
                  />
                  <p className="font-body text-xs" style={{ 
                    color: '#0B1C2D',
                    opacity: 0.6,
                    fontFamily: 'Poppins, sans-serif'
                  }}>
                    JCI Hyderabad
                  </p>
                </div>
              </div>
            </div>

            {/* Nominate Button */}
            <button 
              onClick={handleNominateClick}
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 font-heading font-semibold text-base md:text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              style={{ 
                background: 'linear-gradient(135deg, #0E2A47 0%, #071421 100%)',
                color: '#F5E6C4',
                fontFamily: 'Playfair Display, serif'
              }}
            >
              Nominate Now
            </button>
          </div>
        </div>
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