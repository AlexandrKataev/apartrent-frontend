import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store/store';
import App from './app/App';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);
