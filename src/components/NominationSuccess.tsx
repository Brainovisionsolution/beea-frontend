import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Award, ArrowRight, Copy, Check } from 'lucide-react';

const NominationSuccess: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const nominationId = searchParams.get("nominationId");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // If no nominationId, redirect to home after 3 seconds
    if (!nominationId) {
      const timer = setTimeout(() => {
        navigate('/');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [nominationId, navigate]);

  const handleCopy = () => {
    if (nominationId) {
      navigator.clipboard.writeText(nominationId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!nominationId) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-lg rounded-xl p-10 max-w-md text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D4AF37] mx-auto mb-4"></div>
          <p className="text-gray-600">Redirecting to home page...</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-[#0B1A2F] to-[#132C42] flex items-center justify-center p-6"
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: "spring", duration: 0.6 }}
        className="bg-white shadow-2xl rounded-2xl p-10 max-w-2xl w-full"
      >
        {/* Success Icon */}
        <div className="text-center mb-8">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6"
          >
            <CheckCircle className="w-14 h-14 text-green-500" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-bold text-[#0B1A2F] mb-3"
          >
            Nomination Verified!
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-2 text-[#D4AF37]"
          >
            <Award className="w-5 h-5" />
            <span className="font-semibold">BEE Awards 2026</span>
          </motion.div>
        </div>

        {/* Success Message */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mb-8"
        >
          <p className="text-gray-600 text-lg mb-2">
            Your nomination has been successfully verified and confirmed.
          </p>
          <p className="text-gray-500">
            Thank you for participating in the Bharath Education Excellence Awards 2026.
          </p>
        </motion.div>

        {/* Nomination ID Card */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-[#0B1A2F] to-[#132C42] rounded-xl p-8 mb-8 text-center"
        >
          <p className="text-[#F5E6C4] text-sm uppercase tracking-wider mb-2">
            Your Nomination ID
          </p>
          
          <div className="flex items-center justify-center gap-3 mb-4">
            <p className="text-3xl font-bold text-[#D4AF37] font-mono">
              {nominationId}
            </p>
            <button
              onClick={handleCopy}
              className="p-2 hover:bg-[#D4AF37]/20 rounded-lg transition-colors group"
              title="Copy to clipboard"
            >
              {copied ? (
                <Check className="w-5 h-5 text-green-400" />
              ) : (
                <Copy className="w-5 h-5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
              )}
            </button>
          </div>

          <div className="border-t border-[#D4AF37]/30 pt-4">
            <p className="text-[#F5E6C4] text-sm">
              Use this ID to track your nomination status
            </p>
            <p className="text-[#F5E6C4]/70 text-xs mt-2">
              Save this ID for future reference
            </p>
          </div>
        </motion.div>

        {/* Next Steps */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="space-y-4 mb-8"
        >
          <h3 className="font-semibold text-[#0B1A2F]">Next Steps:</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-medium text-[#0B1A2F] mb-2">1. Login to Dashboard</p>
              <p className="text-sm text-gray-600">
                Access your dashboard to track nomination status and update information.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-medium text-[#0B1A2F] mb-2">2. Wait for Review</p>
              <p className="text-sm text-gray-600">
                Our team will review your nomination within 3-5 working days.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-medium text-[#0B1A2F] mb-2">3. Check Email/SMS</p>
              <p className="text-sm text-gray-600">
                You'll receive updates about your nomination status via email and SMS.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-medium text-[#0B1A2F] mb-2">4. Shortlist Process</p>
              <p className="text-sm text-gray-600">
                Shortlisted nominees will be contacted for further evaluation.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={() => navigate('/login')}
            className="flex-1 px-6 py-3 bg-[#D4AF37] text-[#0B1A2F] font-semibold rounded-lg hover:bg-[#F5E6C4] transition-all hover:scale-105 flex items-center justify-center gap-2 group"
          >
            Login to Dashboard
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={() => window.print()}
            className="flex-1 px-6 py-3 border-2 border-[#D4AF37] text-[#D4AF37] font-semibold rounded-lg hover:bg-[#D4AF37] hover:text-[#0B1A2F] transition-all"
          >
            Save / Print Details
          </button>
        </motion.div>

        {/* Login Credentials Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-6 text-center"
        >
          <p className="text-sm text-gray-500">
            <span className="font-semibold">Login credentials:</span> Use your email and Nomination ID as password
          </p>
          <p className="text-xs text-gray-400 mt-2">
            You'll receive a confirmation email with these details shortly.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default NominationSuccess;