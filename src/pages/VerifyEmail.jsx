import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { verifyEmail } from "../services/api";

const VerifyEmail = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState("Verifying...");

  useEffect(() => {
    const token = params.get("token");

    if (token) {
      verifyEmail(token)
        .then((res) => {
          setMessage(res.data.message);
          setTimeout(() => navigate("/login"), 2000);
        })
        .catch(() => setMessage("Verification failed"));
    }
  }, []);

  return <h2>{message}</h2>;
};

export default VerifyEmail;