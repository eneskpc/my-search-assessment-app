import { useState } from "react";

import { GetCustomersUseCase } from '../../../Domain/UseCase/Customer/GetCustomers'
import Customer from "../../../Domain/Model/ICustomer";

export default function DashboardViewModel() {

    const [error, setError] = useState("");
    const [customers, setCustomers] = useState<Customer[]>([]);

    async function getCustomers(){
       const {results, error} = await GetCustomersUseCase()
       setError(error)
       setCustomers(results)
    }
  
    return {
        customers,
        getCustomers
    }
}