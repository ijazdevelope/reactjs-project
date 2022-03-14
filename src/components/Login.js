import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { TextField } from "./text-field";
import Buttton from "./button/Buttton";



const schema = yup.object({
    email: yup.string().required('Email is required').matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 'Invalid email format'),
    password: yup.string().required()
        .min(4, 'Password length should be at least 4 characters')
        .matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/, 'Password must contain at least 8 characters, one uppercase, one number and one special case character'),
}).required();

const Login = () => {

    const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = data => console.log(data, 'data');

    return (
        <div className="col-md-6 grid place-content-center vh-100">
            <h3 className="mb-3 text-uppercase text-center">Login Form</h3>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className='row'>
                    <div className="w-100 ps-0">
                        <TextField
                            name='email'
                            type='email'
                            placeholder='your email...'
                            label='Email'
                            errorMsg={errors?.email?.message}
                            register={register}
                        />
                    </div>
                    <div className="w-100 ps-0">
                        <TextField
                            name='password'
                            type='password'
                            placeholder='type your password...'
                            label='Password'
                            errorMsg={errors?.password?.message}
                            register={register}
                        />
                    </div>
                    <Buttton
                        text='Login'
                    />
                </div>
            </form>
        </div>
    )
}

export default Login;