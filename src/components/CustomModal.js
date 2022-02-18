import React from 'react';
// import style from './CustomModal';

function CustomModal({ open, children }) {
    return <>
        {open && (
            <div>
                <div>{children}</div>
            </div>
        )}
    </>;
}

export default CustomModal;
