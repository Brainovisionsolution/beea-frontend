import axios from "axios";

const API = axios.create({
  baseURL: "https://beea.in/api",
});

// Nomination
export const submitNomination = (data) =>
  API.post("/nomination/submit", data);

export const verifyEmail = (token) =>
  API.get(`/nomination/verify?token=${token}`);

// Auth (OTP)
export const sendOTP = (email) =>
  API.post("/auth/send-otp", { email });

export const verifyOTP = (email, otp) =>
  API.post("/auth/verify-otp", { email, otp });

// Dashboard
export const getDashboard = (email) =>
  API.get(`/dashboard?email=${email}`);