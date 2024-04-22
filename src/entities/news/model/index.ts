import { makeAutoObservable } from "mobx";
import { NewsItem, fetchNews } from "../api";

class NewsStore {
  news: Array<NewsItem> = [];

  constructor() {
    makeAutoObservable(this);

    this.getNews();
  }

  setNews = (news: Array<NewsItem>) => {
    this.news = news;
  };

  getNews = async () => {
    this.setNews(await fetchNews());
  };
}

export const newsStore = new NewsStore();
