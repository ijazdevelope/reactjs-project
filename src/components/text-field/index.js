import React from 'react'

export const TextField = ({ name, type, className, placeholder, label, id, errors, register }) => {
    console.log(errors, 'errors in child')
    return (
        <>
            <div className="form-floating mb-3 position-relative">
                <input
                    name={name}
                    type={type}
                    className={`form-control ${className && className} ${errors?.firstName && 'border-danger'}`}
                    id={id}
                    placeholder={placeholder}
                    {...register}
                />
                {label &&
                    <label for="floatingInput">{label}</label>
                }
                {errors?.firstName && (
                    <i className="bi bi-x-lg position-absolute top-4 right-5 text-danger"></i>
                )}
                {errors?.firstName && <p className={`text-danger`}>{errors?.firstName?.message}</p>}
            </div>
        </>
    )
}
