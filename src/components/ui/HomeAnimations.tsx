import React, { useEffect, useRef, useState } from "react";

interface HomeAnimationsProps {
  children: React.ReactNode;
  className?: string;
}

const HomeAnimations: React.FC<HomeAnimationsProps> = ({
  children,
  className = "",
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

    const elements =
      containerRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, [lastScrollY, scrollDirection]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

// Animation utility classes for home page - Simple transitions for headings
export const homeAnimationClasses = {
  fadeInUp:
    "animate-on-scroll opacity-0 translate-y-2 transition-all duration-300 ease-out",
  fadeInDown:
    "animate-on-scroll opacity-0 -translate-y-2 transition-all duration-300 ease-out",
  fadeInLeft:
    "animate-on-scroll opacity-0 translate-x-2 transition-all duration-300 ease-out",
  fadeInRight:
    "animate-on-scroll opacity-0 -translate-x-2 transition-all duration-300 ease-out",
  scaleIn:
    "animate-on-scroll opacity-0 scale-98 transition-all duration-300 ease-out",
  slideInUp:
    "animate-on-scroll opacity-0 translate-y-3 transition-all duration-400 ease-out",
  slideInDown:
    "animate-on-scroll opacity-0 -translate-y-3 transition-all duration-400 ease-out",
  slideInLeft:
    "animate-on-scroll opacity-0 translate-x-3 transition-all duration-400 ease-out",
  slideInRight:
    "animate-on-scroll opacity-0 -translate-x-3 transition-all duration-400 ease-out",
  zoomIn:
    "animate-on-scroll opacity-0 scale-95 transition-all duration-300 ease-out",
  glowIn: "animate-on-scroll opacity-0 transition-all duration-400 ease-out",
  shimmerIn: "animate-on-scroll opacity-0 transition-all duration-500 ease-out",

  // Simple transition effects for headings - no animations
  headingSlideUp: "transition-all duration-300 ease-out",
  headingSlideDown: "transition-all duration-300 ease-out",
  headingSlideLeft: "transition-all duration-300 ease-out",
  headingSlideRight: "transition-all duration-300 ease-out",
  headingZoomIn: "transition-all duration-300 ease-out",
  headingGlowIn: "transition-all duration-300 ease-out",
  headingShimmerIn: "transition-all duration-300 ease-out",

  // Special section animations - Much faster
  specialSlideUp:
    "animate-on-scroll opacity-0 translate-y-5 transition-all duration-500 ease-out",
  specialSlideDown:
    "animate-on-scroll opacity-0 -translate-y-5 transition-all duration-500 ease-out",
  specialZoomIn:
    "animate-on-scroll opacity-0 scale-90 transition-all duration-400 ease-out",
  specialGlowIn:
    "animate-on-scroll opacity-0 transition-all duration-600 ease-out",
};

// Add CSS for animation classes
const style = document.createElement("style");
style.textContent = `
  .animate-on-scroll.animate-in {
    opacity: 1 !important;
    transform: translate(0, 0) scale(1) !important;
  }
  
  /* Simple transition effects for headings - no scroll direction */
  .animate-on-scroll.animate-in.glow-in {
    box-shadow: 0 0 30px rgba(239, 68, 68, 0.2) !important;
  }
  
  .animate-on-scroll.animate-in.heading-glow-in {
    box-shadow: 0 0 50px rgba(239, 68, 68, 0.3) !important;
    text-shadow: 0 0 20px rgba(239, 68, 68, 0.4) !important;
  }
  
  .animate-on-scroll.animate-in.special-glow-in {
    box-shadow: 0 0 60px rgba(239, 68, 68, 0.4) !important;
    text-shadow: 0 0 30px rgba(239, 68, 68, 0.5) !important;
  }
  
  .animate-on-scroll.animate-in.shimmer-in::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(239, 68, 68, 0.1), transparent);
    animation: shimmer 1s ease-in-out;
  }
  
  .animate-on-scroll.animate-in.heading-shimmer-in::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(239, 68, 68, 0.2), transparent);
    animation: shimmer 1.5s ease-in-out;
  }
  
  @keyframes shimmer {
    0% { left: -100%; }
    100% { left: 100%; }
  }
`;

if (!document.head.contains(style)) {
  document.head.appendChild(style);
}

export default HomeAnimations;
