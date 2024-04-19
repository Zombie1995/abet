import { merchStore } from "entities/merch/model";
import { newsStore } from "entities/news/model";
import { useEffect } from "react";
import artem from "shared/assets/img/artem.png";
import egor from "shared/assets/img/egor.png";
import igor from "shared/assets/img/igor.png";
import pasha from "shared/assets/img/pasha.png";
import tigran from "shared/assets/img/tigran.png";
import { AbetTitle } from "widgets/abet-title";
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
      <div className="flex justify-between">
        <img className="w-[17svw] object-cover" src={pasha} />
        <img className="w-[17svw] object-cover" src={tigran} />
        <img className="w-[17svw] object-cover" src={igor} />
        <img className="w-[17svw] object-cover" src={artem} />
        <img className="w-[17svw] object-cover" src={egor} />
      </div>
    </>
  );
}
