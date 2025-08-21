import { IMAGEKIT_URLS } from "@/utils/constants";
import React, { useState, useEffect } from "react";

interface PageLoadingScreenProps {
  onLoadingComplete: () => void;
  pageImages?: string[]; // Array of image URLs to preload
  isFirstLoad?: boolean; // Whether this is the first load of the app
}

const PageLoadingScreen: React.FC<PageLoadingScreenProps> = ({
  onLoadingComplete,
  pageImages = [],
  isFirstLoad = false,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [logoOpacity, setLogoOpacity] = useState(0);
  const [progress, setProgress] = useState(0);
  const [loadedImages, setLoadedImages] = useState(0);
  const [totalImages, setTotalImages] = useState(0);

  useEffect(() => {
    // Reset states when component mounts or pageImages change
    setIsVisible(true);
    setProgress(0);
    setLoadedImages(0);

    // Set total images to load (including the logo)
    const totalToLoad = pageImages.length + 1; // +1 for logo
    setTotalImages(totalToLoad);

    // Check if images are cached by testing load times
    const checkImageCache = async () => {
      const testImage = pageImages[0] || IMAGEKIT_URLS.logo;
      const startTime = Date.now();

      return new Promise<boolean>((resolve) => {
        const img = new Image();
        img.onload = () => {
          const loadTime = Date.now() - startTime;
          // If image loads very quickly (< 100ms), it's likely cached
          resolve(loadTime < 100);
        };
        img.onerror = () => resolve(false);
        img.src = testImage;
      });
    };

    const initializeLoading = async () => {
      const isCached = await checkImageCache();

      // Show logo immediately if images are cached, otherwise wait for 90%
      if (isCached) {
        setLogoOpacity(1);
        setLoadedImages(1); // Count logo as loaded
      } else {
        setLogoOpacity(0);
      }

      // Minimum loading time of 3 seconds
      const minLoadingTime = 3000;
      const startTime = Date.now();

      // Progress animation with minimum time guarantee
      const progressInterval = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        const timeProgress = Math.min((elapsedTime / minLoadingTime) * 100, 90); // Cap at 90% for time-based progress

        const imageProgress = (loadedImages / totalToLoad) * 100;
        const combinedProgress = Math.min(
          Math.max(timeProgress, imageProgress),
          90
        );

        setProgress(combinedProgress);

        // Show logo only when progress reaches 90% (if not cached)
        if (!isCached && combinedProgress >= 90 && logoOpacity === 0) {
          setLogoOpacity(1);
          setLoadedImages((prev) => prev + 1);
        }
      }, 50);

      // Preload page images
      const imagePromises = pageImages.map((src) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => {
            setLoadedImages((prev) => prev + 1);
            resolve();
          };
          img.onerror = () => {
            // If image fails to load, still count it as loaded to avoid infinite loading
            setLoadedImages((prev) => prev + 1);
            resolve();
          };
          img.src = src;
        });
      });

      // Wait for all images to load and minimum time
      Promise.all([
        Promise.all(imagePromises),
        new Promise((resolve) => setTimeout(resolve, minLoadingTime)),
      ]).then(() => {
        // Ensure progress reaches 100% before completing
        setProgress(100);

        // Complete loading immediately
        setIsVisible(false);
        onLoadingComplete();
      });

      return () => {
        clearInterval(progressInterval);
      };
    };

    initializeLoading();
  }, [pageImages, onLoadingComplete]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden">
      {/* CSS Animation for Shimmer Effect */}
      <style>
        {`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}
      </style>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-8">
        {/* Logo Container */}
        <div className="relative">
          {/* Logo Glow Effect */}
          <div className="absolute inset-0 bg-red-600/20 rounded-full blur-2xl scale-150 animate-pulse"></div>

          {/* Main Logo */}
          <div
            className="relative transition-opacity duration-1000 ease-out"
            style={{ opacity: logoOpacity }}
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
              {/* Moving Light Effect */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                style={{
                  animation: "shimmer 2s infinite",
                  transform: `translateX(${progress * 2}%)`,
                }}
              ></div>
            </div>
          </div>

          {/* Progress Text */}
          <div className="text-center">
            <p className="text-gray-400 text-sm font-roboto tracking-wider">
              {"Preparing Your Experience..."}
            </p>
            <p className="text-gray-500 text-xs font-roboto mt-1">
              Please wait while we prepare everything for you...
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

export default PageLoadingScreen;
