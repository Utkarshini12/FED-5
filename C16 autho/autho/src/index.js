import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider 
    domain='dev--6og07-n.us.auth0.com' clientId='6GdTAQ71Om6DPILJTGjhc9HEIaXhJ9z3' redirectUri={window.location.origin}>
    <App />
    </Auth0Provider>
  </React.StrictMode>
);

