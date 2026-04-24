import { motion } from 'framer-motion';

export default function VideoSection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden" style={{ backgroundColor: '#0A1628' }}>
      {/* Background Gradients */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #0A1628 0%, #0D1B2A 50%, #0A1628 100%)'
        }}
      />

      {/* Decorative Gold Elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 rounded-full blur-[120px] opacity-20 pointer-events-none" style={{ background: '#D4AF37' }} />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-[120px] opacity-10 pointer-events-none" style={{ background: '#D4AF37' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px" style={{ backgroundColor: '#D4AF37', opacity: 0.3 }} />
            <p
              className="text-sm font-heading font-semibold tracking-[0.25em] uppercase"
              style={{ color: '#D4AF37', fontFamily: 'Playfair Display, serif' }}
            >
              EVENT GLIMPSES
            </p>
            <div className="w-12 h-px" style={{ backgroundColor: '#D4AF37', opacity: 0.3 }} />
          </div>
          <h2 
            className="font-heading text-4xl md:text-5xl font-bold mb-4"
            style={{ color: '#FFFFFF', fontFamily: 'Playfair Display, serif' }}
          >
            Watch the <span style={{ color: '#D4AF37' }}>Highlights</span>
          </h2>
        </div>

        {/* Video Container with Enhanced Border Effects */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl relative group"
          style={{ 
            border: '1px solid rgba(212, 175, 55, 0.2)',
            boxShadow: '0 0 40px rgba(0, 0, 0, 0.6)'
          }}
        >
          {/* Pulsing Border Glow */}
          <motion.div 
            className="absolute -inset-[2px] rounded-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"
            style={{ border: '2px solid #D4AF37', filter: 'blur(8px)' }}
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Decorative Corners */}
          {/* Top Left */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37] z-20 rounded-tl-3xl translate-x-[-1px] translate-y-[-1px]" />
          {/* Top Right */}
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#D4AF37] z-20 rounded-tr-3xl translate-x-[1px] translate-y-[-1px]" />
          {/* Bottom Left */}
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#D4AF37] z-20 rounded-bl-3xl translate-x-[-1px] translate-y-[1px]" />
          {/* Bottom Right */}
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37] z-20 rounded-br-3xl translate-x-[1px] translate-y-[1px]" />

          {/* Aspect Ratio Box for Responsive Video */}
          <div className="relative pt-[56.25%] bg-black z-10">
            <iframe 
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/xKc8oQWZauE?si=xV1DbR_9yzZIZOpS" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>

          {/* Internal Polish Layer */}
          <div className="absolute inset-0 rounded-3xl pointer-events-none z-20" style={{ border: '1px solid rgba(255, 255, 255, 0.05)' }}></div>
        </motion.div>

        {/* Decorative underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-px w-48 mx-auto mt-12"
          style={{ 
            background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
            opacity: 0.3
          }}
        />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800&display=swap');
        .font-heading { font-family: 'Playfair Display', serif; }
        .font-body { font-family: 'Poppins', sans-serif; }
      `}</style>
    </section>
  );
}
