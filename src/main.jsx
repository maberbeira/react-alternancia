import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

// Punto de entrada principal de la aplicación.
// Se utiliza StrictMode para identificar problemas potenciales durante el desarrollo.
// BrowserRouter permite el manejo de rutas dentro de la aplicación SPA.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)