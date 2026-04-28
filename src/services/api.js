import axios from "axios";

const API = axios.create({
  baseURL: "https://beea.in/api",
});



// ===============================
// NOMINATION
// ===============================

export const submitNomination = (data) =>
  API.post("/nomination/submit", data);

export const verifyEmail = (token) =>
  API.get(`/nomination/verify?token=${token}`);



// ===============================
// AUTH (OTP)
// ===============================

export const sendOTP = (email) =>
  API.post("/auth/send-otp", { email });

export const verifyOTP = (email, otp) =>
  API.post("/auth/verify-otp", { email, otp });



// ===============================
// DASHBOARD
// ===============================

export const getDashboard = (email) =>
  API.get(`/dashboard?email=${email}`);



// ===============================
// 🔐 ADMIN GOOGLE LOGIN
// ===============================

export const adminGoogleLogin = (token) =>
  API.post("/admin/google-login", {
    token,
  });



// ===============================
// 🔐 ADMIN NOMINATIONS
// ===============================

export const getAdminNominations = () =>
  API.get("/admin/nominations", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
    },
  });