import axios from "axios";
import { ImageType } from "shared/model/types";

export type NewsItem = {
  id: number;
  date: string;
  short_body: string;
  body: string;
  title: string;
  title_picture: string;
  pictures: Array<ImageType>;
};

export type NewsResponse = {
  items: Array<NewsItem>;
};

export const fetchNews = async () => {
  return (
    await axios.get<NewsResponse>(`${import.meta.env.VITE_BASE_URL}/news`)
  ).data.items;
};

export const fetchNewsItem = async (id: string) => {
  return (
    await axios.get<NewsItem>(`${import.meta.env.VITE_BASE_URL}/news`, {
      params: { id },
    })
  ).data;
};
