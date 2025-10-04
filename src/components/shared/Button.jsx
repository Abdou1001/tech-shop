import React from 'react'

const Button = ({textColor, bgColor, text, w="w-[110px]"}) => {
  return (
    <div>
        <button className={`rounded-full py-2 cursor-pointer relative z-10 ${w} ${textColor} ${bgColor}`}>{text}</button>
    </div>
  )
}

export default Button
