import { motion } from 'framer-motion';

export default function NominationProcess() {
  const steps = [
    {
      number: "01",
      title: "Choose Category",
      description: "Select the award category that best matches your profile - College Awards or Individual Awards. Review criteria and choose wisely.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Submit Application",
      description: "Fill out the nomination form with your details, achievements, and supporting documents. Ensure all information is accurate.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Evaluation by Jury",
      description: "Our distinguished jury panel reviews all nominations based on merit, impact, and contribution to the education sector.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      number: "04",
      title: "Announcement",
      description: "Winners are announced on our official website and social media platforms. Shortlisted nominees receive email notifications.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      )
    },
    {
      number: "05",
      title: "Grand Award Ceremony",
      description: "Celebrate with us at the grand awards night. Receive your trophy and certificate, network with industry leaders.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
        </svg>
      )
    }
  ];

  const faqs = [
    "No nomination fee required",
    "Submit documents in PDF format",
    "Last date: March 31, 2024",
    "Results: April 15, 2024"
  ];

  return (
    <section id="process" className="relative py-20 overflow-hidden" style={{ backgroundColor: '#0B1C2D' }}>
      {/* Deep Navy Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #0E2A47 0%, #071421 100%)'
        }}
      />

      {/* Luxury Gold Decorative Elements */}
      
      {/* Top Left - Gold Square Pattern */}
      <div className="absolute top-10 left-10">
        <div className="w-16 h-16 rotate-12" style={{ backgroundColor: 'rgba(212, 175, 55, 0.08)' }}></div>
        <div className="w-12 h-12 -rotate-6 -mt-8 ml-8" style={{ backgroundColor: 'rgba(245, 230, 196, 0.08)' }}></div>
        <div className="w-8 h-8 rotate-45 -mt-4 ml-4" style={{ backgroundColor: 'rgba(212, 175, 55, 0.12)' }}></div>
      </div>

      {/* Top Right - Gold Circles */}
      <div className="absolute top-20 right-20">
        <div className="w-24 h-24 rounded-full" style={{ backgroundColor: 'rgba(212, 175, 55, 0.08)' }}></div>
        <div className="w-16 h-16 rounded-full -mt-12 mr-8" style={{ backgroundColor: 'rgba(245, 230, 196, 0.06)' }}></div>
        <div className="w-8 h-8 rounded-full -mt-4 mr-16" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}></div>
      </div>

      {/* Bottom Left - Gold Curved Lines */}
      <div className="absolute bottom-20 left-20">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <path d="M10 110 Q 40 70, 70 70 T 110 30" stroke="#D4AF37" strokeWidth="2" strokeOpacity="0.15" fill="none"/>
          <path d="M20 90 Q 50 50, 80 50 T 100 20" stroke="#F5E6C4" strokeWidth="2" strokeOpacity="0.1" fill="none"/>
          <circle cx="70" cy="70" r="4" fill="#D4AF37" fillOpacity="0.15"/>
          <circle cx="80" cy="50" r="3" fill="#F5E6C4" fillOpacity="0.1"/>
        </svg>
      </div>

      {/* Bottom Right - Gold Mixed Shapes */}
      <div className="absolute bottom-32 right-32">
        <div className="w-20 h-20 rounded-full border-4" style={{ borderColor: 'rgba(212, 175, 55, 0.15)' }}></div>
        <div className="w-12 h-12 rotate-45 -mt-10 ml-10 border-4" style={{ borderColor: 'rgba(245, 230, 196, 0.12)' }}></div>
        <div className="w-6 h-6 rounded-full -mt-6 ml-16" style={{ backgroundColor: 'rgba(212, 175, 55, 0.15)' }}></div>
      </div>

      {/* Center - Large Gold Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
        <div className="absolute inset-0 rounded-full border-2" style={{ borderColor: 'rgba(212, 175, 55, 0.1)' }}></div>
        <div className="absolute inset-16 rounded-full border-2" style={{ borderColor: 'rgba(245, 230, 196, 0.08)' }}></div>
        <div className="absolute inset-32 rounded-full border-2" style={{ borderColor: 'rgba(212, 175, 55, 0.05)' }}></div>
      </div>

      {/* Floating Gold Dots */}
      <div className="absolute top-40 right-1/4">
        <div className="flex gap-1">
          <div className="w-1 h-1 rounded-full" style={{ backgroundColor: '#D4AF37' }}></div>
          <div className="w-1 h-1 rounded-full" style={{ backgroundColor: '#F5E6C4' }}></div>
          <div className="w-1 h-1 rounded-full" style={{ backgroundColor: '#D4AF37' }}></div>
        </div>
      </div>
      <div className="absolute bottom-40 left-1/3">
        <div className="flex gap-1">
          <div className="w-1 h-1 rounded-full" style={{ backgroundColor: '#F5E6C4' }}></div>
          <div className="w-1 h-1 rounded-full" style={{ backgroundColor: '#D4AF37' }}></div>
          <div className="w-1 h-1 rounded-full" style={{ backgroundColor: '#F5E6C4' }}></div>
        </div>
      </div>

      {/* Floating Animated Gold Circles */}
      <motion.div 
        className="absolute top-1/3 left-1/4 w-3 h-3 rounded-full"
        style={{ backgroundColor: '#D4AF37', opacity: 0.2 }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/3 w-4 h-4 rounded-full"
        style={{ backgroundColor: '#F5E6C4', opacity: 0.15 }}
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px" style={{ backgroundColor: '#D4AF37', opacity: 0.3 }} />
            <span 
              className="font-heading text-sm font-semibold tracking-[0.25em] uppercase px-6 py-2 rounded-full"
              style={{ 
                color: '#D4AF37',
                background: 'rgba(212, 175, 55, 0.1)',
                fontFamily: 'Playfair Display, serif'
              }}
            >
              SIMPLE & TRANSPARENT
            </span>
            <div className="w-12 h-px" style={{ backgroundColor: '#D4AF37', opacity: 0.3 }} />
          </div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-heading text-4xl md:text-5xl font-bold mb-4"
            style={{ color: '#F5E6C4', fontFamily: 'Playfair Display, serif' }}
          >
            Nomination Process
          </motion.h2>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-20 h-0.5 mx-auto mb-6"
            style={{ 
              background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
              transformOrigin: 'center'
            }}
          />
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="font-body text-lg max-w-2xl mx-auto"
            style={{ color: '#F5E6C4', opacity: 0.8, fontFamily: 'Poppins, sans-serif' }}
          >
            Five simple steps to recognition. We've made it easy for you.
          </motion.p>
        </motion.div>

        {/* Progress Steps */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="flex justify-between items-center">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center relative">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-sm z-10"
                  style={{ 
                    background: '#D4AF37',
                    color: '#0B1C2D',
                    fontFamily: 'Playfair Display, serif',
                    boxShadow: '0 0 15px rgba(212, 175, 55, 0.3)'
                  }}
                >
                  {index + 1}
                </div>
                <span 
                  className="font-body text-sm mt-3 hidden md:block"
                  style={{ color: '#F5E6C4', opacity: 0.7, fontFamily: 'Poppins, sans-serif' }}
                >
                  {step.title}
                </span>
              </div>
            ))}
          </div>
          
          <div className="relative mt-[-20px]">
            <div className="h-1 w-full absolute top-0" style={{ background: 'rgba(212, 175, 55, 0.1)' }}></div>
            <div 
              className="h-1 w-full absolute top-0"
              style={{ 
                background: 'linear-gradient(90deg, #D4AF37, #F5E6C4, #D4AF37)',
                opacity: 0.5
              }}
            ></div>
          </div>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 group"
              style={{ 
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(212, 175, 55, 0.15)',
                backdropFilter: 'blur(10px)'
              }}
            >
              {/* Step Number Background */}
              <div 
                className="absolute top-4 right-4 text-6xl font-heading font-black opacity-5 group-hover:opacity-10 transition-opacity duration-300"
                style={{ color: '#D4AF37', fontFamily: 'Playfair Display, serif' }}
              >
                {step.number}
              </div>
              
              {/* Icon */}
              <div 
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                style={{ 
                  background: 'rgba(212, 175, 55, 0.1)',
                  color: '#D4AF37'
                }}
              >
                {step.icon}
              </div>

              {/* Title */}
              <h3 
                className="font-heading text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-[#D4AF37]"
                style={{ color: '#F5E6C4', fontFamily: 'Playfair Display, serif' }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p 
                className="font-body text-sm leading-relaxed"
                style={{ color: '#F5E6C4', opacity: 0.8, fontFamily: 'Poppins, sans-serif' }}
              >
                {step.description}
              </p>

              {/* Time Info */}
              <div className="mt-6 pt-4 border-t border-dashed" style={{ borderColor: 'rgba(212, 175, 55, 0.2)' }}>
                <span 
                  className="font-body text-xs font-semibold"
                  style={{ color: '#D4AF37', fontFamily: 'Poppins, sans-serif' }}
                >
                  Takes about 5-10 minutes
                </span>
              </div>

              {/* Gold border on hover */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  border: '2px solid #D4AF37',
                  boxShadow: '0 0 30px rgba(212, 175, 55, 0.2)'
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Help Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="rounded-3xl p-10 mb-16"
          style={{ 
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(212, 175, 55, 0.15)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <div className="grid md:grid-cols-2 gap-10 items-start">
            
            {/* Left Side */}
            <div>
              <h3 
                className="font-heading text-2xl font-bold mb-4"
                style={{ color: '#F5E6C4', fontFamily: 'Playfair Display, serif' }}
              >
                Need Help?
              </h3>
              
              <p 
                className="font-body mb-6"
                style={{ color: '#F5E6C4', opacity: 0.8, fontFamily: 'Poppins, sans-serif' }}
              >
                We're here to guide you through every step of the nomination process.
              </p>
              
              {/* FAQ List */}
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#D4AF37' }}></div>
                    <span 
                      className="font-body text-sm"
                      style={{ color: '#F5E6C4', opacity: 0.8, fontFamily: 'Poppins, sans-serif' }}
                    >
                      {faq}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side */}
            <div className="space-y-4">
              
              {/* Guidelines Button */}
              <a 
                href="#" 
                className="flex items-center justify-between p-5 rounded-xl transition-all duration-300 group"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(212, 175, 55, 0.15)'
                }}
              >
                <div className="flex items-center gap-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ 
                      background: 'rgba(212, 175, 55, 0.1)',
                      color: '#D4AF37'
                    }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold" style={{ color: '#F5E6C4', fontFamily: 'Playfair Display, serif' }}>Download Guidelines</h4>
                    <p className="font-body text-sm" style={{ color: '#F5E6C4', opacity: 0.7, fontFamily: 'Poppins, sans-serif' }}>PDF, 2.5 MB</p>
                  </div>
                </div>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" style={{ color: '#D4AF37' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              {/* Chat Support Button */}
              <a 
                href="#" 
                className="flex items-center justify-between p-5 rounded-xl transition-all duration-300 group"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(212, 175, 55, 0.15)'
                }}
              >
                <div className="flex items-center gap-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ 
                      background: 'rgba(212, 175, 55, 0.1)',
                      color: '#D4AF37'
                    }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold" style={{ color: '#F5E6C4', fontFamily: 'Playfair Display, serif' }}>Chat with Support</h4>
                    <p className="font-body text-sm" style={{ color: '#F5E6C4', opacity: 0.7, fontFamily: 'Poppins, sans-serif' }}>Average response: 5 mins</p>
                  </div>
                </div>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" style={{ color: '#D4AF37' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              {/* Start Nomination Button */}
              <button 
                className="w-full px-6 py-4 font-heading font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ 
                  background: '#D4AF37',
                  color: '#0B1C2D',
                  fontFamily: 'Playfair Display, serif',
                  boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'
                }}
              >
                Start Your Nomination Now
              </button>
            </div>
          </div>
        </motion.div>

        {/* Important Dates */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <div 
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
            style={{ 
              background: 'rgba(212, 175, 55, 0.1)',
              border: '1px solid rgba(212, 175, 55, 0.2)'
            }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#D4AF37' }}></span>
            <span 
              className="font-body text-sm"
              style={{ color: '#F5E6C4', opacity: 0.9, fontFamily: 'Poppins, sans-serif' }}
            >
              Nominations close on March 31, 2024. Don't miss out!
            </span>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37)' }} />
            <p 
              className="font-body text-sm"
              style={{ color: '#F5E6C4', opacity: 0.7, fontFamily: 'Poppins, sans-serif' }}
            >
              No Fees • Pan India • 100% Transparent
            </p>
            <div className="w-12 h-px" style={{ background: 'linear-gradient(270deg, transparent, #D4AF37)' }} />
          </div>
        </motion.div>
      </div>

      {/* Animation Keyframes and Font Imports */}
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