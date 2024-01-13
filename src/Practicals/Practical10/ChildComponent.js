// ChildComponent.js
import React from 'react';
import { useMyContext } from './MyContext';


const ChildComponent = () => {
  const { count, increment } = useMyContext();

  return (
    <div className="child-container">
      <h2>Count from Context: {count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default ChildComponent;
