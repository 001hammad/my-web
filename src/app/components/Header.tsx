import Image from 'next/image'
import React from 'react'
import logo from '../../../public/logo.png'

const Header = () => {
  return (
    <header className='flex justify-between p-2 bg-[#AB886D] h-12'>
      <div className='flex items-center'>
        <Image src={logo} alt='logo' width={40} />
      </div>
      <div>
        <label htmlFor="search" className='mr-2'>Search</label>
        <input type="search" placeholder='coffee flavours' className='border-[#493628] border-2 rounded-3xl' />
      </div>
      <nav className='flex items-center'>
        <ul className='flex space-x-10'>
          <li className='cursor-pointer hover:text-[#493628] mr-4'>Home</li>
          <li className='cursor-pointer hover:text-[#493628] mr-4'>About</li>
          <li className='cursor-pointer hover:text-[#493628] mr-4'>Coffee</li>
          <li className='cursor-pointer hover:text-[#493628]'>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
