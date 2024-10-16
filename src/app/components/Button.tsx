import React from 'react'
import Link from 'next/link'

const Button = () => {
  return (
    <main>
    <div className='p-16' data-aos="zoom-out-up">
    <button className='bg-yellow-300 font-serif text-black p-4 hover:bg-slate-300'>
        See Our Classes
    </button>
    <button className='bg-yellow-300 font-serif text-black p-4 hover:bg-slate-300' >
        See Our Trainers
    </button>

    </div> 
</main>
  )
}

export default Button
