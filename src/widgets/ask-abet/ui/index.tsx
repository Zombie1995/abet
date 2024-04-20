import artem from "shared/assets/img/artem.png";
import egor from "shared/assets/img/egor.png";
import igor from "shared/assets/img/igor.png";
import pasha from "shared/assets/img/pasha.png";
import tigran from "shared/assets/img/tigran.png";

export const AskAbet = () => {
  return (
    <div>
      <h1>Спроси абет</h1>
      <div className="md:hidden">
        <div className="h-6" />
        <p>Ваш вопрос</p>
        <div className="h-1" />
        <input
          className="h-10 w-full p-4 rounded-full"
          defaultValue={"Что на абет?"}
        />
        <div className="h-10" />
      </div>
      <div className="flex justify-between items-center max-md:flex-col max-md:gap-4">
        <button className="w-[15svw] max-md:w-[50svw] hover:-rotate-12 transition-all max-md:flex justify-center items-center">
          <img
            className="w-[15svw] max-md:w-[50svw] object-cover"
            src={pasha}
          />
          <p className="text-[36px]">Паша</p>
        </button>
        <button className="w-[15svw] max-md:w-[50svw] hover:-rotate-12 transition-all max-md:flex justify-center items-center">
          <img
            className="w-[15svw] max-md:w-[50svw] object-cover"
            src={tigran}
          />
          <p className="text-[36px]">Тигран</p>
        </button>
        <button className="w-[22svw] max-md:w-[50svw] hover:rotate-12 transition-all max-md:flex justify-center items-center">
          <img className="w-[22svw] max-md:w-[50svw] object-cover" src={igor} />
          <p className="text-[36px]">Игорь</p>
        </button>
        <button className="w-[15svw] max-md:w-[50svw] hover:rotate-12 transition-all max-md:flex justify-center items-center">
          <img
            className="w-[15svw] max-md:w-[50svw] object-cover"
            src={artem}
          />
          <p className="text-[36px]">Артем</p>
        </button>
        <button className="w-[15svw] max-md:w-[50svw] hover:rotate-12 transition-all max-md:flex justify-center items-center">
          <img className="w-[15svw] max-md:w-[50svw] object-cover" src={egor} />
          <p className="text-[36px]">Егор</p>
        </button>
      </div>
      <div className="max-md:hidden">
        <div className="h-10" />
        <p>Ваш вопрос</p>
        <div className="h-1" />
        <input
          className="h-10 w-full p-4 rounded-full"
          defaultValue={"Что на абет?"}
        />
      </div>
    </div>
  );
};
