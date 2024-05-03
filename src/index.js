import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import rootReducer from "./reducer";
import {configureStore} from "@reduxjs/toolkit"
import { Toaster } from "react-hot-toast";
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';


const store = configureStore({
  reducer:rootReducer,
});

const startApp = () => {
  const rootElement = document.getElementById('root');
  const root = createRoot(rootElement);

  root.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <Toaster />
      </BrowserRouter>
    </Provider>
  );
};

if (!window.cordova) {
  startApp();
} else {
  document.addEventListener('deviceready', startApp, false);
}

reportWebVitals();







