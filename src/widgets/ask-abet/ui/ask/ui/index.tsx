import { askAbetStore } from "entities/ask-abet/model";
import { useCallback } from "react";

export const Ask = () => {
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    askAbetStore.setQuestion(e.target.value);
  }, []);

  return (
    <div>
      <p>Ваш вопрос</p>
      <div className="h-1" />
      <input
        className="h-10 w-full p-4 rounded-full"
        defaultValue={"Что на абет?"}
        onChange={handleChange}
      />
    </div>
  );
};
