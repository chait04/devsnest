import { Component } from 'react';
import './counter19.css';

class Counter19 extends Component {
  constructor() {
    super();
    this.state = {
      counter1: 0,
      counter2: 0,
      counter3: 0,
      counter4: 0,
    };
    console.log(this.state);
  }

  render() {
    return (
      <div className='container'>
        <div className='counter19Btns'>
          <button
            onClick={() => {
              this.setState({ counter1: this.state.counter1 + 1 });
            }}>
            {this.state.counter1}
          </button>
          <button
            onClick={() => {
              this.setState({ counter2: this.state.counter2 + 1 });
            }}>
            {this.state.counter2}
          </button>
          <button
            onClick={() => {
              this.setState({ counter3: this.state.counter3 + 1 });
            }}>
            {this.state.counter3}
          </button>
          <button
            onClick={() => {
              this.setState({ counter4: this.state.counter4 + 1 });
            }}>
            {this.state.counter4}
          </button>
        </div>
      </div>
    );
  }
}

export default Counter19;
