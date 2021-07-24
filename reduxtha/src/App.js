import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Form from './components/Form/Form';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <h2>Hello redux</h2>
        <Form />
      </div>
    </Provider>
  );
}

export default App;
