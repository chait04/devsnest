import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ChessBoard from './chessBoard/ChessBoard';
import MemeCard from './memeCard/MemeCard';
import Day17 from './day17_tha/Day17';
import Day20 from './day20_tha/Day20';
import Day18 from './day18/Day18';
import Counter19 from './day19/Counter19';
import Doubt from './Doubt session/doubt';
import Day23 from './day23/Day23';
import './App.css';

const App = () => {
  return (
    <main>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home show={false} />
          </Route>
          <Route exact path='/day16'>
            <Home dayNum='30' show={true} />
            <ChessBoard />
            <MemeCard />
          </Route>
          <Route exact path='/day17'>
            <Home dayNum='17' show={true} />
            <Day17 />
          </Route>
          <Route exact path='/day18'>
            <Home dayNum='18' show={true} />
            <Day18 />
          </Route>
          <Route exact path='/day19'>
            <Home dayNum='19' show={true} />
            <Counter19 />
          </Route>
          <Route exact path='/day20'>
            <Home dayNum='20' show={true} />
            <Day20 />
          </Route>
          <Route exact path='/doubt'>
            <Home dayNum='20' show={true} />
            <Doubt />
          </Route>
          <Route exact path='/day23'>
            <Home dayNum='23' show={false} />
            <Day23 />
          </Route>
        </Switch>
      </Router>
    </main>
  );
};

export const Home = ({ dayNum, show }) => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home </Link>
            </li>
            <li>
              <Link to='/day16'>Day-16</Link>
            </li>
            <li>
              <Link to='/day17'>Day-17</Link>
            </li>
            <li>
              <Link to='/day18'>Day-18</Link>
            </li>
            <li>
              <Link to='/day19'>Day-19</Link>
            </li>
            <li>
              <Link to='/day20'>Day-20</Link>
            </li>
            <li>
              <Link to='/doubt'>Doubt</Link>
            </li>
            <li>
              <Link to='/day23'>day23</Link>
            </li>
          </ul>
        </nav>
        <div className='headerInfo'>
          <h2 style={{ marginTop: '5px', color: 'rgb(13 43 126)' }}>
            Devsnest Tha
          </h2>
          <h1
            style={{
              marginTop: '10px',
              color: 'rgb(156 176 231)',
              visibility: show ? '' : 'hidden',
            }}>
            This is Day {dayNum} Take Home Assignment
          </h1>
        </div>
      </header>
    </>
  );
};

export default App;
