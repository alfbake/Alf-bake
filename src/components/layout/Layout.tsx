import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import PageLoadingScreen from "../ui/PageLoadingScreen";
import { usePageLoading } from "@/hooks/use-page-loading";
import { useFirstLoad } from "@/hooks/use-first-load";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isLoading, pageImages } = usePageLoading();
  const location = useLocation();
  const isFirstLoad = useFirstLoad();

  if (isLoading) {
    return (
      <PageLoadingScreen
        key={location.pathname} // Force re-render on page change
        onLoadingComplete={() => {
          // This will be called when loading is complete
        }}
        pageImages={pageImages}
        isFirstLoad={isFirstLoad}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Header />
      <main role="main" className="min-h-[60vh]">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
