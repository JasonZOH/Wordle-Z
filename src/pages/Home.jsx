import React from 'react'
import { game } from '../constants/game'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='text-2xl font-bold py-2 border-b-2'>
        Home
      </div>

      <div className='grid grid-cols-[repeat(auto-fit, _minmax(100px,_1fr))] gap-6'>
        {
          game.map((data, index) => {
            return (
              <div key={index} className='mx-auto'>
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