// src/components/PrivateRoute.tsx
import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  React.useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect();
    }
  }, [isLoading, isAuthenticated, loginWithRedirect]);

  if (isLoading) return <div>Loading...</div>;
  if (!isAuthenticated) return null; // Will redirect

  return <>{children}</>;
};

export default PrivateRoute;