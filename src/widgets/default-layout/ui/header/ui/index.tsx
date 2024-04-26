import arrow from "shared/assets/icons/arrow.svg";
import { HEADER_HEIGHT } from "shared/model/constants";

export const Header = () => {
  return (
    <div
      style={{ height: `${HEADER_HEIGHT}px` }}
      className="z-[1000] fixed top-0 left-0 w-full bg-black flex items-center"
    >
      {window.location.pathname !== "/" && (
        <a href="/" className="flex items-center ml-4">
          <button>
            <img className="size-[28px] rotate-90" src={arrow} />
          </button>
        </a>
      )}
    </div>
  );
};
