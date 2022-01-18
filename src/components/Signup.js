import React from "react";

const Signup = () => {
    return (
        <div className="w-50 m-auto">
            <h3 className="mb-3 text-uppercase text-center">Signup Form</h3>
            <div class="form-floating mb-3 w-100">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating w-100">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Password</label>
            </div>
        </div>
    )
}

export default Signup;