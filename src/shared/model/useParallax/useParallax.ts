import { useEffect, useRef } from "react";

// Values of speed must be less than 1
const useParallax = (speed: number) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const top = elementRef.current.getBoundingClientRect().top;

      const parallaxValue = top * speed;
      console.log(parallaxValue);
      elementRef.current.style.transform = `translateY(${parallaxValue}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [speed]);

  return elementRef;
};

export default useParallax;
