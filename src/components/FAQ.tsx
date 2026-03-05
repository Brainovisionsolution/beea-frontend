import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqsLeft = [
    {
      question: "1. If I get 300 votes, will I get the award?",
      answer: (
        <>
          <p>No. Getting the award is not based on crossing a fixed number of votes.</p>
          <p className="mt-2">Selection is based on:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1 font-body">
            <li>Highest Votes in the category</li>
            <li>LinkedIn Profile / Professional Achievements</li>
            <li>Final Jury Review</li>
          </ul>
        </>
      ),
    },
    {
      question: "2. Is there any registration fee to participate?",
      answer: "No. Participation and recognition in BEEA Awards is 100% free.",
    },
    {
      question: "3. Who can apply?",
      answer: (
        <ul className="list-disc ml-6 space-y-1 font-body">
          <li>Principals</li>
          <li>HODs</li>
          <li>Professors / Faculty</li>
          <li>School Teachers</li>
          <li>TPOs</li>
          <li>Freelance Trainers</li>
        </ul>
      ),
    },
    {
      question: "4. How are winners decided?",
      answer: (
        <ol className="list-decimal ml-6 space-y-1 font-body">
          <li>Nominations received</li>
          <li>Voting & LinkedIn review</li>
          <li>Final Jury decision</li>
        </ol>
      ),
    },
    {
      question: "5. How many votes can a student cast?",
      answer: "Only 1 vote per student.",
    },
    {
      question: "6. Will everyone get an award?",
      answer: "No. Only selected candidates will be recognized.",
    },
    {
      question: "7. How many awards will be given?",
      answer: "Approx. 500+ recognitions (250 offline + 250 online).",
    },
    {
      question: "8. Will I get an offline or online award?",
      answer: (
        <ul className="list-disc ml-6 space-y-1 font-body">
          <li>Based on location and profile strength</li>
          <li>Offline → Trophy & certificate</li>
          <li>Online → Digital certificate</li>
        </ul>
      ),
    },
    {
      question: "9. Can I share my nomination for voting?",
      answer: "Yes! More visibility → Higher chances.",
    },
    {
      question: "10. What documents do I need?",
      answer: (
        <ul className="list-disc ml-6 space-y-1 font-body">
          <li>LinkedIn / Resume</li>
          <li>Photo & Designation</li>
          <li>Achievements (optional)</li>
        </ul>
      ),
    },
  ];

  const faqsRight = [
    {
      question: "11. Can I attend the ceremony if I don't win?",
      answer: "Only for valid pass holders.",
    },
    {
      question: "12. Will travel and accommodation be provided?",
      answer: "No, participants must manage their own travel & stay.",
    },
    {
      question: "13. Can I nominate myself?",
      answer: "Yes, self-nominations are accepted.",
    },
    {
      question: "14. Can one person win multiple awards?",
      answer: "No, only one award per edition.",
    },
    {
      question: "15. Is there a dress code?",
      answer: "Formal or ethnic attire is recommended.",
    },
    {
      question: "16. How will I know if I'm selected?",
      answer: "Official confirmation will be sent via email.",
    },
    {
      question: "17. Can I update my profile after nomination?",
      answer: "Yes, updated profile can be submitted before final review.",
    },
    {
      question: "18. What if two people have strong profiles?",
      answer: "Jury may select both in rare cases.",
    },
    {
      question: "19. Will there be media coverage?",
      answer: "Yes! Winners will appear in photos, media, and social posts.",
    },
    {
      question: "20. What benefits do awardees get?",
      answer: (
        <ul className="list-disc ml-6 space-y-1 font-body">
          <li>Certificate & Trophy</li>
          <li>Professional Recognition</li>
          <li>LinkedIn Visibility</li>
          <li>Networking Opportunities</li>
        </ul>
      ),
    },
  ];

  // Animation variants
  const accordionVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { 
        duration: 0.3,
        ease: [0.04, 0.62, 0.23, 0.98]
      }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: { 
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="faq" className="py-20 bg-white relative overflow-hidden">
      {/* Subtle Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0B1C2D]/5 rounded-full blur-3xl"></div>
      
      {/* Decorative Gold Lines */}
      <div className="absolute top-40 left-0 w-px h-40 bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent opacity-20"></div>
      <div className="absolute bottom-40 right-0 w-px h-40 bg-gradient-to-t from-transparent via-[#D4AF37] to-transparent opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header - Enhanced Typography */}
        <motion.div 
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div 
              className="w-12 h-px" 
              style={{ backgroundColor: '#D4AF37', opacity: 0.3 }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.5 }}
            />
            <span 
              className="font-heading text-sm font-semibold tracking-[0.25em] uppercase"
              style={{ color: '#D4AF37', fontFamily: 'Playfair Display, serif' }}
            >
              GOT QUESTIONS?
            </span>
            <motion.div 
              className="w-12 h-px" 
              style={{ backgroundColor: '#D4AF37', opacity: 0.3 }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-5xl md:text-6xl font-bold mb-2"
            style={{ color: '#0B1C2D', fontFamily: 'Playfair Display, serif' }}
          >
            Frequently Asked
          </motion.h2>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-heading text-5xl md:text-6xl font-bold mb-4"
            style={{ color: '#D4AF37', fontFamily: 'Playfair Display, serif' }}
          >
            Questions
          </motion.h2>

          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-20 h-0.5 mx-auto mb-4"
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
            style={{ color: '#6B7280', fontFamily: 'Poppins, sans-serif' }}
          >
            Find answers to common questions about the nomination, selection, and recognition process
          </motion.p>
        </motion.div>

        {/* FAQ Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {/* Left Column */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {faqsLeft.map((faq, index) => {
              const id = index;
              return (
                <motion.div 
                  key={id} 
                  className="bg-white border rounded-xl overflow-hidden group"
                  style={{ 
                    borderColor: openIndex === id ? '#D4AF37' : '#F5F6F8',
                    boxShadow: openIndex === id ? '0 4px 20px rgba(212, 175, 55, 0.1)' : 'none'
                  }}
                  whileHover={{ 
                    borderColor: '#D4AF37',
                    boxShadow: '0 4px 15px rgba(212, 175, 55, 0.1)',
                    transition: { duration: 0.2 }
                  }}
                >
                  <button 
                    onClick={() => setOpenIndex(openIndex === id ? null : id)} 
                    className="w-full px-6 py-4 flex justify-between items-center gap-4 text-left"
                  >
                    <span 
                      className="font-heading text-base md:text-lg font-bold transition-colors duration-300"
                      style={{ 
                        color: openIndex === id ? '#0B1C2D' : '#0B1C2D',
                        fontFamily: 'Playfair Display, serif'
                      }}
                    >
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openIndex === id ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <ChevronDown className={`flex-shrink-0 w-5 h-5 transition-colors duration-300 ${
                        openIndex === id ? 'text-[#D4AF37]' : 'text-[#9CA3AF] group-hover:text-[#D4AF37]'
                      }`}/>
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === id && (
                      <motion.div
                        variants={accordionVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      >
                        <div className="px-6 pb-4">
                          {/* Subtle Divider Line */}
                          <motion.div 
                            className="h-px w-full mb-4"
                            style={{ 
                              background: 'linear-gradient(90deg, #D4AF37, #D4AF37 50%, transparent)'
                            }}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                          <div className="font-body text-sm leading-relaxed" style={{ color: '#4B5563', fontFamily: 'Poppins, sans-serif' }}>
                            {faq.answer}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right Column */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {faqsRight.map((faq, index) => {
              const id = index + 10;
              return (
                <motion.div 
                  key={id} 
                  className="bg-white border rounded-xl overflow-hidden group"
                  style={{ 
                    borderColor: openIndex === id ? '#D4AF37' : '#F5F6F8',
                    boxShadow: openIndex === id ? '0 4px 20px rgba(212, 175, 55, 0.1)' : 'none'
                  }}
                  whileHover={{ 
                    borderColor: '#D4AF37',
                    boxShadow: '0 4px 15px rgba(212, 175, 55, 0.1)',
                    transition: { duration: 0.2 }
                  }}
                >
                  <button 
                    onClick={() => setOpenIndex(openIndex === id ? null : id)} 
                    className="w-full px-6 py-4 flex justify-between items-center gap-4 text-left"
                  >
                    <span 
                      className="font-heading text-base md:text-lg font-bold transition-colors duration-300"
                      style={{ 
                        color: openIndex === id ? '#0B1C2D' : '#0B1C2D',
                        fontFamily: 'Playfair Display, serif'
                      }}
                    >
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openIndex === id ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <ChevronDown className={`flex-shrink-0 w-5 h-5 transition-colors duration-300 ${
                        openIndex === id ? 'text-[#D4AF37]' : 'text-[#9CA3AF] group-hover:text-[#D4AF37]'
                      }`}/>
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === id && (
                      <motion.div
                        variants={accordionVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      >
                        <div className="px-6 pb-4">
                          {/* Subtle Divider Line */}
                          <motion.div 
                            className="h-px w-full mb-4"
                            style={{ 
                              background: 'linear-gradient(90deg, #D4AF37, #D4AF37 50%, transparent)'
                            }}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                          <div className="font-body text-sm leading-relaxed" style={{ color: '#4B5563', fontFamily: 'Poppins, sans-serif' }}>
                            {faq.answer}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Still Have Questions? - Enhanced */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <div 
            className="inline-block rounded-2xl p-8 max-w-2xl relative overflow-hidden"
            style={{ 
              background: 'linear-gradient(135deg, rgba(212,175,55,0.05) 0%, rgba(11,28,45,0.02) 100%)',
              border: '1px solid rgba(212, 175, 55, 0.2)'
            }}
          >
            {/* Decorative corner accent */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 rounded-tl-2xl" style={{ borderColor: '#D4AF37', opacity: 0.3 }}></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 rounded-br-2xl" style={{ borderColor: '#D4AF37', opacity: 0.3 }}></div>
            
            <h3 className="font-heading text-2xl font-bold mb-2" style={{ color: '#0B1C2D', fontFamily: 'Playfair Display, serif' }}>
              Still have questions?
            </h3>
            <p className="font-body mb-6" style={{ color: '#6B7280', fontFamily: 'Poppins, sans-serif' }}>
              Can't find the answer you're looking for? Please chat with our support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="px-6 py-3 font-heading font-semibold rounded-lg transition-all duration-300"
                style={{ 
                  background: 'linear-gradient(135deg, #0E2A47 0%, #071421 100%)',
                  color: '#F5E6C4',
                  fontFamily: 'Playfair Display, serif',
                  boxShadow: '0 4px 15px rgba(11, 28, 45, 0.2)'
                }}
                whileHover={{ scale: 1.05, boxShadow: '0 8px 25px rgba(212, 175, 55, 0.2)' }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Support
              </motion.button>
              
              <motion.button 
                className="px-6 py-3 font-heading font-semibold rounded-lg transition-all duration-300"
                style={{ 
                  background: 'transparent',
                  color: '#D4AF37',
                  fontFamily: 'Playfair Display, serif',
                  border: '2px solid #D4AF37'
                }}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(212, 175, 55, 0.05)' }}
                whileTap={{ scale: 0.95 }}
              >
                View All FAQs
              </motion.button>
            </div>
          </div>

          {/* Footer Note */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8"
          >
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-px" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37)' }} />
              <p className="font-body text-xs" style={{ color: '#9CA3AF', fontFamily: 'Poppins, sans-serif' }}>
                ⏱️ Last updated: March 2024 • 20 questions answered
              </p>
              <div className="w-12 h-px" style={{ background: 'linear-gradient(270deg, transparent, #D4AF37)' }} />
            </div>
          </motion.div>
        </motion.div>
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