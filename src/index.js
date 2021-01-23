import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import reducers from './redux-store/reducers'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


const initalState = {count:5}
const allReducers = combineReducers({counter:reducers})
const mystore = createStore(allReducers,initalState,compose(applyMiddleware(thunk)))
ReactDOM.render(
  <React.StrictMode>
    <Provider store={mystore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
