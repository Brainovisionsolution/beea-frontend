import React, { useState } from "react";
import { sendOTP } from "../services/api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    // Validation
    if (!email) {
      setError("Please enter your email address");
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await sendOTP(email);
      navigate("/otp", { state: { email } });
    } catch (err) {
      console.error(err);
      setError("Failed to send OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  // Luxury Gold & Navy Blue Theme Styles
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
    // Decorative background elements
    bgDecoration1: {
      position: "absolute",
      top: "-50%",
      right: "-20%",
      width: "70%",
      height: "70%",
      background: "radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)",
      borderRadius: "50%",
      pointerEvents: "none",
    },
    bgDecoration2: {
      position: "absolute",
      bottom: "-50%",
      left: "-20%",
      width: "70%",
      height: "70%",
      background: "radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)",
      borderRadius: "50%",
      pointerEvents: "none",
    },
    loginCard: {
      backgroundColor: "rgba(13, 18, 48, 0.95)",
      backdropFilter: "blur(10px)",
      borderRadius: "20px",
      boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(212, 175, 55, 0.1)",
      overflow: "hidden",
      width: "100%",
      maxWidth: "480px",
      animation: "slideIn 0.5s ease-out",
      position: "relative",
      zIndex: 1,
    },
    header: {
      background: "linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)",
      padding: "45px 30px",
      textAlign: "center",
      borderBottom: "2px solid",
      borderImage: "linear-gradient(90deg, #D4AF37, #FFD700, #D4AF37) 1",
      borderBottomStyle: "solid",
    },
    title: {
      color: "#D4AF37",
      margin: 0,
      fontSize: "28px",
      fontWeight: "700",
      letterSpacing: "2px",
      textShadow: "0 2px 4px rgba(0,0,0,0.3)",
    },
    subtitle: {
      background: "linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      margin: "8px 0 0",
      fontSize: "14px",
      fontWeight: "600",
      letterSpacing: "1px",
    },
    content: {
      padding: "40px 35px",
    },
    iconContainer: {
      textAlign: "center",
      marginBottom: "20px",
    },
    icon: {
      fontSize: "56px",
      filter: "drop-shadow(0 2px 8px rgba(212, 175, 55, 0.3))",
    },
    welcomeText: {
      textAlign: "center",
      marginBottom: "30px",
    },
    welcomeTitle: {
      background: "linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontSize: "24px",
      fontWeight: "700",
      marginBottom: "8px",
    },
    welcomeSubtitle: {
      color: "#a0a0c0",
      fontSize: "14px",
      margin: 0,
    },
    formGroup: {
      marginBottom: "25px",
    },
    label: {
      display: "block",
      marginBottom: "8px",
      fontWeight: "600",
      color: "#D4AF37",
      fontSize: "14px",
      letterSpacing: "0.5px",
    },
    input: {
      width: "100%",
      padding: "14px 16px",
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      border: "1px solid rgba(212, 175, 55, 0.3)",
      borderRadius: "12px",
      fontSize: "14px",
      color: "#ffffff",
      transition: "all 0.3s ease",
      boxSizing: "border-box",
      fontFamily: "inherit",
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
    },
    buttonDisabled: {
      background: "linear-gradient(135deg, #666 0%, #888 100%)",
      cursor: "not-allowed",
      opacity: 0.6,
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
      transition: "color 0.3s ease",
    },
    goldText: {
      color: "#D4AF37",
    },
    // Footer decoration
    footerDecoration: {
      height: "3px",
      background: "linear-gradient(90deg, transparent, #D4AF37, #FFD700, #D4AF37, transparent)",
      width: "100%",
    },
  };

  return (
    <div style={styles.container}>
      {/* Decorative Background Elements */}
      <div style={styles.bgDecoration1}></div>
      <div style={styles.bgDecoration2}></div>
      
      <div style={styles.loginCard}>
        <div style={styles.header}>
          <h1 style={styles.title}>BHARAT EDUCATION</h1>
          <p style={styles.subtitle}>EXCELLENCE AWARDS</p>
        </div>

        <div style={styles.content}>
          <div style={styles.iconContainer}>
            <div style={styles.icon}></div>
          </div>

          <div style={styles.welcomeText}>
            <h3 style={styles.welcomeTitle}>Welcome Back!</h3>
            <p style={styles.welcomeSubtitle}>
              Login to access your nomination dashboard
            </p>
          </div>

          {error && <div style={styles.errorMessage}>⚠️ {error}</div>}

          <div style={styles.formGroup}>
            <label style={styles.label}>Email Address</label>
            <input
              type="email"
              placeholder="Enter your registered email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              onKeyPress={handleKeyPress}
              style={styles.input}
              onFocus={(e) => {
                e.target.style.borderColor = "#D4AF37";
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
          </div>

          <button
            onClick={handleLogin}
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
            {loading ? "Sending OTP..." : "Send OTP"}
          </button>

          <div style={styles.infoText}>
            <p> OTP will be sent to your registered email</p>
            <p style={{ fontSize: "11px", marginTop: "8px" }}>
               OTP valid for 10 minutes
            </p>
          </div>

          <div style={styles.contactInfo}>
            <p>
              Need assistance? Contact us at{" "}
              <a 
                href="mailto:beea@brainovision.in" 
                style={styles.contactLink}
                onMouseEnter={(e) => e.target.style.color = "#FFD700"}
                onMouseLeave={(e) => e.target.style.color = "#D4AF37"}
              >
                beea@brainovision.in
              </a>
            </p>
            <p style={{ marginTop: "5px" }}>
              📞{" "}
              <a 
                href="tel:+917207775039" 
                style={styles.contactLink}
                onMouseEnter={(e) => e.target.style.color = "#FFD700"}
                onMouseLeave={(e) => e.target.style.color = "#D4AF37"}
              >
                +91 7207775039
              </a>
            </p>
          </div>
        </div>
        
        <div style={styles.footerDecoration}></div>
      </div>

      {/* Add animation styles */}
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
          
          input::placeholder {
            color: rgba(255, 255, 255, 0.3);
          }
          
          input:-webkit-autofill,
          input:-webkit-autofill:focus {
            transition: background-color 600000s 0s, color 600000s 0s;
          }
        `}
      </style>
    </div>
  );
};

export default Login;