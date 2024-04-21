import alena from "shared/assets/img/alena.png";
import kate from "shared/assets/img/kate.png";
import maks from "shared/assets/img/maks.png";
import { StarCard } from "./star-card";

export const Stars = () => {
  return (
    <div>
      <h1>Камео со звездами</h1>
      <div className="max-md:hidden h-4" />
      <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-[2svw]">
        <StarCard
          name={"Екатерина Зуберева"}
          content={`Участник команды КВН "Тестостерон", дизайнер, хакер`}
          image={kate}
        />
        <StarCard
          name={"Алена Шамис"}
          content={`Участник команды КВН "Тестостерон", дизайнер, хакер`}
          image={alena}
        />
        <StarCard
          name={"Максим Базунов"}
          content={`Участник команды КВН "Мифы Древней Греции", участник команды импровизации "Сквозные", репер`}
          image={maks}
        />
      </div>
    </div>
  );
};
