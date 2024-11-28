import React from 'react'
import { game } from '../constants/game'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='text-2xl font-bold py-2 border-b-2 text-red-700'>
        Home
      </div>

      <div className='flex items-center'>
        {
          game.map((data, index) => {
            return (
              <div key={index} className='mx-auto p-2 font-semibold'>
                <NavLink
                  key={data.label}
                  to={data.href}
                >
                  {data.label}
                </NavLink>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home