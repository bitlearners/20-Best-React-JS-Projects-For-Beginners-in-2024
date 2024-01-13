import React, { useState } from "react";

import "./Style.css";
function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };
  return (
    <div className="container">
      <h1>Simple Counter Exercise</h1>

      <div className="counter-container">
        
        <div className="button-container">
          <button onClick={incrementCount} className="increment-btn">
            Increment
          </button>
          <h2>Counter: {count}</h2>
          <button onClick={decrementCount} className="decrement-btn">
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
