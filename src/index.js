import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import './index.css';
import { AuthProvider } from "./Store/auth";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
    <AuthProvider>
        <App />
        <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            transition={Bounce}
        />
    </AuthProvider>,
    document.getElementById("root")
);
