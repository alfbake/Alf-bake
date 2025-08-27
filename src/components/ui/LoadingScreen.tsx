import { IMAGEKIT_URLS } from "@/utils/constants";
import React, { useState, useEffect } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
  duration?: number; // Duration in milliseconds
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  onLoadingComplete,
  duration = 3000,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [logoOpacity, setLogoOpacity] = useState(0);
  const [logoBlur, setLogoBlur] = useState(30); // Start with very heavy blur
  const [textOpacity, setTextOpacity] = useState(0);
  const [progress, setProgress] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Preload the logo image to detect loading speed
    const preloadLogo = () => {
      const img = new Image();
      const startTime = Date.now();

      img.onload = () => {
        const loadTime = Date.now() - startTime;
        setImageLoaded(true);

        // If image loads quickly (< 200ms), it's likely cached
        if (loadTime < 200) {
          setLogoBlur(0); // No blur if cached
        } else {
          // For slower loading, keep blur and clear it gradually
          setLogoBlur(30); // Ensure blur is set for slow loading
        }
      };

      img.onerror = () => {
        setImageLoaded(true);
        setLogoBlur(0); // Remove blur if image fails to load
      };

      img.src = IMAGEKIT_URLS.logo;
    };

    // Start preloading the logo
    preloadLogo();

    // Logo fade in animation
    const logoTimer = setTimeout(() => {
      setLogoOpacity(1);
      // Ensure blur is applied when logo appears
      if (!imageLoaded) {
        setLogoBlur(30); // Force blur when logo first appears
      }
    }, 200); // Show logo earlier

    // Text fade in animation
    const textTimer = setTimeout(() => {
      setTextOpacity(1);
    }, 1000);

    // Progress animation with blur removal based on image loading
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 2;

        // Remove blur when progress reaches 50% and image is loaded
        if (newProgress >= 50 && imageLoaded && logoBlur > 0) {
          setLogoBlur(0);
        }

        // If image is not loaded yet, keep heavy blur
        if (!imageLoaded && logoBlur < 30) {
          setLogoBlur(30);
        }

        // If image is cached (no blur), progress faster
        if (logoBlur === 0 && newProgress < 80) {
          return newProgress + 1; // Faster progress for cached images
        }

        if (newProgress >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return newProgress;
      });
    }, duration / 50);

    // Complete loading after duration
    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onLoadingComplete();
      }, 500);
    }, duration);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(textTimer);
      clearInterval(progressInterval);
      clearTimeout(completeTimer);
    };
  }, [duration, onLoadingComplete, imageLoaded, logoBlur]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden">
      {/* Deep Red Blur Gradient Background */}
      <div className="absolute inset-0"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-8">
        {/* Logo Container */}
        <div className="relative">
          {/* Logo Glow Effect */}
          <div className="absolute inset-0 bg-red-600/20 rounded-full blur-2xl scale-150 animate-pulse"></div>

          {/* Main Logo */}
          <div
            className="relative transition-all duration-1000 ease-out"
            style={{
              opacity: logoOpacity,
              filter: `blur(${logoBlur}px)`,
              transform: logoBlur > 0 ? "scale(1.1)" : "scale(1)", // Slight scale for better blur visibility
            }}
          >
            <img
              src={IMAGEKIT_URLS.logo}
              alt="ALF BAKE Logo"
              className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-2xl"
              loading="eager"
            />
          </div>

          {/* Rotating Ring Effect */}
          <div
            className="absolute inset-0 border-2 border-red-500/30 rounded-full animate-spin"
            style={{ animationDuration: "8s" }}
          ></div>
          <div
            className="absolute inset-2 border border-red-400/20 rounded-full animate-spin"
            style={{ animationDuration: "12s", animationDirection: "reverse" }}
          ></div>
        </div>

        {/* Loading Progress Bar */}
        <div className="w-64 md:w-80 space-y-4">
          {/* Progress Bar Container */}
          <div className="relative h-2 bg-gray-800/50 rounded-full overflow-hidden border border-gray-700">
            {/* Progress Fill */}
            <div
              className="h-full bg-gradient-to-r from-red-600 to-red-500 rounded-full transition-all duration-300 ease-out relative overflow-hidden"
              style={{ width: `${progress}%` }}
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
            </div>
          </div>

          {/* Progress Text */}
          <div className="text-center">
            <p className="text-gray-400 text-sm font-roboto tracking-wider">
              Loading...
            </p>
            <p className="text-red-500 text-xs font-roboto mt-1">{progress}%</p>
            {/* Debug info - remove this later */}
            <p className="text-gray-600 text-xs mt-1">
              Blur: {logoBlur}px | Image Loaded: {imageLoaded ? "Yes" : "No"}
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="flex space-x-4 mt-8">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce"></div>
          <div
            className="w-2 h-2 bg-red-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-2 h-2 bg-red-300 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
      </div>

      {/* Fade Out Overlay */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-500 ease-out ${
          !isVisible ? "opacity-100" : "opacity-0"
        }`}
      ></div>
    </div>
  );
};

export default LoadingScreen;
