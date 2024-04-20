import artem from "shared/assets/img/artem.png";
import { Answer } from "../../answer";

export const Artem = () => {
  return (
    <button className="relative w-[15svw] max-md:w-[50svw] max-md:flex justify-center items-center">
      <Answer className="top-[8svw] right-[9svw]" fromLeft={false} />
      <img
        className="w-[15svw] max-md:w-[50svw] object-cover hover:rotate-12 transition-all"
        src={artem}
      />
      <p className="text-[36px]">Артем</p>
    </button>
  );
};
