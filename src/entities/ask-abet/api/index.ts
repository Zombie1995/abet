import $api from "shared/api/config";

type AnswerResponse = {
  message: string;
};

export const fetchAnswer = async (message: string, character: string) => {
  return (
    await $api.post<AnswerResponse>(`/chat`, {
      message,
      character,
    })
  ).data.message;
};
