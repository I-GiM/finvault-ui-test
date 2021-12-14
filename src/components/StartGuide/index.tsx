import { useState } from 'react'
import './StartGuide.scss'

interface Props {
  closeStartGuide: () => void;
}

const StartGuide = ({ closeStartGuide }: Props) => {
  const [svgHover, setSvgHover] = useState(false)
  const [svgHoverThree, setSvgHoverThree] = useState(false)
  const [svgHoverFour, setSvgHoverFour] = useState(false)
  return (
    <div className="start-guide-wrap">
      <div className="start-status">
        <div className="start-status__header">
          <div className="status__header--details">
            <h4 className="header--details--heading">
              Your quick start guide
            </h4>
            <p className="header--details--text">
              <span className="">LEVEL 1</span>
              50% completed
            </p>
          </div>

          <svg onClick={closeStartGuide} className="close-start" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="#2E71FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div className="status-description">
          <svg width="36" height="40" viewBox="0 0 36 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_1_1517" style={{ "maskType": "alpha" }} maskUnits="userSpaceOnUse" x="0" y="1" width="36" height="38">
              <path d="M14.8713 1.91198C16.792 0.738237 19.208 0.738238 21.1287 1.91198L33.1287 9.24532C34.9122 10.3352 36 12.2748 36 14.365V25.635C36 27.7252 34.9122 29.6647 33.1287 30.7547L21.1287 38.088C19.208 39.2618 16.792 39.2618 14.8713 38.088L2.87129 30.7547C1.08776 29.6647 -9.43893e-06 27.7252 -9.43893e-06 25.635V14.365C-9.43893e-06 12.2748 1.08776 10.3352 2.87129 9.24532L14.8713 1.91198Z" fill="#C4C4C4" />
            </mask>
            <g mask="url(#mask0_1_1517)">
              <path opacity="0.65" d="M14.8713 1.91198C16.792 0.738237 19.208 0.738238 21.1287 1.91198L33.1287 9.24532C34.9122 10.3352 36 12.2748 36 14.365V25.635C36 27.7252 34.9122 29.6647 33.1287 30.7547L21.1287 38.088C19.208 39.2618 16.792 39.2618 14.8713 38.088L2.87129 30.7547C1.08776 29.6647 -9.43893e-06 27.7252 -9.43893e-06 25.635V14.365C-9.43893e-06 12.2748 1.08776 10.3352 2.87129 9.24532L14.8713 1.91198Z" fill="#C4C4C4" />
              <path d="M2.8713 30.7547L18 40L18 0L2.8713 9.24532C1.08777 10.3353 0 12.2748 0 14.365V25.635C0 27.7252 1.08777 29.6647 2.8713 30.7547Z" fill="#68FFC7" />
              <path d="M33.1287 30.7547L18 40L18 0L33.1287 9.24532C34.9122 10.3353 36 12.2748 36 14.365V25.635C36 27.7252 34.9122 29.6647 33.1287 30.7547Z" fill="#1BDE96" />
              <path opacity="0.65" d="M18 8L29 14.6V25.4L18 32L7 25.4V14.6L18 8Z" fill="#1BF3A4" />
            </g>
            <path d="M14.568 17H12.9899V21.0332H12.9356L10.3609 17H9V24H10.5813V19.96H10.6228L13.2263 24H14.568V17Z" fill="#07172F" />
            <path d="M15.7422 24H17.3235V21.187H19.9239V19.8096H17.3235V18.374H20.2082V17H15.7422V24Z" fill="#07172F" />
            <path d="M20.9703 18.374H22.9573V24H24.5162V18.374H26.5V17H20.9703V18.374Z" fill="#07172F" />
          </svg>
          <p className="description--text">
            Complete 2 levels and recieve your free NFT
          </p>
        </div>
      </div>

      <div className="line-break-outer">
        <div className="line-break-inner"></div>
      </div>

      <div className="start-items-wrap">
        <div className="start-item done">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.0256 8.66669L9.99877 13.3334L7.71387 11.2121" stroke="#1BF3A4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <ellipse cx="11" cy="11" rx="10" ry="10" stroke="#1BF3A4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="start-item-details">
            <h5 className="item--heading">Open your account</h5>
            <p className="item-description">You have successfully opened your account</p>
          </div>
        </div>
        <div className="start-item" onMouseEnter={() => setSvgHover(true)} onMouseLeave={() => setSvgHover(false)}>
          <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.7791 0.912112L3.76338 0.9H4.05691H21.9431C23.6909 0.9 25.1 2.30888 25.1 4.05691V13.8842C25.1 15.632 23.6911 17.0411 21.9431 17.0411H4.05691C2.30907 17.0411 0.900002 15.6322 0.900002 13.8842L0.900177 4.03164C0.900177 2.40086 2.16253 1.05206 3.7791 0.912112ZM2.31258 13.8841C2.31258 14.8393 3.10149 15.6283 4.05673 15.6283H21.9429C22.8981 15.6283 23.6871 14.8394 23.6871 13.8841L23.6872 4.03155C23.6872 3.07635 22.8983 2.2874 21.9431 2.2874H4.05691C3.1017 2.2874 2.31276 3.07631 2.31276 4.03156L2.31258 13.8841Z" fill={svgHover ? "#2E71FF" : "#718CAF"} stroke={svgHover ? "#2E71FF" : "#718CAF"} strokeWidth="0.2" />
            <path d="M5.01791 4.56314H11.6368C12.0205 4.56314 12.3432 4.88581 12.3432 5.2695C12.3432 5.65318 12.0205 5.97585 11.6368 5.97585H5.04317C4.66075 5.97585 4.33896 5.65532 4.33683 5.27332C4.30925 4.8839 4.63723 4.56314 5.01782 4.56314H5.01791Z" fill={svgHover ? "#2E71FF" : "#718CAF"} stroke={svgHover ? "#2E71FF" : "#718CAF"} strokeWidth="0.2" />
            <path d="M5.01791 8.25153H11.6368C12.0205 8.25153 12.3432 8.57421 12.3432 8.95789C12.3432 9.34157 12.0205 9.66424 11.6368 9.66424H5.04317C4.65947 9.66424 4.33682 9.34157 4.33682 8.95789C4.33682 8.57983 4.62883 8.25153 5.01782 8.25153H5.01791Z" fill={svgHover ? "#2E71FF" : "#718CAF"} stroke={svgHover ? "#2E71FF" : "#718CAF"} strokeWidth="0.2" />
            <path d="M5.01791 11.9399H11.6368C12.0205 11.9399 12.3432 12.2626 12.3432 12.6463C12.3432 13.03 12.0205 13.3526 11.6368 13.3526H5.04317C4.65947 13.3526 4.33682 13.03 4.33682 12.6463C4.33682 12.2682 4.62883 11.9399 5.01782 11.9399H5.01791Z" fill={svgHover ? "#2E71FF" : "#718CAF"} stroke={svgHover ? "#2E71FF" : "#718CAF"} strokeWidth="0.2" />
            <path d="M16.1269 8.40751C15.7062 7.94665 15.4516 7.3502 15.4516 6.68411C15.4516 5.26478 16.608 4.10839 18.0273 4.10839C19.4466 4.10839 20.603 5.26478 20.603 6.68411C20.603 7.34662 20.3509 7.96469 19.9302 8.40909C21.0392 9.12825 21.7904 10.463 21.7904 11.964C21.7904 12.1808 21.7429 12.485 21.5407 12.7982C21.3384 13.1118 20.9861 13.4269 20.3897 13.6733L20.3886 13.6737C19.7432 13.932 18.8965 14.0851 18.0021 14.0851C17.0708 14.0851 16.1325 13.9259 15.4231 13.5858C14.7135 13.2456 14.2136 12.7128 14.2136 11.964H14.2136L14.2137 11.9607C14.2636 10.461 15.0165 9.12628 16.1269 8.40751ZM19.1904 6.6843C19.1904 6.03216 18.6794 5.52115 18.0273 5.52115C17.3752 5.52115 16.8642 6.03216 16.8642 6.6843C16.8642 7.33643 17.3752 7.84744 18.0273 7.84744C18.6781 7.84744 19.1904 7.31234 19.1904 6.6843ZM18.0273 12.6727C18.7754 12.6727 19.3757 12.5541 19.7854 12.3981C19.9908 12.32 20.1444 12.2339 20.2447 12.1517C20.3492 12.0661 20.3778 12.0001 20.3778 11.9642C20.3778 10.4655 19.2989 9.25998 18.0273 9.25998C16.7311 9.25998 15.6768 10.4648 15.6768 11.9642C15.6768 12.0002 15.7054 12.0662 15.8099 12.1518C15.9102 12.234 16.0638 12.3201 16.2692 12.3982C16.6789 12.5542 17.2792 12.6727 18.0273 12.6727Z" fill={svgHover ? "#2E71FF" : "#718CAF"} stroke={svgHover ? "#2E71FF" : "#718CAF"} strokeWidth="0.2" />
          </svg>
          <div className="start-item-details">
            <h5 className="item--heading">Verify your identity</h5>
            <p className="item-description">Unlock features with your passport </p>
          </div>
        </div>
        <div className="start-item" onMouseEnter={() => setSvgHoverThree(true)} onMouseLeave={() => setSvgHoverThree(false)}>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="-0.9" y="0.9" width="14.2" height="22.2" rx="3.1" transform="matrix(-1 0 0 1 14.2 0)" stroke={svgHoverThree ? "#2E71FF" : "#718CAF"} strokeOpacity="0.99" strokeWidth="1.8" />
            <line y1="-0.9" x2="15" y2="-0.9" transform="matrix(-1 0 0 1 15 5.75999)" stroke={svgHoverThree ? "#2E71FF" : "#718CAF"} strokeOpacity="0.99" strokeWidth="1.8" />
            <line y1="-0.9" x2="15" y2="-0.9" transform="matrix(-1 0 0 1 15 18.24)" stroke={svgHoverThree ? "#2E71FF" : "#718CAF"} strokeOpacity="0.99" strokeWidth="1.8" />
            <circle r="1" transform="matrix(-1 0 0 1 8 20.2)" fill={svgHoverThree ? "#2E71FF" : "#718CAF"} fillOpacity="0.99" />
          </svg>
          <div className="start-item-details">
            <h5 className="item--heading">Verify your phone number</h5>
            <p className="item-description">Secure your account using your phone number</p>
          </div>
        </div>
        <div className="start-item" onMouseEnter={() => setSvgHoverFour(true)} onMouseLeave={() => setSvgHoverFour(false)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 22H21" stroke={svgHoverFour ? "#2E71FF" : "#718CAF"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 18V11" stroke={svgHoverFour ? "#2E71FF" : "#718CAF"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 18V11" stroke={svgHoverFour ? "#2E71FF" : "#718CAF"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 18V11" stroke={svgHoverFour ? "#2E71FF" : "#718CAF"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18 18V11" stroke={svgHoverFour ? "#2E71FF" : "#718CAF"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 2L20 7H4L12 2Z" stroke={svgHoverFour ? "#2E71FF" : "#718CAF"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="start-item-details">
            <h5 className="item--heading">Connect your bank account</h5>
            <p className="item-description">Connect any local bank to your Finvault wallet</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StartGuide
