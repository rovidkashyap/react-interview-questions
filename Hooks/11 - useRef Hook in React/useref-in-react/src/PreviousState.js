import React, { useState, useEffect, useRef } from 'react'

const PreviousState = () => {
    const[count, setCount] = useState(0);
    const prevCountRef = useRef();

    useEffect(() => {
        prevCountRef.current = count;
    }, [count]);

    const prevCount = prevCountRef.current;

  return (
    <div>
        <p>Current count: {count}</p>
        <p>Previous count: {prevCount}</p>
        <button onClick={() => setCount(count + 1)}>
            Increment
        </button>
    </div>
  )
}

export default PreviousState;