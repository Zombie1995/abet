import egor from "shared/assets/img/egor.png";
import { Answer } from "../../answer";

export const Egor = () => {
  return (
    <button className="relative w-[15svw] max-md:w-[50svw] max-md:flex justify-center items-center">
      <Answer className="top-[5svw] right-[9svw]" fromLeft={false} />
      <img
        className="w-[15svw] max-md:w-[50svw] object-cover hover:rotate-12 transition-all"
        src={egor}
      />
      <p className="text-[36px]">Егор</p>
    </button>
  );
};
