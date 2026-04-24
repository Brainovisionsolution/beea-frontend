import React, { useState } from "react";
import { submitNomination } from "../services/api";
import FormInput from "../components/FormInput";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const NominationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    age: "",
    gender: "",
    state: "",
    address: "",
    collegeName: "",
    designation: "",
    department: "",
    experience: "",
    institutionType: "",
    website: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      mobile: "",
      age: "",
      gender: "",
      state: "",
      address: "",
      collegeName: "",
      designation: "",
      department: "",
      experience: "",
      institutionType: "",
      website: "",
    });
    setSubmitted(false);
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Validation
    if (!formData.fullName || !formData.email || !formData.mobile || !formData.collegeName) {
      setMessage("Please fill all required fields");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // ✅ Email validation
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setMessage("Enter a valid email address");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // ✅ Mobile validation (optional but good)
    if (!/^[0-9]{10}$/.test(formData.mobile)) {
      setMessage("Enter a valid 10-digit mobile number");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    try {
      setLoading(true);
      setMessage("");
const data = {
  ...formData
};

await submitNomination(data);

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setMessage("Something went wrong. Please try again.");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } finally {
      setLoading(false);
    }
  };

  // Luxury Gold & Navy Blue Theme Styles
  const styles = {
    pageWrapper: {
      background: "linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0d1230 100%)",
      minHeight: "100vh",
      paddingTop: "80px", // to prevent overlap with fixed navbar
      overflow: "hidden", // to contain the decorative elements
      position: "relative",
    },
    container: {
      maxWidth: "1000px",
      margin: "0 auto",
      padding: "40px 20px",
      fontFamily: "'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      position: "relative",
      zIndex: 1,
    },
    // Decorative background elements
    bgDecoration1: {
      position: "fixed",
      top: "-30%",
      right: "-20%",
      width: "60%",
      height: "60%",
      background: "radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)",
      borderRadius: "50%",
      pointerEvents: "none",
      zIndex: 0,
    },
    bgDecoration2: {
      position: "fixed",
      bottom: "-30%",
      left: "-20%",
      width: "60%",
      height: "60%",
      background: "radial-gradient(circle, rgba(212, 175, 55, 0.06) 0%, transparent 70%)",
      borderRadius: "50%",
      pointerEvents: "none",
      zIndex: 0,
    },
    header: {
      textAlign: "center",
      marginBottom: "40px",
      position: "relative",
      zIndex: 1,
    },
    title: {
      fontSize: "36px",
      background: "linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      marginBottom: "10px",
      fontWeight: "700",
      letterSpacing: "2px",
      textShadow: "0 2px 4px rgba(0,0,0,0.3)",
    },
    goldAccent: {
      background: "linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    subtitle: {
      fontSize: "16px",
      color: "#a0a0c0",
      fontWeight: "500",
      letterSpacing: "1px",
    },
    formCard: {
      backgroundColor: "rgba(13, 18, 48, 0.95)",
      backdropFilter: "blur(10px)",
      borderRadius: "20px",
      padding: "45px",
      boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(212, 175, 55, 0.1)",
      position: "relative",
      zIndex: 1,
    },
    sectionTitle: {
      fontSize: "22px",
      background: "linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      marginBottom: "25px",
      marginTop: "15px",
      paddingBottom: "12px",
      borderBottom: "2px solid",
      borderImage: "linear-gradient(90deg, #D4AF37, #FFD700, #D4AF37) 1",
      borderBottomStyle: "solid",
      fontWeight: "600",
    },
    formGroup: {
      marginBottom: "20px",
    },
    label: {
      display: "block",
      marginBottom: "8px",
      fontWeight: "600",
      color: "#D4AF37",
      fontSize: "14px",
      letterSpacing: "0.5px",
    },
    requiredStar: {
      color: "#FFD700",
      marginLeft: "4px",
    },
    input: {
      width: "100%",
      padding: "12px 15px",
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      border: "1px solid rgba(212, 175, 55, 0.3)",
      borderRadius: "10px",
      fontSize: "14px",
      color: "#ffffff",
      transition: "all 0.3s ease",
      boxSizing: "border-box",
      fontFamily: "inherit",
    },
    select: {
      width: "100%",
      padding: "12px 15px",
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      border: "1px solid rgba(212, 175, 55, 0.3)",
      borderRadius: "10px",
      fontSize: "14px",
      color: "#ffffff",
      cursor: "pointer",
      boxSizing: "border-box",
      fontFamily: "inherit",
    },
    row: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "20px",
      marginBottom: "10px",
    },
    button: {
      background: "linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)",
      color: "#0a0e27",
      padding: "14px 30px",
      border: "none",
      borderRadius: "12px",
      fontSize: "16px",
      fontWeight: "700",
      cursor: "pointer",
      width: "100%",
      transition: "all 0.3s ease",
      marginTop: "20px",
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
      marginTop: "20px",
      textAlign: "center",
      border: "1px solid rgba(255, 69, 58, 0.3)",
    },
    // Modal Styles
    modalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.85)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 999,
      backdropFilter: "blur(8px)",
    },
    modalContent: {
      background: "linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)",
      padding: "45px",
      borderRadius: "20px",
      textAlign: "center",
      width: "450px",
      maxWidth: "90%",
      boxShadow: "0 25px 50px rgba(0,0,0,0.5), 0 0 0 1px rgba(212, 175, 55, 0.3)",
      animation: "slideIn 0.3s ease-out",
    },
    modalIcon: {
      fontSize: "70px",
      marginBottom: "20px",
    },
    modalTitle: {
      background: "linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontSize: "26px",
      marginBottom: "15px",
      fontWeight: "700",
    },
    modalEmail: {
      display: "inline-block",
      backgroundColor: "rgba(212, 175, 55, 0.15)",
      padding: "10px 20px",
      borderRadius: "25px",
      fontSize: "14px",
      fontWeight: "600",
      color: "#D4AF37",
      marginTop: "10px",
      border: "1px solid rgba(212, 175, 55, 0.3)",
    },
    modalText: {
      color: "#a0a0c0",
      lineHeight: "1.6",
      marginTop: "15px",
    },
    resetButton: {
      marginTop: "25px",
      padding: "12px 25px",
      background: "linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)",
      color: "#0a0e27",
      border: "none",
      borderRadius: "10px",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "700",
      transition: "all 0.3s ease",
      textTransform: "uppercase",
      letterSpacing: "1px",
    },
    contactInfo: {
      textAlign: "center",
      marginTop: "30px",
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
    optionStyle: {
      backgroundColor: "#1a1f3a",
      color: "#ffffff",
    },
  };

  return (
    <>
      <Navbar />
      <div style={styles.pageWrapper}>
        {/* Decorative Background Elements */}
        <div style={styles.bgDecoration1}></div>
        <div style={styles.bgDecoration2}></div>
        
        <div style={styles.container}>
          <div style={styles.header}>
            <h1 style={styles.title}>
              BHARAT EDUCATION <span style={styles.goldAccent}>EXCELLENCE AWARDS</span>
            </h1>
            <p style={styles.subtitle}>Nomination Form 2026</p>
          </div>

          <div style={{ textAlign: "center", marginBottom: "30px", position: "relative", zIndex: 1 }}>
            <Link to="/" style={{ color: "#D4AF37", textDecoration: "none", fontSize: "15px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "6px", border: "1px solid rgba(212, 175, 55, 0.3)", padding: "8px 16px", borderRadius: "20px", background: "rgba(212, 175, 55, 0.05)", transition: "all 0.3s ease" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(212, 175, 55, 0.15)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(212, 175, 55, 0.05)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Back to Home
            </Link>
          </div>

      <div style={styles.formCard}>
        {!submitted && (
          <form onSubmit={handleSubmit}>
            {/* Basic Information Section */}
            <h3 style={styles.sectionTitle}>📋 Basic Information</h3>
            
            <div style={styles.row}>
              <FormInput 
                label="Full Name" 
                name="fullName" 
                required 
                value={formData.fullName}
                onChange={handleChange}
                styles={styles}
              />
              <FormInput 
                label="Email" 
                name="email" 
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                styles={styles}
              />
            </div>

            <div style={styles.row}>
              <FormInput 
                label="Mobile" 
                name="mobile" 
                type="tel"
                required
                value={formData.mobile}
                onChange={handleChange}
                styles={styles}
              />
              <FormInput 
                label="Age" 
                name="age" 
                type="number"
                value={formData.age}
                onChange={handleChange}
                styles={styles}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Gender</label>
              <select 
                name="gender" 
                value={formData.gender}
                onChange={handleChange} 
                style={styles.select}
                autoComplete="off"
              >
                <option value="" style={styles.optionStyle}>Select Gender</option>
                <option style={styles.optionStyle}>Male</option>
                <option style={styles.optionStyle}>Female</option>
                <option style={styles.optionStyle}>Other</option>
              </select>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>State</label>
              <select 
                name="state" 
                value={formData.state}
                onChange={handleChange} 
                style={styles.select}
                autoComplete="off"
              >
                <option value="" style={styles.optionStyle}>Select State</option>
                <option style={styles.optionStyle}>Andhra Pradesh</option>
                <option style={styles.optionStyle}>Telangana</option>
                <option style={styles.optionStyle}>Tamil Nadu</option>
                <option style={styles.optionStyle}>Karnataka</option>
                <option style={styles.optionStyle}>Kerala</option>
                <option style={styles.optionStyle}>Maharashtra</option>
                <option style={styles.optionStyle}>Delhi</option>
                <option style={styles.optionStyle}>Gujarat</option>
                <option style={styles.optionStyle}>Rajasthan</option>
                <option style={styles.optionStyle}>Uttar Pradesh</option>
                <option style={styles.optionStyle}>West Bengal</option>
              </select>
            </div>

            <FormInput 
              label="Address" 
              name="address" 
              value={formData.address}
              onChange={handleChange}
              styles={styles}
            />

            {/* Professional Information Section */}
            <h3 style={styles.sectionTitle}>🏛️ Professional Information</h3>

            <FormInput 
              label="Institution Name" 
              name="collegeName" 
              required
              value={formData.collegeName}
              onChange={handleChange}
              styles={styles}
            />

            <div style={styles.formGroup}>
              <label style={styles.label}>Designation</label>
              <select 
                name="designation" 
                value={formData.designation}
                onChange={handleChange} 
                style={styles.select}
                autoComplete="off"
              >
                <option value="" style={styles.optionStyle}>Select Designation</option>
                <option style={styles.optionStyle}>Chairman</option>
                <option style={styles.optionStyle}>Vice Chairman</option>
                <option style={styles.optionStyle}>Secretary</option>
                <option style={styles.optionStyle}>Joint Secretary</option>
                <option style={styles.optionStyle}>Correspondent</option>
                <option style={styles.optionStyle}>Director</option>
                <option style={styles.optionStyle}>Trustee</option>
                <option style={styles.optionStyle}>President</option>
                <option style={styles.optionStyle}>Vice President</option>
                <option style={styles.optionStyle}>Dean</option>
                <option style={styles.optionStyle}>Associate Dean</option>
                <option style={styles.optionStyle}>Vice Chancellor</option>
                <option style={styles.optionStyle}>Pro Vice Chancellor</option>
                <option style={styles.optionStyle}>Registrar</option>
                <option style={styles.optionStyle}>Controller of Examinations</option>
                <option style={styles.optionStyle}>Principal</option>
                <option style={styles.optionStyle}>Vice Principal</option>
                <option style={styles.optionStyle}>Head of Department (HOD)</option>
                <option style={styles.optionStyle}>Placement Director</option>
                <option style={styles.optionStyle}>Placement Officer</option>
                <option style={styles.optionStyle}>Professor</option>
                <option style={styles.optionStyle}>Associate Professor</option>
                <option style={styles.optionStyle}>Assistant Professor</option>
                <option style={styles.optionStyle}>Administrative Officer</option>
                <option style={styles.optionStyle}>Academic Coordinator</option>
              </select>
            </div>

            <div style={styles.row}>
              <FormInput 
                label="Department" 
                name="department" 
                value={formData.department}
                onChange={handleChange}
                styles={styles}
              />
              <FormInput 
                label="Experience (Years)" 
                name="experience" 
                type="number"
                value={formData.experience}
                onChange={handleChange}
                styles={styles}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Institution Type</label>
              <select 
                name="institutionType" 
                value={formData.institutionType}
                onChange={handleChange} 
                style={styles.select}
                autoComplete="off"
              >
                <option value="" style={styles.optionStyle}>Select Type</option>
                <option style={styles.optionStyle}>School</option>
                <option style={styles.optionStyle}>PUC College</option>
                <option style={styles.optionStyle}>Degree College</option>
                <option style={styles.optionStyle}>Engineering College</option>
                <option style={styles.optionStyle}>University</option>
              </select>
            </div>

            <FormInput 
              label="Institution Website/Link" 
              name="website" 
              type="url"
              value={formData.website}
              onChange={handleChange}
              styles={styles}
            />

            <button 
              type="submit" 
              disabled={loading}
              style={{
                ...styles.button,
                ...(loading && styles.buttonDisabled)
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
              {loading ? "Submitting..." : "Submit Nomination"}
            </button>
          </form>
        )}

        {/* Error Message */}
        {message && !submitted && (
          <div style={styles.errorMessage}>
            ⚠️ {message}
          </div>
        )}

        {/* Contact Information */}
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

      {/* Success Modal */}
      {submitted && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <div style={styles.modalIcon}>🏆</div>
            <h3 style={styles.modalTitle}>Verification Email Sent!</h3>
            <p style={styles.modalText}>Please check your email at:</p>
            <div style={styles.modalEmail}>{formData.email}</div>
            <p style={styles.modalText}>
              Click the link in your email to complete Phase 1 of your nomination for the<br />
              <strong style={{ color: "#D4AF37" }}>Bharat Education Excellence Awards 2025-26</strong>
            </p>
            <button
              onClick={resetForm}
              style={styles.resetButton}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 5px 20px rgba(212, 175, 55, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
              }}
            >
              Submit Another Response
            </button>
          </div>
        </div>
      )}

      {/* Add keyframe animation */}
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
          
          input:focus, select:focus {
            outline: none;
            border-color: #FFD700 !important;
            box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.2) !important;
            background-color: rgba(255, 255, 255, 0.1) !important;
          }
          
          input::placeholder, select::placeholder {
            color: rgba(255, 255, 255, 0.3);
          }
          
          select option {
            background-color: #1a1f3a;
            color: #ffffff;
          }
          
          input:-webkit-autofill,
          input:-webkit-autofill:focus {
            transition: background-color 600000s 0s, color 600000s 0s;
          }
        `}
      </style>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NominationForm;