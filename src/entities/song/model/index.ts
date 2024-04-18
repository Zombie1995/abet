import { makeAutoObservable } from "mobx";

class SongStore {
  abetIsPlaying: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAbetIsPlaying = (value: boolean) => {
    this.abetIsPlaying = value;
  };
}

export const songStore = new SongStore();
