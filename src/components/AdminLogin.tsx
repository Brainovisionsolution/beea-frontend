import { useEffect } from "react";
import { motion } from "framer-motion";
import { adminGoogleLogin } from "../services/api";

declare global {
  interface Window {
    google: any;
  }
}

export default function AdminLogin() {
  useEffect(() => {
    if (!window.google) return;

    window.google.accounts.id.initialize({
      client_id:
        "390811460241-k0jqfumd2tle560ta1nbasjcbpcsprog.apps.googleusercontent.com",
      callback: handleLogin,
    });

    window.google.accounts.id.renderButton(
      document.getElementById("googleBtn"),
      {
        theme: "outline",
        size: "large",
        width: "280",
      }
    );
  }, []);

  const handleLogin = async (response: any) => {
    try {
      const res = await adminGoogleLogin(response.credential);

      localStorage.setItem("adminToken", res.data.token);

      window.location.href = "/admin";
    } catch (err) {
      console.error(err);

      alert("Access denied");
    }
  };

  return (
    <section
      className="relative min-h-screen overflow-hidden"
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

      {/* Top Left - Gold Geometric Pattern */}
      <div className="hidden md:block absolute top-10 left-10">
        <div className="w-20 h-20 rotate-12" style={{ backgroundColor: 'rgba(212, 175, 55, 0.08)' }} />
        <div className="w-14 h-14 -rotate-6 -mt-10 ml-10" style={{ backgroundColor: 'rgba(245, 230, 196, 0.08)' }} />
        <div className="w-8 h-8 rotate-45 -mt-6 ml-16" style={{ backgroundColor: 'rgba(212, 175, 55, 0.12)' }} />
      </div>

      {/* Top Right - Gold Circles */}
      <div className="hidden md:block absolute top-20 right-20">
        <div className="w-32 h-32 rounded-full" style={{ backgroundColor: 'rgba(212, 175, 55, 0.08)' }} />
        <div className="w-20 h-20 rounded-full -mt-16 mr-12" style={{ backgroundColor: 'rgba(245, 230, 196, 0.06)' }} />
        <div className="w-10 h-10 rounded-full -mt-6 mr-24" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }} />
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
      <motion.div
        className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full"
        style={{ backgroundColor: '#F9E7B3', opacity: 0.25 }}
        animate={{ y: [0, 8, 0], opacity: [0.25, 0.6, 0.25] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
      />

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-12">
        {/* Admin Login Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          <div
            className="relative rounded-2xl overflow-hidden backdrop-blur-sm p-8 md:p-10"
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(212, 175, 55, 0.25)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            }}
          >
            {/* Gold Accent Line Top */}
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{
                background: 'linear-gradient(90deg, transparent, #D4AF37, #F5E6C4, #D4AF37, transparent)',
              }}
            />

            {/* Gold Decorative Ring */}
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full border-2 opacity-20" style={{ borderColor: '#D4AF37' }} />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full border-2 opacity-10" style={{ borderColor: '#D4AF37' }} />

            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 md:gap-3 mb-4">
                <div className="w-8 md:w-10 h-px" style={{ backgroundColor: '#D4AF37', opacity: 0.5 }} />
                <span
                  className="font-heading text-xs md:text-sm font-semibold tracking-[0.2em] uppercase px-3 md:px-4 py-1.5 rounded-full"
                  style={{
                    color: '#D4AF37',
                    background: 'rgba(212, 175, 55, 0.08)',
                    border: '1px solid rgba(212, 175, 55, 0.25)',
                  }}
                >
                  ADMIN ACCESS
                </span>
                <div className="w-8 md:w-10 h-px" style={{ backgroundColor: '#D4AF37', opacity: 0.5 }} />
              </div>

              <h2
                className="font-heading text-2xl md:text-3xl font-bold mb-2"
                style={{ color: '#F5E6C4' }}
              >
                Welcome Back
              </h2>
              
              <div
                className="w-16 h-0.5 mx-auto mb-3"
                style={{
                  background: 'linear-gradient(90deg, transparent, #D4AF37, #F5E6C4, #D4AF37, transparent)',
                }}
              />

              <p
                className="font-body text-sm"
                style={{ color: '#A0AEC0' }}
              >
                Sign in to access the admin dashboard
              </p>
            </div>

            {/* Google Login Button Container */}
            <div className="flex justify-center py-6">
              <div id="googleBtn" className="google-btn-wrapper" />
            </div>

            {/* Decorative Bottom Section */}
            <div className="mt-8 pt-6 text-center border-t" style={{ borderColor: 'rgba(212, 175, 55, 0.15)' }}>
              <p
                className="font-body text-xs"
                style={{ color: '#4A5568' }}
              >
                Secure access only for authorized administrators
              </p>
              
              {/* Small Gold Accent */}
              <div className="flex items-center justify-center gap-2 mt-3">
                <div className="w-1 h-1 rounded-full" style={{ backgroundColor: '#D4AF37', opacity: 0.5 }} />
                <div className="w-1 h-1 rounded-full" style={{ backgroundColor: '#D4AF37', opacity: 0.3 }} />
                <div className="w-1 h-1 rounded-full" style={{ backgroundColor: '#D4AF37', opacity: 0.2 }} />
              </div>
            </div>

            {/* Gold Icon Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-5">
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                <path
                  d="M100 10 L120 40 L160 45 L130 70 L140 110 L100 90 L60 110 L70 70 L40 45 L80 40 L100 10Z"
                  stroke="#D4AF37"
                  strokeWidth="2"
                  fill="none"
                />
                <circle cx="100" cy="60" r="15" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
              </svg>
            </div>
          </div>

          {/* Footer Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-6 font-body text-xs"
            style={{ color: '#4A5568' }}
          >
            Powered by{' '}
            <span style={{ color: '#D4AF37' }}>Google Authentication</span>
          </motion.p>
        </motion.div>
      </div>

      <style>{`
        .font-heading {
          font-family: 'Playfair Display', serif;
        }
        
        .font-body {
          font-family: 'Poppins', sans-serif;
        }
        
        /* Custom Google Button Styling */
        .google-btn-wrapper {
          display: flex;
          justify-content: center;
          filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.2));
        }
        
        .google-btn-wrapper iframe {
          border-radius: 12px !important;
        }
        
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800&display=swap');
      `}</style>
    </section>
  );
}