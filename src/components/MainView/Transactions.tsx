import './MainView.scss'

interface Props {
  from: string;
  to: string;
  currency: string;
  amount: string;
  action: string;
}

const Transactions = ({ from, to, currency, amount, action }: Props) => {
  return (
    <div className='transaction-item'>
      <span className="transaction--from">{from}</span>
      <span className="transaction--to">{to}</span>
      <span className="transaction--currency">{currency}</span>
      <span className="transaction--amount">{amount}</span>
      <span className={action === "Recieved" ? "transaction--recieved" : "transaction--sent"}>{action}</span>
    </div>
  )
}

export default Transactions
