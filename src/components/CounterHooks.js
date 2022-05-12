import React, { useState} from 'react';

const CounterHooks = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <p>You have clicked {count} times.</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </>
    )
}
export default CounterHooks;