interface Props {
  fromLeft?: boolean;
  className?: string;
  text?: string;
  loading?: boolean;
}

export const Answer = ({
  className,
  fromLeft = true,
  text = "",
  loading = false,
}: Props) => {
  return (
    <div
      className={`${className} ${
        fromLeft ? "md:rounded-tl-none" : "md:rounded-tr-none"
      } ${
        !text && !loading ? "hidden" : ""
      } z-[100] absolute bg-white min-h-[2svw] md:w-[15svw] w-[40svw] rounded-[1svw] max-md:rounded-tr-none outline outline-4 outline-black text-left max-md:text-[12px] py-2 px-4 flex flex-col`}
    >
      {text === "" && (
        <svg
          className="size-[24px] self-center"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
        >
          <circle
            fill="#000000"
            stroke="#000000"
            strokeWidth="15"
            r="15"
            cx="40"
            cy="65"
          >
            <animate
              attributeName="cy"
              calcMode="spline"
              dur="2"
              values="65;135;65;"
              keySplines=".5 0 .5 1;.5 0 .5 1"
              repeatCount="indefinite"
              begin="-.4"
            ></animate>
          </circle>
          <circle
            fill="#000000"
            stroke="#000000"
            strokeWidth="15"
            r="15"
            cx="100"
            cy="65"
          >
            <animate
              attributeName="cy"
              calcMode="spline"
              dur="2"
              values="65;135;65;"
              keySplines=".5 0 .5 1;.5 0 .5 1"
              repeatCount="indefinite"
              begin="-.2"
            ></animate>
          </circle>
          <circle
            fill="#000000"
            stroke="#000000"
            strokeWidth="15"
            r="15"
            cx="160"
            cy="65"
          >
            <animate
              attributeName="cy"
              calcMode="spline"
              dur="2"
              values="65;135;65;"
              keySplines=".5 0 .5 1;.5 0 .5 1"
              repeatCount="indefinite"
              begin="0"
            ></animate>
          </circle>
        </svg>
      )}
      {text}
    </div>
  );
};
