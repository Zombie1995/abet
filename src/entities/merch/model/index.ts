import { makeAutoObservable } from "mobx";
import { MerchItem, fetchMerch } from "../api";

class MerchStore {
  merch: Array<MerchItem> = [];

  constructor() {
    makeAutoObservable(this);

    this.getMerch();
  }

  setMerch = (merch: Array<MerchItem>) => {
    this.merch = merch;
  };

  getMerch = async () => {
    this.setMerch(await fetchMerch());
  };
}

export const merchStore = new MerchStore();
