import ICustomer from "./ICustomer";

export default interface RandomUserResponse {
  results: ICustomer[];
  info?: any;
  error: any;
}
