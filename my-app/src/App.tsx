import React, { Suspense } from 'react';
import './App.css';

const Button = React.lazy(() => import('libesServer/Button'));

function App() {
  return (
    <div>
      <h1>Host Application</h1>
      <Suspense fallback="Loading Button">
        <Button />
      </Suspense>
    </div>
  );
}

export default App;
