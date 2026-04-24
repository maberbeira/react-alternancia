import { NavLink } from 'react-router-dom'

// Componente de navegación principal con enlaces internos de React Router.
// NavLink permite aplicar estilos específicos al enlace que coincide con la URL actual.
function Navbar() {
  return (
    <nav className="navbar">
      <h2>React Alternancia</h2>

      <div className="nav-links">
        {/* El atributo className recibe una función para detectar si el enlace está "activo" */}
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