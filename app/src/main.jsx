import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import { Header } from './componentes/Header/Header.jsx'
import { Character } from './componentes/Character/Character.jsx'
import { Search } from './componentes/Search/Search.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Header />
    <App />
    
    <Character />
    <Search />
  </React.StrictMode>,
)
