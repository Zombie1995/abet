import $api from "shared/api/config";
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
  return (await $api.get<NewsResponse>(`/news`)).data.items;
};

export const fetchNewsItem = async (id: string) => {
  return (
    await $api.get<NewsItem>(`/news`, {
      params: { id },
    })
  ).data;
};
