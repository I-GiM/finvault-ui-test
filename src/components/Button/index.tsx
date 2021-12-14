import './Button.scss'

interface Props {
  btnType: string;
  btnIcon?: any;
  btnText: string;
  onClick?: () => void;
}

const Button = ({ btnType, btnIcon, btnText, onClick }: Props) => {
  return (
    <button className={btnType} onClick={onClick}>
      <span className="btn-icon">{btnIcon}</span>
      <span>{btnText}</span>
    </button>
  )
}

export default Button
