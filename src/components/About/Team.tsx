import { motion } from 'framer-motion';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
  };
  highlight?: boolean;
}

export default function Team(): JSX.Element {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Ganesh Nagu Dodi',
      role: 'Founder & CEO',
      description: 'Visionary founder driving innovation and excellence across all company verticals with a focus on empowering learners and fostering growth.',
      image: '/logos/ganesh.png',
      highlight: true,
      socialLinks: { linkedin: '#' }
    },
    {
      id: 2,
      name: 'N.N.Swamy',
      role: 'Director of Operations',
      description: 'Leading the operational and strategic roadmap with over a decade of experience in managing large-scale education and tech operations.',
      image: '/logos/swamy.png',
      socialLinks: { linkedin: '#' }
    },
    {
      id: 3,
      name: 'Kandregula V S S V P Krishna Murthy',
      role: 'Director - Innovations',
      description: 'Drives research, innovation, and creative strategy for building next-gen learning and tech solutions.',
      image: '/logos/Krishna.png',
      socialLinks: { linkedin: '#' }
    },
    {
      id: 4,
      name: 'Mouna Sri',
      role: 'Client Relationship Manager',
      description: 'Building strong relationships with clients, ensuring satisfaction and long-term partnerships with a focus on service excellence.',
      image: '/logos/mouna.jpg',
      socialLinks: { linkedin: '#' }
    },
    {
      id: 5,
      name: 'Madhu Kumar Vundavalli',
      role: 'Java Lead Trainer',
      description: 'Expert Java trainer with hands-on industry experience, mentoring hundreds of students in enterprise-level software development.',
      image: '/logos/madhu.jpg',
      socialLinks: { linkedin: '#' }
    },
    {
      id: 6,
      name: 'Sai Pavan Velidandla',
      role: 'Chief, Technology',
      description: 'Leading the technology strategy and product development with a passion for creating scalable and innovative solutions.',
      image: '/logos/pava1jpg',
      highlight: true,
      socialLinks: { linkedin: '#' }
    },
    {
      id: 7,
      name: 'Obul',
      role: 'Software Developer & Trainer',
      description: 'Full-stack developer and trainer mentoring young minds in modern technologies with hands-on real-world projects.',
      image: '/logos/obul.png',
      socialLinks: { linkedin: '#' }
    },
   
    {
      id: 9,
      name: 'Praneeth Babu Yeddula',
      role: 'Software Engineer & Technical Program Lead',
      description: 'Leading software development and managing technical programs with a passion for excellence and scalable architecture.',
      image: '/logos/meeeee.png',
      socialLinks: { linkedin: '#' }
    },
    {
      id: 10,
      name: 'Tejaswi Polamarasetti',
      role: 'Academic Relations Manager',
      description: 'Building strong collaborations with academic institutions and ensuring effective learning partnerships that drive student success.',
      image: '/logos/teja.jpg',
      socialLinks: { linkedin: '#' }
    },
    {
      id: 11,
      name: 'B. Jaya Chandra',
      role: 'Academic Partnership Executive & Operational Manager',
      description: 'Oversees partnerships, operations, and academic collaborations to enhance our educational impact across the nation.',
      image: '/logos/Jayse.jpg',
      socialLinks: { linkedin: '#' }
    },
    {
      id: 12,
      name: 'Bharath Doddi',
      role: 'Technical Mentor',
      description: 'Mentoring teams on emerging technologies and providing strategic technical guidance to ensure project success.',
      image: '/images/team/bharath-doddi.jpg',
      socialLinks: { linkedin: '#' }
    },
    {
      id: 13,
      name: 'Bhuvan Teja Buddha',
      role: 'Technical Mentor',
      description: 'Committed to nurturing future tech leaders by delivering high-quality mentorship and practical insights.',
      image: '/logos/Bhuvan.png',
      socialLinks: { linkedin: '#' }
    },
   
    {
      id: 15,
      name: 'Siva',
      role: 'Technical Mentor',
      description: 'Guiding students through advanced development concepts, ensuring technical excellence and career growth.',
      image: '/logos/siva.jpg',
      socialLinks: { linkedin: '#' }
    }
  ];

  return (
    <section
      className="relative py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: '#0B1C2D' }}
    >
      {/* Dark Navy Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 20% 30%, #0E2A47 0%, #071421 100%)'
        }}
      />

      {/* Gold Decorative Elements */}
      <div className="absolute top-20 right-10 w-40 h-40 rounded-full blur-3xl opacity-10" style={{ background: '#D4AF37' }} />
      <div className="absolute bottom-20 left-10 w-56 h-56 rounded-full blur-3xl opacity-10" style={{ background: '#D4AF37' }} />
      
      {/* Gold Geometric Pattern Background */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="goldGrid" patternUnits="userSpaceOnUse" width="80" height="80">
              <path d="M 40 0 L 40 80 M 0 40 L 80 40" stroke="#D4AF37" strokeWidth="0.5" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#goldGrid)" />
        </svg>
      </div>

      {/* Floating Gold Dust Particles */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-1 h-1 rounded-full"
        style={{ backgroundColor: '#D4AF37', opacity: 0.4 }}
        animate={{ y: [0, -15, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-2/3 right-1/4 w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: '#F5E6C4', opacity: 0.3 }}
        animate={{ y: [0, 12, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/5 w-1 h-1 rounded-full"
        style={{ backgroundColor: '#D4AF37', opacity: 0.35 }}
        animate={{ y: [0, -10, 0], opacity: [0.35, 0.7, 0.35] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-4">
            <div className="w-8 md:w-12 h-px" style={{ backgroundColor: '#D4AF37', opacity: 0.5 }} />
            <span
              className="font-heading text-xs md:text-sm font-semibold tracking-[0.2em] uppercase px-4 md:px-6 py-1.5 md:py-2 rounded-full"
              style={{
                color: '#D4AF37',
                background: 'rgba(212, 175, 55, 0.08)',
                border: '1px solid rgba(212, 175, 55, 0.25)',
              }}
            >
              MEET THE MINDS
            </span>
            <div className="w-8 md:w-12 h-px" style={{ backgroundColor: '#D4AF37', opacity: 0.5 }} />
          </div>

          <h2
            className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-4"
            style={{ color: '#F5E6C4' }}
          >
            Our{' '}
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#F5E6C4] to-[#D4AF37] bg-clip-text text-transparent">
              Leadership
            </span>
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            className="w-20 md:w-28 h-0.5 mx-auto mb-4"
            style={{
              background: 'linear-gradient(90deg, transparent, #D4AF37, #F5E6C4, #D4AF37, transparent)',
            }}
          />
          
          <p
            className="font-body text-sm md:text-base max-w-2xl mx-auto mt-4"
            style={{ color: '#A0AEC0' }}
          >
            Visionaries driving excellence in education and technology across India
          </p>
          
          <p
            className="font-body text-xs mt-3"
            style={{ color: '#D4AF37', opacity: 0.8 }}
          >
            {teamMembers.length} dedicated professionals leading the way
          </p>
        </motion.div>

        {/* Team Grid - Responsive Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.03, 0.5) }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-300 backdrop-blur-sm ${
                member.highlight ? 'ring-2 ring-[#D4AF37] shadow-xl shadow-[#D4AF37]/20' : 'hover:shadow-2xl'
              }`}
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: `1px solid ${member.highlight ? '#D4AF37' : 'rgba(212, 175, 55, 0.2)'}`,
              }}
            >
              {/* Image Container with Fallback */}
              <div className="relative h-56 md:h-64 overflow-hidden bg-gradient-to-br from-[#0E2A47] to-[#071421]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      const fallback = document.createElement('div');
                      fallback.className = 'w-full h-full flex items-center justify-center';
                      fallback.innerHTML = `
                        <div class="text-center">
                          <div class="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mx-auto mb-3" style="background: linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(212, 175, 55, 0.05)); border: 2px solid rgba(212, 175, 55, 0.3);">
                            <span class="font-heading text-2xl md:text-3xl font-bold" style="color: #D4AF37;">${member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}</span>
                          </div>
                          <div class="w-12 h-px mx-auto" style="background-color: rgba(212, 175, 55, 0.3);"></div>
                        </div>
                      `;
                      parent.appendChild(fallback);
                    }
                  }}
                />
                
                {/* Gold Gradient Overlay on Hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #D4AF37, #F5E6C4)',
                  }}
                />
                
                {/* Social Links Overlay */}
                {member.socialLinks && (
                  <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-3 z-10 translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                    <a
                      href={member.socialLinks.linkedin}
                      className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      style={{
                        background: '#0B1C2D',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                        border: '1px solid rgba(212, 175, 55, 0.4)',
                      }}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#D4AF37' }}>
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5 text-center">
                <h3
                  className="font-heading text-base md:text-lg font-bold mb-1 transition-colors duration-300 group-hover:text-[#D4AF37] line-clamp-2"
                  style={{ color: '#F5E6C4' }}
                >
                  {member.name}
                </h3>
                <p
                  className="font-body text-xs uppercase tracking-wider mb-2"
                  style={{ color: '#D4AF37' }}
                >
                  {member.role}
                </p>
                <p
                  className="font-body text-xs leading-relaxed line-clamp-3"
                  style={{ color: '#A0AEC0' }}
                >
                  {member.description}
                </p>
              </div>

              {/* View Profile Link */}
              <div className="pb-4 text-center">
                <button
                  className="font-body text-xs font-medium transition-all duration-300 hover:tracking-wider inline-flex items-center gap-1"
                  style={{ color: '#D4AF37' }}
                >
                  View Profile
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Number Indicator */}
              <div
                className="absolute bottom-2 right-2 text-3xl md:text-4xl font-heading font-black opacity-5 group-hover:opacity-10 transition-opacity duration-300"
                style={{ color: '#D4AF37' }}
              >
                {String(member.id).padStart(2, '0')}
              </div>

              {/* Highlight Badge */}
              {member.highlight && (
                <div
                  className="absolute top-3 right-3 z-10 px-2 py-1 rounded-full text-[10px] font-bold flex items-center gap-1"
                  style={{
                    background: 'linear-gradient(135deg, #D4AF37, #B8860B)',
                    color: '#0B1C2D',
                  }}
                >
                  <span>✦</span> Lead
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Join Our Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 md:mt-16"
        >
          <div
            className="inline-flex flex-col sm:flex-row items-center gap-4 px-6 md:px-8 py-5 md:py-6 rounded-2xl"
            style={{
              background: 'rgba(212, 175, 55, 0.03)',
              border: '1px solid rgba(212, 175, 55, 0.2)',
              backdropFilter: 'blur(4px)',
            }}
          >
            <span className="font-body text-sm md:text-base" style={{ color: '#A0AEC0' }}>
              Want to join our mission?
            </span>
            <button
              className="px-6 md:px-8 py-2.5 md:py-3 font-heading font-semibold text-sm rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{
                background: 'linear-gradient(135deg, #D4AF37, #B8860B)',
                color: '#0B1C2D',
                boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)',
              }}
            >
              View Openings →
            </button>
          </div>
        </motion.div>

        {/* Footer Gold Line */}
        <div className="mt-12 pt-6 text-center">
          <div
            className="w-16 h-px mx-auto mb-3"
            style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
          />
          <p
            className="font-body text-xs"
            style={{ color: '#4A5568' }}
          >
            Committed to excellence in education and technology
          </p>
        </div>
      </div>

      <style>{`
        .font-heading {
          font-family: 'Playfair Display', serif;
        }
        
        .font-body {
          font-family: 'Poppins', sans-serif;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800&display=swap');
      `}</style>
    </section>
  );
}