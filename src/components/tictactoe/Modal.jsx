import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Modal = ({ win }) => {
  const navigate = useNavigate();

  const handlePlayAgain = () => {
    navigate('/tictactoe');
    window.location.reload();
  };

  return (
    <div className='modal'>
      <div>
        {win != 'Draw' ? (
          <div>
            <h1>The Winner !</h1>
            <p className={`win ${win}`}>{win}</p>
          </div>
        ):
        (
          <div>
            <h1>Nobody Win !</h1>
            <p className={`win`}>{win}</p>
          </div>
        )}
        <div className='flex items-center justify-around mt-2'>
          <button
            onClick={handlePlayAgain}
            className="font-bold hover:scale-125 transition-all"
          >
            Play Again
          </button>
          <Link to={"/"} className='font-bold hover:scale-125 transition-all'>Go Back</Link>
        </div>
      </div>
    </div>
  )
}

export default Modal