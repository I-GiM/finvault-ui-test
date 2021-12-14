import './MainView.scss'
import Button from '../Button'

interface Props {
  currency: string;
  currencyName: string;
  amount: string;
}

const CurrencyItem = ({ currency, currencyName, amount }: Props) => {
  return (
    <div className="currency-item">
      <div className="currency-details">
        <div className="currency-details--currency">
          <img src={currency} alt="" className="" />
        </div>
        <div className="currency-details--amount-wrap">
          <span className="currency-details--currency-name">{currencyName}</span>
          <p className="currency-details--amount">{amount}</p>
        </div>
      </div>
      <div className="currency-btn-wrap">
        <Button
          btnType='primary-btn send-btn'
          btnText='Send'
        />
        <Button
          btnType='secondary-btn convert-btn'
          btnText='Convert'
        />
      </div>
    </div>
  )
}

export default CurrencyItem
