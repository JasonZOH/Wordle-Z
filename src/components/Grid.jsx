import React from 'react'
import Row from './Row'

const Grid = ({currentGuesse, guesses, turn}) => {
  return (
    <div>
      {
        guesses.map((g, index) => {
          return (
            <Row key={index} guess={g}/>
          )
        })
      }
    </div>
  )
}

export default Grid