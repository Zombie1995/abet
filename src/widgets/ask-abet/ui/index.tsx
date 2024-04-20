import artem from "shared/assets/img/artem.png";
import egor from "shared/assets/img/egor.png";
import igor from "shared/assets/img/igor.png";
import pasha from "shared/assets/img/pasha.png";
import tigran from "shared/assets/img/tigran.png";
import { AbetMember } from "./abet-member";
import { Ask } from "./ask";

export const AskAbet = () => {
  return (
    <>
      <h1>Спроси абет</h1>
      <div className="flex md:flex-col flex-col-reverse">
        <div className="flex justify-between items-center max-md:flex-col max-md:gap-4">
          <AbetMember
            img={pasha}
            answerPosition="md:top-[8svw] md:left-[9svw] top-[30svw] right-[30svw]"
            width="w-[15svw]"
            answerFromLeft={true}
            name="Паша"
          />
          <AbetMember
            img={tigran}
            answerPosition="md:top-[8svw] md:left-[9svw] top-[30svw] right-[30svw]"
            width="w-[15svw]"
            answerFromLeft={true}
            name="Тигран"
          />
          <AbetMember
            img={igor}
            answerPosition="md:top-[6svw] md:right-[12svw] top-[20svw] right-[30svw]"
            width="w-[22svw]"
            answerFromLeft={false}
            name="Игорь"
          />
          <AbetMember
            img={artem}
            answerPosition="md:top-[8svw] md:right-[9svw] top-[30svw] right-[30svw]"
            width="w-[15svw]"
            answerFromLeft={false}
            name="Артем"
          />
          <AbetMember
            img={egor}
            answerPosition="md:top-[5svw] md:right-[9svw] top-[22svw] right-[30svw]"
            width="w-[15svw]"
            answerFromLeft={false}
            name="Егор"
          />
        </div>
        <Ask />
      </div>
    </>
  );
};
