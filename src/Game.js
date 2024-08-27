import React, { useState, useEffect } from 'react';
import GameBoard from './GameBoard';
import './App.css'; // Ensure this is imported for styling


const Game = ({ socket }) => {
  // Assuming you need to keep track of the board and player turn
  const [gameState, setGameState] = useState({
    board: Array(5).fill(Array(5).fill(null)),
    currentPlayer: 'A',
  });

  useEffect(() => {
    const handleGameStateUpdate = (newState) => {
      setGameState(newState);
    };

    const handleInvalidMove = (message) => {
      alert(message);
    };

    const handleGameOver = (winner) => {
      alert(`Game Over! Player ${winner} wins!`);
    };

    socket.on('gameState', handleGameStateUpdate);
    socket.on('invalidMove', handleInvalidMove);
    socket.on('gameOver', handleGameOver);

    // Cleanup to remove listeners when component unmounts or socket changes
    return () => {
      socket.off('gameState', handleGameStateUpdate);
      socket.off('invalidMove', handleInvalidMove);
      socket.off('gameOver', handleGameOver);
    };
  }, [socket]);

  return (
    <div>
      <GameBoard
        board={gameState.board}
        currentPlayer={gameState.currentPlayer}
        socket={socket}
      />
    </div>
  );
};

export default Game;
