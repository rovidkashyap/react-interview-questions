import React, { useState, useMemo } from 'react'

const ExpensiveCalculationComponent = ({ a, b }) => {
    const [count, setCount] = useState(0);

    const expensiveCalculation = (num1, num2) => {
        console.log('Calculating...');
        return num1 + num2;
    };

    const memoizedValue = useMemo(() => expensiveCalculation(a, b), [a, b]);

    return (
        <div>
            <p>Result of expensive calculation: {memoizedValue}</p>
            <button onClick={() => setCount(count + 1)}>
                Increment Count: {count}
            </button>
        </div>
    );
};

export default ExpensiveCalculationComponent;