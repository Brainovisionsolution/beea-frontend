import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Lock, CheckCircle, AlertCircle } from 'lucide-react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';

const ResetPassword: React.FC = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const token = searchParams.get('token');

    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [verifying, setVerifying] = useState<boolean>(true);
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<boolean>(false);
    const [tokenValid, setTokenValid] = useState<boolean>(false);

    // Verify token on mount
    useEffect(() => {
        const verifyToken = async () => {
            if (!token) {
                setError('No reset token provided');
                setVerifying(false);
                return;
            }

            try {
                const response = await axios.get(
                    `http://localhost:5000/api/auth/verify-reset-token/${token}`
                );
                
                if (response.data.valid) {
                    setTokenValid(true);
                } else {
                    setError('Invalid or expired reset token');
                }
            } catch (err) {
                setError('Failed to verify reset token');
            } finally {
                setVerifying(false);
            }
        };

        verifyToken();
    }, [token]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const response = await axios.post(
                'http://localhost:5000/api/auth/reset-password',
                { token, newPassword: password }
            );

            if (response.data.success) {
                setSuccess(true);
                setTimeout(() => {
                    navigate('/login');
                }, 3000);
            }
        } catch (err: any) {
            setError(err.response?.data?.message || 'Failed to reset password');
        } finally {
            setLoading(false);
        }
    };

    if (verifying) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0B1A2F] to-[#132C42]">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-[#F5E6C4]">Verifying your token...</p>
                </div>
            </div>
        );
    }

    if (!tokenValid) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0B1A2F] to-[#132C42] p-4"
            >
                <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
                    <div className="text-center mb-6">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-4">
                            <AlertCircle className="w-10 h-10 text-red-500" />
                        </div>
                        <h2 className="text-2xl font-bold text-[#0B1A2F] mb-2">Invalid or Expired Link</h2>
                        <p className="text-gray-600">
                            {error || 'The password reset link is invalid or has expired.'}
                        </p>
                    </div>

                    <div className="space-y-4">
                        <Link
                            to="/forgot-password"
                            className="block w-full px-6 py-3 bg-[#D4AF37] text-[#0B1A2F] font-semibold rounded-lg text-center hover:bg-[#F5E6C4] transition-colors"
                        >
                            Request New Link
                        </Link>
                        <Link
                            to="/login"
                            className="block text-center text-[#D4AF37] hover:underline"
                        >
                            Back to Login
                        </Link>
                    </div>
                </div>
            </motion.div>
        );
    }

    if (success) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0B1A2F] to-[#132C42] p-4"
            >
                <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
                    <div className="text-center mb-6">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
                            <CheckCircle className="w-10 h-10 text-green-500" />
                        </div>
                        <h2 className="text-2xl font-bold text-[#0B1A2F] mb-2">Password Reset Successful!</h2>
                        <p className="text-gray-600">
                            Your password has been reset successfully. Redirecting to login...
                        </p>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                        <motion.div
                            className="bg-[#D4AF37] h-2 rounded-full"
                            initial={{ width: '0%' }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 3 }}
                        />
                    </div>

                    <Link
                        to="/login"
                        className="block text-center text-[#D4AF37] hover:underline"
                    >
                        Click here if not redirected
                    </Link>
                </div>
            </motion.div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0B1A2F] to-[#132C42] p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md"
            >
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-[#D4AF37] to-[#F5E6C4] p-8 text-center">
                        <h1 className="text-3xl font-bold text-[#0B1A2F] mb-2">Reset Password</h1>
                        <p className="text-[#0B1A2F] opacity-80">
                            Enter your new password below
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="p-8">
                        {error && (
                            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                                <AlertCircle className="w-5 h-5 text-red-500" />
                                <p className="text-sm text-red-600">{error}</p>
                            </div>
                        )}

                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    New Password
                                </label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        minLength={6}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                                        placeholder="Enter new password"
                                    />
                                </div>
                                <p className="text-xs text-gray-500 mt-1">
                                    Minimum 6 characters
                                </p>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Confirm Password
                                </label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                                        placeholder="Confirm new password"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full px-6 py-3 bg-[#D4AF37] text-[#0B1A2F] font-semibold rounded-lg transition-all ${
                                    loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#F5E6C4] hover:scale-105'
                                }`}
                            >
                                {loading ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <div className="w-5 h-5 border-2 border-[#0B1A2F] border-t-transparent rounded-full animate-spin" />
                                        Resetting...
                                    </span>
                                ) : (
                                    'Reset Password'
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default ResetPassword;