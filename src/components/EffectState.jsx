import React, { useEffect, useState } from "react";

const EffectState = () => {
     const [count, setCount] = useState(0);
     useEffect(() => console.log("without dependency"));
     useEffect(() => {
          console.log("empty dependency");
     }, []);
     useEffect(() => {
          console.log("with dependency");
     }, [count]);
     return (
          <div>
               <h1>Counter</h1>
               <p>{count}</p>
               <button className=" border-2 w-10" onClick={() => setCount(count + 1)}>+</button>
          </div>
     );
};

export default EffectState;
