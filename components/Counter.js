// components/Counter.js

'use client';  // This tells Next.js that this is a client-side component

import useStore from '../store/useStore'; // Correct import for Zustand store

function Counter() {
  const { count, increment, decrement } = useStore(); // Access state and actions

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={increment} style={{ margin: '10px', padding: '10px' }}>
        Increment
      </button>
      <button onClick={decrement} style={{ margin: '10px', padding: '10px' }}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;
