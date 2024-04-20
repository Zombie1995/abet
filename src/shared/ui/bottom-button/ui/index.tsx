import React from "react";

interface Props {
  className?: string;
  onClick?: () => void;
  scrollRef?: React.RefObject<HTMLDivElement>;
}

export const BottomButton = React.memo(
  ({ className = "", onClick = () => {}, scrollRef }: Props) => {
    return (
      <button
        className={`${className} bg-black outline outline-2 outline-white rounded-full size-10 flex items-center justify-center animate-bounce`}
        onClick={() => {
          onClick();
          if (scrollRef?.current) {
            scrollRef.current.scrollTo({
              left: 0,
              top: scrollRef.current.scrollHeight,
              behavior: "smooth",
            });
          }
        }}
      >
        <svg
          className="translate-y-[1px]"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.77012 6.11498L2.00012 7.88498L12.0001 17.885L22.0001 7.88498L20.2301 6.11498L12.0001 14.345L3.77012 6.11498Z"
            fill="white"
          />
        </svg>
      </button>
    );
  }
);
