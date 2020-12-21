import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './Redux/rootReducer';
import sagaWatcher from './Redux/Hero/saga';

const saga = createSagaMiddleware();

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk, saga),
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
));

saga.run(sagaWatcher);

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
