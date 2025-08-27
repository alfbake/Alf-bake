import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import OurStory from "./pages/OurStory";
import ContactUs from "./pages/ContactUs";
import Menu from "./pages/Menu";
import NotFound from "./pages/NotFound";
import LoadingScreen from "./components/ui/LoadingScreen";
import ScrollToTop from "./components/ui/ScrollToTop";
import { useLoading } from "./hooks/use-loading";

const queryClient = new QueryClient();

const AppContent = () => {
  const { isLoading, stopLoading } = useLoading(true, 3000);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={stopLoading} duration={3000} />;
  }

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Layout>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/alfbake/ourstory" element={<OurStory />} />
                <Route path="/alfbake/contact-us" element={<ContactUs />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/aboutus" element={<OurStory />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

const App = () => <AppContent />;

export default App;
