import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { BusinessLayout } from "@/components/BusinessLayout";
import { ScrollToTop } from "@/components/ScrollToTop";
import Home from "./pages/Home";
import Wallet from "./pages/Wallet";
import Activity from "./pages/Activity";
import Profile from "./pages/Profile";
import Explore from "./pages/Explore";
import StoreDetail from "./pages/StoreDetail";
import AllBusinesses from "./pages/AllBusinesses";
import NotFound from "./pages/NotFound";
import BusinessDashboard from "./pages/business/Dashboard";
import BusinessRewards from "./pages/business/Rewards";
import BusinessCustomers from "./pages/business/Customers";
import BusinessPromotions from "./pages/business/Promotions";
import BusinessSettings from "./pages/business/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/store/:id" element={<StoreDetail />} />
            <Route path="/businesses" element={<AllBusinesses />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
