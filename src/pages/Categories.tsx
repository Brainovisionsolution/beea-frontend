import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { Award, Calendar, Users, Star, Trophy, ChevronRight, FileText, X, Menu } from 'lucide-react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ==================== DATA STRUCTURES ====================

interface AwardDetail {
  id: number;
  title: string;
  description: string;
  detailedInfo: string;
  criteria: string[];
  benefits: string[];
  icon: 'trophy' | 'star' | 'award' | 'users';
}

const schoolAwards: AwardDetail[] = [
  {
    id: 1,
    title: 'Overall Excellence in School Education',
    description: 'Recognizing schools with outstanding academic results, extracurriculars, and holistic development.',
    detailedInfo: 'This prestigious award honors educational institutions that demonstrate exceptional performance across all dimensions of school education.',
    criteria: [
      'Consistent academic performance with 90%+ pass rate over 3 years',
      'State or national level achievements in extracurricular activities',
      'Evidence of innovative teaching methodologies',
      'Strong student welfare and support programs',
      'Positive community impact and parental involvement'
    ],
    benefits: [
      'National recognition and media coverage',
      'Exclusive trophy and certificate',
      'Feature in national education publications',
      'Opportunity to present at education conferences',
      'Priority access to educational partnerships'
    ],
    icon: 'trophy'
  },
  {
    id: 2,
    title: 'Excellence in Primary Education',
    description: 'For strong foundation-building in early education (classes 1–5).',
    detailedInfo: 'Celebrates schools that excel in creating nurturing, stimulating, and effective learning environments for young learners.',
    criteria: [
      'Innovative activity-based learning methodologies',
      'Strong foundation in literacy and numeracy skills',
      'Child-centric infrastructure and learning spaces',
      'Qualified and trained primary teachers',
      'Regular parent-teacher engagement programs'
    ],
    benefits: [
      'Recognition as model primary school',
      'Opportunity to showcase best practices',
      'Networking with leading primary educators',
      'Workshop opportunities for teachers',
      'Best practice documentation and publication'
    ],
    icon: 'star'
  },
  {
    id: 3,
    title: 'Best Secondary School (Academic Performance)',
    description: 'Based on board results, student achievements, and teaching quality.',
    detailedInfo: 'Acknowledges secondary schools that consistently deliver outstanding academic results.',
    criteria: [
      'Board examination results above state average',
      'Consistent improvement in academic metrics',
      'Student achievements in competitive exams',
      'Teacher qualification and training certifications',
      'Evidence-based learning outcome assessments'
    ],
    benefits: [
      'Certificate of Academic Excellence',
      'Eligibility for student scholarship programs',
      'Teacher exchange program opportunities',
      'Advanced teacher training partnerships',
      'Recognition at national education summit'
    ],
    icon: 'award'
  },
  {
    id: 4,
    title: 'Innovation in School Teaching Methods',
    description: 'Schools using smart classrooms, digital learning, or creative pedagogy.',
    detailedInfo: 'Rewards educational institutions that have successfully implemented innovative teaching methodologies.',
    criteria: [
      'Documented use of smart classroom technology',
      'Evidence of project-based or experiential learning',
      'Integration of digital tools in curriculum delivery',
      'Teacher training in innovative pedagogy',
      'Positive student feedback and engagement metrics'
    ],
    benefits: [
      'Innovation Champion status',
      'Speaking opportunities at education technology forums',
      'Partnership opportunities with EdTech companies',
      'Pilot program access to new educational technologies',
      'Feature case study in education journals'
    ],
    icon: 'star'
  },
  {
    id: 5,
    title: 'Student Development & Extracurricular Excellence',
    description: 'Focus on sports, arts, leadership programs, and personality development.',
    detailedInfo: 'Recognizes schools that provide exceptional opportunities for student development beyond academics.',
    criteria: [
      'State or national level achievements in sports/arts',
      'Structured leadership development programs',
      'Evidence of holistic personality development',
      'Active student clubs and organizations',
      'Community service and social responsibility programs'
    ],
    benefits: [
      'National recognition for holistic education',
      'Sports and arts development grants',
      'Student exchange program opportunities',
      'Alumni network access for mentorship',
      'Annual cultural exchange programs'
    ],
    icon: 'users'
  },
  {
    id: 6,
    title: 'Top Intermediate College (Science Stream)',
    description: 'For excellence in MPC/BiPC results and competitive exam performance.',
    detailedInfo: 'Honors intermediate colleges demonstrating exceptional performance in science education.',
    criteria: [
      'High success rates in JEE/NEET examinations',
      'Strong foundation in science subjects',
      'Qualified and experienced faculty',
      'Well-equipped science laboratories',
      'Student rankings in competitive exams'
    ],
    benefits: [
      'Top Science College designation',
      'Research collaboration opportunities',
      'Industry partnership programs',
      'Advanced lab equipment partnerships',
      'Student research program funding'
    ],
    icon: 'award'
  },
  {
    id: 7,
    title: 'Top Intermediate College (Commerce & Arts)',
    description: 'For MEC/CEC/HEC streams with strong academic outcomes.',
    detailedInfo: 'Celebrates intermediate colleges excelling in commerce and arts education.',
    criteria: [
      'Consistent academic performance in commerce/arts',
      'Student achievements in CA/CS foundation exams',
      'Evidence of practical industry exposure',
      'Qualified faculty in commerce and arts subjects',
      'Strong alumni network and placement records'
    ],
    benefits: [
      'Excellence in Commerce/Arts Education award',
      'Industry partnership for internships',
      'Professional certification program access',
      'Guest lecture series with industry experts',
      'Career guidance program partnerships'
    ],
    icon: 'trophy'
  },
  {
    id: 8,
    title: 'Best Coaching & Competitive Exam Preparation Institute',
    description: 'For NEET, JEE, CA Foundation, etc.',
    detailedInfo: 'Recognizes coaching institutes that demonstrate exceptional success in preparing students for competitive examinations.',
    criteria: [
      'High success rates in targeted competitive exams',
      'Top rankings in national level examinations',
      'Comprehensive study material development',
      'Experienced and qualified faculty team',
      'Regular assessment and improvement programs'
    ],
    benefits: [
      'National recognition as Top Coaching Institute',
      'Partnership opportunities with national schools',
      'Student scholarship program collaborations',
      'Media coverage and feature opportunities',
      'Education summit speaking opportunities'
    ],
    icon: 'star'
  },
  {
    id: 9,
    title: 'Student Success & Placement Excellence (Intermediate)',
    description: 'Based on student admissions into top universities, ranks, and achievements.',
    detailedInfo: 'Acknowledges intermediate colleges with exceptional track records of placing students in premier universities.',
    criteria: [
      'High percentage of students in top universities',
      'Successful alumni career trajectories',
      'Comprehensive career counseling programs',
      'University partnership networks',
      'Industry collaboration for internships'
    ],
    benefits: [
      'Placement Excellence certification',
      'University partnership expansion opportunities',
      'Career development program funding',
      'Alumni network strengthening initiatives',
      'Annual placement summit participation'
    ],
    icon: 'users'
  }
];

const collegeAwards: AwardDetail[] = [
  {
    id: 1,
    title: 'Overall Excellence in Education',
    description: 'Honors colleges demonstrating outstanding performance in academics, research, faculty strength, and student outcomes.',
    detailedInfo: 'The pinnacle of institutional recognition, this award celebrates colleges that exemplify excellence across all dimensions of higher education.',
    criteria: [
      'Consistent top-tier academic performance and rankings',
      'Significant research output and citations',
      'Qualified faculty with research credentials',
      'High student placement and success rates',
      'Accreditation from recognized bodies (NAAC, NBA, etc.)'
    ],
    benefits: [
      'Premier Institution of Excellence status',
      'National media campaign and recognition',
      'Priority for government research grants',
      'International collaboration opportunities',
      'Featured case study in national publications'
    ],
    icon: 'trophy'
  },
  {
    id: 2,
    title: 'Academic Excellence',
    description: 'Recognizing consistent high academic standards and intellectual achievements.',
    detailedInfo: 'Honors institutions that maintain exceptional academic standards through rigorous curriculum.',
    criteria: [
      'Consistent academic result improvements',
      'Peer-reviewed academic program reviews',
      'Student achievements in academic competitions',
      'Innovative curriculum design and delivery',
      'Learning outcome assessments and improvements'
    ],
    benefits: [
      'Academic Excellence certification',
      'Curriculum development partnerships',
      'Faculty exchange program opportunities',
      'Academic conference participation grants',
      'Best practice documentation and sharing'
    ],
    icon: 'award'
  },
  {
    id: 3,
    title: 'Innovation in Teaching & Learning',
    description: 'For institutions adopting innovative teaching tools and experiential learning practices.',
    detailedInfo: 'Celebrates colleges that pioneer innovative pedagogical approaches.',
    criteria: [
      'Documented innovative teaching methodologies',
      'Technology integration in classrooms',
      'Experiential learning programs',
      'Student feedback on innovative practices',
      'Measurable learning outcome improvements'
    ],
    benefits: [
      'Innovation Leader designation',
      'EdTech partnership opportunities',
      'Innovation summit keynote speaking slots',
      'Research collaboration for pedagogical innovation',
      'Innovation lab development funding'
    ],
    icon: 'star'
  },
  {
    id: 4,
    title: 'Best in Research & Development',
    description: 'Awarded for impactful research publications, projects, and innovation output.',
    detailedInfo: 'Recognizes institutions with outstanding research output and impactful publications.',
    criteria: [
      'High-impact research publications and citations',
      'Funded research projects from national/international agencies',
      'Patent filings and innovations',
      'Research collaboration networks',
      'Student research contributions and publications'
    ],
    benefits: [
      'Research Excellence certification',
      'Priority access to research funding',
      'International research collaboration opportunities',
      'Research infrastructure development grants',
      'Research summit hosting opportunities'
    ],
    icon: 'award'
  },
  {
    id: 5,
    title: 'Student Support & Welfare Excellence',
    description: 'For ensuring student well-being through counseling, mentoring, and support services.',
    detailedInfo: 'Honors institutions that prioritize student well-being through comprehensive support services.',
    criteria: [
      'Comprehensive counseling and support services',
      'Active mentoring and guidance programs',
      'Mental health awareness and support systems',
      'Inclusive policies and practices',
      'Student satisfaction and feedback mechanisms'
    ],
    benefits: [
      'Student Welfare Excellence recognition',
      'Best practice sharing at national platforms',
      'Student support program development partnerships',
      'Mental health awareness campaigns',
      'Student welfare research collaboration'
    ],
    icon: 'users'
  },
  {
    id: 6,
    title: 'Outstanding Infrastructure & Facilities',
    description: 'Recognizing world-class libraries, labs, digital classrooms, and sports facilities.',
    detailedInfo: 'Acknowledges institutions with exceptional physical and digital infrastructure.',
    criteria: [
      'Modern and well-equipped laboratories',
      'Comprehensive library resources and digital access',
      'Smart classroom infrastructure',
      'Sports and recreational facilities',
      'Accessible and sustainable campus design'
    ],
    benefits: [
      'Infrastructure Excellence certification',
      'Infrastructure partnership opportunities',
      'Campus modernization program funding',
      'Green campus initiative support',
      'Infrastructure summit participation'
    ],
    icon: 'trophy'
  },
  {
    id: 7,
    title: 'Industry Collaboration & Placements',
    description: 'For institutions with exceptional industry partnerships and placement records.',
    detailedInfo: 'Celebrates colleges with strong industry linkages and exceptional placement records.',
    criteria: [
      'High placement percentages with top companies',
      'Active MOUs and industry partnerships',
      'Regular internship programs',
      'Industry-sponsored projects and research',
      'Alumni engagement and mentorship programs'
    ],
    benefits: [
      'Placement Excellence certification',
      'Industry partnership expansion opportunities',
      'Internship program development support',
      'Industry summit speaking opportunities',
      'Placement network strengthening initiatives'
    ],
    icon: 'star'
  },
  {
    id: 8,
    title: 'Social Impact & Community Engagement',
    description: 'For contributions to community development, outreach, and service initiatives.',
    detailedInfo: 'Recognizes institutions making significant contributions to society through community service.',
    criteria: [
      'Active community service and outreach programs',
      'Social impact projects with measurable outcomes',
      'Student volunteering and community engagement',
      'Partnerships with NGOs and social organizations',
      'Sustainable development initiatives'
    ],
    benefits: [
      'Social Impact Champion designation',
      'Community partnership development support',
      'Social entrepreneurship program funding',
      'National service award nominations',
      'Social impact summit participation'
    ],
    icon: 'users'
  },
  {
    id: 9,
    title: 'Sustainable Green Campus Initiative',
    description: 'Awarded to colleges promoting sustainability and eco-friendly campus practices.',
    detailedInfo: 'Honors institutions demonstrating commitment to environmental sustainability.',
    criteria: [
      'Green campus certification and initiatives',
      'Renewable energy adoption and efficiency programs',
      'Waste management and recycling systems',
      'Environmental awareness programs',
      'Sustainable infrastructure and operations'
    ],
    benefits: [
      'Green Campus Excellence certification',
      'Sustainability partnership opportunities',
      'Environmental program funding',
      'Green summit participation and recognition',
      'International sustainability network membership'
    ],
    icon: 'award'
  }
];

const individualAwards: AwardDetail[] = [
  {
    id: 1,
    title: 'Samarpana Acharya Lifetime Achievement Award',
    description: 'For Chairmen/Secretaries with extraordinary lifelong contribution to education.',
    detailedInfo: 'The highest individual honor, recognizing visionary leaders who have dedicated their lives to transforming education.',
    criteria: [
      'Minimum 30 years in education leadership',
      'Documented transformational impact on institutions',
      'National or international recognition for contributions',
      'Mentorship of education leaders',
      'Sustained advocacy for educational excellence'
    ],
    benefits: [
      'Prestigious trophy and citation',
      'Lifetime achievement documentary feature',
      'National education hall of fame induction',
      'Annual lecture series in honoree\'s name',
      'Autobiography publication support'
    ],
    icon: 'trophy'
  },
  {
    id: 2,
    title: 'Bhisma Acharya Individual Award',
    description: 'Recognizing Principals, Deans, and Directors demonstrating visionary leadership.',
    detailedInfo: 'Honors institutional leaders who have demonstrated exceptional vision and strategic leadership.',
    criteria: [
      'Minimum 15 years in leadership roles',
      'Evidence of institutional transformation',
      'Innovative policy development and implementation',
      'Leadership in challenging times',
      'Peer recognition and respect'
    ],
    benefits: [
      'Visionary Leader award and citation',
      'Leadership summit speaking opportunities',
      'Mentorship program leadership role',
      'National education policy consultation',
      'Leadership excellence certification'
    ],
    icon: 'star'
  },
  {
    id: 3,
    title: 'Sadhya Acharya Industry Collaboration Award',
    description: 'For Placement Directors with 25+ years of collaboration with industries.',
    detailedInfo: 'Celebrates professionals who have built exceptional bridges between academia and industry.',
    criteria: [
      'Minimum 25 years in placement and industry relations',
      'Exceptional placement track record',
      'Strong industry partnership networks',
      'Innovative placement and training programs',
      'Alumni success stories and testimonials'
    ],
    benefits: [
      'Industry Collaboration Excellence award',
      'National industry network membership',
      'Placement summit keynote speaker',
      'Industry collaboration program development',
      'Career guidance initiative leadership'
    ],
    icon: 'users'
  },
  {
    id: 4,
    title: 'Jyestha Acharya Individual Award',
    description: 'For HODs with 15+ years of exceptional academic contributions.',
    detailedInfo: 'Recognizes department heads who have demonstrated exceptional academic leadership.',
    criteria: [
      'Minimum 15 years as Head of Department',
      'Department development achievements',
      'Faculty development and mentorship',
      'Curriculum innovation implementation',
      'Research and publication contributions'
    ],
    benefits: [
      'Academic Leadership Excellence award',
      'Department development consultation role',
      'Academic administration training leadership',
      'Research collaboration opportunities',
      'Curriculum development program membership'
    ],
    icon: 'award'
  },
  {
    id: 5,
    title: 'Uttama Adhyapika Individual Award',
    description: 'Special recognition for exceptional female educators.',
    detailedInfo: 'Celebrates outstanding female educators who have broken barriers and achieved excellence.',
    criteria: [
      'Exceptional contribution to education by a female educator',
      'Role model for women in education',
      'Evidence of inspiring other female educators',
      'Student success stories and impact',
      'Professional achievements and recognition'
    ],
    benefits: [
      'Women in Education Excellence award',
      'Women\'s leadership forum membership',
      'Mentorship program development role',
      'Female educator network leadership',
      'Inspirational speaker opportunities'
    ],
    icon: 'star'
  },
  {
    id: 6,
    title: 'Kalpa Acharya Individual Award',
    description: 'For educators pursuing PhD or with 10–14 years of impactful academic service.',
    detailedInfo: 'Honors mid-career educators who have made significant contributions.',
    criteria: [
      'Current PhD pursuit or completion',
      '10-14 years of impactful academic service',
      'Research contributions and publications',
      'Student mentorship achievements',
      'Continuous learning and development'
    ],
    benefits: [
      'Academic Growth Excellence award',
      'Research fellowship opportunities',
      'PhD completion support programs',
      'Mid-career educator development role',
      'Research collaboration network membership'
    ],
    icon: 'award'
  },
  {
    id: 7,
    title: 'Yuva Acharya Individual Award',
    description: 'For promising educators with less than 10 years of experience.',
    detailedInfo: 'Recognizes exceptional young educators who demonstrate extraordinary promise.',
    criteria: [
      'Less than 10 years teaching experience',
      'Innovative teaching practices',
      'Student engagement and success',
      'Professional development initiative',
      'Peer recognition and potential'
    ],
    benefits: [
      'Promising Educator award',
      'Young educator leadership program',
      'Innovation labs participation',
      'Mentorship from senior educators',
      'Professional development grants'
    ],
    icon: 'star'
  },
  {
    id: 8,
    title: 'Niyukti Acharya Individual Award',
    description: 'For young Placement Officers under 22 making remarkable contributions.',
    detailedInfo: 'Celebrates young placement officers who have achieved extraordinary success.',
    criteria: [
      'Age under 22 years',
      'Remarkable placement achievements',
      'Innovative industry outreach methods',
      'Student placement success stories',
      'Peer and industry recognition'
    ],
    benefits: [
      'Young Placement Excellence award',
      'Placement leadership development program',
      'Industry network membership',
      'Innovation incubator access',
      'Young achiever platform opportunities'
    ],
    icon: 'users'
  },
  {
    id: 9,
    title: 'Ananta Acharya Leadership Award',
    description: 'For educators with exceptional leadership qualities.',
    detailedInfo: 'Honors educators who demonstrate outstanding leadership abilities.',
    criteria: [
      'Demonstrated exceptional leadership',
      'Team building and motivation skills',
      'Change management achievements',
      'Peer leadership and influence',
      'Institutional development impact'
    ],
    benefits: [
      'Leadership Excellence award',
      'Leadership summit speaker opportunities',
      'Education leadership network membership',
      'Leadership training facilitator role',
      'Institutional leadership consultation'
    ],
    icon: 'trophy'
  },
  {
    id: 10,
    title: 'Shakti Acharya Empowerment Award',
    description: 'Recognizing individuals empowering and uplifting the education community.',
    detailedInfo: 'Celebrates educators who have dedicated themselves to empowering others.',
    criteria: [
      'Documented mentorship of educators',
      'Professional development programs initiated',
      'Uplifting education community impact',
      'Training and capacity building',
      'Success stories of mentees'
    ],
    benefits: [
      'Empowerment Excellence award',
      'Mentor network leadership role',
      'Training program development opportunities',
      'Community empowerment speaker platform',
      'Professional development program funding'
    ],
    icon: 'star'
  },
  {
    id: 11,
    title: 'Shraddha Acharya Student Success Award',
    description: 'For educators dedicated to student growth and success.',
    detailedInfo: 'Honors educators who go above and beyond to ensure student success.',
    criteria: [
      'Exceptional student success stories',
      'Personal investment in student development',
      'Innovative student support programs',
      'Student testimonials and gratitude',
      'Academic and personal growth outcomes'
    ],
    benefits: [
      'Student Success Champion award',
      'Student development program leadership',
      'Student welfare initiative development',
      'Student success network membership',
      'Best practice documentation and sharing'
    ],
    icon: 'award'
  },
  {
    id: 12,
    title: 'Udyam Acharya Entrepreneurship Award',
    description: 'For promoting entrepreneurship and innovation among students.',
    detailedInfo: 'Recognizes educators who inspire and support student entrepreneurship.',
    criteria: [
      'Student entrepreneurship success stories',
      'Innovation and startup programs initiated',
      'Entrepreneurship curriculum development',
      'Industry mentorship programs',
      'Student venture outcomes'
    ],
    benefits: [
      'Entrepreneurship Excellence award',
      'Startup ecosystem development role',
      'Entrepreneurship summit participation',
      'Incubator partnership opportunities',
      'Innovation funding access'
    ],
    icon: 'trophy'
  },
  {
    id: 13,
    title: 'Anveshana Acharya Research Mentorship Award',
    description: 'For mentors guiding students in research excellence.',
    detailedInfo: 'Celebrates educators who excel in guiding students through research projects.',
    criteria: [
      'Student research publications supervised',
      'Research mentorship program development',
      'Student research competition successes',
      'Research methodology training',
      'Academic research outcomes'
    ],
    benefits: [
      'Research Mentorship Excellence award',
      'Research collaboration network membership',
      'Research mentorship program development',
      'Student research funding opportunities',
      'Academic publication support'
    ],
    icon: 'star'
  },
  {
    id: 14,
    title: 'Vidya Ratna – Jewel of Education Award',
    description: 'Awarded to individuals with exceptional contributions to education.',
    detailedInfo: 'A prestigious recognition honoring individuals whose contributions shine brightly.',
    criteria: [
      'Exceptional and documented contributions',
      'Lasting impact on education',
      'Peer and community recognition',
      'Innovation and dedication',
      'Inspiration to others'
    ],
    benefits: [
      'Jewel of Education honor',
      'National recognition ceremony',
      'Education hall of fame nomination',
      'Lifetime achievement consideration',
      'Inspirational story documentation'
    ],
    icon: 'award'
  },
  {
    id: 15,
    title: 'Buddhiman Guru – Wise Teacher Award',
    description: 'Honoring educators known for wisdom and mentorship.',
    detailedInfo: 'Celebrates senior educators recognized for their wisdom and experience.',
    criteria: [
      'Recognition as a wise mentor',
      'Long-standing positive influence',
      'Wisdom sharing and guidance',
      'Community respect and admiration',
      'Documented mentorship impact'
    ],
    benefits: [
      'Wise Teacher honor',
      'Wisdom sharing platform',
      'Senior educator network leadership',
      'Guest of honor at events',
      'Mentorship program development role'
    ],
    icon: 'users'
  },
  {
    id: 16,
    title: 'Guru Shreshta – Greatest Teacher Award',
    description: 'Recognizing unparalleled teaching excellence.',
    detailedInfo: 'The pinnacle of teaching recognition, honoring exceptional educators.',
    criteria: [
      'Unparalleled teaching excellence',
      'Transformative student outcomes',
      'Teaching innovation and mastery',
      'Student and peer testimonials',
      'Teaching methodology documentation'
    ],
    benefits: [
      'Greatest Teacher honor',
      'Teaching excellence certification',
      'Master teacher program leadership',
      'Teaching methodology documentation',
      'National teaching summit keynote'
    ],
    icon: 'trophy'
  },
  {
    id: 17,
    title: 'Vidya Vibhushan – Ornament of Learning Award',
    description: 'Honoring educators enriching the world with deep knowledge.',
    detailedInfo: 'Recognizes scholars whose deep knowledge has enriched the education landscape.',
    criteria: [
      'Deep scholarly contributions',
      'Knowledge enrichment impact',
      'Academic publications and research',
      'Peer recognition as scholar',
      'Knowledge sharing and documentation'
    ],
    benefits: [
      'Ornament of Learning honor',
      'Scholar network membership',
      'Academic publication opportunities',
      'Knowledge repository contribution role',
      'Scholarly summit participation'
    ],
    icon: 'star'
  },
  {
    id: 18,
    title: 'Shiksha Samrat – Emperor of Education Award',
    description: 'Recognizing individuals with extraordinary impact on education.',
    detailedInfo: 'The crowning achievement, recognizing individuals who have reshaped education.',
    criteria: [
      'Extraordinary and documented impact',
      'Education landscape transformation',
      'Legacy creation and sustainability',
      'National or international influence',
      'Continuous contribution and dedication'
    ],
    benefits: [
      'Emperor of Education honor',
      'National education icon recognition',
      'Annual lecture series establishment',
      'Education impact documentation',
      'Lifetime legacy celebration'
    ],
    icon: 'trophy'
  }
];

// ==================== HERO SECTION COMPONENT ====================

function Herosection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      mouseX.set(x);
      mouseY.set(y);
    }
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#0B1C2D' }}
    >
      {/* Dynamic Gradient Background that follows cursor - disabled on mobile */}
      <motion.div
        className="absolute inset-0 pointer-events-none hidden md:block"
        style={{
          background: `radial-gradient(circle at ${springX}% ${springY}%, rgba(212, 175, 55, 0.08) 0%, rgba(212, 175, 55, 0.02) 30%, transparent 70%)`,
        }}
      />

      {/* Dark Navy Background Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 30% 50%, #0E2A47 0%, #071421 100%)',
        }}
      />

      {/* Elegant Gold Accent Lines - Top & Bottom */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-40" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-40" />

      {/* Subtle Gold Orbs - hidden on mobile */}
      <div className="hidden md:block absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ background: '#D4AF37' }} />
      <div className="hidden md:block absolute bottom-20 left-20 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ background: '#F5A623' }} />

      {/* Floating Gold Particles - responsive count */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full hidden sm:block"
            style={{
              width: (Math.random() * 2 + 1) + 'px',
              height: (Math.random() * 2 + 1) + 'px',
              background: '#D4AF37',
              opacity: 0.12,
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.12, 0.25, 0.12],
            }}
            transition={{
              duration: 6 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            <div className="w-8 sm:w-16 h-px" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37)' }} />
            <Trophy className="w-8 h-8 sm:w-12 sm:h-12" style={{ color: '#D4AF37' }} />
            <div className="w-8 sm:w-16 h-px" style={{ background: 'linear-gradient(270deg, transparent, #D4AF37)' }} />
          </div>

          <p
            className="text-xs sm:text-sm md:text-base font-heading font-semibold tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4 sm:mb-6"
            style={{ fontFamily: 'Playfair Display, serif', color: '#D4AF37' }}
          >
            Education Excellence Awards 2026
          </p>

          <h1
            className="font-heading font-extrabold text-3xl sm:text-5xl md:text-7xl lg:text-8xl leading-tight mb-4 sm:mb-6"
            style={{ fontFamily: 'Playfair Display, serif', color: '#FFFFFF' }}
          >
            Celebrating
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #D4AF37 0%, #F5E6C4 50%, #D4AF37 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Excellence
            </span>
            <br />
            in Education
          </h1>

          <p
            className="font-body text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-8 sm:mb-12 px-4"
            style={{ fontFamily: 'Poppins, sans-serif', color: '#B8C5D6', lineHeight: '1.6' }}
          >
            Honoring outstanding schools, colleges, and educators who shape the future through
            dedication, innovation, and unwavering commitment to academic excellence.
          </p>

          <motion.a
            href="#categories"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 font-body font-semibold rounded-lg transition-all duration-500 text-sm sm:text-base"
            style={{ fontFamily: 'Poppins, sans-serif', backgroundColor: '#D4AF37', color: '#0A1628' }}
          >
            View Award Categories
          </motion.a>
        </motion.div>

        {/* Stats - responsive grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mt-12 sm:mt-20 pt-8 sm:pt-12"
          style={{ borderTop: '1px solid rgba(212, 175, 55, 0.1)' }}
        >
          {[
            { number: '36+', label: 'Award Categories' },
            { number: '500+', label: 'Institutions' },
            { number: '1000+', label: 'Educators' },
            { number: '15+', label: 'Years Legacy' }
          ].map((stat, i) => (
            <div key={i}>
              <p className="font-heading font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-1 sm:mb-2" style={{ fontFamily: 'Playfair Display, serif', color: '#D4AF37' }}>{stat.number}</p>
              <p className="font-body text-xs sm:text-sm" style={{ fontFamily: 'Poppins, sans-serif', color: '#B8C5D6' }}>{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <div className="w-6 h-10 rounded-full flex items-start justify-center pt-2" style={{ border: '2px solid rgba(212, 175, 55, 0.3)' }}>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 rounded-full"
            style={{ backgroundColor: '#D4AF37' }}
          />
        </div>
      </motion.div>
    </section>
  );
}

// ==================== MAIN COMPONENT ====================

export default function AwardCategoriesPage() {
  const [activeTab, setActiveTab] = useState<'school' | 'college' | 'individual'>('school');
  const [selectedAward, setSelectedAward] = useState<AwardDetail | null>(null);

  const currentAwards = activeTab === 'school' ? schoolAwards : activeTab === 'college' ? collegeAwards : individualAwards;

  const getIcon = (iconName: string) => {
    const iconClass = "w-6 h-6 sm:w-8 sm:h-8";
    switch (iconName) {
      case 'trophy': return <Trophy className={iconClass} />;
      case 'users': return <Users className={iconClass} />;
      case 'star': return <Star className={iconClass} />;
      default: return <Award className={iconClass} />;
    }
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedAward(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen" style={{ backgroundColor: '#0A1628' }}>
        {/* Hero Section */}
        <Herosection />

        {/* Categories Section */}
        <section id="categories" className="py-16 sm:py-20 md:py-28 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Section header - responsive */}
            <div className="text-center mb-12 sm:mb-16">
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-8 sm:w-12 h-px" style={{ backgroundColor: '#D4AF37', opacity: 0.3 }} />
                <p className="text-xs sm:text-sm font-heading font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase" style={{ fontFamily: 'Playfair Display, serif', color: '#D4AF37' }}>
                  RECOGNITION CATEGORIES
                </p>
                <div className="w-8 sm:w-12 h-px" style={{ backgroundColor: '#D4AF37', opacity: 0.3 }} />
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#FFFFFF' }}>
                Award <span style={{ color: '#D4AF37' }}>Categories</span>
              </h2>
              <p className="font-body text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#B8C5D6' }}>
                Explore our comprehensive award categories designed to recognize excellence across all levels of education
              </p>
            </div>

            {/* Tab buttons - responsive horizontal scroll on mobile */}
            <div className="flex justify-center mb-8 sm:mb-12 overflow-x-auto pb-2 px-2">
              <div className="inline-flex p-1 rounded-xl flex-nowrap sm:flex-wrap justify-center gap-1 sm:gap-2 min-w-max" style={{ backgroundColor: 'rgba(212, 175, 55, 0.05)' }}>
                {[
                  { key: 'school', label: 'School & Intermediate' },
                  { key: 'college', label: 'College' },
                  { key: 'individual', label: 'Individual' }
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key as 'school' | 'college' | 'individual')}
                    className={`px-4 sm:px-6 py-2 sm:py-3 font-heading text-xs sm:text-sm md:text-base font-semibold rounded-lg transition-all duration-500 whitespace-nowrap ${
                      activeTab === tab.key ? 'shadow-lg' : 'opacity-60 hover:opacity-100'
                    }`}
                    style={{
                      backgroundColor: activeTab === tab.key ? '#D4AF37' : 'transparent',
                      color: activeTab === tab.key ? '#0A1628' : '#D4AF37',
                      fontFamily: 'Playfair Display, serif'
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Awards grid - responsive: 1 col on mobile, 2 on tablet, 3 on desktop */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
              >
                {currentAwards.map((award, index) => (
                  <motion.div
                    key={award.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.5) }}
                    whileHover={{ y: -5 }}
                    onClick={() => setSelectedAward(award)}
                    className="group relative rounded-2xl cursor-pointer transition-all duration-500 overflow-hidden"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(212, 175, 55, 0.1)' }}
                  >
                    {/* Top gold bar */}
                    <div className="h-0.5 sm:h-1 w-full" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, #F5E6C4, #D4AF37, transparent)' }} />

                    <div className="p-4 sm:p-6">
                      <div className="flex items-start justify-between mb-3 sm:mb-4">
                        <div className="relative">
                          <div className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ background: '#D4AF37', filter: 'blur(8px)' }} />
                          <div className="relative" style={{ color: '#D4AF37' }}>{getIcon(award.icon)}</div>
                        </div>
                        <span className="font-body text-xs font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', color: '#D4AF37', fontFamily: 'Poppins, sans-serif' }}>
                          {(index + 1).toString().padStart(2, '0')}
                        </span>
                      </div>

                      <h3 className="font-heading text-base sm:text-lg font-bold mb-2 transition-colors duration-300 line-clamp-2" style={{ fontFamily: 'Playfair Display, serif', color: '#FFFFFF' }}>
                        {award.title}
                      </h3>

                      <p className="font-body text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-3" style={{ fontFamily: 'Poppins, sans-serif', color: '#B8C5D6' }}>
                        {award.description}
                      </p>

                      <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-body" style={{ fontFamily: 'Poppins, sans-serif', color: '#D4AF37' }}>
                        <span>View Details</span>
                        <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                      </div>
                    </div>

                    {/* Hover border effect */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ border: '1px solid rgba(212, 175, 55, 0.4)', boxShadow: '0 0 20px rgba(212, 175, 55, 0.15)' }} />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Award Detail Modal - responsive */}
          <AnimatePresence>
            {selectedAward && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedAward(null)}
                className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4"
                style={{ backgroundColor: 'rgba(10, 22, 40, 0.95)' }}
              >
                <motion.div
                  initial={{ scale: 0.9, y: 50 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.9, y: 50 }}
                  onClick={(e) => e.stopPropagation()}
                  className="max-w-4xl w-full max-h-[85vh] sm:max-h-[90vh] overflow-y-auto rounded-xl sm:rounded-2xl p-4 sm:p-8 relative"
                  style={{ backgroundColor: '#0D1B2A', border: '1px solid rgba(212, 175, 55, 0.2)' }}
                >
                  {/* Close button */}
                  <button
                    onClick={() => setSelectedAward(null)}
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 transition-opacity hover:opacity-70 z-10"
                    style={{ color: '#D4AF37' }}
                  >
                    <X className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>

                  {/* Modal header - responsive */}
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 pr-8">
                    <div style={{ color: '#D4AF37' }}>{getIcon(selectedAward.icon)}</div>
                    <h3 className="font-heading font-bold text-lg sm:text-2xl md:text-3xl flex-1" style={{ fontFamily: 'Playfair Display, serif', color: '#FFFFFF' }}>
                      {selectedAward.title}
                    </h3>
                  </div>

                  {/* Detailed description */}
                  <p className="font-body text-sm sm:text-base leading-relaxed mb-6 sm:mb-8" style={{ fontFamily: 'Poppins, sans-serif', color: '#B8C5D6' }}>
                    {selectedAward.detailedInfo}
                  </p>

                  {/* Criteria and benefits grid - responsive: 1 col on mobile, 2 on tablet+ */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    <div>
                      <h4 className="font-heading font-bold text-base sm:text-lg mb-3 sm:mb-4 flex items-center gap-2" style={{ fontFamily: 'Playfair Display, serif', color: '#D4AF37' }}>
                        <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                        Eligibility Criteria
                      </h4>
                      <ul className="space-y-2 sm:space-y-3">
                        {selectedAward.criteria.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 sm:gap-3 font-body text-xs sm:text-sm" style={{ fontFamily: 'Poppins, sans-serif', color: '#B8C5D6' }}>
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mt-1.5 sm:mt-2 flex-shrink-0" style={{ backgroundColor: '#D4AF37' }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-heading font-bold text-base sm:text-lg mb-3 sm:mb-4 flex items-center gap-2" style={{ fontFamily: 'Playfair Display, serif', color: '#D4AF37' }}>
                        <Star className="w-4 h-4 sm:w-5 sm:h-5" />
                        Award Benefits
                      </h4>
                      <ul className="space-y-2 sm:space-y-3">
                        {selectedAward.benefits.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 sm:gap-3 font-body text-xs sm:text-sm" style={{ fontFamily: 'Poppins, sans-serif', color: '#B8C5D6' }}>
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mt-1.5 sm:mt-2 flex-shrink-0" style={{ backgroundColor: '#D4AF37' }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Apply button - responsive */}
                  <motion.a
                    href="/nominate"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 font-body font-semibold rounded-lg transition-all duration-500 block text-center text-sm sm:text-base"
                    style={{ fontFamily: 'Poppins, sans-serif', backgroundColor: '#D4AF37', color: '#0A1628' }}
                  >
                    Apply for This Award
                  </motion.a>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* Footer */}
        <Footer />
      </div>

      {/* Animations CSS */}
      <style>{`
        @keyframes float-up {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-down {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(20px); }
        }
        .animate-float-up { animation: float-up 8s ease-in-out infinite; }
        .animate-float-down { animation: float-down 10s ease-in-out infinite; }
        .font-heading { font-family: 'Playfair Display', serif; }
        .font-body { font-family: 'Poppins', sans-serif; }
        
        /* Line clamp utility */
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
        
        /* Hide scrollbar for mobile tab buttons */
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
        .overflow-x-auto {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
}