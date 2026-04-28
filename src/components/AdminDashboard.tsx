import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getAdminNominations } from "../services/api";

interface Nomination {
  id?: string;
  fullName?: string;
  email?: string;
  mobile?: string;
  collegeName?: string;
  designation?: string;
  status?: "Pending" | "Accepted" | "Rejected" | string;
}

export default function AdminDashboard() {
  const [data, setData] = useState<Nomination[]>([]);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    // 🔐 Redirect if not logged in
    if (!token) {
      window.location.href = "/admin-login";
      return;
    }

    // 🔐 Fetch nominations
    getAdminNominations()
      .then((res) => {
        setData(res.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);

        if (
          err.response?.status === 401 ||
          err.response?.status === 403
        ) {
          localStorage.removeItem("adminToken");
          window.location.href = "/admin-login";
        } else {
          setError("Failed to fetch data");
        }

        setLoading(false);
      });
  }, []);

  const filteredData = data.filter((item) => {
    const name = item.fullName?.toLowerCase() || "";
    const email = item.email?.toLowerCase() || "";

    return (
      name.includes(search.toLowerCase()) ||
      email.includes(search.toLowerCase())
    );
  });

  if (loading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: '#0B1C2D' }}
      >
        <div className="text-center">
          <div
            className="w-12 h-12 border-4 border-t-4 rounded-full animate-spin mx-auto mb-4"
            style={{
              borderColor: 'rgba(212, 175, 55, 0.3)',
              borderTopColor: '#D4AF37',
            }}
          />
          <p className="font-body text-sm" style={{ color: '#F5E6C4' }}>
            Loading nominations...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: '#0B1C2D' }}
      >
        <div
          className="text-center p-6 rounded-xl"
          style={{
            background: 'rgba(220, 53, 69, 0.1)',
            border: '1px solid rgba(220, 53, 69, 0.3)',
          }}
        >
          <p className="font-body text-sm" style={{ color: '#dc3545' }}>
            {error}
          </p>
        </div>
      </div>
    );
  }

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: '#0B1C2D' }}
    >
      {/* Dark Navy Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 20% 30%, #0E2A47 0%, #071421 100%)'
        }}
      />

      {/* Gold Decorative Elements */}
      <div className="absolute top-20 right-10 w-40 h-40 rounded-full blur-3xl opacity-10" style={{ background: '#D4AF37' }} />
      <div className="absolute bottom-20 left-10 w-56 h-56 rounded-full blur-3xl opacity-10" style={{ background: '#D4AF37' }} />
      
      {/* Gold Geometric Pattern Background */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="goldGrid" patternUnits="userSpaceOnUse" width="80" height="80">
              <path d="M 40 0 L 40 80 M 0 40 L 80 40" stroke="#D4AF37" strokeWidth="0.5" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#goldGrid)" />
        </svg>
      </div>

      {/* Floating Gold Dust Particles */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-1 h-1 rounded-full"
        style={{ backgroundColor: '#D4AF37', opacity: 0.4 }}
        animate={{ y: [0, -15, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-2/3 right-1/4 w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: '#F5E6C4', opacity: 0.3 }}
        animate={{ y: [0, 12, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/5 w-1 h-1 rounded-full"
        style={{ backgroundColor: '#D4AF37', opacity: 0.35 }}
        animate={{ y: [0, -10, 0], opacity: [0.35, 0.7, 0.35] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />

      <div className="relative z-10 px-4 py-6 md:px-8 md:py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8"
          >
            <div>
              <div className="flex items-center gap-2 md:gap-3 mb-2">
                <div className="w-8 md:w-12 h-px" style={{ backgroundColor: '#D4AF37', opacity: 0.5 }} />
                <span
                  className="font-heading text-xs font-semibold tracking-[0.2em] uppercase px-3 py-1 rounded-full"
                  style={{
                    color: '#D4AF37',
                    background: 'rgba(212, 175, 55, 0.08)',
                    border: '1px solid rgba(212, 175, 55, 0.25)',
                  }}
                >
                  ADMIN PANEL
                </span>
                <div className="w-8 md:w-12 h-px" style={{ backgroundColor: '#D4AF37', opacity: 0.5 }} />
              </div>
              <h1
                className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold"
                style={{ color: '#F5E6C4' }}
              >
                Nominations Dashboard
              </h1>
              <div className="w-16 h-0.5 mt-2" style={{ background: 'linear-gradient(90deg, #D4AF37, transparent)' }} />
            </div>

            <button
              onClick={() => {
                localStorage.removeItem("adminToken");
                window.location.href = "/admin-login";
              }}
              className="px-6 py-2.5 font-heading font-semibold text-sm rounded-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
              style={{
                background: 'rgba(220, 53, 69, 0.15)',
                color: '#dc3545',
                border: '1px solid rgba(220, 53, 69, 0.3)',
              }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout
            </button>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
          >
            {[
              { label: 'Total Nominations', value: data.length, icon: '📋', color: '#D4AF37' },
              { label: 'Pending Review', value: data.filter(d => d.status === 'Pending').length, icon: '⏳', color: '#ffcc00' },
              { label: 'Accepted', value: data.filter(d => d.status === 'Accepted').length, icon: '✅', color: '#28a745' },
              { label: 'Rejected', value: data.filter(d => d.status === 'Rejected').length, icon: '❌', color: '#dc3545' },
            ].map((stat, index) => (
              <div
                key={index}
                className="rounded-xl p-5 backdrop-blur-sm transition-all duration-300 hover:transform hover:-translate-y-1"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(212, 175, 55, 0.2)',
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">{stat.icon}</span>
                  <span className="font-heading text-2xl font-bold" style={{ color: stat.color }}>
                    {stat.value}
                  </span>
                </div>
                <p className="font-body text-xs" style={{ color: '#A0AEC0' }}>{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Search Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6"
          >
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{ color: '#A0AEC0' }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search by name or email..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full md:w-96 pl-10 pr-4 py-3 rounded-xl font-body text-sm transition-all duration-300 focus:outline-none focus:ring-2"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: '#F5E6C4',
                  border: '1px solid rgba(212, 175, 55, 0.25)',
                  focusRingColor: '#D4AF37',
                }}
              />
            </div>
          </motion.div>

          {/* Table Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-xl overflow-hidden backdrop-blur-sm"
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(212, 175, 55, 0.15)',
            }}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>
                    <th className="px-4 py-4 text-left font-heading text-xs font-semibold uppercase tracking-wider" style={{ color: '#D4AF37' }}>Name</th>
                    <th className="px-4 py-4 text-left font-heading text-xs font-semibold uppercase tracking-wider" style={{ color: '#D4AF37' }}>Email</th>
                    <th className="px-4 py-4 text-left font-heading text-xs font-semibold uppercase tracking-wider" style={{ color: '#D4AF37' }}>Mobile</th>
                    <th className="px-4 py-4 text-left font-heading text-xs font-semibold uppercase tracking-wider" style={{ color: '#D4AF37' }}>College</th>
                    <th className="px-4 py-4 text-left font-heading text-xs font-semibold uppercase tracking-wider" style={{ color: '#D4AF37' }}>Designation</th>
                    <th className="px-4 py-4 text-left font-heading text-xs font-semibold uppercase tracking-wider" style={{ color: '#D4AF37' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.length > 0 ? (
                    filteredData.map((item, index) => (
                      <motion.tr
                        key={item.id || item.email}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.02 }}
                        style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.08)' }}
                        className="hover:bg-white/5 transition-colors duration-200"
                      >
                        <td className="px-4 py-3 font-body text-sm" style={{ color: '#F5E6C4' }}>{item.fullName || "-"}</td>
                        <td className="px-4 py-3 font-body text-sm" style={{ color: '#A0AEC0' }}>{item.email || "-"}</td>
                        <td className="px-4 py-3 font-body text-sm" style={{ color: '#A0AEC0' }}>{item.mobile || "-"}</td>
                        <td className="px-4 py-3 font-body text-sm" style={{ color: '#A0AEC0' }}>{item.collegeName || "-"}</td>
                        <td className="px-4 py-3 font-body text-sm" style={{ color: '#A0AEC0' }}>{item.designation || "-"}</td>
                        <td className="px-4 py-3">
                          <span
                            className="inline-flex px-2 py-1 rounded-full text-xs font-semibold"
                            style={{
                              background:
                                item.status === "Pending"
                                  ? "rgba(255, 204, 0, 0.15)"
                                  : item.status === "Rejected"
                                  ? "rgba(220, 53, 69, 0.15)"
                                  : "rgba(40, 167, 69, 0.15)",
                              color:
                                item.status === "Pending"
                                  ? "#ffcc00"
                                  : item.status === "Rejected"
                                  ? "#dc3545"
                                  : "#28a745",
                              border: `1px solid ${
                                item.status === "Pending"
                                  ? "rgba(255, 204, 0, 0.3)"
                                  : item.status === "Rejected"
                                  ? "rgba(220, 53, 69, 0.3)"
                                  : "rgba(40, 167, 69, 0.3)"
                              }`,
                            }}
                          >
                            {item.status || "Unknown"}
                          </span>
                        </td>
                      </motion.tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="px-4 py-12 text-center">
                        <div className="flex flex-col items-center gap-2">
                          <svg className="w-12 h-12 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#D4AF37' }}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <p className="font-body text-sm" style={{ color: '#A0AEC0' }}>No nominations found</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Footer */}
          <div className="mt-8 pt-6 text-center">
            <div
              className="w-16 h-px mx-auto mb-3"
              style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
            />
            <p className="font-body text-xs" style={{ color: '#4A5568' }}>
              Showing {filteredData.length} of {data.length} nominations
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .font-heading {
          font-family: 'Playfair Display', serif;
        }
        
        .font-body {
          font-family: 'Poppins', sans-serif;
        }
        
        input:focus {
          outline: none;
          ring: 2px solid #D4AF37;
        }
        
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800&display=swap');
      `}</style>
    </section>
  );
}