import React from 'react';
import './Button.css';

const Buttton = ({ text }) => {
    return (
        <div className='p-0'>
            <button>{text}</button>
        </div>
    )
}

export default Buttton
