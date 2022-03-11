import React from 'react'

const LoadingSpinner = () => {
    return (
        <>
            <Spinner animation="border" size="sm" />
            <Spinner animation="border" />
            <Spinner animation="grow" size="sm" />
            <Spinner animation="grow" />
        </>
    )
}

export default LoadingSpinner
