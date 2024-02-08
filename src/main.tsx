import React from 'react'
import ReactDOM from 'react-dom/client'
import Hero from './components/hero'
import Links from './components/links'
import Peek from './components/peek'
import Splash from './components/splash'

import './main.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Hero />
    <Links />
    <Peek />
    <Splash />
  </React.StrictMode>,
)
