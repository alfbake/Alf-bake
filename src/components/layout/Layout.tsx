import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
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
