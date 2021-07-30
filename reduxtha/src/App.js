import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Form from './components/Form/Form';
import Weather from './components/weather/Weather';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        {/* <h2>Hello redux</h2> */}
        {/* <Form /> */}
        <Weather />
      </div>
    </Provider>
  );
}

export default App;
