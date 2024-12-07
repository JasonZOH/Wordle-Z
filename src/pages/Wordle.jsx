import React, { useEffect, useState } from 'react'
import './../css/Wordle.css';
import {  useSelector } from 'react-redux';
import useWordle from '../hooks/useWordle';
import Grid from '../components/wordle/Grid';
import Keypad from '../components/wordle/Keypad';
import Modal from '../components/wordle/Modal';
import HeaderGame from '../components/commun/HeaderGame';

const Wordle = () => {
  const solution = useSelector((state) => state.wordData.wordRandomData);
  const  [column, setColumn] = useState(5);
  const  [line, setLine] = useState(5);
  const [done, setDone] = useState(false);
  const { currentGuess, handleKeyUp, guesses, iscorrect, turn, usedKeys, fetchWordRandomData } = useWordle(solution, column, line);
  const [showModal, setShowModal] = useState(false);

  const handlelDone = () => {
    fetchWordRandomData(column);
    setDone(true);
  };

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);

    if(iscorrect){
      setTimeout(() => setShowModal(true), 2000);
      window.removeEventListener("keyup", handleKeyUp);
    }

    console.log(turn);
    if(turn > line - 1){
      setTimeout(() => setShowModal(true), 2000);
      window.removeEventListener("keyup", handleKeyUp);
    }

    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp, iscorrect, turn]);
  return (
    <div>
      <HeaderGame title={"Wordle"} />
      <div>
        { !done ? 
        (
          <div className="box-shadow-container">
            <div className="flex flex-col items-center">
              <div className="flex items-center mb-2">
                <label htmlFor="length" className="mr-2">Length:</label>
                <input 
                  id="length"
                  type="number"
                  className="input-field"
                  onChange={(e) => setColumn(Math.max(3, Number(e.target.value)))}
                />
              </div>
              <div className="flex items-center">
                <label htmlFor="guesses" className="mr-2">Guesses:</label>
                <input 
                  id="guesses"
                  type="number"
                  className="input-field"
                  onChange={(e) => setLine(Math.max(3, Number(e.target.value)))}
                />
              </div>
            </div>
            <div>
              <button onClick={handlelDone} className='bg-black text-white px-2 py-1 rounded-xl mt-5'>Done</button>
            </div>
          </div>
        ) : 
        (
          <div>
            <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} col={column}/>
            <Keypad usedKeys={usedKeys}/>
            {showModal && <Modal iscorrect={iscorrect} turn={turn} solution={solution}/>}
          </div>
        )}
      </div>
    </div>
  )
}

export default Wordle