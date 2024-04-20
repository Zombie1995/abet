import useScroll from "shared/model/useScroll";

// Returns if it's start screen
const useStartScreen = () => {
  const scrollPosition = useScroll();
  return scrollPosition < 1;
};

export default useStartScreen;
