import { useEffect, useState } from 'react';
import { currency, transactions } from '../../utils/constants'
import { sortAllData } from '../../utils/sortData';
import CurrencyItem from './CurrencyItem';
import './MainView.scss'
import Transactions from './Transactions';


interface Currency {
  currency: string;
  currencyName: string;
  amount: number;
}

interface Transaction {
  from: string;
  to: string;
  currency: string;
  amount: number;
  action: string;
}

const formatAmount = (number: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
}

const MainView = () => {
  const [loading, setLoading] = useState(true)
  const [allTransactions, setAllTransactions] = useState<any>([])

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
      setAllTransactions(transactions)
    }, 1500);
  }, [loading])

  const sortByAscDsc = (par: string, sortBy: any) => {
    const newSource: any = sortAllData(par, transactions, sortBy);
    setLoading(true)
    setAllTransactions(newSource)
  };

  return (
    <div className="main-view-wrap">
      <span className="heading">OVERVIEW</span>
      <h2 className="heading-title">Dashboard</h2>

      <div className="dashboard-wrap">
        <div className="currency-wrap">
          {currency.length > 0 && currency.map(({ currency, currencyName, amount }: Currency, i) => {
            return (
              <CurrencyItem
                key={i}
                currency={currency}
                currencyName={currencyName}
                amount={formatAmount(amount).slice(1)}
              />
            )
          })}
        </div>

        <div className="transactions-wrap">
          <div className="transaction-header">
            <div className="transaction-header--heading">
              <span className="heading--text">FROM</span>
              <div className="sort-btn-wrap">
                <svg onClick={() => sortByAscDsc('asc', 'from')} className="sort-btn-asc" width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.93301 0.224654C3.05103 0.102004 3.24734 0.102004 3.36536 0.224653L5.80953 2.76471C5.99293 2.95531 5.85786 3.27273 5.59336 3.27273H0.705008C0.44051 3.27273 0.305439 2.95531 0.488835 2.76471L2.93301 0.224654Z" fill="#718CAF" />
                </svg>
                <svg onClick={() => sortByAscDsc('dsc', 'from')} className="sort-btn-asc" width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.93301 3.77535C3.05103 3.898 3.24734 3.898 3.36536 3.77535L5.80953 1.23529C5.99293 1.04469 5.85786 0.727273 5.59336 0.727273H0.705008C0.44051 0.727273 0.305439 1.04469 0.488835 1.23529L2.93301 3.77535Z" fill="#718CAF" />
                </svg>
              </div>
            </div>
            <div className="transaction-header--heading">
              <span className="heading--text">TO</span>
              <div className="sort-btn-wrap">
                <svg onClick={() => sortByAscDsc('asc', 'to')} className="sort-btn-asc" width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.93301 0.224654C3.05103 0.102004 3.24734 0.102004 3.36536 0.224653L5.80953 2.76471C5.99293 2.95531 5.85786 3.27273 5.59336 3.27273H0.705008C0.44051 3.27273 0.305439 2.95531 0.488835 2.76471L2.93301 0.224654Z" fill="#718CAF" />
                </svg>
                <svg onClick={() => sortByAscDsc('dsc', 'to')} className="sort-btn-asc" width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.93301 3.77535C3.05103 3.898 3.24734 3.898 3.36536 3.77535L5.80953 1.23529C5.99293 1.04469 5.85786 0.727273 5.59336 0.727273H0.705008C0.44051 0.727273 0.305439 1.04469 0.488835 1.23529L2.93301 3.77535Z" fill="#718CAF" />
                </svg>
              </div>
            </div>
            <div className="transaction-header--heading">
              <span className="heading--text">CURRENCY</span>
              <div className="sort-btn-wrap">
                <svg onClick={() => sortByAscDsc('asc', 'currency')} className="sort-btn-asc" width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.93301 0.224654C3.05103 0.102004 3.24734 0.102004 3.36536 0.224653L5.80953 2.76471C5.99293 2.95531 5.85786 3.27273 5.59336 3.27273H0.705008C0.44051 3.27273 0.305439 2.95531 0.488835 2.76471L2.93301 0.224654Z" fill="#718CAF" />
                </svg>
                <svg onClick={() => sortByAscDsc('dsc', 'currency')} className="sort-btn-asc" width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.93301 3.77535C3.05103 3.898 3.24734 3.898 3.36536 3.77535L5.80953 1.23529C5.99293 1.04469 5.85786 0.727273 5.59336 0.727273H0.705008C0.44051 0.727273 0.305439 1.04469 0.488835 1.23529L2.93301 3.77535Z" fill="#718CAF" />
                </svg>
              </div>
            </div>
            <div className="transaction-header--heading">
              <span className="heading--text">AMOUNT</span>
              <div className="sort-btn-wrap">
                <svg onClick={() => sortByAscDsc('asc', 'amount')} className="sort-btn-asc" width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.93301 0.224654C3.05103 0.102004 3.24734 0.102004 3.36536 0.224653L5.80953 2.76471C5.99293 2.95531 5.85786 3.27273 5.59336 3.27273H0.705008C0.44051 3.27273 0.305439 2.95531 0.488835 2.76471L2.93301 0.224654Z" fill="#718CAF" />
                </svg>
                <svg onClick={() => sortByAscDsc('dsc', 'amount')} className="sort-btn-asc" width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.93301 3.77535C3.05103 3.898 3.24734 3.898 3.36536 3.77535L5.80953 1.23529C5.99293 1.04469 5.85786 0.727273 5.59336 0.727273H0.705008C0.44051 0.727273 0.305439 1.04469 0.488835 1.23529L2.93301 3.77535Z" fill="#718CAF" />
                </svg>
              </div>
            </div>
            <div className="transaction-header--heading">
              <span className="heading--text">ACTION</span>
              <div className="sort-btn-wrap">
                <svg onClick={() => sortByAscDsc('asc', 'action')} className="sort-btn-asc" width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.93301 0.224654C3.05103 0.102004 3.24734 0.102004 3.36536 0.224653L5.80953 2.76471C5.99293 2.95531 5.85786 3.27273 5.59336 3.27273H0.705008C0.44051 3.27273 0.305439 2.95531 0.488835 2.76471L2.93301 0.224654Z" fill="#718CAF" />
                </svg>
                <svg onClick={() => sortByAscDsc('dsc', 'action')} className="sort-btn-asc" width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.93301 3.77535C3.05103 3.898 3.24734 3.898 3.36536 3.77535L5.80953 1.23529C5.99293 1.04469 5.85786 0.727273 5.59336 0.727273H0.705008C0.44051 0.727273 0.305439 1.04469 0.488835 1.23529L2.93301 3.77535Z" fill="#718CAF" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {loading ? (
          <p className="loading">Fetching transactions...</p>
        ) : (
          <div className="transactions-">
            {allTransactions.length > 0 && allTransactions.map(({ from, to, currency, amount, action }: Transaction, i: number) => {
              return (
                <Transactions
                  key={i}
                  from={from}
                  to={to}
                  currency={currency}
                  amount={formatAmount(amount).slice(1)}
                  action={action}
                />
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default MainView
