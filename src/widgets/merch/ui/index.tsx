import { MerchCard } from "entities/merch";
import { merchStore } from "entities/merch/model";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import arrow from "shared/assets/icons/arrow.svg";

export const Merch = observer(() => {
  const [showMerch, setShowMerch] = useState(false);

  return (
    <div className="lg:w-[43svw]">
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
        className={`${
          showMerch ? "h-[70svh]" : "h-0"
        } transition-all duration-500 sm:grid sm:grid-cols-2 flex flex-col sm:gap-[2svw] gap-6 md:h-[70svh] overflow-y-scroll no-scrollbar`}
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
        <button className="bg-white min-h-[40px] h-[40px] w-full col-span-2">
          Больше мерча
        </button>
      </div>
    </div>
  );
});
