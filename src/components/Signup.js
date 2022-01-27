import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const schema = Yup.object({
    firstName: Yup.string()
        .required('First Name is required')
        .matches(/^[a-zA-Z]+$/, 'Number and special characters are not allowed here...')
        .min(4, 'minimum 4 characters')
        .max(10, 'max length is 10 characters'),
    lastName: Yup.string()
        .required('Last Name is required')
        .matches(/^[a-zA-Z]+$/, 'Number and special characters are not allowed here...')
        .min(4, 'minimum 4 characters')
        .max(10, 'max length is 10 characters'),
    email: Yup.string()
        .required('Email is required')
        .email('Invalid email format'),
    password: Yup.string()
        .required('Password is a required field')
        // .min('Password length should be at least 4 characters')
        .matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/, 'Password must contain at least 8 characters, one uppercase, one number and one special case character'),
    confirmPassword: Yup.string()
        .required('Confirm password is a required field')
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/, 'Password must contain at least 8 characters, one uppercase, one number and one special case character')
}).required();

const Signup = (props) => {
    console.log(props, 'props');

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = data => console.log(data, 'data');
    console.log(errors?.firstName, 'errors');

    // password matching start
    // validationSchema: Yup.object({
    //     password: Yup.string().required('Password is required'),
    //     passwordConfirmation: Yup.string()
    //        .oneOf([Yup.ref('password'), null], 'Passwords must match')
    //   });
    // password matching end


    return (
        <div className="col-md-6 grid place-content-center vh-100">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <h3 className="mb-3 text-uppercase text-center">Signup Form</h3>
                    <div className="form-floating mb-3 col-md-6 ps-0">
                        <input type="text" {...register("firstName")} className={`form-control position-relative ${errors?.firstName && 'border-danger'}`} id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">First Name</label>
                        {errors?.firstName && <i className="bi bi-x-lg position-absolute top-4 right-5 text-danger"></i>}
                        {errors?.firstName?.message && <p className='text-danger'>{errors?.firstName?.message}</p>}
                    </div>
                    <div className="form-floating mb-3 col-md-6 ps-0">
                        <input type="text" {...register("lastName")} className={`form-control position-relative ${errors?.lastName && 'border-danger'}`} id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Last Name</label>
                        {errors?.lastName && <i className="bi bi-x-lg position-absolute top-4 right-5 text-danger"></i>}
                        <p className='text-danger'>{errors?.lastName?.message}</p>
                    </div>
                    <div className="form-floating w-100 mb-3 ps-0">
                        <input type="email" {...register("email")} className={`form-control position-relative ${errors?.email && 'border-danger'}`} id="floatingPassword" placeholder="email" autoComplete="off" />
                        <label for="floatingPassword">Email</label>
                        {errors?.email && <i className="bi bi-x-lg position-absolute top-4 right-5 text-danger"></i>
                        }
                        <p className='text-danger'>{errors?.email?.message}</p>
                    </div>
                    <div className="form-floating w-100 ps-0">
                        <input type="text" {...register("password")} className={`form-control position-relative ${errors?.password && 'border-danger'}`} id="floatingPassword" placeholder="Password" autoComplete="off" />
                        <label for="floatingPassword">Password</label>
                        {errors?.password && <i className="bi bi-x-lg position-absolute top-4 right-5 text-danger"></i>}
                        <p className='text-danger'>{errors?.password?.message}</p>
                    </div>
                    <div className="form-floating w-100 ps-0">
                        <input type="text" {...register("confirmPassword")} className={`form-control position-relative ${errors?.confirmPassword && 'border-danger'}`} id="floatingPassword" placeholder="Password" autoComplete="off" />
                        <label for="floatingPassword">Confirm Password</label>
                        {errors?.confirmPassword && <i className="bi bi-x-lg position-absolute top-4 right-5 text-danger"></i>}
                        <p className='text-danger'>{errors?.confirmPassword?.message}</p>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3 col-4 col-md-3">Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default Signup;