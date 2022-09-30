import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import userReducer from "./features/user"
import colorReducer from './features/Color';

const store = configureStore({
reducer : {
  user : userReducer,
  color : colorReducer
}
})  


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
