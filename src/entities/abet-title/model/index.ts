import { makeAutoObservable } from "mobx";
import { useEffect } from "react";
import useScroll from "shared/model/useScroll";

export const useStartScreen = () => {
  const scrollPosition = useScroll();
  const isStartScreen = scrollPosition < 1;

  useEffect(() => {
    abetTitleStore.setIsStartScreen(isStartScreen);
  }, [isStartScreen]);

  return isStartScreen;
};

class AbetTitleStore {
  isStartScreen: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setIsStartScreen = (value: boolean) => {
    this.isStartScreen = value;
  };
}

export const abetTitleStore = new AbetTitleStore();
