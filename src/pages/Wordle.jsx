import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import useWordle from '../hooks/wordle/useWordle';
import Grid from '../components/Grid';

const Wordle = () => {
  const solution = useSelector((state) => state.wordData.wordRandomData);
  const { currentGuess, handleKeyUp, guesses, iscorrect, turn } = useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);

    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp]);

  useEffect(() => {
    console.log(guesses, turn , iscorrect);
  }, [guesses, turn , iscorrect]);
  
  return (
    <div>
      <h1>Wordle</h1>
      <div>
        <div>Solution - {solution}</div>
        <div>Current guess - {currentGuess}</div>
        <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}/>
      </div>
    </div>
  )
}

export default Wordle