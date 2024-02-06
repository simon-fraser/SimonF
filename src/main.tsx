import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Splash from './components/splash'
import Links from './components/links'

import './main.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Splash />
    <Links />
    <div className='relative z-10'>
      <App />
    </div>
  </React.StrictMode>,
)
