import React from 'react';
import ReactDOM from 'react-dom';
import ChessBoard from './chessBoard/ChessBoard.jsx';
import Meme from './memeCard/MemeCard'


ReactDOM.render(
  <React.StrictMode>
    <ChessBoard />
    <Meme />
    <Meme />
    <Meme />
    <Meme />
    <Meme />

  </React.StrictMode>,
  document.getElementById('root')
);
