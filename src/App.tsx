import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Gallery from "./pages/Gallery";

// Nomination Flow Pages
import NominationForm from "./pages/NominationForm";
import VerifyEmail from "./pages/VerifyEmail";
import Login from "./pages/Login";
import OTPVerify from "./pages/OTPVerify";
import Dashboard from "./pages/Dashboard";

// Extra Components (existing)
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import AdminDashboard from "./components/AdminDashboard";
import NominationSuccess from "./components/NominationSuccess";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <Routes>

            {/* Main Pages */}
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />

            {/* Nomination Flow 🔥 */}
            <Route path="/nominate" element={<NominationForm />} />
            <Route path="/verify" element={<VerifyEmail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/otp" element={<OTPVerify />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/nomination-success" element={<NominationSuccess />} />

            {/* Auth Extras */}
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />

            {/* Admin */}
            <Route path="/admin" element={<AdminDashboard />} />

            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />

          </Routes>
        </BrowserRouter>

      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;