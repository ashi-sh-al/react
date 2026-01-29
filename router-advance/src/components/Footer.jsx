import React from 'react'

const Footer = () => {
  return (
    <div className='h-1/20 w-full absolute bottom-0 bg-cyan-500 flex items-center justify-center p-5'>
      <h1>© {new Date().getFullYear()} Silver Tools Enterprises. All Rights Reserved.</h1>
    </div>
  )
}

export default Footer
