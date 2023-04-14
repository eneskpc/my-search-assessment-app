import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ICustomer from '../../../../Domain/Model/ICustomer'
import { faEnvelope, faFile, faPhone } from '@fortawesome/free-solid-svg-icons'

type Props = {
    customer: ICustomer
}

const SearchResultItem = ({ customer }: Props) => {
    return (
        <div className="search-result-item">
            <h2>{customer.name.first} {customer.name.last}</h2>
            <div className="detail">
                <small>
                    <FontAwesomeIcon icon={faPhone} />
                    <span>{customer.phone}</span>
                </small>
                <small>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span>{customer.email}</span>
                </small>
                <small>
                    <FontAwesomeIcon icon={faFile} />
                    <span>{customer.id?.value || ""}</span>
                </small>
            </div>
        </div>
    )
}

export default SearchResultItem