import { askAbetStore } from "entities/ask-abet/model";
import { observer } from "mobx-react-lite";
import { AbetMember } from "./abet-member";
import { Ask } from "./ask";

export const AskAbet = observer(() => {
  return (
    <>
      <h1>Спроси абет</h1>
      <p className="text-[24px]">
        Задайте вопрос любимой команде. Напишите вопрос и нажмите на вашего
        ♡любимчика♡
      </p>
      <div className="h-6" />
      <div className="flex md:flex-col flex-col-reverse">
        <div className="flex justify-between items-center max-md:flex-col max-md:gap-4">
          {askAbetStore.abetMembers.map((member, index) => {
            return (
              <AbetMember
                key={index}
                img={member.img}
                answerPosition={member.answerPosition}
                width={member.width}
                answerFromLeft={member.answerFromLeft}
                name={member.name}
                answer={member.answer}
                answerLoading={member.answerLoading}
                onClick={() => askAbetStore.getAnswer(member.engName)}
              />
            );
          })}
        </div>
        <div className="h-6" />
        <Ask />
      </div>
    </>
  );
});
