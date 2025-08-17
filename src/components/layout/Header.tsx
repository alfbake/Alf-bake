import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/20 to-transparent backdrop-blur-sm">
      <div className="container flex items-center justify-center py-4">
        <div className="relative w-full flex items-center justify-center">
          {/* Mobile menu button */}
          <div className="absolute right-0 md:hidden top-2">
            <div className="w-16 h-16 bg-transparent border border-gray-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:shadow-[0_0_30px_rgba(239,68,68,0.8)] transition-all duration-300 hover:scale-110 group hover:border-red-500">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Toggle menu"
                onClick={toggleMobileMenu}
                className="text-white hover:text-gray-300 transition-colors duration-300 w-full h-full p-0"
              >
                {isMobileMenuOpen ? (
                  <X className="h-8 w-8 text-custom-grey group-hover:text-red-600 transition-colors duration-300" />
                ) : (
                  <Menu className="h-12 w-12 text-custom-grey group-hover:text-red-600 transition-colors duration-300" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Overlay */}
          <div
            className={`fixed inset-0 bg-black/80 backdrop-blur-sm transition-all duration-500 ease-in-out md:hidden ${
              isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            onClick={toggleMobileMenu}
          >
            {/* Mobile Menu Content */}
            <div
              className={`absolute top-0 left-0 right-0 bg-black/95 backdrop-blur-md transform transition-transform duration-500 ease-in-out ${
                isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="container py-8">
                {/* Logo and Close Button */}
                <div className="flex items-center justify-between mb-8">
                  <Link
                    to="/"
                    className="flex items-center"
                    onClick={toggleMobileMenu}
                  >
                    <img
                      src="/logo/logo.png"
                      alt="ALF BAKE logo"
                      className="h-20 w-22"
                      loading="eager"
                    />
                  </Link>
                  <div className="w-12 h-12 bg-transparent border border-gray-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:shadow-[0_0_30px_rgba(239,68,68,0.8)] transition-all duration-300 hover:scale-110 group hover:border-red-500">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={toggleMobileMenu}
                      className="text-white hover:text-gray-300 transition-colors duration-300 w-full h-full p-0"
                    >
                      <X className="h-6 w-6 text-custom-grey group-hover:text-red-600 transition-colors duration-300" />
                    </Button>
                  </div>
                </div>

                {/* Navigation Links */}
                <nav className="mb-12">
                  <div className="flex flex-col gap-6 text-lg">
                    <Link
                      to="/"
                      className="font-roboto text-white hover:text-gray-300 transition-colors duration-300 py-2 border-b border-gray-700"
                      onClick={toggleMobileMenu}
                    >
                      Home
                    </Link>
                    <Link
                      to="/alfbake/ourstory"
                      className="font-roboto text-white hover:text-gray-300 transition-colors duration-300 py-2 border-b border-gray-700"
                      onClick={toggleMobileMenu}
                    >
                      Our Story
                    </Link>
                    <Link
                      to="/menu"
                      className="font-roboto text-white hover:text-gray-300 transition-colors duration-300 py-2 border-b border-gray-700"
                      onClick={toggleMobileMenu}
                    >
                      Menu
                    </Link>
                    <Link
                      to="/alfbake/contact-us"
                      className="font-roboto text-white hover:text-gray-300 transition-colors duration-300 py-2 border-b border-gray-700"
                      onClick={toggleMobileMenu}
                    >
                      Contact
                    </Link>
                  </div>
                </nav>

                {/* Contact Information */}
                <div className="mb-8">
                  <h3 className="font-roboto font-bold text-lg text-white mb-4 tracking-[0.1em]">
                    CONTACT US
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                        <Phone className="h-4 w-4 text-white" />
                      </div>
                      <span className="font-roboto text-sm text-gray-300">
                        (+973 ) 77909019, (+973 ) 33909078, (+973 )35195151
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                        <Mail className="h-4 w-4 text-white" />
                      </div>
                      <span className="font-roboto text-sm text-gray-300">
                        hello@alfbake.co
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                        <MapPin className="h-4 w-4 text-white" />
                      </div>
                      <span className="font-roboto text-sm text-gray-300">
                        Chennai Central Railway Station Area
                      </span>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="font-roboto font-bold text-lg text-white mb-4 tracking-[0.1em]">
                    FOLLOW US
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      aria-label="Instagram"
                      className="w-10 h-10 bg-transparent border border-gray-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:shadow-[0_0_30px_rgba(239,68,68,0.8)] transition-all duration-300 hover:scale-110 group hover:border-red-500"
                    >
                      <Instagram className="h-5 w-5 text-custom-grey group-hover:text-red-600 transition-colors duration-300" />
                    </a>
                    <a
                      href="#"
                      aria-label="Facebook"
                      className="w-10 h-10 bg-transparent border border-gray-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:shadow-[0_0_30px_rgba(239,68,68,0.8)] transition-all duration-300 hover:scale-110 group hover:border-red-500"
                    >
                      <Facebook className="h-5 w-5 text-custom-grey group-hover:text-red-600 transition-colors duration-300" />
                    </a>
                    <a
                      href="#"
                      aria-label="Twitter"
                      className="w-10 h-10 bg-transparent border border-gray-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:shadow-[0_0_30px_rgba(239,68,68,0.8)] transition-all duration-300 hover:scale-110 group hover:border-red-500"
                    >
                      <Twitter className="h-5 w-5 text-custom-grey group-hover:text-red-600 transition-colors duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation with Logo */}
          <nav
            aria-label="Main"
            className="hidden md:flex items-center justify-center gap-8 font-medium"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "font-roboto text-white"
                  : "font-roboto text-custom-grey hover:text-gray-300 transition-colors duration-300"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/alfbake/ourstory"
              className={({ isActive }) =>
                isActive
                  ? "font-roboto text-white"
                  : "font-roboto text-custom-grey hover:text-gray-300 transition-colors duration-300"
              }
            >
              Our Story
            </NavLink>

            {/* Logo in center */}
            <Link
              to="/"
              className="flex items-center"
              aria-label="ALF BAKE Home"
            >
              <img
                src="/logo/logo.png"
                alt="ALF BAKE logo"
                className="h-20 w-22"
                loading="eager"
              />
            </Link>

            <NavLink
              to="/menu"
              className={({ isActive }) =>
                isActive
                  ? "font-roboto text-white"
                  : "font-roboto text-custom-grey hover:text-gray-300 transition-colors duration-300"
              }
            >
              Menu
            </NavLink>
            <NavLink
              to="/alfbake/contact-us"
              className={({ isActive }) =>
                isActive
                  ? "font-roboto text-white"
                  : "font-roboto text-custom-grey hover:text-gray-300 transition-colors duration-300"
              }
            >
              Contact
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
