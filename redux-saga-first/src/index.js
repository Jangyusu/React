import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import saga from './saga';
import { configureStore } from './store';

const store = configureStore();
store.runSaga(saga);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );
};
store.subscribe(render);
render();
