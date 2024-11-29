import React, { useState } from 'react'

const useTictactoe = () => {

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

  const handleBoxClick = (boxIndx) => {
    const updateBoard = board.map((value, index) => {
      if(index === boxIndx){
        return xPlaying === true ? "X" : "O";
      }else return value;
    })

    const winner = VerifyWinner(updateBoard);
    console.log(winner);
    if(winner){
      if(winner === "O"){
        let {oScore} = scores;
        oScore += 1;
        setScores({...scores, oScore});
      }else{
        let {xScore} = scores;
        xScore += 1;
        setScores({...scores, xScore});
      }
    }

    console.log(scores);
    setXPlaying(!xPlaying);
    setBoard(updateBoard);
  }

  const VerifyWinner = (board) => {
    for (const win of WIN_OF_PLAYER) {
      const [x, y, z] = win;
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        return board[x];
      }
    }
    return null;
  };

  return {board, handleBoxClick }
}

export default useTictactoe