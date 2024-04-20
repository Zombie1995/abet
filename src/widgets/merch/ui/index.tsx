import { MerchCard } from "entities/merch";
import { merchStore } from "entities/merch/model";
import { observer } from "mobx-react-lite";
import { useRef, useState } from "react";
import arrow from "shared/assets/icons/arrow.svg";
import { BottomButton } from "shared/ui/bottom-button";
import { useShowButton } from "shared/ui/bottom-button/model";

export const Merch = observer(() => {
  const [showMerch, setShowMerch] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const showButton = useShowButton(scrollRef);

  return (
    <div className="relative lg:w-[43svw]">
      <BottomButton
        className={`${showButton ? "" : "hidden"} absolute bottom-4 left-4`}
        scrollRef={scrollRef}
      />
      <div className="max-md:hidden">
        <h1>Мерч</h1>
        <div className="h-4" />
      </div>
      <button
        className="md:hidden"
        onClick={() => {
          setShowMerch(!showMerch);
        }}
      >
        <div className="flex items-center justify-between">
          <h1>Мерч</h1>
          <img
            className={`${
              showMerch ? "rotate-180" : ""
            } translate-y-2 transition-all duration-500`}
            src={arrow}
          />
        </div>
        <div className="h-4" />
        <div className="h-[1px] w-[100svw] -mx-[6svw] bg-[#F5F5F5]" />
      </button>
      <div
        ref={scrollRef}
        className={`${
          showMerch ? "h-[70svh]" : "h-0"
        } transition-all duration-500 sm:grid sm:grid-cols-2 flex flex-col sm:gap-[2svw] gap-6 md:h-[70svh] overflow-y-scroll md:border-2 md:border-white`}
      >
        <div className="md:hidden min-h-0 col-span-2" />
        {merchStore.merch.map((merchItem, index) => (
          <MerchCard
            key={index}
            img={merchItem.img}
            title={merchItem.title}
            price={merchItem.price}
          />
        ))}
        <div className="min-h-[500px] h-[50svh] border-2 border-white p-6 flex flex-col">
          <img
            className="h-[70%] w-full object-cover"
            src="https://main-cdn.sbermegamarket.ru/hlr-system/186/284/657/548/182/6/100028800840b0.jpg"
          />
          <div className="min-h-4" />
          <p>Лаваш</p>
          <div className="grow" />
          <div className="min-h-4" />
          <div className="flex items-center justify-between">
            <p>Бесценно</p>
            <button className="min-h-[30px] min-w-[100px] w-min bg-white">
              Скоро
            </button>
          </div>
        </div>
        <button className="bg-white min-h-[40px] h-[40px] w-full col-span-2">
          Больше мерча
        </button>
      </div>
    </div>
  );
});
