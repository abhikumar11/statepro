import React, { useState } from 'react'

const Counter = () => {
 const [counterValue,setCounterValue]=useState(0);
  return (
    <div>
        <h1>Counter</h1>
        <div>
            <h2>{counterValue}</h2>
            <button onClick={()=>counterValue==0?setCounterValue(0):setCounterValue(counterValue-1)}>Decrease</button>
            <button  onClick={()=>setCounterValue(counterValue+1)}>Increase</button>
        </div>
    </div>
  )
}

export default Counter;