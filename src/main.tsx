import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Splash from './components/Splash/Splash.tsx'
import './main.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Splash />
    <div className='relative z-10'>
      <App />
    </div>
  </React.StrictMode>,
)
