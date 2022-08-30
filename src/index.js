import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Redux
import store from './redux/store';
import { Provider } from 'react-redux';
// Router
import { BrowserRouter } from 'react-router-dom';
// CSS
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
