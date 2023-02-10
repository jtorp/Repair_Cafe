import { useState, useEffect } from "react"

const useScrollY = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const updateY = () => {
      setScrollY(window.pageYOffset);
    };
    window.addEventListener("scroll", updateY);
    return () => window.removeEventListener("scroll", updateY);
  }, []);
  return scrollY;
};

export default useScrollY
