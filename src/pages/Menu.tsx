import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { menuData } from "@/utils/utils";
import MenuAnimations, {
  menuAnimationClasses,
} from "@/components/ui/MenuAnimations";
import GlobalAnimations, {
  globalAnimationClasses,
} from "@/components/ui/GlobalAnimations";

const Menu = () => {
  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger initial animations after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const getDisplayItems = (items: any[], sectionId: string) => {
    return items.slice(0, 6);
  };

  const getHiddenItems = (items: any[], sectionId: string) => {
    return items.slice(6);
  };

  return (
    <GlobalAnimations>
      <MenuAnimations>
        <div className="min-h-screen bg-black">
          <Helmet>
            <title>Menu | ALF BAKE</title>
            <meta
              name="description"
              content="Explore our complete menu featuring grilled specialties, pasta, burgers, desserts, and beverages."
            />
          </Helmet>

          {/* Big Red Header */}
          <section
            className="relative py-16 bg-cover bg-center bg-no-repeat overflow-hidden"
            style={{ backgroundImage: "url(/src/assets/mainbanner.png)" }}
          >
            <div className="container relative z-10">
              <div className="text-center">
                <h1
                  className={`mt-8 text-black font-roboto font-bold text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-9xl leading-normal tracking-[0.1em] transition-all duration-700 ease-out ${
                    isLoaded
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    animation: isLoaded
                      ? "textFlow 1.2s ease-out forwards"
                      : "none",
                  }}
                >
                  OUR MENU
                </h1>
                <p
                  className={`text-black font-script text-2xl md:text-3xl font-bold transition-all duration-700 ease-out delay-200 ${
                    isLoaded
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
                  style={{
                    animation: isLoaded
                      ? "textFlow 1s ease-out 0.3s forwards"
                      : "none",
                  }}
                >
                  Discover culinary excellence in every bite
                </p>
              </div>
            </div>
          </section>

          {/* Menu Sections */}
          {menuData.map((section, index) => (
            <section
              key={section.id}
              className="relative py-20 bg-black overflow-hidden"
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <div className="container">
                <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-12">
                    <h2
                      className={`text-4xl font-script text-red-600 mb-2 transition-all duration-600 ease-out ${globalAnimationClasses.headingImmediate}`}
                      style={{
                        animationDelay: `${index * 0.1}s`,
                        animation: "headingImmediate 0.8s ease-out forwards",
                      }}
                    >
                      {section.title}
                    </h2>
                  </div>

                  {/* Mobile Background Image */}
                  <div className="lg:hidden relative mb-8">
                    <div
                      className={`relative h-[500px] w-full rounded-lg overflow-hidden transition-all duration-700 ease-out ${menuAnimationClasses.fadeInScale}`}
                      style={{
                        animationDelay: `${index * 0.15}s`,
                      }}
                    >
                      <img
                        src={section.image}
                        alt={`${section.title} at ALF BAKE`}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </div>

                  <div
                    className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ease-out ${
                      section.imagePosition === "left"
                        ? "lg:grid-flow-col-dense"
                        : ""
                    }`}
                  >
                    {/* Menu Items */}
                    <div
                      className={`space-y-4 transition-all duration-300 ease-out ${
                        section.imagePosition === "left" ? "lg:col-start-2" : ""
                      }`}
                    >
                      {/* Always show first 6 items */}
                      {getDisplayItems(section.items, section.id).map(
                        (item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className={`flex justify-between items-start border-b border-gray-700 pb-4 transition-all duration-300 ease-out hover:border-red-500 hover:bg-red-500/5 hover:px-4 hover:py-2 hover:rounded-lg ${menuAnimationClasses.menuItemFloat}`}
                            style={{
                              animationDelay: `${itemIndex * 0.05}s`,
                            }}
                          >
                            <div className="flex-1">
                              <h3
                                className="text-xl font-semibold mb-2 text-gray-200 transition-all duration-300 ease-out hover:text-red-400"
                                style={{
                                  animation:
                                    "textGlow 2s ease-in-out infinite alternate",
                                }}
                              >
                                {item.name}
                              </h3>
                              <p className="text-gray-400 text-sm transition-all duration-300 ease-out hover:text-gray-300">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        )
                      )}

                      {/* Hidden Items - Show when expanded */}
                      {expandedSections[section.id] && (
                        <div className="space-y-4">
                          {getHiddenItems(section.items, section.id).map(
                            (item, itemIndex) => (
                              <div
                                key={`hidden-${itemIndex}`}
                                className={`flex justify-between items-start border-b border-gray-700 pb-4 transition-all duration-300 ease-out hover:border-red-500 hover:bg-red-500/5 hover:px-4 hover:py-2 hover:rounded-lg ${menuAnimationClasses.menuItemFloat}`}
                                style={{
                                  animation:
                                    "fastFadeIn 0.3s ease-out forwards",
                                  animationDelay: `${itemIndex * 0.05}s`,
                                }}
                              >
                                <div className="flex-1">
                                  <h3
                                    className="text-xl font-semibold mb-2 text-gray-200 transition-all duration-300 ease-out hover:text-red-400"
                                    style={{
                                      animation:
                                        "textGlow 2s ease-in-out infinite alternate",
                                    }}
                                  >
                                    {item.name}
                                  </h3>
                                  <p className="text-gray-400 text-sm transition-all duration-300 ease-out hover:text-gray-300">
                                    {item.description}
                                  </p>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      )}

                      {/* View All Menu Button */}
                      {section.items.length > 6 && (
                        <div className="text-center pt-8">
                          <button
                            onClick={() => toggleSection(section.id)}
                            className={`group inline-flex items-center gap-3 px-6 py-4 text-white bg-transparent border border-gray-600 rounded-full font-medium tracking-wide hover:border-red-500 hover:bg-red-500/10 hover:text-red-400 transition-all duration-300 ease-out shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:shadow-[0_0_30px_rgba(239,68,68,0.8)] hover:scale-105 ${menuAnimationClasses.buttonGlow}`}
                            style={{
                              animation: "buttonPulse 2s ease-in-out infinite",
                            }}
                          >
                            <span className="text-sm uppercase tracking-wider transition-all duration-300 ease-out">
                              {expandedSections[section.id]
                                ? "Show Less"
                                : `View All ${section.title}`}
                            </span>
                            <div className="relative w-8 h-8 rounded-full border border-gray-600 group-hover:border-red-500 transition-all duration-300 ease-out group-hover:scale-110">
                              <svg
                                className={`w-4 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out ${
                                  expandedSections[section.id]
                                    ? "rotate-180"
                                    : "group-hover:translate-y-0.5"
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </div>
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Desktop Category Image */}
                    <div
                      className={`hidden lg:flex justify-center items-center transition-all duration-700 ease-out ${
                        section.imagePosition === "left" ? "lg:col-start-1" : ""
                      }`}
                    >
                      <div
                        className={`relative w-[90%] h-[600px] transition-all duration-700 ease-out hover:scale-105 ${menuAnimationClasses.fadeInScale}`}
                        style={{
                          animationDelay: `${index * 0.15}s`,
                        }}
                      >
                        <img
                          src={section.image}
                          alt={`${section.title} at ALF BAKE`}
                          className="w-full h-full object-contain rounded-lg shadow-2xl transition-all duration-700 ease-out hover:shadow-[0_0_40px_rgba(239,68,68,0.3)]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}

          {/* Custom CSS Animations */}
          <style>{`
          @keyframes textFlow {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

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

          @keyframes headingGlow {
            0% {
              text-shadow: 0 0 5px rgba(239, 68, 68, 0.3);
            }
            100% {
              text-shadow: 0 0 20px rgba(239, 68, 68, 0.6),
                0 0 30px rgba(239, 68, 68, 0.4);
            }
          }

          @keyframes textGlow {
            0% {
              text-shadow: 0 0 2px rgba(239, 68, 68, 0.2);
            }
            100% {
              text-shadow: 0 0 8px rgba(239, 68, 68, 0.4);
            }
          }

          @keyframes buttonPulse {
            0%,
            100% {
              box-shadow: 0 0 20px rgba(239, 68, 68, 0.5);
            }
            50% {
              box-shadow: 0 0 30px rgba(239, 68, 68, 0.8),
                0 0 40px rgba(239, 68, 68, 0.3);
            }
          }

          @keyframes fastFadeIn {
            0% {
              opacity: 0;
              transform: translateY(10px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Smooth scroll animations */
          .animate-on-scroll {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .animate-on-scroll.animate-in {
            opacity: 1;
            transform: translateY(0);
          }

          /* Staggered animations for menu items */
          .menu-item-stagger {
            animation: staggerFadeIn 0.5s ease-out forwards;
          }

          @keyframes staggerFadeIn {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Smooth hover effects */
          .menu-item-hover {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .menu-item-hover:hover {
            transform: translateX(10px);
            background: linear-gradient(
              90deg,
              rgba(239, 68, 68, 0.05) 0%,
              transparent 100%
            );
          }

          /* Image hover effects */
          .image-hover {
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .image-hover:hover {
            transform: scale(1.05) rotate(1deg);
            filter: brightness(1.1) contrast(1.1);
          }
        `}</style>
        </div>
      </MenuAnimations>
    </GlobalAnimations>
  );
};

export default Menu;
