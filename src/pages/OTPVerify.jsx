import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { verifyOTP } from "../services/api";

const OTPVerify = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes countdown
  const [resendDisabled, setResendDisabled] = useState(true);
  const inputRefs = useRef([]);
  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email;

  // Countdown timer
  useEffect(() => {
    if (timeLeft > 0 && resendDisabled) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setResendDisabled(false);
    }
  }, [timeLeft, resendDisabled]);

  // Format time
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // Handle OTP input change
  const handleChange = (index, value) => {
    if (value.length > 1) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Handle key press for backspace
  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Handle paste
  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    const pastedArray = pastedData.split("");
    const newOtp = [...otp];
    
    for (let i = 0; i < pastedArray.length; i++) {
      if (i < 6 && /^\d$/.test(pastedArray[i])) {
        newOtp[i] = pastedArray[i];
      }
    }
    
    setOtp(newOtp);
    
    // Focus last filled or next empty
    const lastFilledIndex = newOtp.findLastIndex((val) => val !== "");
    if (lastFilledIndex < 5) {
      inputRefs.current[lastFilledIndex + 1]?.focus();
    }
  };

  const handleVerify = async () => {
    const otpString = otp.join("");
    
    if (otpString.length !== 6) {
      setError("Please enter the complete 6-digit OTP");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await verifyOTP(email, otpString);

      if (res.data.success) {
        navigate("/dashboard", { state: { email } });
      } else {
        setError("Invalid OTP. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to verify OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    setResendDisabled(true);
    setTimeLeft(300);
    setError("");
    // Trigger resend OTP API here
    try {
      // await resendOTP(email);
      setError(""); // Clear any existing errors
    } catch (err) {
      setError("Failed to resend OTP. Please try again.");
      setResendDisabled(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleVerify();
    }
  };

  // Luxury Gold & Navy Theme Styles
  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0d1230 100%)",
      fontFamily: "'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      padding: "20px",
      position: "relative",
      overflow: "hidden",
    },
    bgDecoration1: {
      position: "absolute",
      top: "-20%",
      right: "-10%",
      width: "50%",
      height: "50%",
      background: "radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)",
      borderRadius: "50%",
      pointerEvents: "none",
    },
    bgDecoration2: {
      position: "absolute",
      bottom: "-20%",
      left: "-10%",
      width: "50%",
      height: "50%",
      background: "radial-gradient(circle, rgba(212, 175, 55, 0.06) 0%, transparent 70%)",
      borderRadius: "50%",
      pointerEvents: "none",
    },
    verifyCard: {
      backgroundColor: "rgba(13, 18, 48, 0.95)",
      backdropFilter: "blur(10px)",
      borderRadius: "24px",
      boxShadow: "0 25px 50px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(212, 175, 55, 0.2)",
      overflow: "hidden",
      width: "100%",
      maxWidth: "500px",
      animation: "slideIn 0.5s ease-out",
      position: "relative",
      zIndex: 1,
    },
    header: {
      background: "linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)",
      padding: "40px 30px",
      textAlign: "center",
      borderBottom: "2px solid",
      borderImage: "linear-gradient(90deg, #D4AF37, #FFD700, #D4AF37) 1",
      borderBottomStyle: "solid",
    },
    title: {
      background: "linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      margin: 0,
      fontSize: "28px",
      fontWeight: "700",
      letterSpacing: "2px",
    },
    subtitle: {
      color: "#D4AF37",
      margin: "8px 0 0",
      fontSize: "14px",
      fontWeight: "500",
      letterSpacing: "1px",
    },
    content: {
      padding: "45px 35px",
    },
    iconContainer: {
      textAlign: "center",
      marginBottom: "25px",
    },
    icon: {
      fontSize: "56px",
      filter: "drop-shadow(0 2px 8px rgba(212, 175, 55, 0.3))",
    },
    emailInfo: {
      textAlign: "center",
      marginBottom: "30px",
    },
    emailLabel: {
      color: "#a0a0c0",
      fontSize: "13px",
      marginBottom: "5px",
    },
    emailValue: {
      color: "#D4AF37",
      fontSize: "16px",
      fontWeight: "600",
      wordBreak: "break-all",
    },
    otpContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "12px",
      marginBottom: "30px",
      flexWrap: "wrap",
    },
    otpInput: {
      width: "55px",
      height: "65px",
      textAlign: "center",
      fontSize: "24px",
      fontWeight: "600",
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      border: "2px solid rgba(212, 175, 55, 0.3)",
      borderRadius: "12px",
      color: "#D4AF37",
      transition: "all 0.3s ease",
      fontFamily: "monospace",
    },
    timerContainer: {
      textAlign: "center",
      marginBottom: "25px",
    },
    timerText: {
      color: "#a0a0c0",
      fontSize: "14px",
      marginBottom: "5px",
    },
    timerValue: {
      color: "#D4AF37",
      fontSize: "20px",
      fontWeight: "700",
    },
    button: {
      width: "100%",
      padding: "14px",
      background: "linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)",
      color: "#0a0e27",
      border: "none",
      borderRadius: "12px",
      fontSize: "16px",
      fontWeight: "700",
      cursor: "pointer",
      transition: "all 0.3s ease",
      fontFamily: "inherit",
      textTransform: "uppercase",
      letterSpacing: "1px",
      marginBottom: "15px",
    },
    buttonDisabled: {
      background: "linear-gradient(135deg, #666 0%, #888 100%)",
      cursor: "not-allowed",
      opacity: 0.6,
    },
    resendButton: {
      background: "transparent",
      border: "none",
      color: "#D4AF37",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "600",
      textDecoration: "underline",
      transition: "color 0.3s ease",
    },
    resendButtonDisabled: {
      color: "#666",
      cursor: "not-allowed",
      textDecoration: "none",
    },
    errorMessage: {
      backgroundColor: "rgba(255, 69, 58, 0.15)",
      color: "#FF6B6B",
      padding: "12px",
      borderRadius: "10px",
      marginBottom: "20px",
      fontSize: "13px",
      textAlign: "center",
      border: "1px solid rgba(255, 69, 58, 0.3)",
    },
    infoText: {
      textAlign: "center",
      marginTop: "20px",
      fontSize: "12px",
      color: "#8888aa",
    },
    contactInfo: {
      textAlign: "center",
      marginTop: "25px",
      paddingTop: "20px",
      borderTop: "1px solid rgba(212, 175, 55, 0.2)",
      fontSize: "12px",
      color: "#8888aa",
    },
    contactLink: {
      color: "#D4AF37",
      textDecoration: "none",
      fontWeight: "600",
    },
    backLink: {
      display: "block",
      textAlign: "center",
      marginTop: "15px",
      color: "#a0a0c0",
      textDecoration: "none",
      fontSize: "13px",
      transition: "color 0.3s ease",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.bgDecoration1}></div>
      <div style={styles.bgDecoration2}></div>
      
      <div style={styles.verifyCard}>
        <div style={styles.header}>
          <h1 style={styles.title}>BHARAT EDUCATION</h1>
          <p style={styles.subtitle}>EXCELLENCE AWARDS</p>
        </div>

        <div style={styles.content}>
          <div style={styles.iconContainer}>
            <div style={styles.icon}>🔐</div>
          </div>

          <div style={styles.emailInfo}>
            <div style={styles.emailLabel}>Verification code sent to</div>
            <div style={styles.emailValue}>{email || "your email address"}</div>
          </div>

          {error && <div style={styles.errorMessage}>⚠️ {error}</div>}

          <div style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={index === 0 ? handlePaste : undefined}
                onKeyPress={handleKeyPress}
                style={styles.otpInput}
                onFocus={(e) => {
                  e.target.style.borderColor = "#FFD700";
                  e.target.style.boxShadow = "0 0 0 3px rgba(212, 175, 55, 0.2)";
                  e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(212, 175, 55, 0.3)";
                  e.target.style.boxShadow = "none";
                  e.target.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
                }}
                autoComplete="off"
              />
            ))}
          </div>

          <div style={styles.timerContainer}>
            <div style={styles.timerText}>
              {resendDisabled ? "OTP expires in" : "OTP has expired"}
            </div>
            <div style={styles.timerValue}>
              {resendDisabled ? formatTime(timeLeft) : "00:00"}
            </div>
          </div>

          <button
            onClick={handleVerify}
            disabled={loading}
            style={{
              ...styles.button,
              ...(loading && styles.buttonDisabled),
            }}
            onMouseEnter={(e) => {
              if (!loading) {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 5px 20px rgba(212, 175, 55, 0.4)";
              }
            }}
            onMouseLeave={(e) => {
              if (!loading) {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
              }
            }}
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>

          <div style={{ textAlign: "center" }}>
            <button
              onClick={handleResendOTP}
              disabled={resendDisabled}
              style={{
                ...styles.resendButton,
                ...(resendDisabled && styles.resendButtonDisabled),
              }}
              onMouseEnter={(e) => {
                if (!resendDisabled) {
                  e.target.style.color = "#FFD700";
                }
              }}
              onMouseLeave={(e) => {
                if (!resendDisabled) {
                  e.target.style.color = "#D4AF37";
                }
              }}
            >
              Resend OTP
            </button>
          </div>

          <div style={styles.infoText}>
            <p>📧 Didn't receive the code? Check your spam folder</p>
            <p style={{ fontSize: "11px", marginTop: "8px" }}>
              ⏰ OTP valid for 5 minutes
            </p>
          </div>

          <a 
            href="/login" 
            style={styles.backLink}
            onMouseEnter={(e) => e.target.style.color = "#D4AF37"}
            onMouseLeave={(e) => e.target.style.color = "#a0a0c0"}
          >
            ← Back to Login
          </a>

          <div style={styles.contactInfo}>
            <p>
              Need assistance? Contact us at{" "}
              <a href="mailto:beea@brainovision.in" style={styles.contactLink}>
                beea@brainovision.in
              </a>
            </p>
            <p style={{ marginTop: "5px" }}>
              📞{" "}
              <a href="tel:+917207775039" style={styles.contactLink}>
                +91 7207775039
              </a>
            </p>
          </div>
        </div>
      </div>

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
          
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(-40px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          
          input::-webkit-outer-spin-button,
          input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
          
          input[type=number] {
            -moz-appearance: textfield;
          }
        `}
      </style>
    </div>
  );
};

export default OTPVerify;