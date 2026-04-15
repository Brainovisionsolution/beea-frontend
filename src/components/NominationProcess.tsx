import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface Phase {
  id: string;
  label: string;
}

interface Step {
  phase: string;
  number: string;
  title: string;
  description: string;
  icon: JSX.Element;
  status: 'active' | 'upcoming' | 'completed';
}

interface VotingStep {
  number: string;
  title: string;
  description: string;
}

interface DateItem {
  event: string;
  status: 'completed' | 'active' | 'upcoming';
}

interface FAQ {
  text: string;
}

export default function NominationProcess(): JSX.Element {
  const [activePhase, setActivePhase] = useState<string>('nomination');

  const phases: Phase[] = [
    { id: 'nomination', label: 'Nomination Phase' },
    { id: 'voting', label: 'Public Voting' },
    { id: 'judging', label: 'Jury Evaluation' },
    { id: 'results', label: 'Results' }
  ];

  const steps: Step[] = [
    {
      phase: 'nomination',
      number: '01',
      title: 'Submit Nomination',
      description: 'Fill out the nomination form with your details, achievements, and supporting documents. Ensure all information is accurate and complete.',
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      status: 'active'
    },
    {
      phase: 'voting',
      number: '02',
      title: 'Public Voting',
      description: 'Nominations are opened for public voting. Share your profile and gather support from the education community. Votes are monitored for authenticity.',
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      ),
      status: 'upcoming'
    },
    {
      phase: 'judging',
      number: '03',
      title: 'Jury Evaluation',
      description: 'Our distinguished jury panel reviews top nominations based on merit, impact, public voting results, and contribution to the education sector.',
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      status: 'upcoming'
    },
    {
      phase: 'results',
      number: '04',
      title: 'Results & Ceremony',
      description: 'Winners are announced at the grand awards ceremony. Receive your trophy and certificate, network with industry leaders and educationists.',
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
        </svg>
      ),
      status: 'upcoming'
    }
  ];

  const votingSteps: VotingStep[] = [
    {
      number: '1',
      title: 'Create Account',
      description: 'Register with your email to start voting'
    },
    {
      number: '2',
      title: 'Browse Nominees',
      description: 'Explore all nominated institutions and individuals'
    },
    {
      number: '3',
      title: 'Cast Your Vote',
      description: 'Vote for your favorite nominees (one vote per category)'
    },
    {
      number: '4',
      title: 'Share & Support',
      description: 'Encourage others to vote for deserving candidates'
    }
  ];

  const importantDates: DateItem[] = [
    { event: 'Nominations Open', status: 'completed' },
    { event: 'Nominations Close', status: 'active' },
    { event: 'Voting Period', status: 'upcoming' },
    { event: 'Jury Evaluation', status: 'upcoming' },
    { event: 'Awards Ceremony', status: 'upcoming' }
  ];

  const faqs: FAQ[] = [
    { text: 'No nomination fee required' },
    { text: 'Submit documents in PDF format' },
    { text: 'Verify your email to start voting' },
    { text: 'One vote per category per user' }
  ];

  const getPhaseContent = (phase: string): { title: string; description: string; ctaText: string } => {
    switch (phase) {
      case 'nomination':
        return {
          title: 'Nomination Phase is Active',
          description: 'Submit your nominations now and begin your journey to recognition!',
          ctaText: 'Start Your Nomination Now'
        };
      case 'voting':
        return {
          title: 'Public Voting is Now Open',
          description: 'Cast your vote and support deserving candidates. Your voice matters!',
          ctaText: 'Cast Your Vote Now'
        };
      case 'judging':
        return {
          title: 'Jury Evaluation in Progress',
          description: 'Our expert jury is reviewing top nominations with integrity and excellence.',
          ctaText: 'Register for Updates'
        };
      case 'results':
        return {
          title: ' Results Announced!',
          description: 'Congratulations to all winners! Grand ceremony celebration awaits.',
          ctaText: 'View Winners & Gallery'
        };
      default:
        return {
          title: 'Nomination Phase',
          description: 'Submit your nominations now!',
          ctaText: 'Start Your Nomination Now'
        };
    }
  };

  const getStepStatus = (stepPhase: string): string => {
    if (stepPhase === activePhase) return 'active';
    const phasesOrder = ['nomination', 'voting', 'judging', 'results'];
    const currentIndex = phasesOrder.indexOf(activePhase);
    const stepIndex = phasesOrder.indexOf(stepPhase);
    if (stepIndex < currentIndex) return 'completed';
    return 'upcoming';
  };

  const phaseContent = getPhaseContent(activePhase);

  return (
    <section
      id="process"
      className="relative py-12 md:py-24 overflow-hidden"
      style={{ backgroundColor: '#0A1628' }}
    >
      {/* Clean Background - No heavy gradients */}
      <div className="absolute inset-0" />

      {/* Minimal Gold Decorative Elements */}
      {/* Top Left - Subtle Gold Square */}
      <div className="hidden md:block absolute top-10 left-10 opacity-30">
        <div className="w-12 h-12 rotate-12" style={{ backgroundColor: 'rgba(212, 175, 55, 0.06)' }} />
        <div className="w-8 h-8 -rotate-6 -mt-6 ml-6" style={{ backgroundColor: 'rgba(245, 230, 196, 0.04)' }} />
      </div>

      {/* Top Right - Subtle Gold Circle */}
      <div className="hidden md:block absolute top-20 right-20 opacity-30">
        <div className="w-16 h-16 rounded-full" style={{ backgroundColor: 'rgba(212, 175, 55, 0.04)' }} />
        <div className="w-10 h-10 rounded-full -mt-8 mr-8" style={{ backgroundColor: 'rgba(245, 230, 196, 0.03)' }} />
      </div>

      {/* Bottom Left - Simple Gold Curve */}
      <div className="hidden md:block absolute bottom-20 left-20 opacity-30">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          <path d="M10 90 Q 40 60, 70 60 T 90 30" stroke="#D4AF37" strokeWidth="1.5" strokeOpacity="0.15" fill="none" />
          <circle cx="70" cy="60" r="2.5" fill="#D4AF37" fillOpacity="0.15" />
        </svg>
      </div>

      {/* Bottom Right - Simple Gold Ring */}
      <div className="hidden md:block absolute bottom-32 right-32 opacity-30">
        <div className="w-16 h-16 rounded-full border" style={{ borderColor: 'rgba(212, 175, 55, 0.08)' }} />
        <div className="w-8 h-8 rounded-full -mt-8 ml-8" style={{ backgroundColor: 'rgba(212, 175, 55, 0.06)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-16"
        >
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
            <div className="w-8 md:w-12 h-px" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37)' }} />
            <span
              className="font-heading text-xs md:text-sm font-semibold tracking-[0.15em] md:tracking-[0.25em] uppercase px-4 md:px-6 py-1.5 md:py-2 rounded-full"
              style={{
                background: 'linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(245,230,196,0.05) 100%)',
                color: '#D4AF37',
                border: '1px solid rgba(212,175,55,0.2)'
              }}
            >
              DEMOCRATIC & TRANSPARENT
            </span>
            <div className="w-8 md:w-12 h-px" style={{ background: 'linear-gradient(270deg, transparent, #D4AF37)' }} />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 px-4"
          >
            <span style={{ color: '#FFFFFF' }}>Nomination & </span>
            <span style={{ 
              background: 'linear-gradient(135deg, #D4AF37 0%, #F5E6C4 50%, #D4AF37 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Voting Process
            </span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-16 md:w-20 h-px mx-auto mb-4 md:mb-6"
            style={{
              background: 'linear-gradient(90deg, transparent, #D4AF37, #F5E6C4, #D4AF37, transparent)',
              transformOrigin: 'center'
            }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="font-body text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-4"
            style={{ color: '#B8C5D6' }}
          >
            Four phases to recognition. Public voting ensures democratic selection of winners.
          </motion.p>
        </motion.div>

        {/* Phase Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 md:mb-12 overflow-x-auto pb-2 md:pb-0 hide-scrollbar"
        >
          <div className="flex justify-start md:justify-center min-w-max md:min-w-0 px-2 md:px-0">
            <div className="inline-flex p-1 rounded-xl md:rounded-2xl" style={{ backgroundColor: 'rgba(212, 175, 55, 0.05)' }}>
              {phases.map((phase) => (
                <motion.button
                  key={phase.id}
                  onClick={() => setActivePhase(phase.id)}
                  className={`px-4 sm:px-5 md:px-8 py-2 md:py-3 font-heading text-xs sm:text-sm md:text-base font-medium rounded-lg md:rounded-xl transition-all duration-300 relative overflow-hidden whitespace-nowrap ${
                    activePhase === phase.id ? 'shadow-lg' : 'opacity-70 hover:opacity-100'
                  }`}
                  style={{
                    background: activePhase === phase.id 
                      ? 'linear-gradient(135deg, #D4AF37 0%, #F5E6C4 100%)'
                      : 'transparent',
                    color: activePhase === phase.id ? '#0A1628' : '#D4AF37'
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
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
          <div
            className="rounded-2xl p-4 md:p-8 text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(212,175,55,0.03) 0%, rgba(245,230,196,0.02) 100%)',
              border: '1px solid rgba(212, 175, 55, 0.15)'
            }}
          >
            <h3 className="font-heading text-lg md:text-2xl font-bold mb-2" style={{ 
              background: 'linear-gradient(135deg, #D4AF37 0%, #F5E6C4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              {phaseContent.title}
            </h3>
            <p className="font-body text-xs md:text-sm" style={{ color: '#B8C5D6' }}>
              {phaseContent.description}
            </p>
          </div>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-16">
          {steps.map((step, index) => {
            const stepStatus = getStepStatus(step.phase);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 transition-all duration-500 hover:-translate-y-2 group ${
                  stepStatus === 'active' ? 'ring-1 ring-[#D4AF37]' : ''
                }`}
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(212, 175, 55, 0.1)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                {/* Status Badge */}
                {stepStatus === 'active' && (
                  <div
                    className="absolute -top-2 -right-2 px-2 py-1 rounded-full text-xs font-bold z-20"
                    style={{
                      background: 'linear-gradient(135deg, #D4AF37 0%, #F5E6C4 100%)',
                      color: '#0A1628'
                    }}
                  >
                    Active
                  </div>
                )}
                {stepStatus === 'completed' && (
                  <div
                    className="absolute -top-2 -right-2 px-2 py-1 rounded-full text-xs font-bold z-20"
                    style={{
                      background: 'rgba(74, 222, 128, 0.8)',
                      color: '#0A1628'
                    }}
                  >
                    ✓ Completed
                  </div>
                )}

                {/* Step Number Background */}
                <div
                  className="absolute top-2 md:top-4 right-2 md:right-4 text-3xl md:text-4xl lg:text-6xl font-heading font-black opacity-5 group-hover:opacity-10 transition-opacity duration-300"
                  style={{ color: '#D4AF37' }}
                >
                  {step.number}
                </div>

                {/* Icon */}
                <div
                  className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4 lg:mb-6 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: 'linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(245,230,196,0.05) 100%)',
                    color: '#D4AF37'
                  }}
                >
                  {step.icon}
                </div>

                {/* Title */}
                <h3
                  className="font-heading text-base md:text-lg lg:text-xl font-bold mb-2 md:mb-3 transition-colors duration-300"
                  style={{ color: '#FFFFFF' }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  className="font-body text-xs md:text-sm leading-relaxed mb-3 md:mb-4"
                  style={{ color: '#B8C5D6' }}
                >
                  {step.description}
                </p>

                {/* Gold border on hover */}
                <div
                  className="absolute inset-0 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                    boxShadow: '0 0 20px rgba(212, 175, 55, 0.1)'
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Voting Section */}
        <AnimatePresence mode="wait">
          {activePhase === 'voting' && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7 }}
              className="mb-8 md:mb-16"
            >
              <div
                className="rounded-2xl md:rounded-3xl p-6 md:p-10"
                style={{
                  background: 'linear-gradient(135deg, rgba(212,175,55,0.03) 0%, rgba(245,230,196,0.02) 100%)',
                  border: '1px solid rgba(212, 175, 55, 0.15)'
                }}
              >
                <h3
                  className="font-heading text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 text-center"
                  style={{ color: '#FFFFFF' }}
                >
                  How to Vote
                </h3>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
                  {votingSteps.map((step, index) => (
                    <div key={index} className="text-center">
                      <div
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-sm md:text-base font-bold"
                        style={{
                          background: 'linear-gradient(135deg, #D4AF37 0%, #F5E6C4 100%)',
                          color: '#0A1628'
                        }}
                      >
                        {step.number}
                      </div>
                      <h4
                        className="font-heading font-semibold text-sm md:text-base mb-2"
                        style={{ color: '#FFFFFF' }}
                      >
                        {step.title}
                      </h4>
                      <p className="font-body text-xs" style={{ color: '#B8C5D6' }}>
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <button
                    className="px-6 md:px-8 py-3 md:py-4 font-heading font-semibold text-sm md:text-base rounded-lg md:rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    style={{
                      background: 'linear-gradient(135deg, #D4AF37 0%, #F5E6C4 100%)',
                      color: '#0A1628',
                      boxShadow: '0 4px 15px rgba(212, 175, 55, 0.2)'
                    }}
                  >
                    Cast Your Vote Now
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Important Dates Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8 md:mb-16"
        >
          <h3
            className="font-heading text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center"
            style={{ color: '#FFFFFF' }}
          >
            Timeline
          </h3>

          <div className="max-w-3xl mx-auto space-y-3 md:space-y-4">
            {importantDates.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 md:p-4 rounded-lg md:rounded-xl"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(212, 175, 55, 0.08)'
                }}
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div
                    className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full ${
                      item.status === 'completed'
                        ? 'bg-green-500'
                        : item.status === 'active'
                        ? 'bg-[#D4AF37] animate-pulse'
                        : 'bg-gray-600'
                    }`}
                  />
                  <span className="font-body text-xs md:text-sm" style={{ color: '#B8C5D6' }}>
                    {item.event}
                  </span>
                </div>
                <span className="font-heading text-xs md:text-sm font-semibold" style={{ color: '#D4AF37' }}>
                  {item.status === 'completed' && 'Completed'}
                  {item.status === 'active' && 'Active Now'}
                  {item.status === 'upcoming' && 'Upcoming'}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Help & Subscription Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="rounded-2xl md:rounded-3xl p-6 md:p-10 mb-8 md:mb-16"
          style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(212, 175, 55, 0.1)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10 items-start">
            {/* Left Side */}
            <div>
              <h3
                className="font-heading text-xl md:text-2xl font-bold mb-3 md:mb-4"
                style={{ color: '#FFFFFF' }}
              >
                Stay Updated
              </h3>

              <p
                className="font-body text-sm md:text-base mb-4 md:mb-6"
                style={{ color: '#B8C5D6' }}
              >
                Subscribe to receive updates about nominations, events, and announcements.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-xl font-body text-sm bg-white/5 border border-[rgba(212,175,55,0.2)] text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37] transition-colors"
                />
                <button
                  className="px-6 py-3 font-heading font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, #D4AF37 0%, #F5E6C4 100%)',
                    color: '#0A1628'
                  }}
                >
                  Subscribe Now
                </button>
              </div>

              <p className="text-xs mb-6" style={{ color: '#B8C5D6', opacity: 0.6 }}>
                By subscribing, you agree to our Privacy Policy.
              </p>

              {/* FAQ List */}
              <div className="space-y-2 md:space-y-3">
                {faqs.map((faq, index) => (
                  <div key={index} className="flex items-center gap-2 md:gap-3">
                    <div
                      className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full"
                      style={{ backgroundColor: '#D4AF37' }}
                    />
                    <span className="font-body text-xs md:text-sm" style={{ color: '#B8C5D6' }}>
                      {faq.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side */}
            <div className="space-y-3 md:space-y-4">
              <a
                href="#"
                className="flex items-center justify-between p-4 md:p-5 rounded-lg md:rounded-xl transition-all duration-300 group"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(212, 175, 55, 0.1)'
                }}
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div
                    className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 flex-shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(245,230,196,0.05) 100%)',
                      color: '#D4AF37'
                    }}
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-sm md:text-base" style={{ color: '#FFFFFF' }}>
                      Download Guidelines
                    </h4>
                    <p className="font-body text-xs md:text-sm" style={{ color: '#B8C5D6' }}>
                      PDF, 2.5 MB
                    </p>
                  </div>
                </div>
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1 flex-shrink-0"
                  style={{ color: '#D4AF37' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="#"
                className="flex items-center justify-between p-4 md:p-5 rounded-lg md:rounded-xl transition-all duration-300 group"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(212, 175, 55, 0.1)'
                }}
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div
                    className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 flex-shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(245,230,196,0.05) 100%)',
                      color: '#D4AF37'
                    }}
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-sm md:text-base" style={{ color: '#FFFFFF' }}>
                      Chat with Support
                    </h4>
                    <p className="font-body text-xs md:text-sm" style={{ color: '#B8C5D6' }}>
                      Average response: 5 mins
                    </p>
                  </div>
                </div>
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1 flex-shrink-0"
                  style={{ color: '#D4AF37' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <button
                className="w-full px-4 md:px-6 py-3 md:py-4 font-heading font-semibold text-sm md:text-base rounded-lg md:rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{
                  background: 'linear-gradient(135deg, #D4AF37 0%, #F5E6C4 100%)',
                  color: '#0A1628',
                  boxShadow: '0 4px 15px rgba(212, 175, 55, 0.2)'
                }}
              >
                {phaseContent.ctaText}
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
            <p className="font-body text-xs md:text-sm px-2" style={{ color: '#B8C5D6' }}>
              No Fees • Pan India • 100% Transparent • Public Voting
            </p>
            <div className="w-8 md:w-12 h-px hidden sm:block" style={{ background: 'linear-gradient(270deg, transparent, #D4AF37)' }} />
          </div>
        </motion.div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
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