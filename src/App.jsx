import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ThemeToggle from './components/ThemeToggle'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import './styles/global.css'

function App() {
  return (
    <div>
      <Navbar />

      <div className="theme-container">
        <ThemeToggle />
      </div>

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