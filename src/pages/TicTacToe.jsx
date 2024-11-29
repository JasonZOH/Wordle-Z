import React from 'react'
import HeaderGame from '../components/commun/HeaderGame'
import './../css/Tictactoe.css'
import Board from '../components/tictactoe/Board'
import useTictactoe from '../hooks/useTictactoe'

const TicTacToe = () => {
  const { board, handleBoxClick} = useTictactoe();
  return (
    <div className='h-screen'>
      <HeaderGame title={"Tic-Tac-Toe"} />
      <div>
        <Board board={board} onClick={handleBoxClick}/>
      </div>
    </div>
  )
}

export default TicTacToe