import React from 'react'
import { FaCircleUser } from 'react-icons/fa6'
import { RiArrowGoBackFill } from 'react-icons/ri'

const HeaderGame = ({ title }) => {
  return (
    <div className='flex items-center justify-between border-b-2 py-4 px-6 mb-10'>
      <RiArrowGoBackFill className='scale-125 hover:scale-150 transition-all' onClick={() => navigate('/')}/>
      <h1 className='text-xl font-bold'>{title}</h1>
      <FaCircleUser className='scale-150' />
    </div>
  )
}

export default HeaderGame