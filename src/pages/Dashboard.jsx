import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getDashboard } from "../services/api";

const Dashboard = () => {
  const location = useLocation();
  const email = location.state?.email;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (email) {
      getDashboard(email)
        .then((res) => {
          setData(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [email]);

  // Get status badge configuration
  const getStatusConfig = (status) => {
    switch(status) {
      case "Approved":
        return { color: "#16a34a", glow: "rgba(22, 163, 74, 0.3)", icon: "✅" };
      case "Rejected":
        return { color: "#dc2626", glow: "rgba(220, 38, 38, 0.3)", icon: "❌" };
      case "Shortlisted":
        return { color: "#D4AF37", glow: "rgba(212, 175, 55, 0.3)", icon: "⭐" };
      case "Phase 2 Completed":
        return { color: "#3b82f6", glow: "rgba(59, 130, 246, 0.3)", icon: "📝" };
      case "Voting Phase":
        return { color: "#8b5cf6", glow: "rgba(139, 92, 246, 0.3)", icon: "🗳️" };
      case "Winner":
        return { color: "#FFD700", glow: "rgba(255, 215, 0, 0.3)", icon: "🏆" };
      default:
        return { color: "#e0b354", glow: "rgba(224, 179, 84, 0.3)", icon: "⏳" };
    }
  };

  const styles = {
    container: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0d1230 100%)",
      padding: "40px 20px",
      fontFamily: "'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      position: "relative",
    },
    // Decorative background elements
    bgDecoration1: {
      position: "fixed",
      top: "-20%",
      right: "-10%",
      width: "50%",
      height: "50%",
      background: "radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)",
      borderRadius: "50%",
      pointerEvents: "none",
      zIndex: 0,
    },
    bgDecoration2: {
      position: "fixed",
      bottom: "-20%",
      left: "-10%",
      width: "50%",
      height: "50%",
      background: "radial-gradient(circle, rgba(212, 175, 55, 0.06) 0%, transparent 70%)",
      borderRadius: "50%",
      pointerEvents: "none",
      zIndex: 0,
    },
    mainContainer: {
      maxWidth: "1200px",
      margin: "0 auto",
      position: "relative",
      zIndex: 1,
    },
    header: {
      textAlign: "center",
      marginBottom: "40px",
      padding: "30px",
      background: "rgba(13, 18, 48, 0.8)",
      backdropFilter: "blur(10px)",
      borderRadius: "20px",
      border: "1px solid rgba(212, 175, 55, 0.2)",
    },
    title: {
      fontSize: "38px",
      fontWeight: "700",
      background: "linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      marginBottom: "10px",
      letterSpacing: "2px",
    },
    subtitle: {
      fontSize: "16px",
      color: "#a0a0c0",
      letterSpacing: "1px",
    },
    welcomeCard: {
      background: "linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(255, 215, 0, 0.05) 100%)",
      borderRadius: "16px",
      padding: "25px",
      marginBottom: "30px",
      border: "1px solid rgba(212, 175, 55, 0.3)",
      textAlign: "center",
    },
    welcomeText: {
      color: "#D4AF37",
      fontSize: "20px",
      fontWeight: "600",
      marginBottom: "10px",
    },
    welcomeEmail: {
      color: "#a0a0c0",
      fontSize: "14px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
      gap: "25px",
      marginBottom: "25px",
    },
    card: {
      background: "rgba(13, 18, 48, 0.9)",
      backdropFilter: "blur(10px)",
      borderRadius: "20px",
      padding: "25px",
      boxShadow: "0 15px 35px rgba(0,0,0,0.3)",
      border: "1px solid rgba(212, 175, 55, 0.2)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    cardHover: {
      transform: "translateY(-5px)",
      boxShadow: "0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(212, 175, 55, 0.3)",
    },
    sectionTitle: {
      fontSize: "20px",
      marginBottom: "20px",
      background: "linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      borderBottom: "2px solid",
      borderImage: "linear-gradient(90deg, #D4AF37, #FFD700, #D4AF37) 1",
      borderBottomStyle: "solid",
      paddingBottom: "10px",
      fontWeight: "600",
    },
    infoRow: {
      display: "flex",
      justifyContent: "space-between",
      padding: "12px 0",
      borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
    },
    fieldLabel: {
      fontSize: "13px",
      color: "#a0a0c0",
      fontWeight: "500",
      letterSpacing: "0.5px",
    },
    fieldValue: {
      fontSize: "14px",
      fontWeight: "600",
      color: "#ffffff",
      textAlign: "right",
    },
    statusCard: {
      background: "linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(255, 215, 0, 0.05) 100%)",
      borderRadius: "20px",
      padding: "25px",
      border: "1px solid rgba(212, 175, 55, 0.3)",
    },
    statusBadge: (status) => {
      const config = getStatusConfig(status);
      return {
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "10px 20px",
        borderRadius: "50px",
        fontSize: "14px",
        fontWeight: "700",
        background: `linear-gradient(135deg, ${config.color}20 0%, ${config.color}10 100%)`,
        color: config.color,
        border: `1px solid ${config.color}`,
        boxShadow: `0 0 15px ${config.glow}`,
      };
    },
    nominationId: {
      display: "inline-block",
      background: "rgba(212, 175, 55, 0.15)",
      padding: "8px 16px",
      borderRadius: "10px",
      fontSize: "13px",
      color: "#D4AF37",
      fontFamily: "monospace",
      marginTop: "15px",
    },
    phaseProgress: {
      marginTop: "20px",
      padding: "20px",
      background: "rgba(0,0,0,0.3)",
      borderRadius: "12px",
    },
    phaseStep: {
      display: "flex",
      alignItems: "center",
      marginBottom: "15px",
    },
    phaseIcon: (active) => ({
      width: "35px",
      height: "35px",
      borderRadius: "50%",
      background: active ? "linear-gradient(135deg, #D4AF37, #FFD700)" : "rgba(255,255,255,0.1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginRight: "15px",
      color: active ? "#0a0e27" : "#a0a0c0",
    }),
    phaseText: (active) => ({
      color: active ? "#D4AF37" : "#a0a0c0",
      fontWeight: active ? "600" : "400",
    }),
    loadingContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)",
    },
    loadingSpinner: {
      width: "50px",
      height: "50px",
      border: "3px solid rgba(212, 175, 55, 0.3)",
      borderTopColor: "#D4AF37",
      borderRadius: "50%",
      animation: "spin 1s linear infinite",
    },
    contactBar: {
      marginTop: "30px",
      textAlign: "center",
      padding: "20px",
      background: "rgba(13, 18, 48, 0.8)",
      borderRadius: "16px",
      border: "1px solid rgba(212, 175, 55, 0.2)",
    },
    contactLink: {
      color: "#D4AF37",
      textDecoration: "none",
      fontWeight: "600",
    },
  };

  // Determine current phase based on status
  const getCurrentPhase = (status) => {
    if (status === "Winner") return 4;
    if (status === "Voting Phase") return 3;
    if (status === "Phase 2 Completed" || status === "Shortlisted") return 2;
    return 1;
  };

  if (loading) {
    return (
      <div style={styles.loadingContainer}>
        <div style={styles.loadingSpinner}></div>
        <style>
          {`
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
          `}
        </style>
      </div>
    );
  }

  if (!data) {
    return (
      <div style={styles.container}>
        <div style={styles.mainContainer}>
          <div style={styles.header}>
            <h1 style={styles.title}>No Data Found</h1>
            <p style={styles.subtitle}>Please login again to view your dashboard</p>
          </div>
        </div>
      </div>
    );
  }

  const currentPhase = getCurrentPhase(data.status);
  const statusConfig = getStatusConfig(data.status);

  return (
    <div style={styles.container}>
      {/* Decorative Background Elements */}
      <div style={styles.bgDecoration1}></div>
      <div style={styles.bgDecoration2}></div>

      <div style={styles.mainContainer}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>🏆 NOMINATION DASHBOARD</h1>
          <p style={styles.subtitle}>Track Your Application Progress</p>
        </div>

        {/* Welcome Card */}
        <div style={styles.welcomeCard}>
          <div style={styles.welcomeText}>
            Welcome back, {data.fullName}!
          </div>
          <div style={styles.welcomeEmail}>
            {data.email}
          </div>
        </div>

        {/* Main Grid */}
        <div style={styles.grid}>
          {/* Basic Information Card */}
          <div 
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(212, 175, 55, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.3)";
            }}
          >
            <h3 style={styles.sectionTitle}>📋 Basic Information</h3>
            
            <div style={styles.infoRow}>
              <span style={styles.fieldLabel}>Full Name</span>
              <span style={styles.fieldValue}>{data.fullName}</span>
            </div>
            <div style={styles.infoRow}>
              <span style={styles.fieldLabel}>Email Address</span>
              <span style={styles.fieldValue}>{data.email}</span>
            </div>
            <div style={styles.infoRow}>
              <span style={styles.fieldLabel}>Mobile Number</span>
              <span style={styles.fieldValue}>{data.mobile}</span>
            </div>
            <div style={styles.infoRow}>
              <span style={styles.fieldLabel}>Age</span>
              <span style={styles.fieldValue}>{data.age || "N/A"}</span>
            </div>
            <div style={styles.infoRow}>
              <span style={styles.fieldLabel}>Gender</span>
              <span style={styles.fieldValue}>{data.gender || "N/A"}</span>
            </div>
            <div style={styles.infoRow}>
              <span style={styles.fieldLabel}>State</span>
              <span style={styles.fieldValue}>{data.state || "N/A"}</span>
            </div>
            <div style={styles.infoRow}>
              <span style={styles.fieldLabel}>Address</span>
              <span style={styles.fieldValue}>{data.address || "N/A"}</span>
            </div>
          </div>

          {/* Professional Information Card */}
          <div 
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(212, 175, 55, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.3)";
            }}
          >
            <h3 style={styles.sectionTitle}>🏛️ Professional Details</h3>
            
            <div style={styles.infoRow}>
              <span style={styles.fieldLabel}>Institution Name</span>
              <span style={styles.fieldValue}>{data.collegeName}</span>
            </div>
            <div style={styles.infoRow}>
              <span style={styles.fieldLabel}>Designation</span>
              <span style={styles.fieldValue}>{data.designation || "N/A"}</span>
            </div>
            <div style={styles.infoRow}>
              <span style={styles.fieldLabel}>Department</span>
              <span style={styles.fieldValue}>{data.department || "N/A"}</span>
            </div>
            <div style={styles.infoRow}>
              <span style={styles.fieldLabel}>Experience</span>
              <span style={styles.fieldValue}>{data.experience || "0"} years</span>
            </div>
            <div style={styles.infoRow}>
              <span style={styles.fieldLabel}>Institution Type</span>
              <span style={styles.fieldValue}>{data.institutionType || "N/A"}</span>
            </div>
            <div style={styles.infoRow}>
              <span style={styles.fieldLabel}>Website</span>
              <span style={styles.fieldValue}>
                {data.website ? (
                  <a href={data.website} target="_blank" rel="noopener noreferrer" style={{ color: "#D4AF37", textDecoration: "none" }}>
                    Visit Website →
                  </a>
                ) : "N/A"}
              </span>
            </div>
          </div>
        </div>

        {/* Status Card */}
        <div style={styles.statusCard}>
          <h3 style={styles.sectionTitle}>📊 Application Status</h3>
          
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <div style={styles.statusBadge(data.status)}>
              <span>{statusConfig.icon}</span>
              <span>{data.status || "Pending Review"}</span>
            </div>
            <div style={styles.nominationId}>
              Nomination ID: {data.nomination_id || "N/A"}
            </div>
          </div>

          {/* Phase Progress Indicator */}
          <div style={styles.phaseProgress}>
            <h4 style={{ color: "#D4AF37", marginBottom: "15px", fontSize: "14px" }}>📌 Selection Process Progress</h4>
            
            <div style={styles.phaseStep}>
              <div style={styles.phaseIcon(currentPhase >= 1)}>✅</div>
              <div style={styles.phaseText(currentPhase >= 1)}>
                <strong>Phase 1:</strong> Nomination Submitted & Verified
              </div>
            </div>
            
            <div style={styles.phaseStep}>
              <div style={styles.phaseIcon(currentPhase >= 2)}>{currentPhase >= 2 ? "✅" : "⏳"}</div>
              <div style={styles.phaseText(currentPhase >= 2)}>
                <strong>Phase 2:</strong> Detailed Application Review
                {currentPhase === 1 && <span style={{ color: "#a0a0c0", fontSize: "12px", marginLeft: "10px" }}>(Awaiting Shortlist)</span>}
              </div>
            </div>
            
            <div style={styles.phaseStep}>
              <div style={styles.phaseIcon(currentPhase >= 3)}>{currentPhase >= 3 ? "✅" : "⏳"}</div>
              <div style={styles.phaseText(currentPhase >= 3)}>
                <strong>Phase 3:</strong> Public Voting
                {currentPhase === 2 && <span style={{ color: "#a0a0c0", fontSize: "12px", marginLeft: "10px" }}>(Coming Soon)</span>}
              </div>
            </div>
            
            <div style={styles.phaseStep}>
              <div style={styles.phaseIcon(currentPhase >= 4)}>{currentPhase >= 4 ? "🏆" : "⏳"}</div>
              <div style={styles.phaseText(currentPhase >= 4)}>
                <strong>Phase 4:</strong> Award Ceremony
                {currentPhase === 3 && <span style={{ color: "#a0a0c0", fontSize: "12px", marginLeft: "10px" }}>(Voting in Progress)</span>}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Support Bar */}
        <div style={styles.contactBar}>
          <p style={{ color: "#a0a0c0", marginBottom: "10px" }}>
            Need assistance with your nomination?
          </p>
          <p>
            <a href="mailto:beea@brainovision.in" style={styles.contactLink}>
              📧 beea@brainovision.in
            </a>
            {" | "}
            <a href="tel:+917207775039" style={styles.contactLink}>
              📞 +91 7207775039
            </a>
          </p>
        </div>
      </div>

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
          
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
          
          @media (max-width: 768px) {
            div[style*="grid"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Dashboard;