import React from 'react'
import Box from './Box'

const Board = ({ board, onClick }) => {
  return (
    <div className='board'>
      {
        board.map((value, index) => {
          if(value){
            <Box key={index} value={value} onClick={() => value === null && onClick(index)}/>
          }
          return (
            <Box key={index} value={value} onClick={() => value === null && onClick(index)}/>
          )
        })
      }
    </div>
  )
}

export default Board