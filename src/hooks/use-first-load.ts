import { useState, useEffect } from "react";

export const useFirstLoad = () => {
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = localStorage.getItem("alfbake-has-visited");

    if (hasVisited) {
      setIsFirstLoad(false);
    } else {
      // Mark as visited
      localStorage.setItem("alfbake-has-visited", "true");
      setIsFirstLoad(true);
    }
  }, []);

  return isFirstLoad;
};
