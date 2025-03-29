// Constants
import {
  baseProductURL,
  baseURL,
} from "@/Services/__INIT__/services.constants";
// Constants

// Models
import { T_SendingDataForGettingProducts } from "@/Models/SendingDataSchema/Products/ProductsSendingData";
// Models

// Functions
import { uniqueQueryJoiner } from "@/Services/__INIT__/queryJoiner";
// Functions

export const getAllProductsService = (
  _data: T_SendingDataForGettingProducts
) => {
  return fetch(`${baseURL}${baseProductURL}?${uniqueQueryJoiner(_data)}`, {
    next: {
      revalidate: 0,
    },
  });
};
