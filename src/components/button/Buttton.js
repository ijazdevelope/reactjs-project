import React from 'react';
import './Button.css';

const Buttton = ({ text }) => {
    return (
        <div className='ms-2'>
            <button>{text}</button>
        </div>
    )
}

export default Buttton
