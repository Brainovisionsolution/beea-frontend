import { motion } from 'framer-motion';
import { useState } from 'react';

export default function NominationProcess() {
  const [activePhase, setActivePhase] = useState('nomination');

  const phases = [
    { id: 'nomination', label: 'Nomination Phase' },
    { id: 'voting', label: 'Public Voting' },
    { id: 'judging', label: 'Jury Evaluation' },
    { id: 'results', label: 'Results' }
  ];

  const steps = [
    {
      phase: 'nomination',
      number: "01",
      title: "Submit Nomination",
      description: "Fill out the nomination form with your details, achievements, and supporting documents. Ensure all information is accurate and complete.",
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      status: "active"
    },
    {
      phase: 'voting',
      number: "02",
      title: "Public Voting",
      description: "Nominations are opened for public voting. Share your profile and gather support from the education community. Votes are monitored for authenticity.",
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      ),
      status: "upcoming"
    },
    {
      phase: 'judging',
      number: "03",
      title: "Jury Evaluation",
      description: "Our distinguished jury panel reviews top nominations based on merit, impact, public voting results, and contribution to the education sector.",
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      status: "upcoming"
    },
    {
      phase: 'results',
      number: "04",
      title: "Results & Ceremony",
      description: "Winners are announced at the grand awards ceremony. Receive your trophy and certificate, network with industry leaders and educationists.",
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
        </svg>
      ),
      status: "upcoming"
    }
  ];

  const votingSteps = [
    {
      number: "1",
      title: "Create Account",
      description: "Register with your email to start voting"
    },
    {
      number: "2",
      title: "Browse Nominees",
      description: "Explore all nominated institutions and individuals"
    },
    {
      number: "3",
      title: "Cast Your Vote",
      description: "Vote for your favorite nominees (one vote per category)"
    },
    {
      number: "4",
      title: "Share & Support",
      description: "Encourage others to vote for deserving candidates"
    }
  ];

  const importantDates = [
    { event: "Nominations Open", status: "completed" },
    { event: "Nominations Close", status: "active" },
    { event: "Voting Period", status: "upcoming" },
    { event: "Jury Evaluation", status: "upcoming" },
    { event: "Awards Ceremony", status: "upcoming" }
  ];

  const faqs = [
    "No nomination fee required",
    "Submit documents in PDF format",
    "Verify your email to start voting",
    "One vote per category per user"
  ];

  return (
    <section id="process" className="relative py-12 md:py-20 overflow-hidden" style={{ backgroundColor: '#0B1C2D' }}>
      {/* Deep Navy Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #0E2A47 0%, #071421 100%)'
        }}
      />

      {/* Luxury Gold Decorative Elements - Hidden on mobile */}
      
      {/* Top Left - Gold Square Pattern */}
      <div className="hidden md:block absolute top-10 left-10">
        <div className="w-16 h-16 rotate-12" style={{ backgroundColor: 'rgba(212, 175, 55, 0.08)' }}></div>
        <div className="w-12 h-12 -rotate-6 -mt-8 ml-8" style={{ backgroundColor: 'rgba(245, 230, 196, 0.08)' }}></div>
        <div className="w-8 h-8 rotate-45 -mt-4 ml-4" style={{ backgroundColor: 'rgba(212, 175, 55, 0.12)' }}></div>
      </div>

      {/* Top Right - Gold Circles */}
      <div className="hidden md:block absolute top-20 right-20">
        <div className="w-24 h-24 rounded-full" style={{ backgroundColor: 'rgba(212, 175, 55, 0.08)' }}></div>
        <div className="w-16 h-16 rounded-full -mt-12 mr-8" style={{ backgroundColor: 'rgba(245, 230, 196, 0.06)' }}></div>
        <div className="w-8 h-8 rounded-full -mt-4 mr-16" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}></div>
      </div>

      {/* Bottom Left - Gold Curved Lines */}
      <div className="hidden md:block absolute bottom-20 left-20">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <path d="M10 110 Q 40 70, 70 70 T 110 30" stroke="#D4AF37" strokeWidth="2" strokeOpacity="0.15" fill="none"/>
          <path d="M20 90 Q 50 50, 80 50 T 100 20" stroke="#F5E6C4" strokeWidth="2" strokeOpacity="0.1" fill="none"/>
          <circle cx="70" cy="70" r="4" fill="#D4AF37" fillOpacity="0.15"/>
          <circle cx="80" cy="50" r="3" fill="#F5E6C4" fillOpacity="0.1"/>
        </svg>
      </div>

      {/* Bottom Right - Gold Mixed Shapes */}
      <div className="hidden md:block absolute bottom-32 right-32">
        <div className="w-20 h-20 rounded-full border-4" style={{ borderColor: 'rgba(212, 175, 55, 0.15)' }}></div>
        <div className="w-12 h-12 rotate-45 -mt-10 ml-10 border-4" style={{ borderColor: 'rgba(245, 230, 196, 0.12)' }}></div>
        <div className="w-6 h-6 rounded-full -mt-6 ml-16" style={{ backgroundColor: 'rgba(212, 175, 55, 0.15)' }}></div>
      </div>

      {/* Center - Large Gold Rings - Adjusted for mobile */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px]">
        <div className="absolute inset-0 rounded-full border-2" style={{ borderColor: 'rgba(212, 175, 55, 0.1)' }}></div>
        <div className="absolute inset-8 md:inset-16 rounded-full border-2" style={{ borderColor: 'rgba(245, 230, 196, 0.08)' }}></div>
        <div className="absolute inset-16 md:inset-32 rounded-full border-2" style={{ borderColor: 'rgba(212, 175, 55, 0.05)' }}></div>
      </div>

      {/* Floating Gold Dots */}
      <div className="absolute top-20 md:top-40 right-1/4">
        <div className="flex gap-1">
          <div className="w-0.5 md:w-1 h-0.5 md:h-1 rounded-full" style={{ backgroundColor: '#D4AF37' }}></div>
          <div className="w-0.5 md:w-1 h-0.5 md:h-1 rounded-full" style={{ backgroundColor: '#F5E6C4' }}></div>
          <div className="w-0.5 md:w-1 h-0.5 md:h-1 rounded-full" style={{ backgroundColor: '#D4AF37' }}></div>
        </div>
      </div>
      <div className="absolute bottom-20 md:bottom-40 left-1/3">
        <div className="flex gap-1">
          <div className="w-0.5 md:w-1 h-0.5 md:h-1 rounded-full" style={{ backgroundColor: '#F5E6C4' }}></div>
          <div className="w-0.5 md:w-1 h-0.5 md:h-1 rounded-full" style={{ backgroundColor: '#D4AF37' }}></div>
          <div className="w-0.5 md:w-1 h-0.5 md:h-1 rounded-full" style={{ backgroundColor: '#F5E6C4' }}></div>
        </div>
      </div>

      {/* Floating Animated Gold Circles */}
      <motion.div 
        className="absolute top-1/3 left-1/4 w-2 md:w-3 h-2 md:h-3 rounded-full"
        style={{ backgroundColor: '#D4AF37', opacity: 0.2 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/3 w-3 md:w-4 h-3 md:h-4 rounded-full"
        style={{ backgroundColor: '#F5E6C4', opacity: 0.15 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-16"
        >
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
            <div className="w-8 md:w-12 h-px" style={{ backgroundColor: '#D4AF37', opacity: 0.3 }} />
            <span 
              className="font-heading text-xs md:text-sm font-semibold tracking-[0.15em] md:tracking-[0.25em] uppercase px-4 md:px-6 py-1.5 md:py-2 rounded-full"
              style={{ 
                color: '#D4AF37',
                background: 'rgba(212, 175, 55, 0.1)',
                fontFamily: 'Playfair Display, serif'
              }}
            >
              DEMOCRATIC & TRANSPARENT
            </span>
            <div className="w-8 md:w-12 h-px" style={{ backgroundColor: '#D4AF37', opacity: 0.3 }} />
          </div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 px-4"
            style={{ color: '#F5E6C4', fontFamily: 'Playfair Display, serif' }}
          >
            Nomination & Voting Process
          </motion.h2>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-16 md:w-20 h-0.5 mx-auto mb-4 md:mb-6"
            style={{ 
              background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
              transformOrigin: 'center'
            }}
          />
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="font-body text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-4"
            style={{ color: '#F5E6C4', opacity: 0.8, fontFamily: 'Poppins, sans-serif' }}
          >
            Four phases to recognition. Public voting ensures democratic selection of winners.
          </motion.p>
        </motion.div>

        {/* Phase Tabs - Horizontal scroll on mobile */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 md:mb-12 overflow-x-auto pb-2 md:pb-0 hide-scrollbar"
        >
          <div className="flex justify-start md:justify-center min-w-max md:min-w-0 px-2 md:px-0">
            <div className="inline-flex p-1 rounded-xl md:rounded-2xl" style={{ backgroundColor: 'rgba(212, 175, 55, 0.08)' }}>
              {phases.map((phase) => (
                <motion.button
                  key={phase.id}
                  onClick={() => setActivePhase(phase.id)}
                  className={`px-4 sm:px-5 md:px-8 py-2 md:py-3 font-heading text-xs sm:text-sm md:text-base font-medium rounded-lg md:rounded-xl transition-all duration-300 relative overflow-hidden whitespace-nowrap ${
                    activePhase === phase.id
                      ? 'shadow-lg' 
                      : 'opacity-70 hover:opacity-100'
                  }`}
                  style={{
                    backgroundColor: activePhase === phase.id ? '#D4AF37' : 'transparent',
                    color: activePhase === phase.id ? '#0B1C2D' : '#F5E6C4',
                    fontFamily: 'Playfair Display, serif'
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {activePhase !== phase.id && (
                    <motion.div 
                      className="absolute inset-0"
                      style={{ background: 'rgba(212,175,55,0.08)' }}
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  <span className="relative z-10">{phase.label}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Active Phase Highlight */}
        <motion.div 
          key={activePhase}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 md:mb-12"
        >
          <div className="rounded-2xl p-4 md:p-8 text-center" style={{ 
            background: 'rgba(212, 175, 55, 0.05)',
            border: '1px solid rgba(212, 175, 55, 0.2)'
          }}>
            <h3 className="font-heading text-lg md:text-2xl font-bold mb-2" style={{ color: '#D4AF37', fontFamily: 'Playfair Display, serif' }}>
              {activePhase === 'nomination' && '📝 Nomination Phase is Active'}
              {activePhase === 'voting' && '🗳️ Public Voting is Now Open'}
              {activePhase === 'judging' && '⚖️ Jury Evaluation in Progress'}
              {activePhase === 'results' && '🏆 Results Announced!'}
            </h3>
            <p className="font-body text-xs md:text-sm" style={{ color: '#F5E6C4', opacity: 0.8, fontFamily: 'Poppins, sans-serif' }}>
              {activePhase === 'nomination' && 'Submit your nominations now!'}
              {activePhase === 'voting' && 'Cast your vote and support deserving candidates'}
              {activePhase === 'judging' && 'Our expert jury is reviewing top nominations'}
              {activePhase === 'results' && 'Congratulations to all winners!'}
            </p>
          </div>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 transition-all duration-500 hover:-translate-y-2 group ${
                step.status === 'active' ? 'ring-2 ring-[#D4AF37]' : ''
              }`}
              style={{ 
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(212, 175, 55, 0.15)',
                backdropFilter: 'blur(10px)'
              }}
            >
              {/* Status Badge */}
              {step.status === 'active' && (
                <div className="absolute -top-2 -right-2 px-2 py-1 rounded-full text-xs font-bold z-20" style={{ 
                  background: '#D4AF37',
                  color: '#0B1C2D'
                }}>
                  Active
                </div>
              )}
              
              {/* Step Number Background */}
              <div 
                className="absolute top-2 md:top-4 right-2 md:right-4 text-3xl md:text-4xl lg:text-6xl font-heading font-black opacity-5 group-hover:opacity-10 transition-opacity duration-300"
                style={{ color: '#D4AF37', fontFamily: 'Playfair Display, serif' }}
              >
                {step.number}
              </div>
              
              {/* Icon */}
              <div 
                className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4 lg:mb-6 transition-all duration-300 group-hover:scale-110"
                style={{ 
                  background: 'rgba(212, 175, 55, 0.1)',
                  color: '#D4AF37'
                }}
              >
                {step.icon}
              </div>

              {/* Title */}
              <h3 
                className="font-heading text-base md:text-lg lg:text-xl font-bold mb-2 md:mb-3 transition-colors duration-300 group-hover:text-[#D4AF37]"
                style={{ color: '#F5E6C4', fontFamily: 'Playfair Display, serif' }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p 
                className="font-body text-xs md:text-sm leading-relaxed mb-3 md:mb-4"
                style={{ color: '#F5E6C4', opacity: 0.8, fontFamily: 'Poppins, sans-serif' }}
              >
                {step.description}
              </p>

              {/* Gold border on hover */}
              <div 
                className="absolute inset-0 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  border: '2px solid #D4AF37',
                  boxShadow: '0 0 30px rgba(212, 175, 55, 0.2)'
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Voting Section - Shown when voting phase is active */}
        {activePhase === 'voting' && (
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-8 md:mb-16"
          >
            <div className="rounded-2xl md:rounded-3xl p-6 md:p-10" style={{ 
              background: 'rgba(212, 175, 55, 0.05)',
              border: '1px solid rgba(212, 175, 55, 0.2)'
            }}>
              <h3 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 text-center" style={{ color: '#F5E6C4', fontFamily: 'Playfair Display, serif' }}>
                How to Vote
              </h3>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
                {votingSteps.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-sm md:text-base font-bold" style={{ 
                      background: '#D4AF37',
                      color: '#0B1C2D'
                    }}>
                      {step.number}
                    </div>
                    <h4 className="font-heading font-semibold text-sm md:text-base mb-2" style={{ color: '#F5E6C4', fontFamily: 'Playfair Display, serif' }}>
                      {step.title}
                    </h4>
                    <p className="font-body text-xs" style={{ color: '#F5E6C4', opacity: 0.7, fontFamily: 'Poppins, sans-serif' }}>
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <button 
                  className="px-6 md:px-8 py-3 md:py-4 font-heading font-semibold text-sm md:text-base rounded-lg md:rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  style={{ 
                    background: '#D4AF37',
                    color: '#0B1C2D',
                    fontFamily: 'Playfair Display, serif',
                    boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'
                  }}
                >
                  Cast Your Vote Now
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Important Dates Timeline - Without specific dates */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8 md:mb-16"
        >
          <h3 className="font-heading text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center" style={{ color: '#F5E6C4', fontFamily: 'Playfair Display, serif' }}>
            Timeline
          </h3>
          
          <div className="max-w-3xl mx-auto space-y-3 md:space-y-4">
            {importantDates.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 md:p-4 rounded-lg md:rounded-xl" style={{ 
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(212, 175, 55, 0.1)'
              }}>
                <div className="flex items-center gap-3 md:gap-4">
                  <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
                    item.status === 'completed' ? 'bg-green-500' : 
                    item.status === 'active' ? 'bg-[#D4AF37] animate-pulse' : 
                    'bg-gray-500'
                  }`} />
                  <span className="font-body text-xs md:text-sm" style={{ color: '#F5E6C4', fontFamily: 'Poppins, sans-serif' }}>
                    {item.event}
                  </span>
                </div>
                <span className="font-heading text-xs md:text-sm font-semibold" style={{ color: '#D4AF37', fontFamily: 'Playfair Display, serif' }}>
                  {item.status === 'completed' && 'Completed'}
                  {item.status === 'active' && 'Active Now'}
                  {item.status === 'upcoming' && 'Upcoming'}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Help Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="rounded-2xl md:rounded-3xl p-6 md:p-10 mb-8 md:mb-16"
          style={{ 
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(212, 175, 55, 0.15)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10 items-start">
            
            {/* Left Side */}
            <div>
              <h3 
                className="font-heading text-xl md:text-2xl font-bold mb-3 md:mb-4"
                style={{ color: '#F5E6C4', fontFamily: 'Playfair Display, serif' }}
              >
                Need Help?
              </h3>
              
              <p 
                className="font-body text-sm md:text-base mb-4 md:mb-6"
                style={{ color: '#F5E6C4', opacity: 0.8, fontFamily: 'Poppins, sans-serif' }}
              >
                We're here to guide you through every step of the nomination and voting process.
              </p>
              
              {/* FAQ List */}
              <div className="space-y-2 md:space-y-3">
                {faqs.map((faq, index) => (
                  <div key={index} className="flex items-center gap-2 md:gap-3">
                    <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#D4AF37' }}></div>
                    <span 
                      className="font-body text-xs md:text-sm"
                      style={{ color: '#F5E6C4', opacity: 0.8, fontFamily: 'Poppins, sans-serif' }}
                    >
                      {faq}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side */}
            <div className="space-y-3 md:space-y-4">
              
              {/* Guidelines Button */}
              <a 
                href="#" 
                className="flex items-center justify-between p-4 md:p-5 rounded-lg md:rounded-xl transition-all duration-300 group"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(212, 175, 55, 0.15)'
                }}
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div 
                    className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 flex-shrink-0"
                    style={{ 
                      background: 'rgba(212, 175, 55, 0.1)',
                      color: '#D4AF37'
                    }}
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-sm md:text-base" style={{ color: '#F5E6C4', fontFamily: 'Playfair Display, serif' }}>Download Guidelines</h4>
                    <p className="font-body text-xs md:text-sm" style={{ color: '#F5E6C4', opacity: 0.7, fontFamily: 'Poppins, sans-serif' }}>PDF, 2.5 MB</p>
                  </div>
                </div>
                <svg className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1 flex-shrink-0" style={{ color: '#D4AF37' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              {/* Chat Support Button */}
              <a 
                href="#" 
                className="flex items-center justify-between p-4 md:p-5 rounded-lg md:rounded-xl transition-all duration-300 group"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(212, 175, 55, 0.15)'
                }}
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div 
                    className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 flex-shrink-0"
                    style={{ 
                      background: 'rgba(212, 175, 55, 0.1)',
                      color: '#D4AF37'
                    }}
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-sm md:text-base" style={{ color: '#F5E6C4', fontFamily: 'Playfair Display, serif' }}>Chat with Support</h4>
                    <p className="font-body text-xs md:text-sm" style={{ color: '#F5E6C4', opacity: 0.7, fontFamily: 'Poppins, sans-serif' }}>Average response: 5 mins</p>
                  </div>
                </div>
                <svg className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1 flex-shrink-0" style={{ color: '#D4AF37' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              {/* Start Nomination Button */}
              <button 
                className="w-full px-4 md:px-6 py-3 md:py-4 font-heading font-semibold text-sm md:text-base rounded-lg md:rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ 
                  background: '#D4AF37',
                  color: '#0B1C2D',
                  fontFamily: 'Playfair Display, serif',
                  boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'
                }}
              >
                {activePhase === 'nomination' ? 'Start Your Nomination Now' : 
                 activePhase === 'voting' ? 'Cast Your Vote Now' : 
                 'Register for Updates'}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 md:mt-12 text-center"
        >
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
            <div className="w-8 md:w-12 h-px hidden sm:block" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37)' }} />
            <p 
              className="font-body text-xs md:text-sm px-2"
              style={{ color: '#F5E6C4', opacity: 0.7, fontFamily: 'Poppins, sans-serif' }}
            >
              No Fees • Pan India • 100% Transparent • Public Voting
            </p>
            <div className="w-8 md:w-12 h-px hidden sm:block" style={{ background: 'linear-gradient(270deg, transparent, #D4AF37)' }} />
          </div>
        </motion.div>
      </div>

      {/* Hide scrollbar for tab container */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

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