import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { IMAGEKIT_URLS } from "@/utils/constants";

// Define image lists for each page
const PAGE_IMAGES = {
  "/": [
    IMAGEKIT_URLS.backgrounds.backgroundTexture,
    IMAGEKIT_URLS.other.friedchicken,
    IMAGEKIT_URLS.mobileViewBoldFlavor.image,
    IMAGEKIT_URLS.backgrounds.backgroundTexture,
    IMAGEKIT_URLS.other.burger2,
    IMAGEKIT_URLS.backgrounds.footernew,
    IMAGEKIT_URLS.logo,
  ],
  "/menu": [
    IMAGEKIT_URLS.backgrounds.mainBanner,
    IMAGEKIT_URLS.menuMain.burgerMainSection,
    IMAGEKIT_URLS.menuMain.clubSandwichMainSection,
    IMAGEKIT_URLS.menuMain.dessertMainSection,
    IMAGEKIT_URLS.menuMain.freshJuicesMainSection,
    IMAGEKIT_URLS.menuMain.mainCourseMainSection,
    IMAGEKIT_URLS.menuMain.mojitoMainSection,
    IMAGEKIT_URLS.menuMain.sandwichMainSection,
  ],
  "/alfbake/ourstory": [
    IMAGEKIT_URLS.backgrounds.mainBanner,
    IMAGEKIT_URLS.logo,
    IMAGEKIT_URLS.ourStory.backgroundTexture,
    IMAGEKIT_URLS.profile.founder1,
    IMAGEKIT_URLS.profile.founder2,
    IMAGEKIT_URLS.backgrounds.footernew,
  ],
  "/alfbake/contact-us": [
    IMAGEKIT_URLS.backgrounds.mainBanner,
    IMAGEKIT_URLS.backgrounds.footernew,
    IMAGEKIT_URLS.logo,
  ],
};

export const usePageLoading = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [pageImages, setPageImages] = useState<string[]>([]);
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const images = PAGE_IMAGES[currentPath as keyof typeof PAGE_IMAGES] || [];
    setPageImages(images);

    // Reset loading state
    setIsLoading(true);
    setProgress(0);

    // Preload images for the current page
    const preloadImages = async () => {
      const imagePromises = images.map((src) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => resolve(); // Continue even if image fails
          img.src = src;
        });
      });

      // Wait for all images to load and minimum 3 seconds
      await Promise.all([
        Promise.all(imagePromises),
        new Promise((resolve) => setTimeout(resolve, 3000)),
      ]);

      // Set loading to false immediately after completion
      setIsLoading(false);
    };

    // Add a timeout fallback to prevent infinite loading
    const timeoutFallback = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 5 second maximum timeout

    preloadImages().finally(() => {
      clearTimeout(timeoutFallback);
    });
  }, [location.pathname]);

  return {
    isLoading,
    progress,
    pageImages,
  };
};
