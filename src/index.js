import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain:process.env.REACT_APP_AUTH_DOMAIN,
  projectId:"cart-da17f",
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID ,
  appId:process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
firebase.default.initializeApp(firebaseConfig);


ReactDOM.render(
 <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

