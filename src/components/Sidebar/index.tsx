import { useState } from 'react'
import Button from '../Button'
import StartGuide from '../StartGuide'
import './Sidebar.scss'


const icon = <svg style={{ marginRight: "8px" }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" clipRule="evenodd" d="M12 21.6C17.302 21.6 21.6 17.3019 21.6 12C21.6 6.69806 17.302 2.39999 12 2.39999C6.69809 2.39999 2.40002 6.69806 2.40002 12C2.40002 17.3019 6.69809 21.6 12 21.6ZM11.6524 15.2456L16.4475 10.4535C16.6732 10.2279 16.8 9.92196 16.8 9.60293C16.8 9.28388 16.6732 8.97792 16.4475 8.75233C16.2217 8.52673 15.9156 8.39999 15.5963 8.39999C15.2771 8.39999 14.9709 8.52673 14.7452 8.75233L10.8013 12.7058L9.25484 11.1484C9.0291 10.9228 8.72294 10.7961 8.40371 10.7961C8.08446 10.7961 7.77831 10.9228 7.55258 11.1484C7.32684 11.374 7.20002 11.6799 7.20002 11.999C7.20002 12.318 7.32684 12.624 7.55258 12.8496L9.95013 15.2456C10.0616 15.3579 10.1941 15.447 10.3402 15.5079C10.4863 15.5687 10.643 15.6 10.8013 15.6C10.9595 15.6 11.1162 15.5687 11.2623 15.5079C11.4083 15.447 11.5409 15.3579 11.6524 15.2456Z" fill="white" />
</svg>

const Sidebar = () => {
  const [startGuide, setStartGuide] = useState(false)
  const [subLinks, setSubLinks] = useState(false)

  return (
    <aside className='sidebar-wrap'>
      <img src="/logo.svg" alt="" className="" />

      <div className="sidebar-links">
        <div className="main-links-wrap">
          <div className="main-links-drop" onClick={() => setSubLinks(!subLinks)}>
            <div className="main-link--header">
              <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 8L10 1L19 8V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8Z" stroke="#07172F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7 21V11H13V21" stroke="#07172F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Home</span>
            </div>
            <svg style={{ transform: subLinks ? "rotate(-180deg)" : "none" }} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="#07172F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          {subLinks && <div className="sub-link-wrap">
            <a href="/" className="sub-link-item">Transactions</a>
            <a href="/" className="sub-link-item">Deposit into Finvault</a>
            <a href="/" className="sub-link-item">Withdraw Funds</a>
          </div>}
        </div>

        <div className="start-btn-wrap">
          {startGuide && <StartGuide closeStartGuide={() => setStartGuide(false)} />}
          <span className="start-num">3</span>
          <Button
            btnType='start-btn primary-btn'
            btnIcon={icon}
            btnText='Get Started: Label 1'
            onClick={() => setStartGuide(true)}
          />
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
