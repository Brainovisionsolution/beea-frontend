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

    if (!formData.fullName || !formData.email || !formData.mobile || !formData.collegeName) {
      setMessage("Please fill all required fields");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setMessage("Enter a valid email address");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (!/^[0-9]{10}$/.test(formData.mobile)) {
      setMessage("Enter a valid 10-digit mobile number");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    try {
      setLoading(true);
      setMessage("");
      const data = { ...formData };
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

  const styles = {
    /* ── Background: sticky b1.png with a deep-navy overlay ── */
    pageWrapper: {
      position: "relative",
      minHeight: "100vh",
      paddingTop: "80px",
      overflow: "hidden",
    },
    /* Fixed background image – stays in place while content scrolls */
    bgImage: {
      position: "fixed",
      inset: 0,
      backgroundImage: "url('/b1.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      zIndex: 0,
    },
    /* Dark navy overlay on top of the image for readability */
    bgOverlay: {
      position: "fixed",
      inset: 0,
      background:
        "linear-gradient(135deg, rgba(8,12,35,0.88) 0%, rgba(14,20,55,0.82) 50%, rgba(6,10,30,0.90) 100%)",
      zIndex: 1,
    },
    /* Subtle gold radial glow accents */
    bgDecoration1: {
      position: "fixed",
      top: "-25%",
      right: "-15%",
      width: "55%",
      height: "55%",
      background:
        "radial-gradient(circle, rgba(212,175,55,0.10) 0%, transparent 70%)",
      borderRadius: "50%",
      pointerEvents: "none",
      zIndex: 2,
    },
    bgDecoration2: {
      position: "fixed",
      bottom: "-25%",
      left: "-15%",
      width: "55%",
      height: "55%",
      background:
        "radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%)",
      borderRadius: "50%",
      pointerEvents: "none",
      zIndex: 2,
    },

    /* ── Layout ── */
    container: {
      maxWidth: "1000px",
      margin: "0 auto",
      padding: "40px 20px",
      fontFamily: "'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      position: "relative",
      zIndex: 3,
    },
    header: {
      textAlign: "center",
      marginBottom: "40px",
    },
    title: {
      fontSize: "clamp(24px, 4vw, 38px)",
      background: "linear-gradient(135deg, #C9A227 0%, #FFD700 50%, #C9A227 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      marginBottom: "10px",
      fontWeight: "800",
      letterSpacing: "2px",
      lineHeight: 1.2,
    },
    goldAccent: {
      background: "linear-gradient(135deg, #FFD700 0%, #C9A227 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },
    subtitle: {
      fontSize: "15px",
      color: "#b0b4cc",
      fontWeight: "500",
      letterSpacing: "3px",
      textTransform: "uppercase",
    },

    /* ── Form card ── */
    formCard: {
      backgroundColor: "rgba(8, 13, 40, 0.82)",
      backdropFilter: "blur(14px)",
      WebkitBackdropFilter: "blur(14px)",
      borderRadius: "20px",
      padding: "45px",
      boxShadow:
        "0 30px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(212,175,55,0.18), inset 0 1px 0 rgba(212,175,55,0.08)",
    },
    sectionTitle: {
      fontSize: "20px",
      background: "linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      marginBottom: "25px",
      marginTop: "15px",
      paddingBottom: "12px",
      borderBottom: "1px solid rgba(212,175,55,0.35)",
      fontWeight: "700",
      letterSpacing: "0.5px",
    },
    formGroup: {
      marginBottom: "20px",
    },
    label: {
      display: "block",
      marginBottom: "8px",
      fontWeight: "600",
      color: "#D4AF37",
      fontSize: "13px",
      letterSpacing: "0.5px",
      textTransform: "uppercase",
    },
    input: {
      width: "100%",
      padding: "12px 15px",
      backgroundColor: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(212,175,55,0.28)",
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
      backgroundColor: "rgba(10,14,40,0.95)",
      border: "1px solid rgba(212,175,55,0.28)",
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

    /* ── Button: Champagne Gold with dark navy text ── */
    button: {
      background: "linear-gradient(135deg, #C9A227 0%, #FFD700 50%, #C9A227 100%)",
      backgroundSize: "200% 100%",
      color: "#0a0e27",
      padding: "15px 30px",
      border: "none",
      borderRadius: "12px",
      fontSize: "15px",
      fontWeight: "800",
      cursor: "pointer",
      width: "100%",
      transition: "all 0.35s ease",
      marginTop: "20px",
      fontFamily: "inherit",
      textTransform: "uppercase",
      letterSpacing: "2px",
      boxShadow: "0 4px 20px rgba(212,175,55,0.30)",
    },
    buttonDisabled: {
      background: "linear-gradient(135deg, #555 0%, #777 100%)",
      cursor: "not-allowed",
      opacity: 0.55,
      boxShadow: "none",
    },
    errorMessage: {
      backgroundColor: "rgba(255,69,58,0.12)",
      color: "#FF6B6B",
      padding: "12px 16px",
      borderRadius: "10px",
      marginTop: "20px",
      textAlign: "center",
      border: "1px solid rgba(255,69,58,0.28)",
      fontSize: "14px",
    },

    /* ── Modal ── */
    modalOverlay: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.88)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 999,
      backdropFilter: "blur(10px)",
    },
    modalContent: {
      background:
        "linear-gradient(160deg, #080c23 0%, #131830 100%)",
      border: "1px solid rgba(212,175,55,0.30)",
      padding: "50px 45px",
      borderRadius: "20px",
      textAlign: "center",
      width: "450px",
      maxWidth: "92%",
      boxShadow:
        "0 30px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(212,175,55,0.15)",
      animation: "slideIn 0.35s cubic-bezier(0.16,1,0.3,1)",
    },
    modalIcon: {
      fontSize: "72px",
      marginBottom: "18px",
    },
    modalTitle: {
      background: "linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      fontSize: "26px",
      marginBottom: "12px",
      fontWeight: "800",
    },
    modalEmail: {
      display: "inline-block",
      backgroundColor: "rgba(212,175,55,0.12)",
      padding: "10px 22px",
      borderRadius: "25px",
      fontSize: "14px",
      fontWeight: "600",
      color: "#D4AF37",
      marginTop: "10px",
      border: "1px solid rgba(212,175,55,0.28)",
    },
    modalText: {
      color: "#a0a4c0",
      lineHeight: "1.7",
      marginTop: "14px",
      fontSize: "14px",
    },
    resetButton: {
      marginTop: "28px",
      padding: "13px 28px",
      background: "linear-gradient(135deg, #C9A227 0%, #FFD700 100%)",
      color: "#0a0e27",
      border: "none",
      borderRadius: "10px",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "800",
      transition: "all 0.3s ease",
      textTransform: "uppercase",
      letterSpacing: "1.5px",
      boxShadow: "0 4px 16px rgba(212,175,55,0.30)",
    },

    /* ── Footer contact ── */
    contactInfo: {
      textAlign: "center",
      marginTop: "32px",
      paddingTop: "20px",
      borderTop: "1px solid rgba(212,175,55,0.15)",
      fontSize: "12px",
      color: "#7880a0",
    },
    contactLink: {
      color: "#D4AF37",
      textDecoration: "none",
      fontWeight: "600",
    },
    optionStyle: {
      backgroundColor: "#111530",
      color: "#ffffff",
    },

    /* ── Back link ── */
    backLink: {
      color: "#D4AF37",
      textDecoration: "none",
      fontSize: "14px",
      fontWeight: "600",
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      border: "1px solid rgba(212,175,55,0.28)",
      padding: "8px 18px",
      borderRadius: "20px",
      background: "rgba(212,175,55,0.06)",
      transition: "all 0.3s ease",
    },
  };

  return (
    <>
      <Navbar />
      <div style={styles.pageWrapper}>
        {/* Sticky background image */}
        <div style={styles.bgImage} />
        {/* Navy overlay */}
        <div style={styles.bgOverlay} />
        {/* Gold glow accents */}
        <div style={styles.bgDecoration1} />
        <div style={styles.bgDecoration2} />

        <div style={styles.container}>
          {/* Header */}
          <div style={styles.header}>
            <h1 style={styles.title}>
              BHARAT EDUCATION{" "}
              <span style={styles.goldAccent}>EXCELLENCE AWARDS</span>
            </h1>
            <p style={styles.subtitle}>Nomination Form 2026</p>
          </div>

          {/* Back link */}
          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <Link
              to="/"
              style={styles.backLink}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(212,175,55,0.16)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(212,175,55,0.06)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
          </div>

          {/* Form Card */}
          <div style={styles.formCard}>
            {!submitted && (
              <form onSubmit={handleSubmit}>
                {/* Basic Information */}
                <h3 style={styles.sectionTitle}>📋 Basic Information</h3>

                <div style={styles.row}>
                  <FormInput label="Full Name" name="fullName" required value={formData.fullName} onChange={handleChange} styles={styles} />
                  <FormInput label="Email" name="email" type="email" required value={formData.email} onChange={handleChange} styles={styles} />
                </div>

                <div style={styles.row}>
                  <FormInput label="Mobile" name="mobile" type="tel" required value={formData.mobile} onChange={handleChange} styles={styles} />
                  <FormInput label="Age" name="age" type="number" value={formData.age} onChange={handleChange} styles={styles} />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Gender</label>
                  <select name="gender" value={formData.gender} onChange={handleChange} style={styles.select}>
                    <option value="" style={styles.optionStyle}>Select Gender</option>
                    <option style={styles.optionStyle}>Male</option>
                    <option style={styles.optionStyle}>Female</option>
                  </select>
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>State</label>
                  <select name="state" value={formData.state} onChange={handleChange} style={styles.select}>
                    <option value="" style={styles.optionStyle}>Select State</option>
                    <option style={styles.optionStyle}>Andhra Pradesh</option>
                    <option style={styles.optionStyle}>Arunachal Pradesh</option>
                    <option style={styles.optionStyle}>Assam</option>
                    <option style={styles.optionStyle}>Bihar</option>
                    <option style={styles.optionStyle}>Chhattisgarh</option>
                    <option style={styles.optionStyle}>Goa</option>
                    <option style={styles.optionStyle}>Gujarat</option>
                    <option style={styles.optionStyle}>Haryana</option>
                    <option style={styles.optionStyle}>Himachal Pradesh</option>
                    <option style={styles.optionStyle}>Jharkhand</option>
                    <option style={styles.optionStyle}>Karnataka</option>
                    <option style={styles.optionStyle}>Kerala</option>
                    <option style={styles.optionStyle}>Madhya Pradesh</option>
                    <option style={styles.optionStyle}>Maharashtra</option>
                    <option style={styles.optionStyle}>Manipur</option>
                    <option style={styles.optionStyle}>Meghalaya</option>
                    <option style={styles.optionStyle}>Mizoram</option>
                    <option style={styles.optionStyle}>Nagaland</option>
                    <option style={styles.optionStyle}>Odisha</option>
                    <option style={styles.optionStyle}>Punjab</option>
                    <option style={styles.optionStyle}>Rajasthan</option>
                    <option style={styles.optionStyle}>Sikkim</option>
                    <option style={styles.optionStyle}>Tamil Nadu</option>
                    <option style={styles.optionStyle}>Telangana</option>
                    <option style={styles.optionStyle}>Tripura</option>
                    <option style={styles.optionStyle}>Uttar Pradesh</option>
                    <option style={styles.optionStyle}>Uttarakhand</option>
                    <option style={styles.optionStyle}>West Bengal</option>
                    <option style={styles.optionStyle}>Andaman and Nicobar Islands</option>
                    <option style={styles.optionStyle}>Chandigarh</option>
                    <option style={styles.optionStyle}>Dadra and Nagar Haveli and Daman and Diu</option>
                    <option style={styles.optionStyle}>Delhi</option>
                    <option style={styles.optionStyle}>Lakshadweep</option>
                    <option style={styles.optionStyle}>Puducherry</option>
                    <option style={styles.optionStyle}>Ladakh</option>
                    <option style={styles.optionStyle}>Jammu and Kashmir</option>
                  </select>
                </div>

                <FormInput label="Address" name="address" value={formData.address} onChange={handleChange} styles={styles} />

                {/* Professional Information */}
                <h3 style={styles.sectionTitle}>🏛️ Professional Information</h3>

                <FormInput label="Institution Name" name="collegeName" required value={formData.collegeName} onChange={handleChange} styles={styles} />

                <div style={styles.formGroup}>
                  <label style={styles.label}>Designation</label>
                  <select name="designation" value={formData.designation} onChange={handleChange} style={styles.select}>
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
                  <FormInput label="Department" name="department" value={formData.department} onChange={handleChange} styles={styles} />
                  <FormInput label="Experience (Years)" name="experience" type="number" value={formData.experience} onChange={handleChange} styles={styles} />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Institution Type</label>
                  <select name="institutionType" value={formData.institutionType} onChange={handleChange} style={styles.select}>
                    <option value="" style={styles.optionStyle}>Select Type</option>
                    <option style={styles.optionStyle}>School</option>
                    <option style={styles.optionStyle}>PUC College</option>
                    <option style={styles.optionStyle}>Degree College</option>
                    <option style={styles.optionStyle}>Engineering College</option>
                    <option style={styles.optionStyle}>University</option>
                  </select>
                </div>

                <FormInput label="Institution Website/Link" name="website" type="url" value={formData.website} onChange={handleChange} styles={styles} />

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    ...styles.button,
                    ...(loading ? styles.buttonDisabled : {}),
                  }}
                  onMouseEnter={(e) => {
                    if (!loading) {
                      e.target.style.transform = "translateY(-2px)";
                      e.target.style.boxShadow = "0 8px 28px rgba(212,175,55,0.50)";
                      e.target.style.backgroundPosition = "right center";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!loading) {
                      e.target.style.transform = "translateY(0)";
                      e.target.style.boxShadow = "0 4px 20px rgba(212,175,55,0.30)";
                      e.target.style.backgroundPosition = "left center";
                    }
                  }}
                >
                  {loading ? "Submitting…" : "Submit Nomination"}
                </button>
              </form>
            )}

            {/* Error Message */}
            {message && !submitted && (
              <div style={styles.errorMessage}>⚠️ {message}</div>
            )}

            {/* Contact */}
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
              Click the link in your email to complete Phase 1 of your nomination for the
              <br />
              <strong style={{ color: "#D4AF37" }}>
                Bharat Education Excellence Awards 2025-26
              </strong>
            </p>
            <button
              onClick={resetForm}
              style={styles.resetButton}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 8px 24px rgba(212,175,55,0.50)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 4px 16px rgba(212,175,55,0.30)";
              }}
            >
              Submit Another Response
            </button>
          </div>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

        @keyframes slideIn {
          from { opacity: 0; transform: translateY(-36px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }

        input:focus, select:focus {
          outline: none !important;
          border-color: #FFD700 !important;
          box-shadow: 0 0 0 3px rgba(212,175,55,0.22) !important;
          background-color: rgba(255,255,255,0.08) !important;
        }

        input::placeholder {
          color: rgba(255,255,255,0.25);
        }

        select option {
          background-color: #111530;
          color: #ffffff;
        }

        input:-webkit-autofill,
        input:-webkit-autofill:focus {
          transition: background-color 600000s 0s, color 600000s 0s;
        }

        /* Responsive: stack the two-column rows on small screens */
        @media (max-width: 600px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <Footer />
    </>
  );
};

export default NominationForm;