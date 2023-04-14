import RandomUserResponse from "../../../Domain/Model/IResponse";

const baseUrl: string = "https://randomuser.me/api";

export const GetAllRequest = async () => {
  const response = await fetch(`${baseUrl}?results=10`);
  const data: RandomUserResponse = await response.json();
  return data;
};
