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

  setLoading = (loading: boolean) => {
    this.loading = loading;
  };

  getNewsItem = async (id: string) => {
    this.setLoading(true);
    fetchNewsItem(id).then((newsItem) => {
      this.setNewsItem(newsItem);
      this.setLoading(false);
    });
  };
}

class NewsStore {
  news: Array<NewsItem> = [];
  loading: boolean = false;

  constructor() {
    makeAutoObservable(this);

    this.getNews();
  }

  setNews = (news: Array<NewsItem>) => {
    this.news = news;
  };

  setLoading = (loading: boolean) => {
    this.loading = loading;
  };

  getNews = async () => {
    this.setLoading(true);
    fetchNews().then((news) => {
      this.setNews(news);
      this.setLoading(false);
    });
  };
}

export const newsItemStore = new NewsItemStore();

export const newsStore = new NewsStore();
