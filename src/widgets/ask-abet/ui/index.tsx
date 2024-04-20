import artem from "shared/assets/img/artem.png";
import egor from "shared/assets/img/egor.png";
import igor from "shared/assets/img/igor.png";
import pasha from "shared/assets/img/pasha.png";
import tigran from "shared/assets/img/tigran.png";

export const AskAbet = () => {
  return (
    <>
      <h1>Спроси абет</h1>
      <div className="flex md:flex-col flex-col-reverse">
        <div className="flex justify-between items-center max-md:flex-col max-md:gap-4">
          <button className="relative w-[15svw] max-md:w-[50svw] max-md:flex justify-center items-center">
            <div className="hidden z-[100] absolute top-[8svw] left-[9svw] bg-white h-[15svw] w-[15svw] rounded-[2svw] rounded-tl-none outline outline-4 outline-black" />
            <img
              className="w-[15svw] max-md:w-[50svw] object-cover hover:-rotate-12 transition-all"
              src={pasha}
            />
            <p className="text-[36px]">Паша</p>
          </button>
          <button className="relative w-[15svw] max-md:w-[50svw] max-md:flex justify-center items-center">
            <div className="hidden z-[100] absolute top-[8svw] left-[9svw] bg-white h-[15svw] w-[15svw] rounded-[2svw] rounded-tl-none outline outline-4 outline-black" />
            <img
              className="w-[15svw] max-md:w-[50svw] object-cover hover:-rotate-12 transition-all"
              src={tigran}
            />
            <p className="text-[36px]">Тигран</p>
          </button>
          <button className="relative w-[22svw] max-md:w-[50svw] max-md:flex justify-center items-center">
            <div className="hidden z-[100] absolute top-[6svw] right-[12svw] bg-white h-[15svw] w-[15svw] rounded-[2svw] rounded-tr-none outline outline-4 outline-black" />
            <img
              className="w-[22svw] max-md:w-[50svw] object-cover hover:rotate-12 transition-all"
              src={igor}
            />
            <p className="text-[36px]">Игорь</p>
          </button>
          <button className="relative w-[15svw] max-md:w-[50svw] max-md:flex justify-center items-center">
            <div className="hidden z-[100] absolute top-[8svw] right-[9svw] bg-white h-[15svw] w-[15svw] rounded-[2svw] rounded-tr-none outline outline-4 outline-black" />
            <img
              className="w-[15svw] max-md:w-[50svw] object-cover hover:rotate-12 transition-all"
              src={artem}
            />
            <p className="text-[36px]">Артем</p>
          </button>
          <button className="relative w-[15svw] max-md:w-[50svw] max-md:flex justify-center items-center">
            <div className="hidden z-[100] absolute top-[5svw] right-[9svw] bg-white h-[15svw] w-[15svw] rounded-[2svw] rounded-tr-none outline outline-4 outline-black" />
            <img
              className="w-[15svw] max-md:w-[50svw] object-cover hover:rotate-12 transition-all"
              src={egor}
            />
            <p className="text-[36px]">Егор</p>
          </button>
        </div>
        <div>
          <div className="h-6" />
          <p>Ваш вопрос</p>
          <div className="h-1" />
          <input
            className="h-10 w-full p-4 rounded-full"
            defaultValue={"Что на абет?"}
          />
        </div>
      </div>
    </>
  );
};
