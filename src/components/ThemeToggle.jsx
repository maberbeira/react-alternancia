import { useEffect, useState } from 'react'

// Ejercicio 5: botón para alternar entre modo claro y modo oscuro.
function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false)

  // Añade o elimina una clase global en el body para cambiar el tema visual.
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }, [darkMode])

  return (
    <button className="theme-button" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? 'Modo claro' : 'Modo oscuro'}
    </button>
  )
}

export default ThemeToggle