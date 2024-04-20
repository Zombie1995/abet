import React, { useEffect, useState } from "react";

const useScroll = (ref?: React.RefObject<HTMLElement>) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const scrollable = ref?.current ? ref.current : window;

    const handleScroll = () => {
      const newPosition = ref?.current ? ref.current.scrollTop : window.scrollY;

      setScrollPosition(newPosition);
    };

    scrollable.addEventListener("scroll", handleScroll);

    return () => {
      scrollable.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);

  return scrollPosition;
};

export default useScroll;
