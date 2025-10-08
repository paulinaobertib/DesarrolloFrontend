import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

type RedirectWithAlertProps = {
  message: string;
  to: string;
  state?: Record<string, unknown>;
};

function RedirectWithAlert({ message, to, state }: RedirectWithAlertProps) {
  useEffect(() => {
    window.alert(message);
  }, [message]);

  return <Navigate to={to} replace state={state} />;
}

export function ProtectedRoute() {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  if (isLoggedIn) {
    return <Outlet />;
  }

  return (
    <RedirectWithAlert
      message="Debes iniciar sesión para acceder a esta página."
      to="/"
      state={{ from: location }}
    />
  );
}
