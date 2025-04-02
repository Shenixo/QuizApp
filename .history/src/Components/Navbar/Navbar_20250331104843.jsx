import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between w-full'>
      <div className='flex items-center gap-4'>
        <img src="/icon-html.svg" alt="html icon" />
        <h2 className='text-[#fff] font-bold '>Quiz app</h2>
      </div>
    </nav>
  )
}

export default Navbar
