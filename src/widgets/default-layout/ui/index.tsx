import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export const DefaultLayout = ({ children }: Props) => {
  return (
    <>
      <div className="z-[100] fixed top-0 left-0 w-full h-16 bg-black" />
      <div className="px-[6svw]">{children}</div>
      <div className="h-4" />
      <p className="text-center text-black pb-1 bg-white">
        2024 Все права защищены
      </p>
    </>
  );
};
