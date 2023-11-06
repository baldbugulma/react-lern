import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App'; // Используйте правильный путь к компоненту App

const isLoading = false;

ReactDOM.render(
  <React.StrictMode>
    <App isLoading={isLoading} />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
