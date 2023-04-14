export const GetFromLocalStorage = <T>(key: string) => {
  const data = localStorage.getItem(key);
  if (data) {
    try {
      return JSON.parse(data) as T;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
  return null;
};

export const SetToLocalStorage = (key: string, data: any) => {
  if (typeof data !== "string") {
    localStorage.setItem(key, JSON.stringify(data));
  } else {
    localStorage.setItem(key, data);
  }
};
