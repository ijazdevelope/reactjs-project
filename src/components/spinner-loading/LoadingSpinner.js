import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
    return (
        <>
        <img
         src="https://cdn.dribbble.com/users/1787505/screenshots/7300251/media/a351d9e0236c03a539181b95faced9e0.gif"
         alt="spinner-loader-image" 
         className='loader_spinner'
         />
            {/* <Spinner animation="border" size="sm" />
            <Spinner animation="border" />
            <Spinner animation="grow" size="sm" />
            <Spinner animation="grow" /> */}
        </>
    )
}

export default LoadingSpinner
