import React from 'react'
import { useSelector } from 'react-redux';

const Wordle = () => {
  const solution = useSelector((state) => state.wordData.wordRandomData);

  return (
    <div>
      <h1>Wordle</h1>
      {solution && <div>Solution is {solution}</div>}
    </div>
  )
}

export default Wordle