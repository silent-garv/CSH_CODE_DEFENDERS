'use client';

import { useAuth0 } from '@auth0/auth0-react';
import { useCallback } from 'react';

export function useAuth() {
  const {
    isAuthenticated,
    isLoading,
    user,
    loginWithRedirect,
    logout,
  } = useAuth0();

  const login = useCallback(() => {
    loginWithRedirect({
      authorizationParams: {
        redirect_uri: `${window.location.origin}/api/auth/callback`
      }
    });
  }, [loginWithRedirect]);

  const logoutUser = useCallback(() => {
    logout({
      logoutParams: {
        returnTo: `${window.location.origin}/login`
      }
    });
  }, [logout]);

  return {
    user,
    isLoading,
    isAuthenticated,
    login,
    logout: logoutUser
  };
}
