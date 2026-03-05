export default function About() {
  const infoPoints = [
    {
      title: "Our Mission",
      description: "To identify and celebrate institutions and individuals who have made significant contributions to the field of education in India.",
    },
    {
      title: "Our Vision",
      description: "Creating a platform that acknowledges excellence and inspires educational institutions to reach new heights of achievement.",
    },
    {
      title: "Recognition",
      description: "Honoring outstanding educators, colleges, and initiatives that have transformed the educational landscape of our nation.",
    },
    {
      title: "Community",
      description: "Building a network of excellence that fosters collaboration and knowledge sharing among educational leaders.",
    },
  ];

  return (
    <section id="about" className="min-h-screen py-20 relative overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
      {/* Decorative Elements - Metallic Gold (#D4AF37) accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px]">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full border-2" style={{ borderColor: 'rgba(212, 175, 55, 0.2)' }}></div>
        <div className="absolute top-40 right-40 w-96 h-96 rounded-full border-2" style={{ borderColor: 'rgba(212, 175, 55, 0.1)' }}></div>
        <div className="absolute bottom-20 right-60 w-48 h-48 rounded-full border-2" style={{ borderColor: 'rgba(212, 175, 55, 0.15)' }}></div>
      </div>
      
      {/* Decorative Dots - Metallic Gold */}
      <div className="absolute top-40 left-1/3 flex gap-2">
        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#D4AF37' }}></div>
        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#D4AF37', opacity: 0.6 }}></div>
        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#D4AF37', opacity: 0.3 }}></div>
      </div>
      <div className="absolute bottom-40 right-1/4 flex gap-2">
        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#D4AF37' }}></div>
        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#D4AF37', opacity: 0.6 }}></div>
        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#D4AF37', opacity: 0.3 }}></div>
      </div>

      {/* Deep Navy Gradient decorative elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full filter blur-3xl" style={{ 
        background: 'linear-gradient(135deg, #0E2A47 0%, #071421 100%)',
        opacity: 0.05
      }}></div>
      
      <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full filter blur-2xl" style={{ 
        background: '#0B1C2D',
        opacity: 0.03
      }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left side - Larger Image */}
          <div className="relative">
            <div className="relative">
              <img 
                src="/logos/momento.png" 
                alt="BEEA Award Moment"
                className="w-full max-w-[900px] mx-auto relative z-10"
              />
              {/* Decorative gold circle behind image */}
              <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full" style={{ 
                background: 'radial-gradient(circle, rgba(212,175,55,0.1) 0%, rgba(212,175,55,0) 70%)'
              }}></div>
              <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full" style={{ 
                background: 'radial-gradient(circle, rgba(245,230,196,0.15) 0%, rgba(245,230,196,0) 70%)'
              }}></div>
            </div>
          </div>

          {/* Right side - About BEEA content */}
          <div className="max-w-xl">
            {/* Decorative element - Metallic Gold */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-0.5" style={{ backgroundColor: '#D4AF37' }}></div>
              <span className="font-body text-sm font-semibold tracking-[0.3em]" style={{ 
                color: '#0B1C2D',
                opacity: 0.7,
                fontFamily: 'Poppins, sans-serif'
              }}>
                SINCE 2020
              </span>
            </div>

            {/* Main Heading - Midnight Blue (#0B1C2D) */}
            <h2 className="font-heading text-5xl md:text-6xl font-bold mb-4 leading-tight" style={{ 
              color: '#0B1C2D',
              fontFamily: 'Playfair Display, serif'
            }}>
              About
            </h2>
            
            {/* Excellence in education across India with colored words */}
            <h3 className="font-heading text-5xl md:text-6xl font-bold mb-8 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              <span style={{ color: '#0B1C2D' }}>Bharat Education Excellence</span>
              <span style={{ color: '#D4AF37' }}> Awards</span>
            </h3>

            {/* Description - Soft Champagne text on white background */}
            <p className="font-body text-lg leading-relaxed mb-10" style={{ 
              color: '#0B1C2D',
              opacity: 0.8,
              fontFamily: 'Poppins, sans-serif'
            }}>
              The Bharat Education Excellence Awards is a prestigious initiative dedicated to recognizing outstanding achievements in the Indian education sector. We honor educators, colleges, universities and individuals who demonstrate exceptional commitment to{' '}
              <span className="font-semibold" style={{ color: '#D4AF37' }}>excellence</span> and innovation.
            </p>

            {/* Info Points Grid - Hidden but preserved for future use */}
            <div className="hidden grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {infoPoints.map((point, index) => (
                <div key={index} className="p-6 rounded-lg" style={{ 
                  backgroundColor: 'rgba(212, 175, 55, 0.03)',
                  border: '1px solid rgba(212, 175, 55, 0.1)'
                }}>
                  <h4 className="font-heading text-xl font-bold mb-2" style={{ 
                    color: '#0B1C2D',
                    fontFamily: 'Playfair Display, serif'
                  }}>
                    {point.title}
                  </h4>
                  <p className="font-body text-sm" style={{ 
                    color: '#0B1C2D',
                    opacity: 0.7,
                    fontFamily: 'Poppins, sans-serif'
                  }}>
                    {point.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Learn More Link */}
            <a 
              href="#" 
              className="inline-flex items-center gap-3 group mb-16"
            >
              <span className="font-body text-lg transition-colors duration-300" style={{ 
                color: '#0B1C2D',
                opacity: 0.8,
                fontFamily: 'Poppins, sans-serif'
              }}>
                Learn more about BEEA
              </span>
              <svg 
                className="w-5 h-5 transition-all duration-300 group-hover:translate-x-2" 
                style={{ color: '#D4AF37' }}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>

            {/* Award Icon Section with Nominate Button */}
            <div className="flex items-center gap-8">
              {/* Award Icon - Metallic Gold */}
              <div className="flex items-center gap-3">
                <div className="relative">
                  <svg 
                    className="w-12 h-12" 
                    style={{ color: '#D4AF37' }}
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z"/>
                  </svg>
                  <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full animate-pulse" style={{ backgroundColor: '#D4AF37' }}></div>
                </div>
                <div>
                  <div className="font-heading text-2xl font-bold" style={{ 
                    color: '#0B1C2D',
                    fontFamily: 'Playfair Display, serif'
                  }}>2500+</div>
                  <div className="font-body text-sm" style={{ 
                    color: '#0B1C2D',
                    opacity: 0.7,
                    fontFamily: 'Poppins, sans-serif'
                  }}>Awards Given</div>
                </div>
              </div>

              {/* Nominate Now Button - Deep Navy Gradient */}
              <button 
                className="px-8 py-4 font-heading font-semibold text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
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