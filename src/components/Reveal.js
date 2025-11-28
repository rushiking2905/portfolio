import React, { useRef, useState, useEffect } from "react";
import "./Reveal.css";

const Reveal = ({ children }) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
  }, []);

  return (
    <div ref={ref} className={`reveal ${isVisible ? "active" : ""}`}>
      {children}
    </div>
  );
};

export default Reveal;
