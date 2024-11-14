"use client";
import { useState } from "react";

export const Counter = () => {
  console.log("Counter component");
  const [count, setCount] = useState(0); // Declare a new state variable, which we update each time the counter is clicked

  return (
    <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
  );
};
