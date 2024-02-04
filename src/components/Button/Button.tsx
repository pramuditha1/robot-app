import React from 'react'
import './Button.css'

interface ButtonProps {
  onClickAction: () => void,
  buttonText: string,
}
const Button: React.FC<ButtonProps> = ({ onClickAction, buttonText }) => {
  return (
    <button
      className='button'
      onClick={onClickAction}
    >{buttonText}</button>
  )
}

export default Button