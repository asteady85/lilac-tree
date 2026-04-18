import { useEffect, useState } from "react";
import "./ScrollToTop.css";

export default function ScrollToTop() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!showScrollTop) return null;

  return (
    <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="scroll-to-top-icon">
        <circle cx="16" cy="16" r="16" />
        <path d="M16 10L16 22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M10 16L16 10L22 16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </button>
  );
}
