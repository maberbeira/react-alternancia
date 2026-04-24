import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ThemeToggle from './components/ThemeToggle'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import './styles/global.css'

// Componente principal que define la estructura básica y el sistema de rutas.
function App() {
  return (
    <div>
      {/* Barra de navegación superior accesible desde cualquier página */}
      <Navbar />

      {/* Botón flotante para cambiar entre modo claro y oscuro */}
      <div className="theme-container">
        <ThemeToggle />
      </div>

      {/* El contenido principal cambia dinámicamente según la ruta actual */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}

export default App