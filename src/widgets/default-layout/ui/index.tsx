import { AbetTitle } from "entities/abet-title";
import { ReactNode } from "react";
import { Footer } from "./footer";
import { Telegram } from "./telegram";

interface Props {
  children?: ReactNode;
}

export const DefaultLayout = ({ children }: Props) => {
  return (
    <div className="min-h-[100svh] flex flex-col">
      <Footer />
      <div className="h-16" />
      <AbetTitle />
      <div className="px-[6svw]">{children}</div>
      <div className="min-h-20 grow" />
      <p className="text-center text-black pb-1 bg-white">
        2024 Все права защищены
      </p>
      <div className="fixed bottom-6 right-6">
        <Telegram />
      </div>
    </div>
  );
};
