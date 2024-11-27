import React, { useEffect, useState } from 'react'
import '../App.css';
import { useSelector } from 'react-redux';
import useWordle from '../hooks/wordle/useWordle';
import Grid from '../components/Grid';
import Keypad from '../components/Keypad';
import Modal from '../components/Modal';

const Wordle = () => {
  const solution = useSelector((state) => state.wordData.wordRandomData);
  const { currentGuess, handleKeyUp, guesses, iscorrect, turn, usedKeys } = useWordle(solution);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);

    if(iscorrect){
      setTimeout(() => setShowModal(true), 2000);
      window.removeEventListener("keyup", handleKeyUp);
    }

    if(turn > 5){
      setTimeout(() => setShowModal(true), 2000);
      window.removeEventListener("keyup", handleKeyUp);
    }

    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp, iscorrect, turn]);
  return (
    <div>
      <h1>Wordle</h1>
      <div>
        <div>Solution - {solution}</div>
        <div>Current guess - {currentGuess}</div>
        <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}/>
        <Keypad usedKeys={usedKeys}/>
        {showModal && <Modal iscorrect={iscorrect} turn={turn} solution={solution}/>}
      </div>
    </div>
  )
}

export default Wordle