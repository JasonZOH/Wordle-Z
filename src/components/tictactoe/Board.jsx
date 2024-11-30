import React from 'react'
import Box from './Box'

const Board = ({ board, onClick }) => {
  return (
    <div className='board'>
      {
        board.map((value, index) => {
          if(value){
            return <Box key={index} value={value} onClick={null}/>
          }
          return (
            <Box key={index} value={value} onClick={() => onClick(index)}/>
          )
        })
      }
    </div>
  )
}

export default Board