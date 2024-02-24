import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function ScrollToTop({ children }) {
  const location = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return <>{children}</>;
}

export default ScrollToTop;
