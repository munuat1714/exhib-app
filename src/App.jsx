import { HashRouter, Route, Routes, useNavigate } from 'react-router-dom'
import LandingPage from './components/LandingPage.jsx'
import ExhibitionDetail from './pages/ExhibitionDetail.jsx'
import Home from './pages/Home.jsx'
import './App.css'

function AppRoutes() {
  const navigate = useNavigate()

  return (
    <Routes>
      <Route path="/" element={<LandingPage onStart={() => navigate('/home')} />} />
      <Route path="/home" element={<Home />} />
      <Route path="/exhibitions/:exhibitionId" element={<ExhibitionDetail />} />
      <Route path="*" element={<LandingPage onStart={() => navigate('/home')} />} />
    </Routes>
  )
}

function App() {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  )
}

export default App
