import { merchStore } from "entities/merch/model";
import { newsStore } from "entities/news/model";
import { useEffect } from "react";
import { AbetTitle } from "widgets/abet-title";
import { Footer } from "widgets/footer";
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
      },
      {
        title: "Abet the best",
        shortContent:
          "Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah",
        content:
          "hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah",
      },
      {
        title: "Abet the best",
        shortContent:
          "Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah",
        content:
          "hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah",
      },
      {
        title: "Abet the best",
        shortContent:
          "Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah Haahahah",
        content:
          "hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah hahahahah",
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
      {
        title: "Худи",
        img: "https://cdn1.ozone.ru/s3/multimedia-t/6703776497.jpg",
        price: 9823,
      },
      {
        title: "Худи",
        img: "https://cdn1.ozone.ru/s3/multimedia-t/6703776497.jpg",
        price: 9823,
      },
      {
        title: "Худи",
        img: "https://cdn1.ozone.ru/s3/multimedia-t/6703776497.jpg",
        price: 9823,
      },
    ]);
  }, []);

  return (
    <div className="px-[6svw]">
      <div className="z-[100] fixed top-0 left-0 w-full h-16 bg-black" />
      <div
        className={`${
          isStartScreen ? "top-1/2 -translate-y-1/2" : "top-2 scale-[0.11]"
        } z-[100] fixed left-1/2 -translate-x-1/2 transition-all duration-700 origin-top`}
      >
        <AbetTitle />
      </div>
      <div
        className={`${
          isStartScreen ? "h-[100svh] duration-500" : "h-0 duration-1000"
        } transition-all`}
      />
      <div className="h-[150svh]">
        <div className="sticky top-0">
          <div className="h-24" />
          <div className="flex gap-[2svw]">
            <News />
            <Merch />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
