import $api from "shared/api/config";

export type MerchItem = {
  id: number;
  url: string;
  title: string;
  price: number;
  description: string;
};

type MerchResponse = {
  items: Array<MerchItem>;
};

export const fetchMerch = async () => {
  return (await $api.get<MerchResponse>(`/merch`)).data.items;
};
