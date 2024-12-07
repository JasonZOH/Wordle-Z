import React from 'react'
import Row from './Row'

const Grid = ({currentGuess, guesses, turn, col}) => {
  return (
    <div>
      {
        guesses.map((g, index) => {
          if(turn === index){
            return <Row key={index} currentGuess={currentGuess} col={col} />
          }
          return <Row key={index} guess={g} col={col}/>
        })
      }
    </div>
  )
}

export default Grid