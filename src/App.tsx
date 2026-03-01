import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Profile from "./pages/Profile";

import After10th from "./pages/after/after-10th";
// import After12thScience from "./pages/After12thScience";
import After12thCommerce from "@/pages/after/after-12th-commerce";
import After12thScience from "@/pages/after/after-12th-arts";
import After12thScienceRoutes from "@/pages/after/after-12th-science";

import ITCareerRoadmap from "@/pages/it-career-roadmap";
import GovernmentJobs from "./pages/GovernmentJobs";
import PercentageCalculator from "./pages/PercentageCalculator";
import AgeCalculator from "./pages/AgeCalculator";
import CgpaToPercentage from "./pages/CgpaToPercentage";
import SalaryCalculator from "./pages/SalaryCalculator";
import ProtectedRoute from "./components/ProtectedRoute";
import Blog from "./pages/Blog";
// import VerifyOTP from "./pages/VerifyOTP";
import ForgotPassword from "./pages/ForgotPassword";
// import ResetPassword from "./pages/ResetPassword";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <div className="flex min-h-screen flex-col">

          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/after-10th/*"
                element={
                  <ProtectedRoute>
                    <After10th />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/after-12th/*"
                element={
                  <ProtectedRoute>
                    <After12thScienceRoutes />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/after-12th-commerce/*"
                element={
                  <ProtectedRoute>
                    <After12thCommerce />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/after-12th-arts"
                element={
                  <ProtectedRoute>
                    <After12thScience />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/it-career-roadmap/*"
                element={
                  <ProtectedRoute>
                    <ITCareerRoadmap />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/government-jobs"
                element={
                  <ProtectedRoute>
                    <GovernmentJobs />
                  </ProtectedRoute>
                }
              />
              <Route path="/tools/percentage-calculator" element={<PercentageCalculator />} />
              <Route path="/tools/age-calculator" element={<AgeCalculator />} />
              <Route path="/tools/cgpa-to-percentage" element={<CgpaToPercentage />} />
              <Route path="/tools/salary-calculator" element={<SalaryCalculator />} />
              {/* <Route path="/verify-otp" element={<VerifyOTP />} /> */}
              <Route path="/forgot-password" element={<ForgotPassword />} />
              {/* <Route path="/reset-password" element={<ResetPassword />} /> */}
              <Route path="/blog" element={<Blog />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

        </div>
      </BrowserRouter>
      <Toaster />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
