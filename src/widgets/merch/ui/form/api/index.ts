import axios from "axios";
import { MerchItem } from "entities/merch/api";

export const fetchForm = async (
  fio: string,
  contacts: string,
  selectedMerch: MerchItem | null
) => {
  axios.post(`${import.meta.env.VITE_BASE_URL}/order`, {
    fio,
    contacts,
    item_id: String(selectedMerch ? selectedMerch.id : 0),
  });
};
