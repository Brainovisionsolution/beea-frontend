// frontend/src/components/Login.jsx
import React, { useState } from 'react';
import { authAPI } from '../services/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import ResendVerification from './ResendVerification';

const Login = () => {
    const [step, setStep] = useState('email');
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false);
    const [showResend, setShowResend] = useState(false);
    const navigate = useNavigate();

    const handleRequestOTP = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await authAPI.requestOTP(email);
            toast.success(response.data.message);
            setStep('otp');
            setShowResend(false);
        } catch (error) {
            if (error.response?.status === 404) {
                setShowResend(true);
            }
            toast.error(error.response?.data?.error || 'Failed to send OTP');
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyOTP = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await authAPI.verifyOTP(email, otp);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            toast.success(`Welcome back, ${response.data.user.fullname}!`);
            navigate('/dashboard');
        } catch (error) {
            toast.error(error.response?.data?.error || 'Invalid OTP');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <div style={styles.header}>
                    <h2 style={styles.title}>🏆 BEEA Awards 2026</h2>
                    <p style={styles.subtitle}>Nomination Dashboard Login</p>
                </div>
                
                {step === 'email' ? (
                    <form onSubmit={handleRequestOTP} style={styles.form}>
                        <div style={styles.formGroup}>
                            <label style={styles.label}>Email Address</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="Enter your registered email"
                                autoFocus
                                style={styles.input}
                            />
                        </div>
                        <button type="submit" disabled={loading} style={loading ? styles.buttonDisabled : styles.button}>
                            {loading ? 'Sending OTP...' : 'Send Login OTP'}
                        </button>
                    </form>
                ) : (
                    <form onSubmit={handleVerifyOTP} style={styles.form}>
                        <div style={styles.formGroup}>
                            <label style={styles.label}>Enter OTP</label>
                            <input
                                type="text"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                required
                                placeholder="6-digit OTP"
                                maxLength="6"
                                autoFocus
                                style={styles.input}
                            />
                            <small style={styles.helperText}>OTP sent to {email}</small>
                        </div>
                        <button type="submit" disabled={loading} style={loading ? styles.buttonDisabled : styles.button}>
                            {loading ? 'Verifying...' : 'Verify & Login'}
                        </button>
                        <button 
                            type="button" 
                            onClick={() => setStep('email')} 
                            style={styles.backButton}
                        >
                            ← Back
                        </button>
                    </form>
                )}
                
                {showResend && <ResendVerification />}
                
                <div style={styles.footer}>
                    <p>New to BEEA Awards? <a href="/nominate" style={styles.link}>Submit Nomination</a></p>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
    },
    card: {
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
        padding: '40px',
        width: '100%',
        maxWidth: '400px'
    },
    header: {
        textAlign: 'center',
        marginBottom: '30px'
    },
    title: {
        margin: 0,
        color: '#333',
        fontSize: '24px'
    },
    subtitle: {
        margin: '10px 0 0',
        color: '#666',
        fontSize: '14px'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
    },
    formGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
    },
    label: {
        fontWeight: 'bold',
        color: '#555',
        fontSize: '14px'
    },
    input: {
        padding: '12px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        fontSize: '14px',
        transition: 'border-color 0.3s'
    },
    helperText: {
        color: '#999',
        fontSize: '12px'
    },
    button: {
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '12px',
        border: 'none',
        borderRadius: '5px',
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'background-color 0.3s'
    },
    buttonDisabled: {
        backgroundColor: '#ccc',
        color: 'white',
        padding: '12px',
        border: 'none',
        borderRadius: '5px',
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: 'not-allowed'
    },
    backButton: {
        backgroundColor: '#f0f0f0',
        color: '#666',
        padding: '10px',
        border: 'none',
        borderRadius: '5px',
        fontSize: '14px',
        cursor: 'pointer',
        transition: 'background-color 0.3s'
    },
    footer: {
        marginTop: '20px',
        textAlign: 'center',
        color: '#666',
        fontSize: '14px'
    },
    link: {
        color: '#4CAF50',
        textDecoration: 'none',
        fontWeight: 'bold'
    }
};

export default Login;