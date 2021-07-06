import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ChessBoard from './chessBoard/ChessBoard';
import MemeCard from './memeCard/MemeCard';
import Day17 from './day17_tha/Day17';
import './App.css';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/day16'>
            <Home dayNum='16' />
            <ChessBoard />
            <MemeCard />
          </Route>
          <Route exact path='/day17'>
            <Home dayNum='17' />
            <Day17 />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export const Home = ({ dayNum }) => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/day16'>Tha-16</Link>
            </li>
            <li>
              <Link to='/day17'>Tha-17</Link>
            </li>
          </ul>
        </nav>
        <div
          className="headerInfo">
          <h2 style={{ marginTop: '5px' }}>Devsnest Tha</h2>
          <h1 style={{ marginTop: '10px', color: 'rgb(156 176 231)' }}>
            This is Day {dayNum} Take Home Assignment
          </h1>
        </div>
      </header>
    </>
  );
};

export default App;
