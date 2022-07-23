import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      // Hardcoded link. MUST CHANGE on public deployment.
      redirectUri='http://localhost:3000/generate'
      cacheLocation="localstorage"
      scope='user_metadata app_metadata read:current_user update:current_user_metadata'
      audience="https://seraphina.us.auth0.com/api/v2/"
      useRefreshTokens={true}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
