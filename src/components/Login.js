import React from "react";
import { useForm } from "react-hook-form";


const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data, 'data');

    // const handleSubmit =()=>{
    //     console.log('handleSubmit');
    // }

    return (
        <div className="col-md-6 grid place-content-center vh-100">
            <h3 className="mb-3 text-uppercase text-center">Login Form</h3>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className='row'>
                    <div className="form-floating mb-3 w-100 ps-0">
                        <input type="email" {...register("email", { required: true })} className={`form-control position-relative ${errors.email ? 'border-danger' : 'border'}`} id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                        {errors.email && <i className="bi bi-x-lg text-danger position-absolute right-5 top-4"></i>}
                        {errors.email && <span className='p-0 text-danger'>Email address is required</span>}
                    </div>
                    <div className="form-floating w-100 ps-0">
                        <input type="password" {...register("password", { required: true })} className={`form-control position-relative ${errors.password ? 'border-danger' : 'border'}`} id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                        {errors.password && <i className="bi bi-x-lg text-danger position-absolute right-5 top-4"></i>}
                        {errors.password && <span className='p-0 text-danger'>Password is required</span>}
                    </div>
                    <button type="submit" className="btn btn-primary mt-3 col-2">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login;