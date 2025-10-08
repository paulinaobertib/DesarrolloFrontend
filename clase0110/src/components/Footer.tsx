import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer>
      <div className="container">
        <p>© 2025 Paulina Oberti Busso - Maria Victoria Vaccarini.</p>
        <p>
          <Link to="/#datos-personales">Datos personales</Link> ·{' '}
          <Link to="/#proyectos">Proyectos</Link> · <Link to="/contacto">Contacto</Link>
        </p>
      </div>
    </footer>
  );
}
