import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './rootReducer';
import thunk from 'redux-thunk'
import logger from 'redux-logger';


// it takes reducer function as parameter
const store = createStore(rootReducer, applyMiddleware(thunk, logger)); //conencted

export default store;
