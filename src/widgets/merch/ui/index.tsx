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
        <p className="text-[40px] italic font-light">Мерч</p>
        <div className="h-4" />
      </div>
      <button
        className="md:hidden"
        onClick={() => {
          setShowMerch(!showMerch);
        }}
      >
        <div className="flex items-center justify-between">
          <p className="text-[40px] italic font-light text-left">Мерч</p>
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
        } transition-all duration-500 grid sm:grid-cols-2 sm:gap-[2svw] gap-6 md:h-[70svh] overflow-y-scroll no-scrollbar`}
      >
        <div className="md:hidden h-0" />
        <div className="max-sm:hidden md:hidden h-0" />
        {merchStore.merch.map((merchItem, index) => (
          <MerchCard
            key={index}
            img={merchItem.img}
            title={merchItem.title}
            price={merchItem.price}
          />
        ))}
      </div>
    </div>
  );
});
