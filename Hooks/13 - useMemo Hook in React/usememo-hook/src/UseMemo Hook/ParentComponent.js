import React, { useState, useMemo } from 'react'

const ChildComponent = React.memo(({ data }) => {
    console.log('Child component rendered');
    return <div>{data.value}</div>
});

const ParentComponent = () => {
    const [count, setCount] = useState(0);

    const data = useMemo(() => {
        return { value: 'Hello, World!' };
    }, []);

    return (
        <div>
            <ChildComponent data={data} />
            <button onClick={() => setCount(count + 1)}>
                Increment Count: {count}
            </button>
        </div>
    )
}

export default ParentComponent;