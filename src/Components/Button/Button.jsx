import React from 'react'

const Button = ({children, className, ...props}) => {
  return (
    <button  {...props} className={`w-full bg-[#a729f5] text-[1.5rem] p-4 active:scale-[.8] transition-all duration-500  font-semibold justify-center  text-white text-3xl flex gap-2 items-center ${props.disabled ? "bg-gray-500" : "bg-[#a729f5]"} 
         ${props.disabled ? "cursor-not-allowed" : 'cursor-pointer'}
    ${className}`}>
      {children}
    </button>
  )
}

export default Button
