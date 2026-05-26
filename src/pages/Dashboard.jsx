import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getDashboard } from "../services/api";

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loggingOut, setLoggingOut] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    setLoggingOut(true);
    localStorage.clear();
    sessionStorage.clear();
    document.cookie.split(";").forEach((cookie) => {
      const name = cookie.split("=")[0].trim();
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
    });
    setTimeout(() => {
      window.location.replace("https://beea.in");
    }, 600);
  };

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

  const getStatusConfig = (status) => {
    switch (status) {
      case "Approved":       return { color: "#10b981", bg: "rgba(16,185,129,0.08)",  label: "Approved" };
      case "Rejected":       return { color: "#ef4444", bg: "rgba(239,68,68,0.08)",   label: "Rejected" };
      case "Shortlisted":    return { color: "#f59e0b", bg: "rgba(245,158,11,0.08)",  label: "Shortlisted" };
      case "Phase 2 Completed": return { color: "#3b82f6", bg: "rgba(59,130,246,0.08)", label: "Phase 2 Complete" };
      case "Voting Phase":   return { color: "#8b5cf6", bg: "rgba(139,92,246,0.08)", label: "Voting Phase" };
      case "Winner":         return { color: "#D4AF37", bg: "rgba(212,175,55,0.08)", label: "Winner" };
      default:               return { color: "#94a3b8", bg: "rgba(148,163,184,0.08)", label: "Pending Review" };
    }
  };

  const getCurrentPhase = (status) => {
    if (status === "Winner") return 4;
    if (status === "Voting Phase") return 3;
    if (status === "Phase 2 Completed" || status === "Shortlisted") return 2;
    return 1;
  };

  const navItems = [
    { id: "overview",     label: "Overview" },
    { id: "personal",     label: "Personal Info" },
    { id: "professional", label: "Professional" },
    { id: "status",       label: "Application Status" },
    { id: "support",      label: "Support" },
  ];

  const scrollTo = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  if (loading) {
    return (
      <div style={{ display:"flex", justifyContent:"center", alignItems:"center", minHeight:"100vh", background:"#080c1a", flexDirection:"column", gap:"20px" }}>
        <div style={{ width:"44px", height:"44px", border:"2px solid rgba(212,175,55,0.15)", borderTop:"2px solid #D4AF37", borderRadius:"50%", animation:"spin 0.9s linear infinite" }} />
        <span style={{ color:"#4a5180", fontSize:"13px", letterSpacing:"2px", fontFamily:"'DM Sans', sans-serif" }}>LOADING</span>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  if (!data) {
    return (
      <div style={{ display:"flex", justifyContent:"center", alignItems:"center", minHeight:"100vh", background:"#080c1a" }}>
        <div style={{ color:"#94a3b8", fontFamily:"'DM Sans', sans-serif", textAlign:"center" }}>
          <p style={{ fontSize:"16px" }}>No data found. Please log in again.</p>
        </div>
      </div>
    );
  }

  const currentPhase = getCurrentPhase(data.status);
  const statusConfig = getStatusConfig(data.status);

  const InfoRow = ({ label, value, link }) => (
    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", padding:"14px 0", borderBottom:"1px solid rgba(255,255,255,0.04)" }}>
      <span style={{ fontSize:"11px", color:"#4a5180", letterSpacing:"0.8px", fontWeight:"500", textTransform:"uppercase", paddingTop:"2px", flexShrink:0, marginRight:"16px" }}>
        {label}
      </span>
      <span style={{ fontSize:"13px", color:"#c8d0e8", fontWeight:"500", textAlign:"right" }}>
        {link && value && value !== "N/A" ? (
          <a href={link} target="_blank" rel="noopener noreferrer"
            style={{ color:"#D4AF37", textDecoration:"none", borderBottom:"1px solid rgba(212,175,55,0.3)", paddingBottom:"1px" }}>
            Visit
          </a>
        ) : (value || "—")}
      </span>
    </div>
  );

  const Section = ({ id, title, children }) => (
    <div id={id}
      style={{ background:"rgba(255,255,255,0.02)", border:"1px solid rgba(255,255,255,0.05)", borderRadius:"16px", padding:"24px", marginBottom:"16px", transition:"border-color 0.3s ease" }}
      onMouseEnter={(e) => e.currentTarget.style.borderColor = "rgba(212,175,55,0.15)"}
      onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)"}
    >
      <h3 style={{ fontSize:"10px", color:"#D4AF37", fontWeight:"600", letterSpacing:"2px", textTransform:"uppercase", marginBottom:"16px", opacity:0.9 }}>
        {title}
      </h3>
      {children}
    </div>
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Serif+Display&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes spin    { to { transform: rotate(360deg); } }
        @keyframes fadeUp  { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
        @keyframes fadeIn  { from { opacity:0; } to { opacity:1; } }
        @keyframes slideIn { from { opacity:0; transform:translateX(-16px); } to { opacity:1; transform:translateX(0); } }
        @keyframes slideDown { from { opacity:0; transform:translateY(-10px); } to { opacity:1; transform:translateY(0); } }
        @keyframes pulse   { 0%,100% { opacity:1; } 50% { opacity:0.45; } }

        ::-webkit-scrollbar { width:4px; }
        ::-webkit-scrollbar-track { background:transparent; }
        ::-webkit-scrollbar-thumb { background:rgba(212,175,55,0.2); border-radius:2px; }

        .nav-item {
          display:flex; align-items:center; gap:12px;
          padding:10px 14px; border-radius:10px; cursor:pointer;
          transition:all 0.2s ease; color:#4a5180;
          font-size:13px; font-weight:500; letter-spacing:0.3px;
          border:1px solid transparent; white-space:nowrap;
        }
        .nav-item:hover  { background:rgba(255,255,255,0.04); color:#c8d0e8; border-color:rgba(255,255,255,0.06); }
        .nav-item.active { background:rgba(212,175,55,0.08); color:#D4AF37; border-color:rgba(212,175,55,0.15); }
        .nav-dot { width:6px; height:6px; border-radius:50%; background:currentColor; flex-shrink:0; opacity:0.5; }
        .nav-item.active .nav-dot { opacity:1; }

        .phase-row { display:flex; align-items:center; gap:14px; padding:14px 0; border-bottom:1px solid rgba(255,255,255,0.04); }
        .phase-row:last-child { border-bottom:none; }

        .logout-btn {
          display:flex; align-items:center; gap:10px;
          width:100%; padding:10px 14px; border-radius:10px;
          background:rgba(239,68,68,0.06); border:1px solid rgba(239,68,68,0.15);
          color:#ef4444; font-size:13px; font-weight:500; cursor:pointer;
          transition:all 0.2s ease; font-family:'DM Sans',sans-serif; letter-spacing:0.3px;
        }
        .logout-btn:hover:not(:disabled) { background:rgba(239,68,68,0.12); border-color:rgba(239,68,68,0.3); }
        .logout-btn:disabled { opacity:0.7; cursor:not-allowed; }

        /* Mobile nav drawer */
        .mobile-drawer {
          position:fixed; top:60px; left:0; right:0; z-index:50;
          background:#0d1228; border-bottom:1px solid rgba(255,255,255,0.07);
          padding:12px 16px 16px; animation:slideDown 0.2s ease;
          display:flex; flex-direction:column; gap:4px;
        }

        /* Responsive breakpoints */
        @media (max-width: 768px) {
          .desktop-sidebar { display:none !important; }
          .mobile-topbar   { display:flex !important; }
          .main-content    { padding:20px 16px !important; }
          .overview-grid   { grid-template-columns:1fr 1fr !important; }
          .support-grid    { grid-template-columns:1fr !important; }
        }
        @media (min-width: 769px) {
          .mobile-topbar { display:none !important; }
          .mobile-drawer { display:none !important; }
        }
      `}</style>

      {/* ─── MOBILE TOP BAR ─── */}
      <div className="mobile-topbar" style={{
        display:"none", position:"sticky", top:0, zIndex:40,
        background:"#080c1a", borderBottom:"1px solid rgba(255,255,255,0.06)",
        padding:"0 16px", height:"60px", alignItems:"center", justifyContent:"space-between",
      }}>
        {/* Brand */}
        <div>
          <div style={{ fontSize:"14px", fontWeight:"600", color:"#D4AF37", fontFamily:"'DM Serif Display', serif" }}>Bharath Education</div>
          <div style={{ fontSize:"9px", color:"#4a5180", letterSpacing:"1.5px", textTransform:"uppercase" }}>Excellence Awards</div>
        </div>

        <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
          {/* Status dot */}
          <div style={{
            display:"flex", alignItems:"center", gap:"6px",
            padding:"5px 10px", borderRadius:"50px",
            background:statusConfig.bg, border:`1px solid ${statusConfig.color}25`,
            fontSize:"11px", fontWeight:"600", color:statusConfig.color,
          }}>
            <span style={{ width:"5px", height:"5px", borderRadius:"50%", background:statusConfig.color, animation:"pulse 2s infinite" }} />
            {statusConfig.label}
          </div>

          {/* Hamburger */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{
            background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)",
            borderRadius:"8px", width:"34px", height:"34px", cursor:"pointer",
            display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:"5px",
          }}>
            {[0,1,2].map(i => (
              <span key={i} style={{
                display:"block", width:"16px", height:"1.5px", background:"#c8d0e8", borderRadius:"2px",
                transition:"all 0.2s ease",
                transform: mobileMenuOpen
                  ? (i===0 ? "rotate(45deg) translate(4.5px,4.5px)" : i===2 ? "rotate(-45deg) translate(4.5px,-4.5px)" : "scaleX(0)")
                  : "none",
              }} />
            ))}
          </button>
        </div>
      </div>

      {/* ─── MOBILE DRAWER ─── */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          {navItems.map((item) => (
            <div key={item.id} className={`nav-item ${activeSection === item.id ? "active" : ""}`}
              onClick={() => scrollTo(item.id)}>
              <div className="nav-dot" />
              {item.label}
            </div>
          ))}
          <div style={{ height:"1px", background:"rgba(255,255,255,0.06)", margin:"8px 0" }} />
          <button className="logout-btn" onClick={handleLogout} disabled={loggingOut}
            style={{ justifyContent:"flex-start" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18.36 6.64a9 9 0 1 1-12.73 0"/><line x1="12" y1="2" x2="12" y2="12"/>
            </svg>
            {loggingOut ? "Redirecting..." : "Log Out"}
          </button>
        </div>
      )}

      {/* ─── MAIN LAYOUT ─── */}
      <div style={{ display:"flex", minHeight:"100vh", background:"#080c1a", fontFamily:"'DM Sans', sans-serif", color:"#c8d0e8", animation:"fadeIn 0.5s ease" }}>

        {/* Ambient glow */}
        <div style={{ position:"fixed", top:0, left:0, right:0, bottom:0, background:"radial-gradient(ellipse 60% 40% at 75% 20%, rgba(212,175,55,0.04) 0%, transparent 60%)", pointerEvents:"none", zIndex:0 }} />

        {/* ─── DESKTOP SIDEBAR ─── */}
        <aside className="desktop-sidebar" style={{
          width: sidebarCollapsed ? "72px" : "240px",
          minHeight:"100vh", background:"rgba(255,255,255,0.02)",
          borderRight:"1px solid rgba(255,255,255,0.05)",
          display:"flex", flexDirection:"column", padding:"24px 14px",
          position:"sticky", top:0, flexShrink:0,
          transition:"width 0.3s cubic-bezier(0.4,0,0.2,1)",
          overflow:"hidden", zIndex:10,
        }}>

          {/* Logo + collapse */}
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"36px", paddingLeft:"4px" }}>
            {!sidebarCollapsed && (
              <div>
                <div style={{ fontSize:"15px", fontWeight:"600", color:"#D4AF37", letterSpacing:"0.5px", fontFamily:"'DM Serif Display', serif" }}>Bharath Education</div>
                <div style={{ fontSize:"10px", color:"#4a5180", letterSpacing:"1.5px", textTransform:"uppercase", marginTop:"2px" }}>Excellence Awards</div>
              </div>
            )}
            <button onClick={() => setSidebarCollapsed(!sidebarCollapsed)} style={{
              background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.07)",
              borderRadius:"8px", width:"30px", height:"30px", cursor:"pointer",
              display:"flex", alignItems:"center", justifyContent:"center",
              color:"#4a5180", fontSize:"14px", transition:"all 0.2s ease", flexShrink:0,
            }}>
              {sidebarCollapsed ? "›" : "‹"}
            </button>
          </div>

          {/* Nominee card */}
          {!sidebarCollapsed && (
            <div style={{ background:"rgba(212,175,55,0.06)", border:"1px solid rgba(212,175,55,0.12)", borderRadius:"12px", padding:"14px", marginBottom:"28px", animation:"fadeIn 0.5s ease" }}>
              <div style={{ width:"36px", height:"36px", borderRadius:"10px", background:"rgba(212,175,55,0.15)", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:"10px", color:"#D4AF37", fontSize:"15px", fontWeight:"700" }}>
                {data.fullName?.charAt(0) || "N"}
              </div>
              <div style={{ fontSize:"13px", fontWeight:"600", color:"#e2e8f0", marginBottom:"2px" }}>{data.fullName}</div>
              <div style={{ fontSize:"11px", color:"#4a5180", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{data.email}</div>
            </div>
          )}

          {/* Nav */}
          <nav style={{ display:"flex", flexDirection:"column", gap:"4px", flex:1 }}>
            {navItems.map((item, i) => (
              <div key={item.id} className={`nav-item ${activeSection === item.id ? "active" : ""}`}
                style={{ animationDelay:`${i * 0.05}s` }}
                onClick={() => scrollTo(item.id)}>
                <div className="nav-dot" />
                {!sidebarCollapsed && item.label}
              </div>
            ))}
          </nav>

          {/* Bottom: status + logout */}
          <div style={{ marginTop:"auto", paddingTop:"20px", borderTop:"1px solid rgba(255,255,255,0.05)", display:"flex", flexDirection:"column", gap:"12px" }}>
            {!sidebarCollapsed && (
              <>
                <div style={{ fontSize:"10px", color:"#4a5180", letterSpacing:"1px", textTransform:"uppercase" }}>Current Status</div>
                <div style={{ display:"inline-flex", alignItems:"center", gap:"8px", padding:"8px 14px", background:statusConfig.bg, border:`1px solid ${statusConfig.color}25`, borderRadius:"50px", fontSize:"12px", fontWeight:"600", color:statusConfig.color }}>
                  <span style={{ width:"6px", height:"6px", borderRadius:"50%", background:statusConfig.color, animation:"pulse 2s infinite" }} />
                  {statusConfig.label}
                </div>
              </>
            )}
            <button className="logout-btn" onClick={handleLogout} disabled={loggingOut}
              style={{ justifyContent: sidebarCollapsed ? "center" : "flex-start" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink:0 }}>
                <path d="M18.36 6.64a9 9 0 1 1-12.73 0"/><line x1="12" y1="2" x2="12" y2="12"/>
              </svg>
              {!sidebarCollapsed && (loggingOut ? "Redirecting..." : "Log Out")}
            </button>
          </div>
        </aside>

        {/* ─── MAIN CONTENT ─── */}
        <main className="main-content" style={{ flex:1, padding:"40px 48px", maxWidth:"900px", position:"relative", zIndex:1, animation:"fadeUp 0.5s ease" }}>

          {/* Heading */}
          <div style={{ marginBottom:"32px" }}>
            <div style={{ fontSize:"10px", color:"#4a5180", letterSpacing:"2px", textTransform:"uppercase", marginBottom:"8px" }}>Nomination Dashboard</div>
            <h1 style={{ fontSize:"clamp(22px, 4vw, 32px)", fontWeight:"300", color:"#e2e8f0", fontFamily:"'DM Serif Display', serif", letterSpacing:"-0.5px" }}>
              Welcome back, <span style={{ color:"#D4AF37" }}>{data.fullName?.split(" ")[0]}</span>
            </h1>
          </div>

          {/* Overview: Nomination ID + Status */}
          <div id="overview" className="overview-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"14px", marginBottom:"16px" }}>
            <div style={{ background:"rgba(255,255,255,0.02)", border:"1px solid rgba(255,255,255,0.05)", borderRadius:"14px", padding:"18px 20px", animation:"fadeUp 0.4s ease 0.1s both" }}>
              <div style={{ fontSize:"10px", color:"#4a5180", letterSpacing:"1.5px", textTransform:"uppercase", marginBottom:"10px" }}>Nomination ID</div>
              <div style={{ fontSize:"clamp(14px,3vw,18px)", fontWeight:"600", color:"#D4AF37", fontFamily:"monospace", letterSpacing:"1px", wordBreak:"break-all" }}>
                {data.nomination_id || "—"}
              </div>
            </div>
            <div style={{ background:statusConfig.bg, border:`1px solid ${statusConfig.color}20`, borderRadius:"14px", padding:"18px 20px", animation:"fadeUp 0.4s ease 0.15s both" }}>
              <div style={{ fontSize:"10px", color:"#4a5180", letterSpacing:"1.5px", textTransform:"uppercase", marginBottom:"10px" }}>Status</div>
              <div style={{ display:"flex", alignItems:"center", gap:"8px", flexWrap:"wrap" }}>
                <span style={{ width:"8px", height:"8px", borderRadius:"50%", background:statusConfig.color, animation:"pulse 2s infinite", flexShrink:0 }} />
                <span style={{ fontSize:"clamp(13px,3vw,16px)", fontWeight:"600", color:statusConfig.color }}>{statusConfig.label}</span>
              </div>
            </div>
          </div>

          {/* Phase Progress */}
          <div id="status" style={{ background:"rgba(255,255,255,0.02)", border:"1px solid rgba(255,255,255,0.05)", borderRadius:"16px", padding:"24px", marginBottom:"16px", animation:"fadeUp 0.4s ease 0.2s both" }}>
            <h3 style={{ fontSize:"10px", color:"#D4AF37", fontWeight:"600", letterSpacing:"2px", textTransform:"uppercase", marginBottom:"20px" }}>
              Selection Progress
            </h3>

            {/* Track */}
            <div style={{ display:"flex", alignItems:"center", marginBottom:"24px" }}>
              {[1,2,3,4].map((phase, i) => {
                const done = currentPhase >= phase;
                return (
                  <React.Fragment key={phase}>
                    <div style={{
                      width:"32px", height:"32px", borderRadius:"50%",
                      background: done ? "#D4AF37" : "rgba(255,255,255,0.05)",
                      border: currentPhase===phase ? `2px solid #D4AF37` : done ? "none" : "1px solid rgba(255,255,255,0.1)",
                      display:"flex", alignItems:"center", justifyContent:"center",
                      fontSize:"12px", fontWeight:"700",
                      color: done ? "#080c1a" : "#4a5180",
                      flexShrink:0, transition:"all 0.3s ease", zIndex:1,
                    }}>
                      {phase}
                    </div>
                    {i < 3 && (
                      <div style={{ flex:1, height:"1px", background: currentPhase>phase ? "linear-gradient(90deg,#D4AF37,rgba(212,175,55,0.5))" : "rgba(255,255,255,0.07)", transition:"background 0.5s ease" }} />
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* Phase rows */}
            {[
              { phase:1, label:"Nomination Submitted", sub:"Verified & accepted" },
              { phase:2, label:"Detailed Review",      sub:"Application assessment" },
              { phase:3, label:"Public Voting",        sub:"Community evaluation" },
              { phase:4, label:"Award Ceremony",       sub:"Final recognition" },
            ].map(({ phase, label, sub }) => {
              const done = currentPhase >= phase;
              const current = currentPhase === phase;
              return (
                <div key={phase} className="phase-row" style={{ animationDelay:`${phase*0.08}s` }}>
                  <div style={{ width:"30px", height:"30px", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"12px", fontWeight:"600", flexShrink:0, background: done?"rgba(212,175,55,0.12)":"rgba(255,255,255,0.03)", color: done?"#D4AF37":"#4a5180", border:`1px solid ${done?"rgba(212,175,55,0.2)":"rgba(255,255,255,0.06)"}` }}>
                    {phase}
                  </div>
                  <div style={{ flex:1, minWidth:0 }}>
                    <div style={{ fontSize:"13px", fontWeight:"500", color: done?"#e2e8f0":"#4a5180", display:"flex", alignItems:"center", flexWrap:"wrap", gap:"6px" }}>
                      {label}
                      {current && (
                        <span style={{ fontSize:"9px", background:"rgba(212,175,55,0.1)", color:"#D4AF37", padding:"2px 8px", borderRadius:"20px", fontWeight:"600", letterSpacing:"0.5px" }}>CURRENT</span>
                      )}
                    </div>
                    <div style={{ fontSize:"11px", color:"#4a5180", marginTop:"2px" }}>{sub}</div>
                  </div>
                  <div style={{ fontSize:"11px", color: done?"#10b981":"#4a5180", fontWeight:"600", letterSpacing:"0.5px", flexShrink:0 }}>
                    {done ? "DONE" : "—"}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Personal Info */}
          <Section id="personal" title="Personal Information">
            <InfoRow label="Full Name"     value={data.fullName} />
            <InfoRow label="Email"         value={data.email} />
            <InfoRow label="Mobile"        value={data.mobile} />
            <InfoRow label="Age"           value={data.age} />
            <InfoRow label="Gender"        value={data.gender} />
            <InfoRow label="State"         value={data.state} />
            <InfoRow label="Address"       value={data.address} />
          </Section>

          {/* Professional Info */}
          <Section id="professional" title="Professional Details">
            <InfoRow label="Institution"   value={data.collegeName} />
            <InfoRow label="Designation"   value={data.designation} />
            <InfoRow label="Department"    value={data.department} />
            <InfoRow label="Experience"    value={data.experience ? `${data.experience} years` : null} />
            <InfoRow label="Type"          value={data.institutionType} />
            <InfoRow label="Website"       value={data.website ? "Visit Website" : null} link={data.website} />
          </Section>

          {/* Support */}
          <div id="support" className="support-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"14px", marginBottom:"20px", animation:"fadeUp 0.4s ease 0.3s both" }}>
            {[
              { href:"mailto:beea@brainovision.in", label:"Email Support", value:"beea@brainovision.in" },
              { href:"tel:+917207775039",           label:"Phone Support", value:"+91 7207775039" },
            ].map(({ href, label, value }) => (
              <a key={href} href={href} style={{ textDecoration:"none" }}>
                <div style={{ background:"rgba(255,255,255,0.02)", border:"1px solid rgba(255,255,255,0.05)", borderRadius:"14px", padding:"18px 20px", transition:"all 0.2s ease", cursor:"pointer", height:"100%" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor="rgba(212,175,55,0.2)"; e.currentTarget.style.background="rgba(212,175,55,0.04)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor="rgba(255,255,255,0.05)"; e.currentTarget.style.background="rgba(255,255,255,0.02)"; }}
                >
                  <div style={{ fontSize:"10px", color:"#4a5180", letterSpacing:"1.5px", textTransform:"uppercase", marginBottom:"8px" }}>{label}</div>
                  <div style={{ fontSize:"13px", color:"#D4AF37", fontWeight:"500", wordBreak:"break-all" }}>{value}</div>
                </div>
              </a>
            ))}
          </div>

        </main>
      </div>
    </>
  );
};

export default Dashboard;