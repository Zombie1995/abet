interface Props {
  fromLeft?: boolean;
  className?: string;
}

export const Answer = ({ className, fromLeft = true }: Props) => {
  return (
    <div
      className={`${className} ${
        fromLeft ? "md:rounded-tl-none" : "md:rounded-tr-none"
      } z-[100] absolute bg-white min-h-[2svw] md:w-[15svw] w-[40svw] rounded-[1svw] rounded-tr-none outline outline-4 outline-black text-left max-md:text-[12px] py-2 px-4`}
    >
      aklsdjf aklsdjf aklsdjf aklsdjf akl aklsdjf aklsdjf
    </div>
  );
};
