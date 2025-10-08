import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import UseEffectBasics from './components/UseEffectBasics/UseEffectBasics'
import NoteList from './components/NoteList/NoteList'

const getLinkClassName = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'nav-link nav-link-active' : 'nav-link'

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <header className="app-header">
          <div>
            <h1 className="app-title">Taller de Desarrollo Web</h1>
            <p className="app-subtitle">Explora y practica los ejemplos del curso</p>
          </div>
          <nav className="app-nav">
            <NavLink to="/notes" className={getLinkClassName}>
              Notas
            </NavLink>
            <NavLink to="/use-effect" className={getLinkClassName}>
              useEffect
            </NavLink>
          </nav>
        </header>
        <main className="app-content">
          <Routes>
            <Route path="/" element={<Navigate to="/notes" replace />} />
            <Route path="/notes" element={<NoteList />} />
            <Route path="/use-effect" element={<UseEffectBasics />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

function NotFound() {
  return (
    <div className="not-found">
      <h2>Pagina no encontrada</h2>
      <p>Usa la navegacion para volver a los ejemplos disponibles.</p>
    </div>
  )
}

export default App
