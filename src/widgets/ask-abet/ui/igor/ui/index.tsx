import igor from "shared/assets/img/igor.png";
import { Answer } from "../../answer";

export const Igor = () => {
  return (
    <button className="relative w-[22svw] max-md:w-[50svw] max-md:flex justify-center items-center">
      <div className="hidden z-[100] absolute top-[6svw] right-[12svw] bg-white h-[15svw] w-[15svw] rounded-[2svw] rounded-tr-none outline outline-4 outline-black" />
      <Answer className="top-[6svw] right-[12svw]" fromLeft={false} />
      <img
        className="w-[22svw] max-md:w-[50svw] object-cover hover:rotate-12 transition-all"
        src={igor}
      />
      <p className="text-[36px]">Игорь</p>
    </button>
  );
};
