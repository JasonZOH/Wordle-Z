import React from 'react'
import HeaderGame from '../components/commun/HeaderGame'
import Box from '../components/tictactoe/Box'
import './../css/Tictactoe.css'

const TicTacToe = () => {
  return (
    <div>
      <HeaderGame title={"Tic-Tac-Toe"} />
      <div>
        <Box value={'X'} onClick={null}/>
      </div>
    </div>
  )
}

export default TicTacToe