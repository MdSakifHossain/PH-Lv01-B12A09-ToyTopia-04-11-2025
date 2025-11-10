import { useState, useEffect } from "react";

export const useIsMobile = (maxWidth = 768) => {
  const getMatch = () =>
    typeof window.matchMedia === "function" &&
    window.matchMedia(`(max-width: ${maxWidth}px)`).matches;

  const [isMobile, setIsMobile] = useState(getMatch);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${maxWidth}px)`);

    const handleChange = (e) => setIsMobile(e.matches);

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [maxWidth]);

  return isMobile;
};
