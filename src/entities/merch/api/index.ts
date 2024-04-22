import axios from "axios";

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
  return (
    await axios.get<MerchResponse>(`${import.meta.env.VITE_BASE_URL}/merch`)
  ).data.items;
};
