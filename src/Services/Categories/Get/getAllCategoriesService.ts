// Constants
import {
  baseCategoriesURL,
  baseURL,
} from "@/Services/__INIT__/services.constants";
// Constants

export const getAllCategoriesService = () => {
  return fetch(`${baseURL}${baseCategoriesURL}`);
};
