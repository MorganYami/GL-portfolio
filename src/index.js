import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';

const root = ReactDOM.createRoot(document.getElementById('root'));
const GlobalStyle = createGlobalStyle`
       
`


root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
