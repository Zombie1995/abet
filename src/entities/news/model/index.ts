import { makeAutoObservable } from "mobx";
import { NewsItem, fetchNews, fetchNewsItem } from "../api";

class NewsItemStore {
  newsItem: NewsItem | null = null;
  loading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setNewsItem = (newsItem: NewsItem) => {
    this.newsItem = newsItem;
  };

  getNewsItem = async (id: string) => {
    this.loading = true;
    fetchNewsItem(id).then((newsItem) => {
      this.setNewsItem(newsItem);
      this.loading = false;
    });
  };
}

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

export const newsItemStore = new NewsItemStore();

export const newsStore = new NewsStore();
