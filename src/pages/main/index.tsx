import { merchStore } from "entities/merch/model";
import { newsStore } from "entities/news/model";
import { useEffect } from "react";
import alena from "shared/assets/img/alena.png";
import kate from "shared/assets/img/kate.png";
import { AbetTitle } from "widgets/abet-title";
import { AskAbet } from "widgets/ask-abet";
import { Merch } from "widgets/merch";
import { News } from "widgets/news";
import useStartScreen from "./model";

export default function Main() {
  const isStartScreen = useStartScreen();
  // const r = useParallax(0.1);

  // MockNews and MockMerch
  useEffect(() => {
    newsStore.setNews([
      {
        title: "Abet the best",
        shortContent:
          "Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah",
        content:
          "hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah",
        img: "https://cdn1.ozone.ru/s3/multimedia-t/6703776497.jpg",
      },
      {
        title: "Abet the best",
        shortContent:
          "Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah",
        content:
          "hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah",
        img: "",
      },
      {
        title: "Abet the best",
        shortContent:
          "Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah",
        content:
          "hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah",
        img: "",
      },
      {
        title: "Abet the best",
        shortContent:
          "Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah",
        content:
          "hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah",
        img: "",
      },
    ]);

    merchStore.setField([
      {
        title: "Худи",
        img: "https://cdn1.ozone.ru/s3/multimedia-t/6703776497.jpg",
        price: 9823,
      },
      {
        title: "Худи",
        img: "https://www.tradeinn.com/f/13757/137575318/fila-victor-hoodie.jpg",
        price: 9823,
      },
      {
        title:
          "Худи Худи Худи Худи Худи Худи Худи Худи Худи Худи Худи Худи Худи Худи Худи Худи Худи Худи Худи Худи Худи Худи Худи Худи Худи Худи Худи Худи Худи Худи Худи Худи Худи Худи",
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
        } z-[100] fixed left-1/2 -translate-x-1/2 transition-all duration-700 origin-top`}
      >
        <AbetTitle />
      </div>
      <div
        className={`${
          isStartScreen ? "h-[100svh] duration-500" : "h-0 duration-1000"
        } transition-all`}
      />
      <div className="lg:h-[150svh] h-[240svh]">
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
      <div>
        <h1>Камео со звездами</h1>
        <div className="h-4" />
        <div className="flex gap-[2svw]">
          <div className="flex border-2 border-white p-8 w-[43svw] justify-between">
            <div>
              <p>Екатерина Зуберева</p>
              <p>Участник команды КВН "Тестостерон"</p>
            </div>
            <img
              className="w-[15svw] object-contain -translate-y-4"
              src={kate}
            />
          </div>
          <div className="flex border-2 border-white p-8 w-[43svw] justify-between">
            <div>
              <p>Алена Шамис</p>
              <p>Участник команды КВН "Тестостерон"</p>
            </div>
            <img className="w-[18svw] object-contain" src={alena} />
          </div>
        </div>
      </div>
    </>
  );
}
