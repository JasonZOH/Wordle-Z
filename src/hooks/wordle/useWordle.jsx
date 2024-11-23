import React, { useState } from 'react'

const useWordle = ({solution}) => {
  const [turn , setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]); //array
  const [history, setHistory] = useState([]); //string
  const [iscorrect, setIsCorrect] = useState(false);

  const formatGuess = () => {
    
  }

  const addNewGuess = () => {

  }

  const handleKeyUp = () => {
    
  }


  return {turn , currentGuess, guesses, iscorrect, handleKeyUp}
}

export default useWordle