import React from "react";
import { useForm } from "react-hook-form";


const Signup = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data, 'data');

    return (
        <div className="col-md-6 grid place-content-center vh-100">
            <form  onSubmit={handleSubmit(onSubmit)} >
                <div className="row">
                    <h3 className="mb-3 text-uppercase text-center">Signup Form</h3>
                    <div className="form-floating mb-3 col-md-6 ps-0">
                        <input type="text" {...register("fname", { required: true })} className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">First Name</label>
                        {errors.fname && <span className='p-0 text-danger'>First Name is required</span>}
                    </div>
                    <div className="form-floating mb-3 col-md-6 ps-0">
                        <input type="text" {...register("lname", { required: true })} className="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Last Name</label>
                        {errors.lname && <span className='p-0 text-danger'>Last Name is required</span>}
                    </div>
                    <div className="form-floating w-100 mb-3 ps-0">
                        <input type="email" {...register("email", { required: true })} className="form-control" id="floatingPassword" placeholder="Password" autoComplete="off" />
                        <label for="floatingPassword">Email</label>
                        {errors.email && <span className='p-0 text-danger'>Email is required</span>}
                    </div>
                    <div className="form-floating w-100 ps-0">
                        <input type="password" {...register("password", { required: true })} className="form-control" id="floatingPassword" placeholder="Password" autoComplete="off" />
                        <label for="floatingPassword">Password</label>
                        {errors.password && <span className='p-0 text-danger'>Password is required</span>}
                    </div>
                    <button type="submit" className="btn btn-primary mt-3 col-2">Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default Signup;