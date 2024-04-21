import { merchStore } from "entities/merch/model";
import { newsStore } from "entities/news/model";
import { useEffect } from "react";
import ronaldoNews from "shared/assets/img/ronaldo-news.png";
import { AbetTitle } from "widgets/abet-title";
import { AskAbet } from "widgets/ask-abet";
import { Merch } from "widgets/merch";
import { News } from "widgets/news";
import { Stars } from "widgets/stars";
import useStartScreen from "./model";

export default function Main() {
  const isStartScreen = useStartScreen();
  // const r = useParallax(0.1);

  // MockNews and MockMerch
  useEffect(() => {
    newsStore.setNews([
      {
        title: "Пополнение в команде",
        shortContent: "Легенда футбола, но кто?",
        content: "Легенда футбола, но кто?",
        img: ronaldoNews,
      },
      {
        title: "АБЕТ САЙТ",
        shortContent: "Встречайте",
        content: "Встречайте",
        img: "",
      },
    ]);

    merchStore.setField([
      {
        title: "Худи",
        img: "https://www.tradeinn.com/f/13757/137575318/fila-victor-hoodie.jpg",
        price: 9823,
      },
      {
        title: "Худи",
        img: "http://static.tildacdn.com/tild3464-3934-4234-a130-363739633938/b582d0a987c6dbef42ca.jpg",
        price: 9823,
      },
    ]);
  }, []);

  return (
    <>
      <div
        className={`${
          isStartScreen
            ? "top-1/2 -translate-y-1/2"
            : "md:top-4 md:scale-[0.08] sm:top-0 sm:scale-[0.15] -top-4 scale-[0.25]"
        } z-[1000] fixed left-1/2 -translate-x-1/2 transition-all duration-700 origin-top`}
      >
        <AbetTitle />
      </div>
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
      <div className="h-10" />
      <AskAbet />
      <div className="h-10" />
      <Stars />
    </>
  );
}
