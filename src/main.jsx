import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCJtYHUr80ucd9Q19BM1PidtxS8yGauNj0",
    authDomain: "comision-50105-react-515ca.firebaseapp.com",
    projectId: "comision-50105-react-515ca",
    storageBucket: "comision-50105-react-515ca.appspot.com",
    messagingSenderId: "624762765640",
    appId: "1:624762765640:web:e82cea7aad8e8a5331337d"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
