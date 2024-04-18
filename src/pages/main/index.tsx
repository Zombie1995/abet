import useScroll from "shared/model/useScroll/useScroll";
import { AbetTitle } from "widgets/abet-title";

export default function Main() {
  const scrollPosition = useScroll();

  return (
    <div>
      <div
        className={`${
          scrollPosition < 10
            ? "top-1/2 -translate-y-1/2"
            : "top-2 scale-[0.15]"
        } fixed left-1/2 -translate-x-1/2 transition-all duration-1000 origin-top`}
      >
        <AbetTitle />
      </div>
      <div className="h-[10000px]" />
    </div>
  );
}
