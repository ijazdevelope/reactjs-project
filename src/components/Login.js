import React from "react";

const Login = () => {
    return (
        <div className="col-md-6 grid place-content-center vh-100">
            <h3 className="mb-3 text-uppercase text-center">Login Form</h3>
            <form>
                <div className='row'>
                    <div className="form-floating mb-3 w-100 ps-0">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating w-100 ps-0">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                    </div>
                    <button type="button" className="btn btn-primary mt-3 col-2">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login;