import artem from "shared/assets/img/artem.png";
import egor from "shared/assets/img/egor.png";
import igor from "shared/assets/img/igor.png";
import pasha from "shared/assets/img/pasha.png";
import tigran from "shared/assets/img/tigran.png";

export const AskAbet = () => {
  return (
    <div className="flex justify-between">
      <button className="w-[15svw] hover:-rotate-12 transition-all">
        <img className="w-[15svw] object-cover" src={pasha} />
        <p className="text-[36px]">Паша</p>
      </button>
      <button className="w-[15svw] hover:-rotate-12 transition-all">
        <img className="w-[15svw] object-cover" src={tigran} />
        <p className="text-[36px]">Тигран</p>
      </button>
      <button className="w-[22svw] hover:rotate-12 transition-all">
        <img className="w-[22svw] object-cover" src={igor} />
        <p className="text-[36px]">Игорь</p>
      </button>
      <button className="w-[15svw] hover:rotate-12 transition-all">
        <img className="w-[15svw] object-cover" src={artem} />
        <p className="text-[36px]">Артем</p>
      </button>
      <button className="w-[15svw] hover:rotate-12 transition-all">
        <img className="w-[15svw] object-cover" src={egor} />
        <p className="text-[36px]">Егор</p>
      </button>
    </div>
  );
};
