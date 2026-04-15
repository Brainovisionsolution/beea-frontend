import { motion } from 'framer-motion';

interface TeamMember {
  id: number;
  name: string;
  role: string;
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
      name: 'Dr. Ananya Sharma',
      role: 'Founder & Chairperson',
      image: 'https://placehold.co/600x700/F5F5F0/D4AF37?text=Dr.+Ananya',
      highlight: true,
      socialLinks: {
        linkedin: '#',
        twitter: '#',
      },
    },
    {
      id: 2,
      name: 'Vikram Mehta',
      role: 'Chief Operating Officer',
      image: 'https://placehold.co/600x700/F5F5F0/D4AF37?text=Vikram',
      socialLinks: {
        linkedin: '#',
      },
    },
    {
      id: 3,
      name: 'Priya Nair',
      role: 'Head of Jury Relations',
      image: 'https://placehold.co/600x700/F5F5F0/D4AF37?text=Priya',
      socialLinks: {
        linkedin: '#',
        twitter: '#',
      },
    },
    {
      id: 4,
      name: 'Arjun Reddy',
      role: 'Director of Nominations',
      image: 'https://placehold.co/600x700/F5F5F0/D4AF37?text=Arjun',
      socialLinks: {
        linkedin: '#',
      },
    },
    {
      id: 5,
      name: 'Meera Kapoor',
      role: 'Head of Events & Ceremonies',
      image: 'https://placehold.co/600x700/F5F5F0/D4AF37?text=Meera',
      highlight: true,
      socialLinks: {
        linkedin: '#',
        twitter: '#',
      },
    },
    {
      id: 6,
      name: 'Rohan Desai',
      role: 'Technology Lead',
      image: 'https://placehold.co/600x700/F5F5F0/D4AF37?text=Rohan',
      socialLinks: {
        linkedin: '#',
      },
    },
    {
      id: 7,
      name: 'Neha Gupta',
      role: 'Head of Marketing',
      image: 'https://placehold.co/600x700/F5F5F0/D4AF37?text=Neha',
      socialLinks: {
        linkedin: '#',
        twitter: '#',
      },
    },
    {
      id: 8,
      name: 'Aditya Singh',
      role: 'Creative Director',
      image: 'https://placehold.co/600x700/F5F5F0/D4AF37?text=Aditya',
      socialLinks: {
        linkedin: '#',
      },
    },
    {
      id: 9,
      name: 'Kavya Iyer',
      role: 'Head of Partnerships',
      image: 'https://placehold.co/600x700/F5F5F0/D4AF37?text=Kavya',
      highlight: true,
      socialLinks: {
        linkedin: '#',
        twitter: '#',
      },
    },
    {
      id: 10,
      name: 'Rahul Khanna',
      role: 'Finance Director',
      image: 'https://placehold.co/600x700/F5F5F0/D4AF37?text=Rahul',
      socialLinks: {
        linkedin: '#',
      },
    },
    {
      id: 11,
      name: 'Sneha Patil',
      role: 'Head of Research',
      image: 'https://placehold.co/600x700/F5F5F0/D4AF37?text=Sneha',
      socialLinks: {
        linkedin: '#',
        twitter: '#',
      },
    },
    {
      id: 12,
      name: 'Amit Joshi',
      role: 'Community Manager',
      image: 'https://placehold.co/600x700/F5F5F0/D4AF37?text=Amit',
      socialLinks: {
        linkedin: '#',
      },
    },
  ];

  return (
    <section
      className="relative py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      {/* Gold Decorative Elements */}
      <div className="absolute top-20 right-10 w-40 h-40 rounded-full blur-3xl opacity-10" style={{ background: '#D4AF37' }} />
      <div className="absolute bottom-20 left-10 w-56 h-56 rounded-full blur-3xl opacity-10" style={{ background: '#D4AF37' }} />
      
      {/* Gold Lines Pattern */}
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
                border: '1px solid rgba(212, 175, 55, 0.2)',
              }}
            >
              MEET THE MINDS
            </span>
            <div className="w-8 md:w-12 h-px" style={{ backgroundColor: '#D4AF37', opacity: 0.5 }} />
          </div>

          <h2
            className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-4"
            style={{ color: '#0B1C2D' }}
          >
            Our{' '}
            <span className="bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#F5A623] bg-clip-text text-transparent">
              Leadership
            </span>
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            className="w-20 md:w-28 h-0.5 mx-auto mb-4"
            style={{
              background: 'linear-gradient(90deg, transparent, #D4AF37, #F5A623, #D4AF37, transparent)',
            }}
          />
          
          <p
            className="font-body text-sm md:text-base max-w-2xl mx-auto mt-4"
            style={{ color: '#4A5568' }}
          >
            Visionaries driving excellence in education recognition across India
          </p>
          
          <p
            className="font-body text-xs mt-3"
            style={{ color: '#D4AF37' }}
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
              transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.5) }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-300 ${
                member.highlight ? 'ring-2 ring-[#D4AF37] shadow-xl' : 'shadow-lg hover:shadow-2xl'
              }`}
              style={{
                background: '#FFFFFF',
                border: `1px solid ${member.highlight ? '#D4AF37' : 'rgba(212, 175, 55, 0.2)'}`,
              }}
            >
              {/* Image Container */}
              <div className="relative h-64 md:h-72 overflow-hidden bg-[#F9F9F5]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Gold Gradient Overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #D4AF37, #F5A623)',
                  }}
                />
                
                {/* Social Links Overlay */}
                {member.socialLinks && (
                  <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-3 z-10 translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                    {member.socialLinks.linkedin && (
                      <a
                        href={member.socialLinks.linkedin}
                        className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                        style={{
                          background: '#FFFFFF',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                          border: '1px solid rgba(212, 175, 55, 0.3)',
                        }}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#D4AF37' }}>
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    )}
                    {member.socialLinks.twitter && (
                      <a
                        href={member.socialLinks.twitter}
                        className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                        style={{
                          background: '#FFFFFF',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                          border: '1px solid rgba(212, 175, 55, 0.3)',
                        }}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#D4AF37' }}>
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.104c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.68-11.79c0-.213-.005-.425-.015-.636A10.012 10.012 0 0024 4.557z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5 text-center">
                <h3
                  className="font-heading text-lg md:text-xl font-bold mb-1 transition-colors duration-300 group-hover:text-[#D4AF37]"
                  style={{ color: '#0B1C2D' }}
                >
                  {member.name}
                </h3>
                <p
                  className="font-body text-xs uppercase tracking-wider"
                  style={{ color: '#D4AF37' }}
                >
                  {member.role}
                </p>
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
                  className="absolute top-3 right-3 z-10 px-2 py-1 rounded-full text-[10px] font-bold"
                  style={{
                    background: '#D4AF37',
                    color: '#FFFFFF',
                  }}
                >
                  ✦ Lead
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
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.05), rgba(212, 175, 55, 0.02))',
              border: '1px solid rgba(212, 175, 55, 0.2)',
            }}
          >
            <span className="font-body text-sm md:text-base" style={{ color: '#4A5568' }}>
              Want to join our mission?
            </span>
            <button
              className="px-6 md:px-8 py-2.5 md:py-3 font-heading font-semibold text-sm rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{
                background: 'linear-gradient(135deg, #D4AF37, #B8860B)',
                color: '#FFFFFF',
                boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)',
              }}
            >
              View Openings →
            </button>
          </div>
        </motion.div>

        {/* Footer Gold Line */}
        <div
          className="mt-12 pt-6 text-center"
        >
          <div
            className="w-16 h-px mx-auto mb-3"
            style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
          />
          <p
            className="font-body text-xs"
            style={{ color: '#A0AEC0' }}
          >
            Committed to excellence in education recognition
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
        
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800&display=swap');
      `}</style>
    </section>
  );
}