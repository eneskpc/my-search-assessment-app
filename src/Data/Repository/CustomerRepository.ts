import { getAll } from "../DataSource/RandomUserDataSource";

export async function getCustomers() {
  const { results, error } = await getAll();
  return { results, error };
}
