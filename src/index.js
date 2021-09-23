import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {configureStore} from "@reduxjs/toolkit";
import rootReducer from './reducers';

const LOG_OFF = `${process.env.LOG_OFF}`

if(LOG_OFF === 'true'){
    console.log = console.warn = console.error = () => {};
}

const store = configureStore({
    reducer: rootReducer
});

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);
