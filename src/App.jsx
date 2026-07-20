import { useState } from 'react'
import LandingPage from './components/LandingPage.jsx'
import Home from './pages/Home.jsx'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('landing')

  return currentPage === 'landing' ? (
    <LandingPage onStart={() => setCurrentPage('home')} />
  ) : (
    <Home />
  )
}

export default App
