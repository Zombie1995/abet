import { makeAutoObservable } from "mobx";

export type NewsItem = {
  content: string;
  shortContent: string;
  title: string;
};

class NewsStore {
  news: Array<NewsItem> = [];

  constructor() {
    makeAutoObservable(this);
  }

  setNews = (news: Array<NewsItem>) => {
    this.news = news;
  };
}

export const newsStore = new NewsStore();
