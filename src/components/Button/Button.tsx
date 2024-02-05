import React from 'react'
import './Button.css'

interface ButtonProps {
  onClickAction: () => void,
  buttonText?: string,
  Icon: React.ReactNode;
}
const Button: React.FC<ButtonProps> = ({ onClickAction, buttonText, Icon }) => {
  return (
    <button
      className='button'
      onClick={onClickAction}
    >
      <span data-testid="button-icon">{Icon}</span>
      {buttonText}
    </button>
  )
}

export default Button