// frontend/src/components/EmailVerification.jsx
import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { nominationAPI } from '../services/api';
import { toast } from 'react-toastify';

const EmailVerification = () => {
    const [searchParams] = useSearchParams();
    const [status, setStatus] = useState('verifying');
    const navigate = useNavigate();

    useEffect(() => {
        const verifyEmail = async () => {
            const token = searchParams.get('token');
            const id = searchParams.get('id');

            if (!token || !id) {
                setStatus('invalid');
                toast.error('Invalid verification link');
                return;
            }

            try {
                const response = await nominationAPI.verifyEmail(token, id);
                setStatus('success');
                toast.success(response.data.message);
                
                setTimeout(() => {
                    navigate('/login');
                }, 3000);
            } catch (error) {
                setStatus('error');
                toast.error(error.response?.data?.error || 'Verification failed');
            }
        };

        verifyEmail();
    }, [searchParams, navigate]);

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                {status === 'verifying' && (
                    <>
                        <div style={styles.spinner}></div>
                        <h2 style={styles.title}>Verifying Your Email...</h2>
                        <p style={styles.message}>Please wait while we verify your email address.</p>
                    </>
                )}
                
                {status === 'success' && (
                    <>
                        <div style={styles.successIcon}>✓</div>
                        <h2 style={styles.successTitle}>Email Verified Successfully!</h2>
                        <p style={styles.message}>Your nomination has been confirmed.</p>
                        <p style={styles.message}>Redirecting you to login page...</p>
                    </>
                )}
                
                {status === 'error' && (
                    <>
                        <div style={styles.errorIcon}>✗</div>
                        <h2 style={styles.errorTitle}>Verification Failed</h2>
                        <p style={styles.message}>The verification link may be invalid or expired.</p>
                        <button onClick={() => navigate('/nominate')} style={styles.button}>
                            Submit New Nomination
                        </button>
                    </>
                )}
                
                {status === 'invalid' && (
                    <>
                        <div style={styles.errorIcon}>✗</div>
                        <h2 style={styles.errorTitle}>Invalid Verification Link</h2>
                        <button onClick={() => navigate('/nominate')} style={styles.button}>
                            Go to Nomination Form
                        </button>
                    </>
                )}
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
        textAlign: 'center',
        maxWidth: '400px',
        width: '100%'
    },
    spinner: {
        width: '50px',
        height: '50px',
        border: '3px solid #f3f3f3',
        borderTop: '3px solid #4CAF50',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        margin: '0 auto 20px'
    },
    title: {
        color: '#333',
        marginBottom: '10px'
    },
    message: {
        color: '#666',
        marginBottom: '10px'
    },
    successIcon: {
        width: '60px',
        height: '60px',
        backgroundColor: '#4CAF50',
        color: 'white',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '40px',
        margin: '0 auto 20px'
    },
    successTitle: {
        color: '#4CAF50',
        marginBottom: '10px'
    },
    errorIcon: {
        width: '60px',
        height: '60px',
        backgroundColor: '#f44336',
        color: 'white',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '40px',
        margin: '0 auto 20px'
    },
    errorTitle: {
        color: '#f44336',
        marginBottom: '10px'
    },
    button: {
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '14px',
        marginTop: '20px'
    }
};

// Add keyframe animation
const styleSheet = document.createElement("style");
styleSheet.textContent = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(styleSheet);

export default EmailVerification;