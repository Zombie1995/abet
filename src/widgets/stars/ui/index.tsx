import alena from "shared/assets/img/alena.png";
import kate from "shared/assets/img/kate.png";
import { StarCard } from "./star-card";

export const Stars = () => {
  return (
    <div>
      <h1>Камео со звездами</h1>
      <div className="h-4" />
      <div className="flex gap-[2svw]">
        <StarCard
          name={"Екатерина Зуберева"}
          content={`Участник команды КВН "Тестостерон", дизайнер`}
          image={kate}
        />
        <StarCard
          name={"Алена Шамис"}
          content={`Участник команды КВН "Тестостерон", дизайнер`}
          image={alena}
        />
      </div>
    </div>
  );
};
