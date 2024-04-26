import { FakeMerchCard, MerchCard } from "entities/merch";
import { merchStore } from "entities/merch/model";
import { observer } from "mobx-react-lite";
import { useRef, useState } from "react";
import arrow from "shared/assets/icons/arrow.svg";
import dimka from "shared/assets/img/dimka.png";
import { BottomButton } from "shared/ui/bottom-button";
import { useShowButton } from "shared/ui/bottom-button/model";
import { Loading } from "shared/ui/loading";
import { Form } from "./form";

export const Merch = observer(() => {
  const [showMerch, setShowMerch] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const showButton = useShowButton(scrollRef);

  return (
    <>
      <div className="relative lg:w-[43svw]">
        <BottomButton
          className={`${
            showButton ? "" : "hidden"
          } max-md:hidden absolute bottom-4 left-4`}
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
              scrollRef.current?.parentElement?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
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
          } transition-all duration-500 sm:grid sm:grid-cols-2 flex flex-col sm:gap-[2svw] gap-6 md:h-[70svh] overflow-y-scroll md:border-2 md:border-white`}
        >
          <div className="md:hidden min-h-0 col-span-2" />
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
              <FakeMerchCard
                img={dimka}
                title={"НевыДимка худи"}
                price={"1 Гирос"}
                buttonName="Закончился"
                description="СТИЛЁВО"
              />
              <FakeMerchCard
                img={
                  "https://main-cdn.sbermegamarket.ru/hlr-system/186/284/657/548/182/6/100028800840b0.jpg"
                }
                title={"Лаваш"}
                price={"89 ₽"}
                buttonName="Под заказ"
                description="ВКУСНО"
              />
            </>
          )}
          <button className="bg-white min-h-[40px] h-[40px] w-full col-span-2">
            Больше мерча
          </button>
        </div>
      </div>
      {merchStore.selectedMerch && <Form />}
    </>
  );
});
