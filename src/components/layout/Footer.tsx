import {
  Instagram,
  Facebook,
  Twitter,
  MapPin,
  Phone,
  Mail,
  X,
} from "lucide-react";
import footerBg from "@/assets/footernew.png";

const Footer = () => {
  return (
    <footer className="relative mt-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={footerBg}
          alt="Footer background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="container py-16">
          {/* Top Section - 3 columns on mobile, 4 on desktop */}
          <div className="grid grid-cols-3 gap-6 md:gap-12 md:grid-cols-4 mb-12">
            {/* Quick Links Section */}
            <section
              aria-labelledby="quick-links"
              className="text-center md:text-left"
            >
              <h3
                id="quick-links"
                className="font-roboto font-bold text-lg md:text-2xl lg:text-3xl text-gray-300 mb-4 md:mb-6 tracking-[0.1em]"
              >
                QUICK LINKS
              </h3>
              <ul className="space-y-2 md:space-y-4">
                <li>
                  <a
                    href="/"
                    className="font-roboto text-sm md:text-lg lg:text-xl text-custom-grey hover:text-red-500 transition-colors duration-300 block"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/menu"
                    className="font-roboto text-sm md:text-lg lg:text-xl text-custom-grey hover:text-red-500 transition-colors duration-300 block"
                  >
                    Our Menu
                  </a>
                </li>
                <li>
                  <a
                    href="/alfbake/ourstory"
                    className="font-roboto text-sm md:text-lg lg:text-xl text-custom-grey hover:text-red-500 transition-colors duration-300 block"
                  >
                    Our Story
                  </a>
                </li>
                <li>
                  <a
                    href="/alfbake/contact-us"
                    className="font-roboto text-sm md:text-lg lg:text-xl text-custom-grey hover:text-red-500 transition-colors duration-300 block"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </section>

            {/* Address Section */}
            <section
              aria-labelledby="address"
              className="text-center md:text-left"
            >
              <h3
                id="address"
                className="font-roboto font-bold text-lg md:text-2xl lg:text-3xl text-gray-300 mb-4 md:mb-6 tracking-[0.1em]"
              >
                ADDRESS
              </h3>
              <div className="space-y-2 md:space-y-3">
                <p className="font-roboto text-sm md:text-lg lg:text-xl text-custom-grey leading-relaxed">
                  ALF BAKE
                </p>
                <p className="font-roboto text-sm md:text-lg lg:text-xl text-custom-grey leading-relaxed">
                  Opposite Goldcity
                </p>
                <p className="font-roboto text-sm md:text-lg lg:text-xl text-custom-grey leading-relaxed">
                  Manama, Bahrain
                </p>
              </div>
            </section>

            {/* Contact Section */}
            <section
              aria-labelledby="contact"
              className="text-center md:text-left"
            >
              <h3
                id="contact"
                className="font-roboto font-bold text-lg md:text-2xl lg:text-3xl text-gray-300 mb-4 md:mb-6 tracking-[0.1em]"
              >
                CONTACT
              </h3>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex flex-col items-center md:flex-row md:justify-start gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-transparent border border-gray-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:shadow-[0_0_30px_rgba(239,68,68,0.8)] transition-all duration-300 hover:scale-110 group hover:border-red-500">
                    <Phone className="h-4 w-4 md:h-5 md:w-5 text-custom-grey group-hover:text-red-600 transition-colors duration-300" />
                  </div>
                  <span className="font-roboto text-xs md:text-lg lg:text-xl text-custom-grey">
                    (+973) 7790 9019
                  </span>
                </li>
                <li className="flex flex-col items-center md:flex-row md:justify-start gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-transparent border border-gray-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:shadow-[0_0_30px_rgba(239,68,68,0.8)] transition-all duration-300 hover:scale-110 group hover:border-red-500 flex-shrink-0">
                    <Mail className="h-4 w-4 md:h-5 md:w-5 text-custom-grey group-hover:text-red-600 transition-colors duration-300" />
                  </div>
                  <span className="font-roboto text-xs md:text-sm lg:text-base text-custom-grey whitespace-nowrap">
                    alfbakerestocafe@gmail.com
                  </span>
                </li>
                <li className="flex flex-col items-center md:flex-row md:justify-start gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-transparent border border-gray-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:shadow-[0_0_30px_rgba(239,68,68,0.8)] transition-all duration-300 hover:scale-110 group hover:border-red-500">
                    <MapPin className="h-4 w-4 md:h-5 md:w-5 text-custom-grey group-hover:text-red-600 transition-colors duration-300" />
                  </div>
                  <span className="font-roboto text-xs md:text-lg lg:text-xl text-custom-grey">
                    Open 1:00 PM–1:00 AM daily
                  </span>
                </li>
              </ul>
            </section>

            {/* Social Media Section */}
            <section
              aria-labelledby="socials"
              className="text-center md:text-left col-span-3 md:col-span-1"
            >
              <h3
                id="socials"
                className="font-roboto font-bold text-lg md:text-2xl lg:text-3xl text-gray-300 mb-4 md:mb-6 tracking-[0.1em]"
              >
                FOLLOW US
              </h3>
              <div className="flex items-center justify-center md:justify-start gap-3 md:gap-4">
                <a
                  href="https://www.instagram.com/alf_bake__/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 md:w-12 md:h-12 bg-transparent border border-gray-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:shadow-[0_0_30px_rgba(239,68,68,0.8)] transition-all duration-300 hover:scale-110 group hover:border-red-500"
                >
                  <Instagram className="h-5 w-5 md:h-6 md:w-6 text-custom-grey group-hover:text-red-600 transition-colors duration-300" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61579726914316"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 md:w-12 md:h-12 bg-transparent border border-gray-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:shadow-[0_0_30px_rgba(239,68,68,0.8)] transition-all duration-300 hover:scale-110 group hover:border-red-500"
                >
                  <Facebook className="h-5 w-5 md:h-6 md:w-6 text-custom-grey group-hover:text-red-600 transition-colors duration-300" />
                </a>
                <a
                  href="https://x.com/AlfBake"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="w-10 h-10 md:w-12 md:h-12 bg-transparent border border-gray-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:shadow-[0_0_30px_rgba(239,68,68,0.8)] transition-all duration-300 hover:scale-110 group hover:border-red-500"
                >
                  <X className="h-5 w-5 md:h-6 md:w-6 text-custom-grey group-hover:text-red-600 transition-colors duration-300" />
                </a>
              </div>
            </section>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-600/30 py-6 text-center">
          <p className="font-roboto text-lg text-custom-grey">
            © {new Date().getFullYear()} ALF BAKE Resto Cafe. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
