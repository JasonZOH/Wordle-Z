import React from 'react'
import { game } from '../constants/game'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className='h-screen'>
      <div className='text-2xl font-bold py-2 border-b-2 text-red-700'>
        Home
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
        {
          game.map((data, index) => {
            return (
              <NavLink 
                key={index}
                to={data.href}
                className="rounded-lg p-4 flex flex-col hover:scale-110 transition-all shadow-lg">
                <img 
                  src={data.image} 
                  alt={data.label} 
                  className="rounded-lg object-cover"
                />
                <div className="mt-3 font-semibold">
                  {data.label}
                </div>
              </NavLink>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home