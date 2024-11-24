import React, { useState } from 'react'

const useWordle = (solution) => {
  const [turn , setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]); //array
  const [history, setHistory] = useState([]); //string
  const [iscorrect, setIsCorrect] = useState(false);

  const formatGuess = () => {
    const solutionArray = [...solution];
    const formattedGuess = [...currentGuess].map((l) => {
      return {key: l, color: 'grey'}
    });

    formattedGuess.forEach((l, index) => {
      if(solutionArray[index] === l.key){
        formattedGuess[index].color = 'green';
        solutionArray[index] = null;
      }
    });

    formattedGuess.forEach((l, index) => {
      if(solutionArray.includes(l.key) && l.color !== 'green'){
        formattedGuess[index].color = 'yellow';
        solutionArray[solutionArray.indexOf(l.key)] = null;
      }
    });

    return formattedGuess;
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
      const formated = formatGuess();
      console.log(formated);
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