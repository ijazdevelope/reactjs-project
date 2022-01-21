import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    age: yup.number().positive().integer().required(),
}).required();

const Signup = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = data => console.log(data,'data');


    return (
        <div className="col-md-6 grid place-content-center vh-100">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <h3 className="mb-3 text-uppercase text-center">Signup Form</h3>
                    <div className="form-floating mb-3 col-md-6 ps-0">
                        <input type="text" {...register("firstName")} className={`form-control position-relative`} id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">First Name</label> 
                        <p className='text-danger'>{errors.firstName?.message}</p>
                    </div>
                    <div className="form-floating mb-3 col-md-6 ps-0">
                        <input type="text" {...register("lastName")} className={`form-control position-relative`} id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Last Name</label>
                        <p className='text-danger'>{errors.lastName?.message}</p>
                    </div>
                    <div className="form-floating w-100 mb-3 ps-0">
                        <input type="email" {...register("email")} className={`form-control position-relative`} id="floatingPassword" placeholder="Password" autoComplete="off" />
                        <label for="floatingPassword">Email</label>
                        <p className='text-danger'>{errors.email?.message}</p>
                    </div>
                    <div className="form-floating w-100 ps-0">
                        <input type="password" {...register("password")} className={`form-control position-relative`} id="floatingPassword" placeholder="Password" autoComplete="off" />
                        <label for="floatingPassword">Password</label>
                        <p className='text-danger'>{errors.password?.message}</p>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3 col-2">Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default Signup;