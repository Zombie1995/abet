import { MerchCard } from "entities/merch";
import { merchStore } from "entities/merch/model";
import { observer } from "mobx-react-lite";
import { useCallback, useRef, useState } from "react";
import arrow from "shared/assets/icons/arrow.svg";
import dimka from "shared/assets/img/dimka.png";
import { HEADER_HEIGHT } from "shared/model/constants";
import { BottomButton } from "shared/ui/bottom-button";
import { Loading } from "shared/ui/loading";
import { Form } from "./form";

export const Merch = observer(() => {
  const [showMerch, setShowMerch] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScrollToSection = useCallback(() => {
    const element = scrollRef.current;
    if (element) {
      const elementTop = element.parentElement!.getBoundingClientRect().top;
      const scrollTop = document.documentElement.scrollTop;
      const offset = HEADER_HEIGHT;

      window.scrollTo({
        top: scrollTop + elementTop - offset,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <>
      <div className="relative lg:w-[43svw]">
        <BottomButton
          className="max-md:hidden absolute bottom-4 left-4"
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
            if (!showMerch) {
              handleScrollToSection();
            }
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
          } transition-all duration-500 sm:grid sm:grid-cols-2 flex flex-col sm:gap-[2svw] gap-6 md:h-[70svh] overflow-y-scroll md:border-2 md:border-white max-sm:divide-y max-sm:divide-dashed sm:max-md:pt-[2svw]`}
        >
          {merchStore.loading ? (
            <Loading className="mx-auto col-span-2 size-[96px]" />
          ) : (
            merchStore.merch.map((merchItem) => (
              <MerchCard
                key={merchItem.id}
                img={merchItem.url}
                title={merchItem.title}
                price={merchItem.price}
                description={merchItem.description}
                onClick={() => {
                  merchStore.setSelectedMerch(merchItem);
                }}
              />
            ))
          )}
          {!merchStore.loading && (
            <>
              <MerchCard
                img={dimka}
                title="НевыДимка худи"
                price={1}
                currency="Гирос"
                buttonName="Закончился"
                description="СТИЛЁВО"
              />
              <MerchCard
                img={
                  "https://main-cdn.sbermegamarket.ru/hlr-system/186/284/657/548/182/6/100028800840b0.jpg"
                }
                title="Лаваш"
                price={89}
                buttonName="Под заказ"
                description="ВКУСНО"
              />
            </>
          )}
          <button className="sm:bg-white min-h-[40px] h-[40px] w-full col-span-2 max-sm:text-white">
            Больше мерча
          </button>
        </div>
      </div>
      {merchStore.selectedMerch && <Form />}
    </>
  );
});
