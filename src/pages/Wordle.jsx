import React, { useEffect, useState } from 'react'
import { RiArrowGoBackFill } from "react-icons/ri";
import { FaCircleUser } from "react-icons/fa6";
import '../App.css';
import { useSelector } from 'react-redux';
import useWordle from '../hooks/wordle/useWordle';
import Grid from '../components/Grid';
import Keypad from '../components/Keypad';
import Modal from '../components/Modal';
import { useNavigate } from 'react-router-dom';

const Wordle = () => {
  const solution = useSelector((state) => state.wordData.wordRandomData);
  const { currentGuess, handleKeyUp, guesses, iscorrect, turn, usedKeys } = useWordle(solution);
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
      <div className='flex items-center justify-between border-b-2 py-4 px-6 mb-10'>
        <RiArrowGoBackFill className='scale-125 hover:scale-150 transition-all' onClick={() => navigate('/')}/>
        <h1 className='text-xl font-bold'>Wordle</h1>
        <FaCircleUser className='scale-150' />
      </div>
      <div>
        <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}/>
        <Keypad usedKeys={usedKeys}/>
        {showModal && <Modal iscorrect={iscorrect} turn={turn} solution={solution}/>}
      </div>
    </div>
  )
}

export default Wordle