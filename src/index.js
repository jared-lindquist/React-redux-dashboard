import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { combineReducers } from 'redux';

const initialSpeed = {
  speed: 0
}
// put your reducers here!
const speedReducer = (state = initialSpeed, action) => {
  console.log('in speedReducer');
  if(action.type === 'INCREASE_SPEED') {
    return {speed: action.payload}
  } else if(action.type === 'DECREASE_SPEED') {
    return {speed: action.payload}
  }
  return state
}

const initialPassengers = [];

const passengerReducer = (state = initialPassengers, action) => {
  console.log('in passengerReducer');
  if(action.type === 'ADD_PASSENGER') {
    return [...state, {passenger: action.payload}]
  }
  return state
}



// be sure to combine your reducers!
const storeInstance = createStore(
  combineReducers({
    speedReducer,
  passengerReducer
  }),
  applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

export {storeInstance};
