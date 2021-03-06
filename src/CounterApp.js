import React from "react";
import useCounter from "./hooks/useCounter";

export default function CounterApp() {
  const [counter, increment, reset] = useCounter(5);
  return (
    <div>
      <h1>Clicks:{counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
