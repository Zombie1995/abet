import { Answer } from "../../answer";

interface Props {
  // Like "top-[8svw] left-[9svw]"
  answerPosition?: string;
  answerFromLeft?: boolean;
  img: string;
  // Like w-[15svw]
  width?: string;
  name: string;
  answer?: string;
  answerLoading?: boolean;
}

export const AbetMember = ({
  answerPosition = "top-[8svw] left-[9svw]",
  answerFromLeft = true,
  img,
  width = "w-[15svw]",
  name,
  answer = "",
  answerLoading = false,
}: Props) => {
  return (
    <button
      className={`${width} relative max-md:w-[50svw] max-md:flex justify-center items-center`}
    >
      <Answer
        className={answerPosition}
        fromLeft={answerFromLeft}
        text={answer}
        loading={answerLoading}
      />
      <img
        className={`${width} max-md:w-[50svw] object-cover hover:-rotate-12 transition-all`}
        src={img}
      />
      <p className="text-[36px]">{name}</p>
    </button>
  );
};
