import React, { Suspense, useState } from 'react';
import './App.css';

const Button = React.lazy(() => import('libesServer/Button'));

function App() {
  const [number, setNumber] = useState<number>(0);
  return (
    <div>
      <h1>Host Application</h1>
      <Suspense fallback="Loading Button">
        <Button appearance="primary" onClick={() => setNumber(number + 1)}>
          Click me: {number}
        </Button>
        <Button onClick={() => setNumber(0)} danger>
          RESET
        </Button>
      </Suspense>
    </div>
  );
}

export default App;
