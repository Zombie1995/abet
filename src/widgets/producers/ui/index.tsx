import evgeniy from "shared/assets/img/evgeniy.png";
import { ProducerCard } from "./producer-card";

export const Producers = () => {
  return (
    <div>
      <h1>Наши продюсеры</h1>
      <div className="max-md:hidden h-4" />
      <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-[2svw]">
        <ProducerCard
          name={"Евгений Новиков"}
          content={`Продюсер команды КВН "Тестостерон", Продюсер команды КВН "Мифы древней греции", продюсер импровизации университета ИТМО, профессиональный шеф-повар`}
          image={evgeniy}
        />
      </div>
    </div>
  );
};
