import React from 'react'

const Button = ({ text = "Хочу следить за проектом" }) => {
  return <button className="button-primary">{text}</button>
}

export default Button
