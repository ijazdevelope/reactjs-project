import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
    return (
        <>
            {/* <button class="btn btn-primary" type="button" disabled>
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                <span class="sr-only">Loading...</span>
            </button> */}
            <button class="btn btn-primary" type="button" disabled>
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
            </button>
            {/* <img
         src="https://i.gifer.com/ZZ5H.gif"
         alt="spinner-loader-image" 
         className='loader_spinner'
         /> */}
            {/* <Spinner animation="border" size="sm" />
            <Spinner animation="border" />
            <Spinner animation="grow" size="sm" />
            <Spinner animation="grow" /> */}
        </>
    )
}

export default LoadingSpinner
