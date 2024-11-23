import React, { useState } from 'react'

const useWordle = ({solution}) => {
  const [turn , setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]); //array
  const [history, setHistory] = useState([]); //string
  const [iscorrect, setIsCorrect] = useState(false);

  const formatGuess = () => {
    console.log('formatting the guess : ' , currentGuess);
  }

  const addNewGuess = () => {

  }

  const handleKeyUp = ({ key}) => {

    if(key === 'Enter'){
      if(turn > 5){
        console.log('You use all your guesses');
        return;
      }

      if(history.includes(currentGuess)){
        console.log('You already try that word');
        return;
      }

      if(currentGuess.length !== 5){
        console.log("Word must be 5 chars long");
        return;
      }
      formatGuess();
    }

    if (key === 'Backspace'){
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      })
      return;
    }

    if (/^[aA-Za-z]$/.test(key)){
      if(currentGuess.length < 5){
        setCurrentGuess((prev) => {
          return prev + key;
        })
      }
    }
  }


  return {turn , currentGuess, guesses, iscorrect, handleKeyUp}
}

export default useWordle