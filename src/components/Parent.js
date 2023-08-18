import React, { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

function Parent() {
  let [counter, setCounter] = useState(0);
  console.log("parent");

  return (
    <div className="box">
      {counter}
      
      <Child1 />
      <Child2 />
      <div className="btn">
        <button onClick={() => setCounter(++counter)}>increment</button>
    
        <button onClick={() => setCounter(--counter)}>decrement</button>
        </div>
    </div>
  );
}

export default Parent;



