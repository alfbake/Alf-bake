import React, { useEffect, useRef, useState } from "react";

interface GlobalAnimationsProps {
  children: React.ReactNode;
}

export const globalAnimationClasses = {
  // Header animations - Smooth flowing text
  headerTitle:
    "animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out",
  headerSubtitle:
    "animate-on-scroll opacity-0 translate-y-6 transition-all duration-1000 ease-out delay-200",

  // Immediate heading animations (no delays)
  headingImmediate: "animate-heading-immediate",

  // Beautiful section header transitions (no delays)
  sectionHeaderGlow: "animate-section-header-glow",

  // Button breathing effect
  buttonBreathing: "animate-breathing",

  // Form border breathing effect
  formBorderBreathing: "animate-form-breathing",

  // Section animations
  sectionFadeIn:
    "animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 ease-out",
  sectionSlideIn:
    "animate-on-scroll opacity-0 translate-x-4 transition-all duration-700 ease-out",

  // Content animations
  contentFadeIn:
    "animate-on-scroll opacity-0 translate-y-2 transition-all duration-500 ease-out",
  contentSlideIn:
    "animate-on-scroll opacity-0 translate-x-2 transition-all duration-500 ease-out",
};

const GlobalAnimations: React.FC<GlobalAnimationsProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger initial animations after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          } else {
            entry.target.classList.remove("animate-in");
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

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef}>
      <style>{`
        /* Header animations */
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        /* Breathing effect for buttons */
        @keyframes breathing {
          0%, 100% {
            box-shadow: 0 0 20px rgba(239, 68, 68, 0.5);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 30px rgba(239, 68, 68, 0.8), 0 0 40px rgba(239, 68, 68, 0.3);
            transform: scale(1.02);
          }
        }

        .animate-breathing {
          animation: breathing 3s ease-in-out infinite;
        }

        /* Breathing effect for form borders */
        @keyframes formBreathing {
          0%, 100% {
            box-shadow: 0 0 20px rgba(239, 68, 68, 0.3);
            border-color: rgba(239, 68, 68, 0.5);
          }
          50% {
            box-shadow: 0 0 30px rgba(239, 68, 68, 0.6), 0 0 40px rgba(239, 68, 68, 0.2);
            border-color: rgba(239, 68, 68, 0.8);
          }
        }

        .animate-form-breathing {
          animation: formBreathing 4s ease-in-out infinite;
        }

        /* Header text flow animation */
        @keyframes headerTextFlow {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .header-text-flow {
          animation: headerTextFlow 1.2s ease-out forwards;
        }

        /* Immediate heading animation (no delays) */
        @keyframes headingImmediate {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-heading-immediate {
          animation: headingImmediate 0.8s ease-out forwards;
        }

        /* Beautiful section header glow animation (no delays) */
        @keyframes sectionHeaderGlow {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
            text-shadow: 0 0 0px rgba(239, 68, 68, 0);
          }
          50% {
            opacity: 0.8;
            transform: translateY(15px) scale(0.98);
            text-shadow: 0 0 20px rgba(239, 68, 68, 0.3);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            text-shadow: 0 0 30px rgba(239, 68, 68, 0.2), 0 0 60px rgba(239, 68, 68, 0.1);
          }
        }

        .animate-section-header-glow {
          animation: sectionHeaderGlow 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        /* Deep red blur animations */
        @keyframes deepRedPulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }

        @keyframes redGradientFloat {
          0%, 100% {
            transform: translate(-50%, -50%) rotate(0deg) scale(1);
          }
          33% {
            transform: translate(-50%, -50%) rotate(120deg) scale(1.05);
          }
          66% {
            transform: translate(-50%, -50%) rotate(240deg) scale(0.95);
          }
        }

        .deep-red-pulse {
          animation: deepRedPulse 4s ease-in-out infinite;
        }

        .red-gradient-float {
          animation: redGradientFloat 8s ease-in-out infinite;
        }

        /* Staggered animations */
        .stagger-animation {
          animation: staggerFadeIn 0.6s ease-out forwards;
        }

        @keyframes staggerFadeIn {
          0% {
            opacity: 0;
            transform: translateY(15px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Smooth hover effects */
        .smooth-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .smooth-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(239, 68, 68, 0.3);
        }

        /* Form input breathing effect */
        .form-input-breathing:focus {
          animation: formBreathing 2s ease-in-out infinite;
        }
      `}</style>
      {children}
    </div>
  );
};

export default GlobalAnimations;
