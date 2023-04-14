import { useEffect, useState } from "react";
import useViewModel from "./ViewModel"
import SearchField from "./Components/SearchField";
import ICustomer from "../../../Domain/Model/ICustomer";

const Dashboard = () => {
    const { customers, getCustomers } = useViewModel();
    const [filteredCustomers, setFilteredCustomers] = useState<ICustomer[]>([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        getCustomers().then(() => {
            setFilteredCustomers(customers);
        })
    }, []);

    const searchOnTextChanged = (text: string) => {
        const filtered = customers.filter(c => `${c.name.first} ${c.name.last}`.toLowerCase().includes(text) || c.id?.value?.includes(text));
        setSearchText(text)
        setFilteredCustomers(filtered);
    }

    return (
        <nav id="tab-menu">
            <div className="brand">Insurance Co</div>
            <div className="mobile-brand">I. Co</div>
            <SearchField
                data={filteredCustomers}
                value={searchText}
                onTextChanged={searchOnTextChanged}
                placeholder="SEARCH ( Client Name / Policy Number )" />
        </nav>
    )
}

export default Dashboard