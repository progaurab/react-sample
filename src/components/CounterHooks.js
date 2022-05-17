import React, { useState } from 'react';

const CounterHooks = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You have clicked {count} times.</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}
export default CounterHooks;