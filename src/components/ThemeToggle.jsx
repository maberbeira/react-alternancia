import { useEffect, useState } from 'react'

// Ejercicio 5: botón para alternar entre modo claro y modo oscuro.
function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false)

  // Gestiona el cambio de tema añadiendo/quitando una clase en el elemento body.
  // Esto permite que los estilos globales de CSS de adapten al tema elegido.
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }, [darkMode])

  return (
    <button className="theme-button" onClick={() => setDarkMode(!darkMode)}>
      {/* Texto dinámico que cambia según el estado actual */}
      {darkMode ? 'Modo claro' : 'Modo oscuro'}
    </button>
  )
}

export default ThemeToggle