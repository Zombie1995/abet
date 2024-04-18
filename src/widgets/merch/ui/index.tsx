import { MerchCard } from "entities/merch";
import { merchStore } from "entities/merch/model";
import { observer } from "mobx-react-lite";

export const Merch = observer(() => {
  return (
    <div className="w-[43svw]">
      <p className="text-[40px] italic font-light">Мерч</p>
      <div className="h-4" />
      <div className="grid grid-cols-2 gap-[2svw] h-[70svh] overflow-y-scroll no-scrollbar">
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
