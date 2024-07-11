import React, { useState, useEffect } from 'react'

const LifecycleFunctional = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Component did mount');
        return () => {
            console.log('Component will unmount');
        };
    }, []);

    useEffect(() => {
        console.log('Component did update');
    }, [count]);

    const increment = () => {
        setCount(count + 1);
    };

    console.log('Render');
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
};

export default LifecycleFunctional;