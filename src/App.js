// App.js
import React from 'react';
import GameBoard from './GameBoard';

const App = () => {
  // Example board data for testing
  const board = [
    [{ name: 'A-P1', type: 'Pawn' }, null, null, null, { name: 'B-P3', type: 'Pawn' }],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [{ name: 'B-P1', type: 'Pawn' }, null, null, null, { name: 'A-P3', type: 'Pawn' }],
  ];

  return (
    <div className="App">
      <GameBoard board={board} currentPlayer="A" />
    </div>
  );
};

export default App;
