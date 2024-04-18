import useParallax from "shared/model/useParallax/useParallax";
import useScroll from "shared/model/useScroll/useScroll";
import { AbetTitle } from "widgets/abet-title";

export default function Main() {
  const scrollPosition = useScroll();
  const r = useParallax(0.1);

  return (
    <div>
      <div
        className={`${
          scrollPosition < 10
            ? "top-1/2 -translate-y-1/2"
            : "top-2 scale-[0.11]"
        } fixed left-1/2 -translate-x-1/2 transition-all duration-1000 origin-top`}
      >
        <AbetTitle />
      </div>
      <div className="h-[1000px]" />
      <div>
        <div ref={r} className="size-[200px] bg-white" />
      </div>
      <div className="size-[200px] bg-gray-500" />
      <div className="h-[10000px]" />
    </div>
  );
}
