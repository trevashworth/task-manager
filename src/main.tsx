
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-v3ft1ndrt6g1umvd.us.auth0.com"
      clientId="Gbb2yzx3kdZhxIe6obRZHw3bsoocrGdw"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      cacheLocation="localstorage"
    >
      <App />
    </Auth0Provider> 
  </React.StrictMode>
);