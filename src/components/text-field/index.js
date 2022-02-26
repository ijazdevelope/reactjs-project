import React from 'react'

export const TextField = ({ name, type, className, placeholder, label, id }) => {
    return (
        <>
            <div className="form-floating mb-3">
                <input
                    name={name}
                    type={type}
                    className={`form-control ${className && className}`}
                    id={id}
                    placeholder={placeholder}
                />
                {label &&
                    <label for="floatingInput">{label}</label>
                }
            </div>
        </>
    )
}
