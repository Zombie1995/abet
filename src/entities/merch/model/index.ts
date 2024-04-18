import { makeAutoObservable } from "mobx";

type MerchItem = {
  img: string;
  title: string;
  price: number;
};

class MerchStore {
  merch: Array<MerchItem> = [];

  constructor() {
    makeAutoObservable(this);
  }

  setField = (merch: Array<MerchItem>) => {
    this.merch = merch;
  };
}

export const merchStore = new MerchStore();
