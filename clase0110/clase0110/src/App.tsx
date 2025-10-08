import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProtectedRoute } from './components/ProtectedRoute';
import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage';
import { ArtworksPage } from './pages/ArtworksPage';

function HashScroll() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location.hash]);

  return null;
}

function AppShell() {
  const { isLoggedIn, login, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [location.pathname, location.hash]);

  const handleToggleAuth = () => {
    if (isLoggedIn) {
      logout();
      if (location.pathname !== '/') {
        navigate('/', { replace: true });
      }
    } else {
      login();
    }
  };

  return (
    <>
      <Header isLoggedIn={isLoggedIn} onToggleAuth={handleToggleAuth} />
      <main id="contenido" className="container" tabIndex={-1}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="contacto" element={<ContactPage />} />
            <Route path="service-http-component" element={<ArtworksPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <HashScroll />
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppShell />
    </AuthProvider>
  );
}

export default App;
