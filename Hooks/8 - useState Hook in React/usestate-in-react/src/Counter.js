import React, { useState } from 'react'

const Counter = () => {
    // Declare a state variable `count` and a function `setCount` to update it.
    const [count, setCount] = useState(0);
    
  return (
    <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
            Click me
        </button>
    </div>
  )
}

export default Counter;