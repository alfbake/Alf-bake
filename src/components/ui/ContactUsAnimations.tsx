import React, { useEffect, useRef, useState } from "react";

interface ContactUsAnimationsProps {
  children: React.ReactNode;
}

export const contactUsAnimationClasses = {
  // Header animations - Simple transitions
  headerSlideDown: "transition-all duration-300 ease-out",
  headerFadeIn:
    "animate-on-scroll opacity-0 transition-all duration-500 ease-out",

  // Content animations - Much faster
  fadeInUp:
    "animate-on-scroll opacity-0 translate-y-2 transition-all duration-300 ease-out",
  fadeInLeft:
    "animate-on-scroll opacity-0 translate-x-2 transition-all duration-300 ease-out",
  fadeInRight:
    "animate-on-scroll opacity-0 -translate-x-2 transition-all duration-300 ease-out",
  fadeInScale:
    "animate-on-scroll opacity-0 scale-98 transition-all duration-350 ease-out",

  // Heading animations - Simple transitions only
  headingSlideUp: "transition-all duration-300 ease-out",
  headingSlideDown: "transition-all duration-300 ease-out",
  headingZoomIn: "transition-all duration-300 ease-out",
  headingGlowIn: "transition-all duration-300 ease-out",

  // Form animations - Much faster
  formReveal:
    "animate-on-scroll opacity-0 translate-y-4 transition-all duration-400 ease-out",
  inputFieldFloat:
    "animate-on-scroll opacity-0 translate-y-2 transition-all duration-300 ease-out",
  buttonGlow:
    "animate-on-scroll opacity-0 transition-all duration-350 ease-out",

  // Contact info animations - Much faster
  contactInfoSlide:
    "animate-on-scroll opacity-0 translate-x-4 transition-all duration-400 ease-out",
  iconFloat:
    "animate-on-scroll opacity-0 translate-y-3 transition-all duration-350 ease-out",

  // Map animations - Much faster
  mapReveal:
    "animate-on-scroll opacity-0 scale-98 transition-all duration-500 ease-out",

  // Staggered animations - Much faster
  staggerFadeIn:
    "animate-on-scroll opacity-0 translate-y-2 transition-all duration-250 ease-out",
  staggerSlideIn:
    "animate-on-scroll opacity-0 translate-x-2 transition-all duration-250 ease-out",
};

const ContactUsAnimations: React.FC<ContactUsAnimationsProps> = ({
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            // Add scroll direction class for headings
            if (entry.target.classList.contains("scroll-heading")) {
              entry.target.classList.add(`scroll-${scrollDirection}`);
            }
          } else {
            entry.target.classList.remove("animate-in");
            entry.target.classList.remove("scroll-up", "scroll-down");
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -150px 0px",
      }
    );

    const animatedElements =
      containerRef.current?.querySelectorAll(".animate-on-scroll");
    animatedElements?.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [lastScrollY, scrollDirection]);

  return (
    <div ref={containerRef}>
      <style jsx>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
        }

        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        /* Simple transition effects for headings - no scroll direction */
        .animate-on-scroll.animate-in.heading-slide-up {
          transform: translateY(0);
        }

        .animate-on-scroll.animate-in.heading-slide-down {
          transform: translateY(0);
        }

        .animate-on-scroll.animate-in.heading-zoom-in {
          transform: scale(1);
        }

        .animate-on-scroll.animate-in.heading-glow-in {
          box-shadow: 0 0 60px rgba(239, 68, 68, 0.3) !important;
          text-shadow: 0 0 30px rgba(239, 68, 68, 0.4) !important;
        }

        .animate-on-scroll.animate-in.form-reveal {
          transform: translateY(0);
          box-shadow: 0 0 50px rgba(239, 68, 68, 0.4) !important;
        }

        .animate-on-scroll.animate-in.input-field-float {
          transform: translateY(0);
        }

        .animate-on-scroll.animate-in.button-glow {
          box-shadow: 0 0 40px rgba(239, 68, 68, 0.5) !important;
        }

        .animate-on-scroll.animate-in.contact-info-slide {
          transform: translateX(0);
        }

        .animate-on-scroll.animate-in.icon-float {
          transform: translateY(0) scale(1.05);
        }

        .animate-on-scroll.animate-in.map-reveal {
          transform: scale(1);
        }

        .animate-on-scroll.animate-in.fade-in-left {
          transform: translateX(0);
        }

        .animate-on-scroll.animate-in.fade-in-right {
          transform: translateX(0);
        }

        .animate-on-scroll.animate-in.fade-in-scale {
          transform: scale(1);
        }

        .animate-on-scroll.animate-in.stagger-fade-in {
          transform: translateY(0);
        }

        .animate-on-scroll.animate-in.stagger-slide-in {
          transform: translateX(0);
        }
      `}</style>
      {children}
    </div>
  );
};

export default ContactUsAnimations;
