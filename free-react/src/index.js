import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import { createBrowserHistory } from 'history';
// import createSagaMiddleware from 'redux-saga';
// import rootReducer from './modules';

// const customHistory = createBrowserHistory();
// const sagaMiddleware = createSagaMiddleware();

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(
//     applyMiddleware(
//       sagaMiddleware,
//       ReduxThunk.withExtraArgument({ history: customHistory }),
//       logger,
//     ),
//   ),
// );

// sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
