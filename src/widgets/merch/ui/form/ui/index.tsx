import { merchStore } from "entities/merch/model";
import React, { useCallback, useState } from "react";
import Portal from "shared/ui/portal/ui";
import { fetchForm } from "../api";

const FormWithState = React.memo(() => {
  const [fio, setFIO] = useState("");
  const [contacts, setContacts] = useState("TG: @user");

  const handleFIO = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFIO(e.target.value);
  }, []);
  const handleContacts = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setContacts(e.target.value);
    },
    []
  );

  return (
    <div className="z-[1000] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] bg-black p-4 pb-6 outline outline-2 outline-white flex flex-col">
      <p>ФИО</p>
      <div className="h-2" />
      <input className="h-10 px-2 w-full" value={fio} onChange={handleFIO} />
      <div className="h-2" />
      <p>Соц.сеть</p>
      <div className="h-2" />
      <input
        className="h-10 px-2 w-full"
        value={contacts}
        onChange={handleContacts}
      />
      <div className="h-6" />
      <button
        className="bg-white h-12 w-1/2 self-center"
        onClick={() => {
          fetchForm(fio, contacts, merchStore.selectedMerch);
          merchStore.setSelectedMerch(null);
        }}
      >
        Купить
      </button>
    </div>
  );
});

export const Form = React.memo(() => {
  return (
    <Portal>
      <div
        className="z-[1000] fixed top-0 left-0 h-screen w-screen bg-black/60 backdrop-blur-sm"
        onClick={() => merchStore.setSelectedMerch(null)}
      />
      <FormWithState />
    </Portal>
  );
});
