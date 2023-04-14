import { faSearch, faPhone, faFile, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ICustomer from "../../../../Domain/Model/ICustomer";
import SearchResultItem from "./SearchResultItem";

type Props = {
    data: ICustomer[];
    placeholder: string;
    onTextChanged: (text: string) => void;
    value: string;
};

const SearchField = ({ data, placeholder, value, onTextChanged }: Props) => {
    return (
        <div className="search-container">
            <div className="search-input-container">
                <FontAwesomeIcon icon={faSearch} />
                <input
                    type="search"
                    onChange={(e) => onTextChanged(e.currentTarget.value)}
                    placeholder={placeholder}
                    value={value} />
            </div>
            <div className="search-result-container" style={{
                pointerEvents: value.length > 0 ? "all" : "none",
                opacity: value.length > 0 ? 1 : 0,
                height: value.length > 0 ? 400 : 0
            }}>
                { data.map(customer => <SearchResultItem customer={customer} />) }
            </div>
        </div>
    )
}

export default SearchField;