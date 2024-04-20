import tigran from "shared/assets/img/tigran.png";
import { Answer } from "../../answer";

export const Tigran = () => {
  return (
    <button className="relative w-[15svw] max-md:w-[50svw] max-md:flex justify-center items-center">
      <Answer className="top-[8svw] left-[9svw]" />
      <img
        className="w-[15svw] max-md:w-[50svw] object-cover hover:-rotate-12 transition-all"
        src={tigran}
      />
      <p className="text-[36px]">Тигран</p>
    </button>
  );
};
