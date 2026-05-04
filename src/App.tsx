import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Progetto from "./pages/Progetto";
import Obiettivi from "./pages/Obiettivi";
import Pubblicazioni from "./pages/Pubblicazioni";
import Contatti from "./pages/Contatti";
import Legal from "./pages/Legal";
import NotFound from "./pages/NotFound";
import { LanguageProvider } from "./contexts/LanguageContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/progetto" element={<Progetto />} />
            <Route path="/obiettivi" element={<Obiettivi />} />
            <Route path="/obiettivi/:id" element={<Obiettivi />} />
            <Route path="/pubblicazioni" element={<Pubblicazioni />} />
            <Route path="/contatti" element={<Contatti />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
