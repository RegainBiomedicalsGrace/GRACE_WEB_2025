
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTranslations } from "./hooks/useTranslations";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Grace from "./pages/Grace";
import Documents from "./pages/Documents";
import Team from "./pages/Team";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const { currentLanguage, translations, isLoading, changeLanguage } = useTranslations();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navigation 
          translations={translations}
          currentLanguage={currentLanguage}
          onLanguageChange={changeLanguage}
        />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home translations={translations} />} />
            <Route path="/grace" element={<Grace translations={translations} />} />
            <Route path="/documents" element={<Documents translations={translations} />} />
            <Route path="/team" element={<Team translations={translations} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer translations={translations} />
      </div>
    </BrowserRouter>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AppContent />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
