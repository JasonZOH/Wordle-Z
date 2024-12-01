import React from 'react'

const GiveUp = ({ onClick }) => {
  return (
    <div className='mt-10'>
      <button
        onClick={onClick}
        className='bg-black text-white px-2 py-3 rounded-lg font-semibold hover:scale-110 transition-all'
      > 
        Give Up 
      </button>
    </div>
  )
}

export default GiveUp