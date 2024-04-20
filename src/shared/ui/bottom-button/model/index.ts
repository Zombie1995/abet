import { useEffect, useState } from "react";

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

// Hook used to determine, when botton button need to be hidden depends on item scroll
export const useShowButton = (
  ref?: React.RefObject<HTMLElement>,
  scrollHeightDiff: number = 60
) => {
  const scrollPosition = useScroll(ref);

  useEffect(() => {
    if (ref?.current) ref.current.scrollTop = 1;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref?.current]);

  const showButton =
    (ref?.current
      ? ref.current.scrollHeight - ref.current.clientHeight
      : Infinity) -
      scrollPosition >
    scrollHeightDiff;

  return showButton;
};
