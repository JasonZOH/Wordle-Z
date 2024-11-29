import React, { useEffect, useState } from 'react'
import './../css/Wordle.css';
import { useSelector } from 'react-redux';
import useWordle from '../hooks/useWordle';
import Grid from '../components/wordle/Grid';
import Keypad from '../components/wordle/Keypad';
import Modal from '../components/wordle/Modal';
import { useNavigate } from 'react-router-dom';
import HeaderGame from '../components/commun/HeaderGame';

const Wordle = ({ col = 5, l = 5}) => {
  const solution = useSelector((state) => state.wordData.wordRandomData);
  const  [column, setColumn] = useState(col);
  const  [line, setLine] = useState(l);
  const { currentGuess, handleKeyUp, guesses, iscorrect, turn, usedKeys } = useWordle(solution, col, line);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

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
      <HeaderGame title={"Wordle"} />
      <div>
        <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}/>
        <Keypad usedKeys={usedKeys}/>
        {showModal && <Modal iscorrect={iscorrect} turn={turn} solution={solution}/>}
      </div>
    </div>
  )
}

export default Wordle