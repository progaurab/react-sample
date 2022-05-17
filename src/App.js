import React from 'react';
import CounterClass from './components/CounterClass';
import CounterHooks from './components/CounterHooks';

function App() {
  return (
    <>
      <h1>Counter from Class</h1>
      <CounterClass />

      <h1>Counter from Hooks</h1>
      <CounterHooks />
    </>
  );
}

export default App;
