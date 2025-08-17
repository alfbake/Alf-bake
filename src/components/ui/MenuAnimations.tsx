import React, { useEffect, useRef, useState } from "react";

interface MenuAnimationsProps {
  children: React.ReactNode;
}

export const menuAnimationClasses = {
  // Header animations - Smooth fade transitions
  headerSlideDown: "transition-all duration-300 ease-out",
  headerFadeIn:
    "animate-on-scroll opacity-0 transition-all duration-400 ease-out",

  // Content animations - Smooth fade transitions
  fadeInUp:
    "animate-on-scroll opacity-0 translate-y-2 transition-all duration-300 ease-out",
  fadeInLeft:
    "animate-on-scroll opacity-0 translate-x-2 transition-all duration-300 ease-out",
  fadeInRight:
    "animate-on-scroll opacity-0 -translate-x-2 transition-all duration-300 ease-out",
  fadeInScale:
    "animate-on-scroll opacity-0 scale-98 transition-all duration-300 ease-out",

  // Heading animations - Smooth fade transitions
  headingSlideUp:
    "animate-on-scroll opacity-0 translate-y-3 transition-all duration-400 ease-out",
  headingSlideDown:
    "animate-on-scroll opacity-0 -translate-y-3 transition-all duration-400 ease-out",
  headingZoomIn:
    "animate-on-scroll opacity-0 scale-95 transition-all duration-400 ease-out",
  headingGlowIn:
    "animate-on-scroll opacity-0 transition-all duration-400 ease-out",

  // Menu section animations - Smooth fade transitions
  menuSectionReveal:
    "animate-on-scroll opacity-0 translate-y-4 transition-all duration-400 ease-out",
  menuItemFloat:
    "animate-on-scroll opacity-0 translate-y-3 transition-all duration-350 ease-out",
  buttonGlow:
    "animate-on-scroll opacity-0 transition-all duration-300 ease-out",

  // Staggered animations - Smooth fade transitions
  staggerFadeIn:
    "animate-on-scroll opacity-0 translate-y-2 transition-all duration-300 ease-out",
  staggerSlideIn:
    "animate-on-scroll opacity-0 translate-x-2 transition-all duration-300 ease-out",
};

const MenuAnimations: React.FC<MenuAnimationsProps> = ({ children }) => {
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
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
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
          transform: translateY(10px);
        }

        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        /* Smooth transition effects for headings */
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
          box-shadow: 0 0 20px rgba(239, 68, 68, 0.2) !important;
          text-shadow: 0 0 10px rgba(239, 68, 68, 0.3) !important;
        }

        .animate-on-scroll.animate-in.menu-section-reveal {
          transform: translateY(0);
        }

        .animate-on-scroll.animate-in.menu-item-float {
          transform: translateY(0);
        }

        .animate-on-scroll.animate-in.button-glow {
          box-shadow: 0 0 15px rgba(239, 68, 68, 0.3) !important;
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

export default MenuAnimations;
