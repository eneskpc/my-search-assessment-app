import { getCustomers } from '../../../Data/Repository/CustomerRepository'
export async function GetCustomersUseCase() {
    return await getCustomers()
}