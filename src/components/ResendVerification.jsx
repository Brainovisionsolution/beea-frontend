// frontend/src/components/ResendVerification.jsx
import React, { useState } from 'react';
import { nominationAPI } from '../services/api';
import { toast } from 'react-toastify';

const ResendVerification = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleResend = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await nominationAPI.resendVerification(email);
            toast.success(response.data.message);
            setEmail('');
        } catch (error) {
            toast.error(error.response?.data?.error || 'Failed to resend verification');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h3 style={styles.title}>Didn't receive verification email?</h3>
                <form onSubmit={handleResend} style={styles.form}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={styles.input}
                    />
                    <button type="submit" disabled={loading} style={loading ? styles.buttonDisabled : styles.button}>
                        {loading ? 'Sending...' : 'Resend Verification Email'}
                    </button>
                </form>
            </div>
        </div>
    );
};

const styles = {
    container: {
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px'
    },
    card: {
        textAlign: 'center'
    },
    title: {
        margin: '0 0 15px 0',
        color: '#666',
        fontSize: '16px'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
    },
    input: {
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        fontSize: '14px'
    },
    button: {
        backgroundColor: '#2196F3',
        color: 'white',
        padding: '10px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '14px'
    },
    buttonDisabled: {
        backgroundColor: '#ccc',
        color: 'white',
        padding: '10px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'not-allowed',
        fontSize: '14px'
    }
};

export default ResendVerification;