import axios from "axios";

type AnswerResponse = {
  message: string;
};

export const fetchAnswer = async (message: string, character: string) => {
  return (
    await axios.post<AnswerResponse>(`${import.meta.env.VITE_BASE_URL}/chat`, {
      message,
      character,
    })
  ).data.message;
};
