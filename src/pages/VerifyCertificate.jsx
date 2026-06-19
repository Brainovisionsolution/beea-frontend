import React from "react";
import { useParams } from "react-router-dom";

const VerifyCertificate = () => {
  const { id } = useParams();

  const certificate = {
    certificateId: "BOV67978M",
    name: "Nuthalapati Lohith",
    college: "Narayana Engineering College",
    role: "Android Application Development Intern",
    duration: "3 Months",
    startDate: "01/10/2025",
    issueDate: "06/01/2026",
    pdf: "/certificates/BOV67978M.pdf",
  };

  const isValid = id === certificate.certificateId;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f6f9",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          background: "#fff",
          borderRadius: "15px",
          padding: "30px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "30px",
            color: "#f59e0b",
          }}
        >
          BrainOvision Certificate Verification
        </h1>

        {isValid ? (
          <>
            <div
              style={{
                background: "#dcfce7",
                color: "#166534",
                padding: "15px",
                borderRadius: "10px",
                textAlign: "center",
                fontSize: "22px",
                fontWeight: "bold",
                marginBottom: "25px",
              }}
            >
              ✅ Certificate Verified
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "15px",
                marginBottom: "30px",
              }}
            >
              <p>
                <strong>Name:</strong> {certificate.name}
              </p>

              <p>
                <strong>College:</strong> {certificate.college}
              </p>

              <p>
                <strong>Intern ID:</strong> {certificate.certificateId}
              </p>

              <p>
                <strong>Role:</strong> {certificate.role}
              </p>

              <p>
                <strong>Duration:</strong> {certificate.duration}
              </p>

              <p>
                <strong>Start Date:</strong> {certificate.startDate}
              </p>

              <p>
                <strong>Issue Date:</strong> {certificate.issueDate}
              </p>
            </div>

            <a
              href={certificate.pdf}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "#f59e0b",
                color: "#fff",
                padding: "12px 20px",
                borderRadius: "8px",
                textDecoration: "none",
                marginBottom: "20px",
              }}
            >
              View Full Certificate
            </a>

            <iframe
              src={certificate.pdf}
              title="Certificate"
              width="100%"
              height="900px"
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
              }}
            />
          </>
        ) : (
          <div
            style={{
              background: "#fee2e2",
              color: "#991b1b",
              padding: "20px",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            <h2>❌ Invalid Certificate</h2>
            <p>No certificate found for ID: {id}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyCertificate;