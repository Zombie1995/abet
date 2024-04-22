import axios from "axios";

export type NewsItem = {
  id: number;
  date: string;
  short_body: string;
  body: string;
  title: string;
  title_picture: string;
  pictures: Array<{ url: string }>;
};

export type NewsResponse = {
  items: Array<NewsItem>;
};

export const fetchNews = async () => {
  return (
    await axios.get<NewsResponse>(`${import.meta.env.VITE_BASE_URL}/news`)
  ).data.items;
};
