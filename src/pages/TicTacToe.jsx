import React, { useEffect } from 'react'
import HeaderGame from '../components/commun/HeaderGame'
import './../css/Tictactoe.css'
import Board from '../components/tictactoe/Board'
import useTictactoe from '../hooks/useTictactoe'
import ScoreBoard from '../components/tictactoe/ScoreBoard'

const TicTacToe = () => {
  const { board, handleBoxClick, scores, xPlaying, resetBoard, gameOver} = useTictactoe();

  useEffect(() => {
    if(gameOver){
      setTimeout(() => resetBoard(), 3000);
    }
  }, [gameOver]);

  return (
    <div className='h-screen'>
      <HeaderGame title={"Tic-Tac-Toe"} />
      <div>
        <ScoreBoard scores={scores} xPlaying={xPlaying}/>
        <Board board={board} onClick={handleBoxClick}/>
      </div>
    </div>
  )
}

export default TicTacToe