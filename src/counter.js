import React, { useState } from "react";
import "./counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count === 0) {
      setCount(0);
    } else setCount(count - 1);
  };

  return (
    <div className="counter">
      <h1>Counter App</h1>
      <div className="count">{count}</div>
      <div className="button-container">
        <button className="increment-button" onClick={increment}>
          +
        </button>
        <button className="decrement-button" onClick={decrement}>
          -
        </button>
      </div>
      <p>Click the buttons to increase or decrease the count.</p>
    </div>
  );
}

export default Counter;
