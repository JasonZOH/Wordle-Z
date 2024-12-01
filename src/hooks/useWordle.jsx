import React, { useEffect, useState } from 'react'
import { setWordRandomData } from '../redux/wordSlicer';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const useWordle = (solution, col, line) => {
  const [turn , setTurn] = useState(0);
  const dispatch = useDispatch();
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([...Array(line)]); //array
  const [history, setHistory] = useState([]); //string
  const [iscorrect, setIsCorrect] = useState(false);
  const [usedKeys, setUsedKeys] = useState({});

  useEffect(() => {
    setGuesses([...Array(line)]);
    setCurrentGuess("");
    setTurn(0);
    setHistory([]);
    setIsCorrect(false);
    setUsedKeys({});
  }, [col, line]);

  const fetchWordRandomData = async(length) =>{
    try{
      const response = await axios.get(`https://random-word-api.vercel.app/api?words=1&length=${length}`);
      console.log(response.data[0]);
      dispatch(setWordRandomData(response.data[0]));
    }catch(error){
      console.log("error", error);
    };
  }

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

  const addNewGuess = (formattedGuess) => {
    if(currentGuess === solution){
      setIsCorrect(true);
    }

    setGuesses((prevGuesses) => {
      const newGuesses = [...prevGuesses];
      newGuesses[turn] = formattedGuess;
      return newGuesses;
    });

    setHistory((prevhistory) => {
      return [...prevhistory, currentGuess];
    });

    setTurn((prevTurn) => {
      return prevTurn + 1;
    });

    setUsedKeys((prevUsedKeys) => {
      const newKeys = {...prevUsedKeys};

      formattedGuess.forEach((l) => {
        const currentColor = newKeys[l.key];
        if(l.color === 'green'){
          newKeys[l.key] = 'green';
          return;
        }

        if(l.color === 'yellow' && currentColor !== 'green'){
          newKeys[l.key] = 'yellow';
          return;
        }

        if(l.color === 'grey' && currentColor !== 'green' && currentColor !== 'yellow'){
          newKeys[l.key] = 'grey';
          return;
        }
      });

      return newKeys;
    })
    setCurrentGuess('');
  }

  const handleKeyUp = ({ key}) => {

    if(key === 'Enter'){
      if(turn > line){
        console.log('You use all your guesses');
        return;
      }

      if(history.includes(currentGuess)){
        console.log('You already try that word');
        return;
      }

      if(currentGuess.length !== col){
        console.log("Word must be 5 chars long");
        return;
      }
      const formated = formatGuess();
      addNewGuess(formated);
    }

    if (key === 'Backspace'){
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      })
      return;
    }

    if (/^[aA-Za-z]$/.test(key)){
      if(currentGuess.length < col){
        setCurrentGuess((prev) => {
          return prev + key;
        })
      }
    }
  }


  return {turn , currentGuess, guesses, iscorrect, handleKeyUp, usedKeys, fetchWordRandomData}
}

export default useWordle