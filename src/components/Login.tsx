import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Mail, Lock, LogIn, AlertCircle, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    // UPDATED: Removed password, added otp
    const [formData, setFormData] = useState({
        email: '',
        otp: ''
    });
    
    // NEW: Track OTP sent state
    const [otpSent, setOtpSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // COMPLETELY REPLACED: New handleSubmit with OTP flow
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
    if (!otpSent) {
        // STEP 1: Send OTP
        await axios.post(
            "/api/auth/send-login-otp",
            { email: formData.email }
        );

        setOtpSent(true);
        setError('');
    } else {
        // STEP 2: Verify OTP and Login
        const response = await axios.post(
            "/api/auth/verify-login-otp",
            {
                email: formData.email,
                otp: formData.otp
            },
            { withCredentials: true }
        );

        if (response.data.success) {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", JSON.stringify(response.data.user));

            navigate("/dashboard");
        }
    }
} catch (err: any) {
    setError(err.response?.data?.message || "Something went wrong");
} finally {
    setLoading(false);
}
    };
    // NEW: Reset OTP flow
    const handleBack = () => {
        setOtpSent(false);
        setFormData({ email: formData.email, otp: '' });
        setError('');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0B1A2F] to-[#132C42] p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md"
            >
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                    {/* Header - Updated based on step */}
                    <div className="bg-gradient-to-r from-[#D4AF37] to-[#F5E6C4] p-8 text-center">
                        <h1 className="text-3xl font-bold text-[#0B1A2F] mb-2">
                            {otpSent ? 'Enter OTP' : 'Welcome Back'}
                        </h1>
                        <p className="text-[#0B1A2F] opacity-80">
                            {otpSent 
                                ? `OTP sent to ${formData.email}` 
                                : 'Login to your BEE Awards dashboard'}
                        </p>
                    </div>

                    {/* Login Form */}
                    <form onSubmit={handleSubmit} className="p-8">
                        {error && (
                            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                                <p className="text-sm text-red-600">{error}</p>
                            </div>
                        )}

                        <div className="space-y-6">
                            {/* Email Field - Always visible */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        disabled={otpSent} // Disable email after OTP sent
                                        className={`w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent ${
                                            otpSent ? 'bg-gray-100' : ''
                                        }`}
                                        placeholder="Enter your email"
                                    />
                                </div>
                            </div>

                            {/* OTP Field - Only show after OTP sent */}
                            {otpSent && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Enter OTP
                                    </label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                        <input
                                            type="text"
                                            name="otp"
                                            value={formData.otp}
                                            onChange={handleChange}
                                            required
                                            maxLength={6}
                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                                            placeholder="Enter 6-digit OTP"
                                        />
                                    </div>
                                    <p className="text-xs text-gray-500 mt-2">
                                        Didn't receive OTP? Check your spam folder or{' '}
                                        <button 
                                            type="button"
                                            onClick={handleBack}
                                            className="text-[#D4AF37] hover:underline"
                                        >
                                            try again
                                        </button>
                                    </p>
                                </motion.div>
                            )}

                            {/* Submit Button - Text changes based on step */}
                            <button
                                type="submit"
                                disabled={loading || (otpSent && formData.otp.length !== 6)}
                                className={`w-full px-6 py-3 bg-[#D4AF37] text-[#0B1A2F] font-semibold rounded-lg transition-all flex items-center justify-center gap-2 ${
                                    loading || (otpSent && formData.otp.length !== 6) 
                                        ? 'opacity-50 cursor-not-allowed' 
                                        : 'hover:bg-[#F5E6C4] hover:scale-105'
                                }`}
                            >
                                {loading ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-[#0B1A2F] border-t-transparent rounded-full animate-spin" />
                                        {otpSent ? 'Verifying...' : 'Sending...'}
                                    </>
                                ) : (
                                    <>
                                        <LogIn className="w-5 h-5" />
                                        {otpSent ? 'Verify OTP & Login' : 'Send OTP'}
                                    </>
                                )}
                            </button>

                            {/* Back button - Show only in OTP step */}
                            {otpSent && (
                                <motion.button
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    type="button"
                                    onClick={handleBack}
                                    className="w-full px-6 py-3 border-2 border-gray-300 text-gray-600 font-semibold rounded-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
                                >
                                    <ArrowLeft className="w-5 h-5" />
                                    Back to Email
                                </motion.button>
                            )}
                        </div>

                        {/* Register Link - Only show in email step */}
                        {!otpSent && (
                            <div className="mt-6 text-center">
                                <p className="text-sm text-gray-600">
                                    New to BEE Awards?{' '}
                                    <a href="/nominate" className="text-[#D4AF37] font-semibold hover:underline">
                                        Nominate Now
                                    </a>
                                </p>
                            </div>
                        )}

                        {/* OTP Info - Only show in OTP step */}
                        {otpSent && (
                            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                                <p className="text-xs text-blue-600 text-center">
                                     OTP has been sent to your email. Please check your inbox.
                                </p>
                            </div>
                        )}
                    </form>
                </div>

                {/* Footer */}
                <p className="text-center mt-4 text-sm text-[#F5E6C4]">
                    © 2026 Bharath Education Excellence Awards. All rights reserved.
                </p>
            </motion.div>
        </div>
    );
};

export default Login;