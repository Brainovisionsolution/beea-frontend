import { useState } from 'react';
import { motion } from 'framer-motion';

export default function AwardCategories() {
  const [activeTab, setActiveTab] = useState('school');

  const schoolAwards = [
    { title: 'Overall Excellence in School Education', description: 'Recognizing schools with outstanding academic results, extracurriculars, and holistic development.' },
    { title: 'Excellence in Primary Education', description: 'For strong foundation-building in early education (classes 1–5).' },
    { title: 'Best Secondary School (Academic Performance)', description: 'Based on board results, student achievements, and teaching quality.' },
    { title: 'Innovation in School Teaching Methods', description: 'Schools using smart classrooms, digital learning, or creative pedagogy.' },
    { title: 'Student Development & Extracurricular Excellence', description: 'Focus on sports, arts, leadership programs, and personality development.' },
    { title: 'Top Intermediate College (Science Stream)', description: 'For excellence in MPC/BiPC results and competitive exam performance.' },
    { title: 'Top Intermediate College (Commerce & Arts)', description: 'For MEC/CEC/HEC streams with strong academic outcomes.' },
    { title: 'Best Coaching & Competitive Exam Preparation Institute', description: 'For NEET, JEE, CA Foundation, etc.' },
    { title: 'Student Success & Placement Excellence (Intermediate)', description: 'Based on student admissions into top universities, ranks, and achievements.' },
  ];

  const collegeAwards = [
    { title: 'Overall Excellence in Education', description: 'Honors colleges demonstrating outstanding performance in academics, research, faculty strength, and student outcomes.' },
    { title: 'Academic Excellence', description: 'Recognizing consistent high academic standards and intellectual achievements.' },
    { title: 'Innovation in Teaching & Learning', description: 'For institutions adopting innovative teaching tools and experiential learning practices.' },
    { title: 'Best in Research & Development', description: 'Awarded for impactful research publications, projects, and innovation output.' },
    { title: 'Student Support & Welfare Excellence', description: 'For ensuring student well-being through counseling, mentoring, and support services.' },
    { title: 'Outstanding Infrastructure & Facilities', description: 'Recognizing world-class libraries, labs, digital classrooms, and sports facilities.' },
    { title: 'Industry Collaboration & Placements', description: 'For institutions with exceptional industry partnerships and placement records.' },
    { title: 'Social Impact & Community Engagement', description: 'For contributions to community development, outreach, and service initiatives.' },
    { title: 'Sustainable Green Campus Initiative', description: 'Awarded to colleges promoting sustainability and eco-friendly campus practices.' },
  ];

  const individualAwards = [
    { title: 'Samarpana Acharya Lifetime Achievement Award', description: 'For Chairmen/Secretaries with extraordinary lifelong contribution to education.' },
    { title: 'Bhisma Acharya Individual Award', description: 'Recognizing Principals, Deans, and Directors demonstrating visionary leadership.' },
    { title: 'Sadhya Acharya Industry Collaboration Award', description: 'For Placement Directors with 25+ years of collaboration with industries.' },
    { title: 'Jyestha Acharya Individual Award', description: 'For HODs with 15+ years of exceptional academic contributions.' },
    { title: 'Uttama Adhyapika Individual Award', description: 'Special recognition for exceptional female educators.' },
    { title: 'Kalpa Acharya Individual Award', description: 'For educators pursuing PhD or with 10–14 years of impactful academic service.' },
    { title: 'Yuva Acharya Individual Award', description: 'For promising educators with less than 10 years of experience.' },
    { title: 'Niyukti Acharya Individual Award', description: 'For young Placement Officers under 22 making remarkable contributions.' },
    { title: 'Ananta Acharya Leadership Award', description: 'For educators with exceptional leadership qualities.' },
    { title: 'Shakti Acharya Empowerment Award', description: 'Recognizing individuals empowering and uplifting the education community.' },
    { title: 'Shraddha Acharya Student Success Award', description: 'For educators dedicated to student growth and success.' },
    { title: 'Udyam Acharya Entrepreneurship Award', description: 'For promoting entrepreneurship and innovation among students.' },
    { title: 'Anveshana Acharya Research Mentorship Award', description: 'For mentors guiding students in research excellence.' },
    { title: 'Vidya Ratna – Jewel of Education Award', description: 'Awarded to individuals with exceptional contributions to education.' },
    { title: 'Buddhiman Guru – Wise Teacher Award', description: 'Honoring educators known for wisdom and mentorship.' },
    { title: 'Guru Shreshta – Greatest Teacher Award', description: 'Recognizing unparalleled teaching excellence.' },
    { title: 'Vidya Vibhushan – Ornament of Learning Award', description: 'Honoring educators enriching the world with deep knowledge.' },
    { title: 'Shiksha Samrat – Emperor of Education Award', description: 'Recognizing individuals with extraordinary impact on education.' },
  ];

  const currentAwards = activeTab === 'school' ? schoolAwards : activeTab === 'college' ? collegeAwards : individualAwards;

  // SVG Icons
  const getIcon = (index, type) => {
    const goldColor = '#D4AF37';
    
    const collegeIcons = [
      <svg key="icon1" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 4L4 14L20 24L36 14L20 4Z" stroke={goldColor} strokeWidth="1.5" fill="none"/>
        <path d="M8 18L8 28L20 36L32 28L32 18" stroke={goldColor} strokeWidth="1.5" fill="none"/>
        <circle cx="20" cy="24" r="2" fill={goldColor}/>
      </svg>,
      <svg key="icon2" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 8L6 20H10L10 32H30L30 20H34L20 8Z" stroke={goldColor} strokeWidth="1.5" fill="none"/>
        <path d="M20 20V32" stroke={goldColor} strokeWidth="1.5"/>
        <circle cx="20" cy="16" r="2" fill={goldColor}/>
      </svg>,
      <svg key="icon3" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M10 14L20 6L30 14L20 22L10 14Z" stroke={goldColor} strokeWidth="1.5" fill="none"/>
        <path d="M20 22V34" stroke={goldColor} strokeWidth="1.5"/>
        <path d="M14 18L14 26" stroke={goldColor} strokeWidth="1.5"/>
        <path d="M26 18L26 26" stroke={goldColor} strokeWidth="1.5"/>
      </svg>,
      <svg key="icon4" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="14" stroke={goldColor} strokeWidth="1.5" fill="none"/>
        <path d="M20 10V20L26 26" stroke={goldColor} strokeWidth="1.5"/>
        <circle cx="20" cy="20" r="2" fill={goldColor}/>
      </svg>,
    ];

    const individualIcons = [
      <svg key="icon1" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="14" r="6" stroke={goldColor} strokeWidth="1.5" fill="none"/>
        <path d="M8 32C8 26 14 22 20 22C26 22 32 26 32 32" stroke={goldColor} strokeWidth="1.5" fill="none"/>
        <path d="M20 22L20 14" stroke={goldColor} strokeWidth="1.5"/>
      </svg>,
      <svg key="icon2" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 8L24 16L32 18L26 24L28 32L20 28L12 32L14 24L8 18L16 16L20 8Z" stroke={goldColor} strokeWidth="1.5" fill="none"/>
      </svg>,
      <svg key="icon3" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M12 20H28" stroke={goldColor} strokeWidth="1.5"/>
        <path d="M20 12V28" stroke={goldColor} strokeWidth="1.5"/>
        <circle cx="20" cy="20" r="12" stroke={goldColor} strokeWidth="1.5" fill="none"/>
      </svg>,
      <svg key="icon4" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 6L24 14L32 16L26 22L28 30L20 26L12 30L14 22L8 16L16 14L20 6Z" stroke={goldColor} strokeWidth="1.5" fill="none"/>
      </svg>,
    ];

    const iconSet = type === 'school' ? collegeIcons : type === 'college' ? collegeIcons : individualIcons;
    return iconSet[index % iconSet.length];
  };

  return (
    <section id="categories" className="py-28 relative overflow-hidden" style={{ backgroundColor: '#0A1628' }}>
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
          opacity="0.15"
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
          opacity="0.15"
        />
      </svg>

      {/* Subtle Gold Rings */}
      <div
        className="absolute top-20 left-20 w-72 h-72 rounded-full"
        style={{
          border: "1px solid #D4AF37",
          opacity: 0.08
        }}
      />
      <div
        className="absolute bottom-20 right-20 w-96 h-96 rounded-full"
        style={{
          border: "1px solid #D4AF37",
          opacity: 0.06
        }}
      />

      {/* Minimal Dot Patterns */}
      <div className="absolute top-40 right-1/4 grid grid-cols-5 gap-[6px]">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`top-${i}`}
            className="w-[3px] h-[3px] rounded-full"
            style={{ backgroundColor: '#D4AF37', opacity: 0.15 }}
          />
        ))}
      </div>

      <div className="absolute bottom-40 left-1/4 grid grid-cols-4 gap-[6px]">
        {Array.from({ length: 16 }).map((_, i) => (
          <div
            key={`bottom-${i}`}
            className="w-[3px] h-[3px] rounded-full"
            style={{ backgroundColor: '#D4AF37', opacity: 0.12 }}
          />
        ))}
      </div>

      {/* Subtle Floating Circles */}
      <div className="absolute top-1/4 right-1/4 w-3 h-3 rounded-full animate-float-up" style={{ backgroundColor: '#D4AF37', opacity: 0.12 }} />
      <div className="absolute bottom-1/3 left-1/4 w-4 h-4 rounded-full animate-float-down" style={{ backgroundColor: '#D4AF37', opacity: 0.1 }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px" style={{ backgroundColor: '#D4AF37', opacity: 0.3 }} />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm font-heading font-semibold tracking-[0.25em] uppercase"
              style={{ color: '#D4AF37', fontFamily: 'Playfair Display, serif' }}
            >
              RECOGNITION CATEGORIES
            </motion.p>
            <div className="w-12 h-px" style={{ backgroundColor: '#D4AF37', opacity: 0.3 }} />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight mb-4"
            style={{ fontFamily: 'Playfair Display, serif', color: '#FFFFFF' }}
          >
            Award Categories
          </motion.h2>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            <span style={{ color: '#FFFFFF' }}>Honoring </span>
            <span style={{ 
              background: 'linear-gradient(135deg, #D4AF37 0%, #F5E6C4 50%, #D4AF37 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Excellence
            </span>
          </motion.h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1 rounded-xl flex-wrap justify-center gap-2" style={{ backgroundColor: 'rgba(212, 175, 55, 0.05)' }}>
            <button 
              onClick={() => setActiveTab('school')} 
              className={`px-6 md:px-10 py-3 md:py-4 font-heading text-base md:text-lg font-semibold rounded-lg transition-all duration-500 ${
                activeTab === 'school' 
                  ? 'shadow-lg' 
                  : 'opacity-60 hover:opacity-100'
              }`}
              style={{
                backgroundColor: activeTab === 'school' ? '#D4AF37' : 'transparent',
                color: activeTab === 'school' ? '#0A1628' : '#D4AF37',
                fontFamily: 'Playfair Display, serif'
              }}
            >
              School & Intermediate Awards
            </button>
            <button 
              onClick={() => setActiveTab('college')} 
              className={`px-6 md:px-10 py-3 md:py-4 font-heading text-base md:text-lg font-semibold rounded-lg transition-all duration-500 ${
                activeTab === 'college' 
                  ? 'shadow-lg' 
                  : 'opacity-60 hover:opacity-100'
              }`}
              style={{
                backgroundColor: activeTab === 'college' ? '#D4AF37' : 'transparent',
                color: activeTab === 'college' ? '#0A1628' : '#D4AF37',
                fontFamily: 'Playfair Display, serif'
              }}
            >
              College Awards
            </button>
            <button 
              onClick={() => setActiveTab('individual')} 
              className={`px-6 md:px-10 py-3 md:py-4 font-heading text-base md:text-lg font-semibold rounded-lg transition-all duration-500 ${
                activeTab === 'individual' 
                  ? 'shadow-lg' 
                  : 'opacity-60 hover:opacity-100'
              }`}
              style={{
                backgroundColor: activeTab === 'individual' ? '#D4AF37' : 'transparent',
                color: activeTab === 'individual' ? '#0A1628' : '#D4AF37',
                fontFamily: 'Playfair Display, serif'
              }}
            >
              Individual Awards
            </button>
          </div>
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {currentAwards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative rounded-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
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
                {/* Icon and number */}
                <div className="flex items-start justify-between mb-6">
                  <div className="relative">
                    <div 
                      className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                      style={{ 
                        background: '#D4AF37',
                        filter: 'blur(8px)'
                      }}
                    />
                    <div className="relative" style={{ color: '#D4AF37' }}>
                      {getIcon(index, activeTab)}
                    </div>
                  </div>
                  <span 
                    className="font-body text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{ 
                      backgroundColor: 'rgba(212, 175, 55, 0.1)',
                      color: '#D4AF37',
                      fontFamily: 'Poppins, sans-serif'
                    }}
                  >
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                </div>

                {/* Title */}
                <h3 
                  className="font-heading text-xl font-bold mb-4 transition-colors duration-300"
                  style={{ 
                    color: '#FFFFFF',
                    fontFamily: 'Playfair Display, serif'
                  }}
                >
                  {award.title}
                </h3>

                {/* Description */}
                <p 
                  className="font-body text-sm leading-relaxed"
                  style={{ 
                    color: '#B8C5D6',
                    fontFamily: 'Poppins, sans-serif'
                  }}
                >
                  {award.description}
                </p>

                {/* Gold corner decoration on hover */}
                <div 
                  className="absolute bottom-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{
                    background: 'radial-gradient(circle at bottom right, #D4AF37, transparent 70%)'
                  }}
                />
              </div>

              {/* Gold border on hover */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  border: '1px solid rgba(212, 175, 55, 0.4)',
                  boxShadow: '0 0 20px rgba(212, 175, 55, 0.15)'
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center pt-12" style={{ borderTop: '1px solid rgba(212, 175, 55, 0.1)' }}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37)' }} />
            <div className="flex gap-2">
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#D4AF37' }} />
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#F5E6C4' }} />
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#D4AF37' }} />
            </div>
            <div className="h-px w-12" style={{ background: 'linear-gradient(270deg, transparent, #D4AF37)' }} />
          </div>
          
          <p 
            className="font-body text-sm"
            style={{ 
              color: '#B8C5D6',
              fontFamily: 'Poppins, sans-serif'
            }}
          >
            {activeTab === 'school' 
              ? 'School and intermediate awards recognize foundational excellence and comprehensive student development'
              : activeTab === 'college' 
              ? 'College awards recognize institutional excellence and innovation in education' 
              : 'Individual awards honor exceptional educators and leaders shaping the future of learning'}
          </p>
        </div>
      </div>

      <style>{`
        @keyframes float-up {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-down {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(15px); }
        }
        .animate-float-up { animation: float-up 4s ease-in-out infinite; }
        .animate-float-down { animation: float-down 5s ease-in-out infinite; }
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800&display=swap');
        .font-heading { font-family: 'Playfair Display', serif; }
        .font-body { font-family: 'Poppins', sans-serif; }
      `}</style>
    </section>
  );
}