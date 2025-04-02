import React from 'react'

const Progress = () => {
  return (
    <div className='flex items-center justify-center w-full h-[100vh]'>
      <progress value={count} max={100} />
    </div>
  )
}

export default Progress
