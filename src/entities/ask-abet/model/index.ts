import { makeAutoObservable } from "mobx";
import artem from "shared/assets/img/artem.png";
import egor from "shared/assets/img/egor.png";
import igor from "shared/assets/img/igor.png";
import pasha from "shared/assets/img/pasha.png";
import tigran from "shared/assets/img/tigran.png";
import { fetchAnswer } from "../api";

type AbetMemberItem = {
  img: string;
  answerPosition: string;
  width: string;
  answerFromLeft: boolean;
  name: string;
  engName: string;
  answer: string;
  answerLoading: boolean;
};

const staticAbetMembers: Array<AbetMemberItem> = [
  {
    img: pasha,
    answerPosition: "md:top-[8svw] md:left-[9svw] top-[30svw] right-[30svw]",
    width: "w-[15svw]",
    answerFromLeft: true,
    name: "Паша",
    engName: "Pasha",
    answer: "",
    answerLoading: false,
  },
  {
    img: tigran,
    answerPosition: "md:top-[8svw] md:left-[9svw] top-[30svw] right-[30svw]",
    width: "w-[15svw]",
    answerFromLeft: true,
    name: "Тигран",
    engName: "Tigran",
    answer: "",
    answerLoading: false,
  },
  {
    img: igor,
    answerPosition: "md:top-[6svw] md:right-[12svw] top-[20svw] right-[30svw]",
    width: "w-[22svw]",
    answerFromLeft: false,
    name: "Игорь",
    engName: "Igor",
    answer: "",
    answerLoading: false,
  },
  {
    img: artem,
    answerPosition: "md:top-[8svw] md:right-[9svw] top-[30svw] right-[30svw]",
    width: "w-[15svw]",
    answerFromLeft: false,
    name: "Тёмик",
    engName: "Temik",
    answer: "",
    answerLoading: false,
  },
  {
    img: egor,
    answerPosition: "md:top-[5svw] md:right-[9svw] top-[22svw] right-[30svw]",
    width: "w-[15svw]",
    answerFromLeft: false,
    name: "Егор",
    engName: "Egor",
    answer: "",
    answerLoading: false,
  },
];

class AskAbetStore {
  abetMembers: Array<AbetMemberItem> = staticAbetMembers;
  question: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  setAbetMembers = (abetMembers: Array<AbetMemberItem>) => {
    this.abetMembers = abetMembers;
  };

  setQuestion = (question: string) => {
    this.question = question;
  };

  getAnswer = async (character: string) => {
    this.setAbetMembers(
      staticAbetMembers.map((member) => {
        if (member.engName === character) {
          return { ...member, answerLoading: true };
        }
        return member;
      })
    );
    fetchAnswer(this.question, character).then((answer) =>
      this.setAbetMembers(
        staticAbetMembers.map((member) => {
          if (member.engName === character) {
            return { ...member, answer };
          }
          return member;
        })
      )
    );
  };
}

export const askAbetStore = new AskAbetStore();
