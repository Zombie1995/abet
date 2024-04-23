import { makeAutoObservable } from "mobx";
import { MerchItem, fetchMerch } from "../api";

class MerchStore {
  merch: Array<MerchItem> = [];
  selectedMerch: MerchItem | null = null;
  loading: boolean = false;

  constructor() {
    makeAutoObservable(this);

    this.getMerch();
  }

  setSelectedMerch = (selectedMerch: MerchItem | null) => {
    this.selectedMerch = selectedMerch;
  };

  setMerch = (merch: Array<MerchItem>) => {
    this.merch = merch;
  };

  setLoading = (loading: boolean) => {
    this.loading = loading;
  };

  getMerch = async () => {
    this.setLoading(true);
    fetchMerch().then((merch) => {
      this.setMerch(merch);
      this.setLoading(false);
    });
  };
}

export const merchStore = new MerchStore();
