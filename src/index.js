import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import allReducers from './reducers/index';
import { Provider } from 'react-redux';


const myStore = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


// //Store -> glbalized state
// //Action -> describe whatever i want, return an obj
// const increment = () => {
//   return {
//     type: 'INCREMENT'
//   }
// }
// const decrement = () => {
//   return {
//     type: 'DECREMENT'
//   }
// }
// //Reducer -> 2 parameters
// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1
//     case "DECREMENT":
//       return state - 1
//     default:
//       return state;
//   }
// }

// let store = createStore(counter) //create store with parameter = reducer
// //display it in the console
// store.subscribe(() => {
//   console.log(store.getState());
// }) // subscribe, when state is changing => update state
// //Dispatch -> call action
// store.dispatch(increment())
// store.dispatch(increment())
// store.dispatch(decrement())


ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
