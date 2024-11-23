import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import useWordle from '../hooks/wordle/useWordle';

const Wordle = () => {
  const solution = useSelector((state) => state.wordData.wordRandomData);
  const { currentGuess, handleKeyUp } = useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);

    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp])
  return (
    <div>
      <h1>Wordle</h1>
      <div>Current guess - {currentGuess}</div>
    </div>
  )
}

export default Wordle