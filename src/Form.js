import React from 'react';
import { useForm } from "react-hook-form";
import './App.css';

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    // console.log(useForm());
    const onSubmit = data => console.log(data);

    return (
        <div className='p-4'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mb-0">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                        name="email"
                        type='emial'
                        autoComplete="off"
                        {...register("email", { required: true, maxLength: 20 })}
                        className="form-control"
                        placeholder="Enter Your Email...."
                    />
                </div>
                {errors.email?.type === "required" && (<p className='errors'>Email is required</p>)}
                <div className="form-group mb-0">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                        name="password"
                        type="password"
                        {...register("password", { required: true, minLength: 5, maxLength: 15 })}
                        className="form-control"
                        placeholder="Password"
                    />
                </div>
                {errors.password?.type === "required" && (<p className='errors'>Password is required</p>)}
                <button type="submit" className="btn btn-primary mt-2">Submit</button>
            </form>
        </div>
    )
}

export default Form;