import { MerchItem } from "entities/merch/api";
import $api from "shared/api/config";

export const fetchForm = async (
  fio: string,
  contacts: string,
  selectedMerch: MerchItem | null
) => {
  $api.post(`/order`, {
    fio,
    contacts,
    item_id: String(selectedMerch ? selectedMerch.id : 0),
  });
};
