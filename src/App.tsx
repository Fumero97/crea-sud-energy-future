import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Progetto from "./pages/Progetto";
import Obiettivi from "./pages/Obiettivi";
import Tecnologie from "./pages/Tecnologie";
import Pubblicazioni from "./pages/Pubblicazioni";
import Contatti from "./pages/Contatti";
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
          <Route path="/progetto" element={<Progetto />} />
          <Route path="/obiettivi" element={<Obiettivi />} />
          <Route path="/obiettivi/:id" element={<Obiettivi />} />
          <Route path="/tecnologie" element={<Tecnologie />} />
          <Route path="/pubblicazioni" element={<Pubblicazioni />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
