import { useState, useEffect } from "react";

export const useLoading = (initialLoading = true, duration = 3000) => {
  const [isLoading, setIsLoading] = useState(initialLoading);

  useEffect(() => {
    if (initialLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, duration + 100); // Add small delay for smooth transition

      return () => clearTimeout(timer);
    }
  }, [initialLoading, duration]);

  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);

  return {
    isLoading,
    startLoading,
    stopLoading,
  };
};
