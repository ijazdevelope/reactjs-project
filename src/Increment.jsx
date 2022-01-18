import React, { useState } from 'react';

const Increment = () => {
    const [count, setCount] = useState(0);

    const incrementFun = () => {
        setCount(count + 1);
    }

    return (
        <>
            <div className='increment p-2'>
                <h2>increment <span className={`${count ? 'd-inline-block' : 'd-none'}`}>{count}</span></h2>
                <button onClick={incrementFun}>increment</button>
            </div>
        </>
    )
}

export default Increment;