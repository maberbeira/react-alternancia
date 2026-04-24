import { NavLink } from 'react-router-dom'

// Componente de navegación principal con enlaces internos de React Router
function Navbar() {
  return (
    <nav className="navbar">
      <h2>React Alternancia</h2>

      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          Inicio
        </NavLink>

        <NavLink to="/services" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          Servicios
        </NavLink>

        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          Contacto
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar