import arrow from "shared/assets/icons/arrow.svg";

export const Footer = () => {
  return (
    <div className="z-[1000] fixed top-0 left-0 w-full h-16 bg-black flex items-center">
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
