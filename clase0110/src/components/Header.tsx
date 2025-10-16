import { Link, NavLink } from 'react-router-dom';

type HeaderProps = {
  isLoggedIn: boolean;
  onToggleAuth: () => void;
};

export function Header({ isLoggedIn, onToggleAuth }: HeaderProps) {
  return (
    <header>
      <div className="topbar">
        <div className="principalDiv">
          <span className="logo" aria-hidden="true">
            👩🏼‍💻
          </span>
          <strong>Curriculum Vitae</strong>
        </div>

        <nav aria-label="Principal">
          <ul>
            {isLoggedIn && (
              <li>
                <NavLink to="/service-http-component" className={({ isActive }) => (isActive ? 'active' : undefined)}>
                  Arte
                </NavLink>
              </li>
            )}
            <li>
              <Link to="/#datos-personales">Datos personales</Link>
            </li>
            <li>
              <Link to="/#proyectos">Proyectos</Link>
            </li>
            {isLoggedIn && (
              <li>
                <NavLink to="/contacto" className={({ isActive }) => (isActive ? 'active' : undefined)}>
                  Contacto
                </NavLink>
              </li>
            )}
            <li>
              <button
                className={`auth-btn${isLoggedIn ? ' logout' : ''}`}
                type="button"
                onClick={onToggleAuth}
              >
                {isLoggedIn ? 'Cerrar sesion' : 'Iniciar sesion'}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
