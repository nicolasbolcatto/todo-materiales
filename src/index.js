import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2Onwxa4X-m4CkXAV2T346FtY86_UJSBU",
  authDomain: "todo-materiales.firebaseapp.com",
  projectId: "todo-materiales",
  storageBucket: "todo-materiales.appspot.com",
  messagingSenderId: "309249097085",
  appId: "1:309249097085:web:7ae7c4294619f5dc19e014"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
