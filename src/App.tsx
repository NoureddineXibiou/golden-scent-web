
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NewArrivals from "./pages/NewArrivals";
import Collections from "./pages/Collections";
import ForHer from "./pages/ForHer";
import ForHim from "./pages/ForHim";
import ParfumFemme from "./pages/ParfumFemme";
import ParfumHomme from "./pages/ParfumHomme";
import CoffretPack from "./pages/CoffretPack";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/for-her" element={<ForHer />} />
          <Route path="/for-him" element={<ForHim />} />
          <Route path="/parfum-femme" element={<ParfumFemme />} />
          <Route path="/parfum-homme" element={<ParfumHomme />} />
          <Route path="/coffret-pack" element={<CoffretPack />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
