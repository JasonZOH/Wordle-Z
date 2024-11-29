import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Modal = ({ iscorrect, turn , solution}) => {
  const navigate = useNavigate();

  const handlePlayAgain = () => {
    navigate('/wordle'); // Change d'abord l'URL
    window.location.reload(); // Recharge la page
  };

  return (
    <div className='modal'>
      <div>
        {iscorrect && (
          <div>
            <h1>You Win!</h1>
            <p className='solution'>{solution}</p>
            <p>You found the solution in {turn} guesses</p>
          </div>
        )}
        {!iscorrect && (
          <div>
            <h1>Loser!</h1>
            <p className='solution'>{solution}</p>
            <p>You are not so good at this game§</p>
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