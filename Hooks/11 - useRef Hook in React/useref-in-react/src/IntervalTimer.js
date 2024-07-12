import React, { useState, useRef, useEffect } from 'react'

const IntervalTimer = () => {
    const [seconds, setSeconds] = useState(0);
    const intervalRef = useRef();

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);

        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

  return (
    <div>
        <p>{seconds} seconds have passed.</p>
        <button onClick={() => clearInterval(intervalRef.current)}>
            Stop Timer
        </button>
    </div>
  );
};

export default IntervalTimer;