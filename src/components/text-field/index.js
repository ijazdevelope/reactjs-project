import React from 'react';

export const TextField = ({ name, type, className, placeholder, label, id, errorMsg, register }) => {
    
    return (
        <>
            <div className="form-floating mb-3 position-relative">
                <input
                    name={name}
                    type={type}
                    className={`form-control ${className && className} ${errorMsg && 'border-danger'}`}
                    id={id}
                    placeholder={placeholder}
                    {...(register && register(name))}
                />
                {label &&
                    <label for="floatingInput">{label}</label>
                }
                {errorMsg && (
                    <i className="bi bi-x-lg position-absolute top-4 right-5 text-danger"></i>
                )}
                {errorMsg && <p className={`text-danger`}>{errorMsg}</p>}
            </div>
        </>
    )
}
