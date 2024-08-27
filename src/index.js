// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import GameBoard from './GameBoard';
import { io } from 'socket.io-client';

const socket = io('https://keerthi-21bce7090-server-chess-board.onrender.com');  // Update with your server URL

ReactDOM.render(
  <React.StrictMode>
    <GameBoard socket={socket} />
  </React.StrictMode>,
  document.getElementById('root')
);