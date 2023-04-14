import ICustomerName from "./ICustomerName";
import INameValue from "./INameValue";

export default interface ICustomer {
  gender: string;
  name: ICustomerName;
  location: any;
  email: string;
  phone: string;
  id: INameValue<string>;
}
