import React from 'react'
import Box from './Box'

const Board = ({ board, onClick, gameOver }) => {
  return (
    <div className='board'>
      {
        board.map((value, index) => {
          if(value){
            return <Box key={index} value={value} onClick={null}/>
          }
          return (
            <Box key={index} value={value} onClick={() => gameOver ? null : onClick(index)}/>
          )
        })
      }
    </div>
  )
}

export default Board