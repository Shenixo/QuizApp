import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between w-full'>
      <div className='flex items-center gap-4'>
        <img className='' src="/icon-html.svg" alt="html icon" />
        <h2 className='text-[#fff] font-semibold text-3xl '>Quiz app</h2>
      </div>
    </nav>
  )
}

export default Navbar
