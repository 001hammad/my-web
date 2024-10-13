import Image from 'next/image'
import React from 'react'
import logo from '../../../public/logo.png'


const Header = () => {
  return (
    <header className='flex justify-between p-2 bg-transparent h-12'>
      <div className='flex items-center'>
        <Image src={logo} alt='logo' width={50}/>
      </div>
      <nav className='flex items-center'>
        <ul className='flex space-x-32 text-xl pt-2'>
          <li className='cursor-pointer font-bold hover:underline mr-4'>Home</li>
          <select name="membership" id="membership" className='cursor-pointer font-bold hover:underline mr-4 bg-transparent'>
            <option value="">Why Us</option>
            <option value="Foryou">Foryou</option>
            <option value="EveryOne">EveryOne</option>
          </select>
          <select name="membership" id="membership" className='cursor-pointer font-bold hover:underline mr-4 bg-transparent'>
            <option value="">MemberShip</option>
            <option value="morning">Morning</option>
            <option value="evening">Evening</option>
          </select>
          <li className='cursor-pointer font-bold hover:underline '>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
