import React from 'react';
import ReactDOM from 'react-dom/client';
import '@freee_jp/vibes/css';
import RemoteButton from './shared/RemoteButton';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RemoteButton>Sample</RemoteButton>
  </React.StrictMode>,
);
