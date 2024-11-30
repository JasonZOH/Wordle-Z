import React from 'react'
import './../../css/ScoreBoard.css';

const ScoreBoard = ({ scores, xPlaying }) => {
  const {xScore, oScore} = scores;
  return (
    <div>
      <div className='scoreBoard'>
        <span className={`score xscore ${!xPlaying && "inactive"}`}>X - {xScore}</span>
        <span className={`score oscore ${xPlaying && "inactive"}`}>O - {oScore}</span>
      </div>
    </div>
  )
}

export default ScoreBoard