import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { IMAGEKIT_URLS } from "@/utils/constants";

export const usePageLoading = () => {
  const [isLoading, setIsLoading] = useState(true); // Start with loading true
  const [pageImages, setPageImages] = useState<string[]>([]);
  const location = useLocation();

  useEffect(() => {
    // Don't set loading to true again if it's already true (prevents flash)
    if (!isLoading) {
      setIsLoading(true);
    }

    // Define images for each page
    const getPageImages = () => {
      switch (location.pathname) {
        case "/":
          return [
            IMAGEKIT_URLS.backgrounds.mainBanner,
            IMAGEKIT_URLS.backgrounds.backgroundTexture,
            IMAGEKIT_URLS.mobileViewBoldFlavor.image,
          ];
        case "/alfbake/ourstory":
          return [
            IMAGEKIT_URLS.backgrounds.mainBanner,
            IMAGEKIT_URLS.backgrounds.backgroundTexture,
            IMAGEKIT_URLS.ourStory.backgroundTexture,
          ];
        case "/menu":
          return [
            IMAGEKIT_URLS.backgrounds.mainBanner,
            IMAGEKIT_URLS.backgrounds.backgroundTexture,
          ];
        case "/alfbake/contact-us":
          return [
            IMAGEKIT_URLS.backgrounds.mainBanner,
            IMAGEKIT_URLS.backgrounds.backgroundTexture,
          ];
        default:
          return [
            IMAGEKIT_URLS.backgrounds.mainBanner,
            IMAGEKIT_URLS.backgrounds.backgroundTexture,
          ];
      }
    };

    setPageImages(getPageImages());
  }, [location.pathname]);

  const stopLoading = () => {
    setIsLoading(false);
  };

  return { isLoading, pageImages, stopLoading };
};
