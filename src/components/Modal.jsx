import React from 'react'

const Modal = ({ iscorrect, turn , solution}) => {
  return (
    <div className='modal'>
      {iscorrect && (
        <div>
          <h1>You Win!</h1>
          <p className='solution'>{solution}</p>
          <p>You found the solution in {turn}</p>
        </div>
      )}
      {!iscorrect && (
        <div>
          <h1>Loser!</h1>
          <p className='solution'>{solution}</p>
          <p>You are not so good at this game§</p>
        </div>
      )}
    </div>
  )
}

export default Modal