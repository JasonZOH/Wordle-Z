import React, { useEffect, useState } from 'react'
import HeaderGame from '../components/commun/HeaderGame'
import './../css/Tictactoe.css'
import Board from '../components/tictactoe/Board'
import useTictactoe from '../hooks/useTictactoe'
import ScoreBoard from '../components/tictactoe/ScoreBoard'
import Modal from '../components/tictactoe/Modal'

const TicTacToe = () => {
  const [isDefined, setIsDefined] = useState(false);
  const [nbWinAt, setNbWinAt] = useState(1);
  const { board, handleBoxClick, scores, xPlaying, resetBoard, gameOver, win} = useTictactoe(nbWinAt);

  useEffect(() => {
    if(board.find((val) => val != null)){
      setIsDefined(true);
    }else{
      setIsDefined(false);
    }
  }, [board]);

  const handleWinAtInput = (e) => {
    if (e.key === '-') e.preventDefault();
    if (e.key === 'Enter') {
      const value = Math.max(1, Number(e.target.value));
      setNbWinAt(value);
      setIsDefined(true);
    }
  };

  useEffect(() => {
    if (gameOver) {
      setTimeout(() => resetBoard(), 1000);
    }
  }, [gameOver]);

  return (
    <div className='h-screen'>
      <HeaderGame title={"Tic-Tac-Toe"} />
      <div>
        <div className='match'>
          <div className='font-bold m-1'> Match </div>
          {
          !isDefined ? 
          (
            <input
              placeholder='Win at ...'
              type="number"
              className='w-28 border-2 px-3 py-1 rounded'
              min={1}
              onKeyDown={handleWinAtInput}
            />
          ):(
            <div className='font-semibold text-lg'>
              {nbWinAt}
            </div>
          )
          }
        </div>
        <ScoreBoard scores={scores} xPlaying={xPlaying}/>
        <Board board={board} onClick={handleBoxClick} gameOver={gameOver}/>
        {win && <Modal win={win} />}
      </div>
    </div>
  )
}

export default TicTacToe