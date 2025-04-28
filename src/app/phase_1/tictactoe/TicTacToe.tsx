import { useState } from "react";
import Box from './Box'
import './tictactoe.css'
import { Button } from "@/components/ui/button"

const TicTacToe = () => {
  const [squares, setSquares] = useState<string[]>([
    '','','',
    '','','',
    '','','',
  ]);

  const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];

  const [currentPlayer, setCurrentPlayer] = useState<string>('X')
  const [winner, setWinner] = useState<string>('')

  const handleClick = (index: number) => {
    if (squares[index] !== '' || winner) return;
    const player = currentPlayer;

    setSquares(prevSquare => {
      prevSquare[index] = player;

      checkWinner(prevSquare, player)
      return prevSquare
    })

    setCurrentPlayer(prevPlayer => prevPlayer == 'X'? 'O':'X')
  }

  const checkWinner = (square: string[], player: string) => {
    winningCombinations.forEach(combination => {
      const [a, b, c] = combination;

      if(square[a] === player && square[b] === player && square[c] === player) {
        setWinner(player);
      }
    })
  }

  const resetGame = () => {
    setWinner('')
    setCurrentPlayer('X')
    setSquares([
      '','','',
      '','','',
      '','','',
    ])
  }

  return (
    <>
      <h1 className="text-center font-bold mt-2 text-[2rem]">Tic Tac Toe</h1>
      <p className="text-center font-bold text-[1rem]">{winner ? `Player ${winner} wins!`:`Current Player: ${currentPlayer}`}</p>
      <div className="grid grid-cols-3 mx-auto gap-2">
        {[...Array(9)].map((_, index) => (
          <Box 
            key={index}
            value={squares[index]}
            onBoxClick={() => handleClick(index)}
          />
        ))}
      </div>
      <Button onClick={resetGame} className="mx-auto">Reset Game</Button>
    </>
  )
}

export default TicTacToe