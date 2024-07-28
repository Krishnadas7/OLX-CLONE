import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FirebaseContext } from './store/context.jsx'
import Context from './store/context.jsx'
import { auth } from './firebase/config.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{auth}}>
      <Context>
        <App />
    </Context>
    </FirebaseContext.Provider>
  </React.StrictMode>
)
