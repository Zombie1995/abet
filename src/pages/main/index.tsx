import { useStartScreen } from "entities/abet-title/model";
import { AskAbet } from "widgets/ask-abet";
import { Merch } from "widgets/merch";
import { News } from "widgets/news";
import { Producers } from "widgets/producers";
import { Stars } from "widgets/stars";

export default function Main() {
  const isStartScreen = useStartScreen();

  return (
    <>
      <div
        className={`${
          isStartScreen ? "h-[100svh] duration-500" : "h-0 duration-1000"
        } transition-all`}
      />
      <div className="lg:h-[100svh]">
        <div className="sticky top-0">
          <div className="h-24" />
          <div className="flex max-lg:flex-col gap-[2svw]">
            <News />
            <Merch />
          </div>
        </div>
      </div>
      <div className="h-24" />
      <AskAbet />
      <div className="h-10" />
      <Producers />
      <div className="h-10" />
      <Stars />
    </>
  );
}
