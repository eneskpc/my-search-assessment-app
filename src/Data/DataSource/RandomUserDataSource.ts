import { GetFromLocalStorage, SetToLocalStorage } from "../../Core/Helpers";
import RandomUserResponse from "../../Domain/Model/IResponse";
import { GetAllRequest } from "./API/RandomUserAPI";

const customersKey = "CUSTOMERS";

let customers: RandomUserResponse = GetFromLocalStorage<RandomUserResponse>(
  customersKey
) || { results: [], error: null };

export const getAll = async () => {
  if (!customers || customers.results?.length === 0) {
    const data = await GetAllRequest();
    if (data) {
      customers = data;
      SetToLocalStorage(customersKey, data);
    }
  }
  return customers;
};
