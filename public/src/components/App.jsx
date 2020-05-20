import React from 'react';
import { Header } from './Header.jsx';
import { Balance } from './Balance.jsx';

function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <Balance />
      </div>
    </div>
  );
}

export default App;