import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBYvqoit4deExBLadhCRX3BK74F_ZuNBHQ",
  authDomain: "educacion-positiva.firebaseapp.com",
  projectId: "educacion-positiva",
  storageBucket: "educacion-positiva.appspot.com",
  messagingSenderId: "648513578677",
  appId: "1:648513578677:web:2138cc3832032ba390c0fc"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

