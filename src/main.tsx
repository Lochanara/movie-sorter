import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { store } from "./features/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* wrapped in provider to acces redux state */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
