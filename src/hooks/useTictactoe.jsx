import React, { useEffect, useState } from 'react'

const useTictactoe = (nbWinAt) => {

  const WIN_OF_PLAYER = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [scores, setScores] = useState({xScore:0, oScore:0});
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(null);

  const handleBoxClick = (boxIndx) => {
    const updateBoard = board.map((value, index) => {
      if(index === boxIndx){
        return xPlaying === true ? "X" : "O";
      }else return value;
    })

    const winner = VerifyWinner(updateBoard);
    if(winner){
      updateScores(winner);
      setGameOver(true);
    }

    setXPlaying(!xPlaying);
    setBoard(updateBoard);
  }

  const VerifyWinner = (board) => {
    for (const win of WIN_OF_PLAYER) {
      const [x, y, z] = win;
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true);
        return board[x];
      }
    }
    return null;
  };

  const updateScores = (winner) => {
    if (winner === 'X') {
      setScores((prevScores) => ({
        ...prevScores,
        xScore: prevScores.xScore + 1,
      }));
    } else if (winner === 'O') {
      setScores((prevScores) => ({
        ...prevScores,
        oScore: prevScores.oScore + 1,
      }));
    }
  };

  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
  }

  useEffect(() => {
    const { xScore, oScore } = scores;

    if (xScore >= nbWinAt) {
      setWin('X');
    } else if (oScore >= nbWinAt) {
      setWin('O');
    } else {
      setWin(null); // Reset win if no one has reached the target
    }
  }, [scores, nbWinAt]);

  return {board, handleBoxClick, scores, xPlaying, resetBoard, gameOver, win }
}

export default useTictactoe